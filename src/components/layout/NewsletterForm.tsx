'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const NewsletterForm = () => {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const emailInput = form.querySelector(
          'input[name="newsletterEmail"]'
        ) as HTMLInputElement | null;
        const hpInput = form.querySelector(
          'input[name="hp"]'
        ) as HTMLInputElement | null;
        const email = (emailInput?.value || '').trim();
        const hp = (hpInput?.value || '').trim();
        if (hp) {
          form.reset();
          return;
        }
        if (!email) {
          toast.error('Please enter your email');
          return;
        }
        try {
          const res = await fetch('/api/newsletter', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, hp }),
          });
          if (!res.ok) throw new Error('Failed');
          toast.success('Subscribed successfully!');
          form.reset();
        } catch (err) {
          toast.error('Subscription failed. Please try again later.');
        }
      }}
      className="flex flex-col space-y-2"
    >
      <input
        type="text"
        name="hp"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <Input
        name="newsletterEmail"
        type="email"
        placeholder="Your email address"
        className="bg-gray-800 border-gray-700 text-white"
        required
      />
      <Button
        type="submit"
        className="gradient-bg hover:opacity-90 transition-opacity"
      >
        Subscribe
      </Button>
    </form>
  );
};

export default NewsletterForm;
