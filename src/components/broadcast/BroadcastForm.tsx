'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import * as XLSX from 'xlsx';

interface Recipient {
  email: string;
  companyName: string;
}

export function BroadcastForm() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [recipients, setRecipients] = useState<Recipient[]>([]);
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = event.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        // Use header: 1 to get arrays of arrays, which is easier to work with
        const rows: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        
        // Find header row and map columns
        const header = rows[0].map(h => h.toString().toLowerCase());
        const emailIndex = header.indexOf('company email');
        const nameIndex = header.indexOf('company name');

        if (emailIndex === -1 || nameIndex === -1) {
          toast.error('Excel file must contain "Company Email" and "Company Name" columns.');
          return;
        }

        const parsedRecipients = rows
          .slice(1) // Skip header row
          .map((row: any[]) => ({
            email: row[emailIndex],
            companyName: row[nameIndex],
          }))
          .filter(r => r.email); // Ensure email exists

        setRecipients(parsedRecipients);
        toast.info(`${parsedRecipients.length} recipients loaded from ${file.name}`);
      } catch (error) {
        console.error("Error parsing file:", error);
        toast.error('Failed to parse Excel file.');
      }
    };
    reader.readAsBinaryString(file);
  };


  const handleBroadcast = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (recipients.length === 0) {
      toast.error('Please upload a file with recipients.');
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, body, recipients }),
      });

      const result = await res.json();

      if (res.ok) {
        const { summary } = result;
        toast.success(`Broadcast initiated: ${summary.successfulSends} emails sent, ${summary.failedSends} failed.`);
        if (summary.failedSends > 0) {
          toast.error(`${summary.failedSends} emails failed to send. Check console for details.`);
        }
        setSubject('');
        setBody('');
        setRecipients([]);
        setFileName('');
        // Reset file input
        const fileInput = document.getElementById('recipients-file') as HTMLInputElement;
        if(fileInput) fileInput.value = '';
      } else {
        toast.error(result.message || 'Failed to start broadcast.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create New Broadcast</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleBroadcast} className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="subject">Email Subject</Label>
            <Input
              id="subject"
              type="text"
              placeholder="Announcing our new feature!"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="body">Email Body</Label>
            <Textarea
              id="body"
              placeholder="Hello {{companyName}}, we are excited to announce..."
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={10}
            />
            <p className="text-sm text-muted-foreground">
              Use <code>{'{{companyName}}'}</code> as a placeholder for the company name.
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="recipients-file">Recipients</Label>
            <Input
              id="recipients-file"
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileChange}
              required
            />
            {fileName && (
              <p className="text-sm text-muted-foreground mt-2">
                {fileName} ({recipients.length} recipients loaded)
              </p>
            )}
            <p className="text-sm text-muted-foreground">
              Upload an Excel file with two columns: 'Company Email' and 'Company Name'. The header is required.
            </p>
          </div>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? 'Sending Broadcast...' : 'Send Broadcast'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
