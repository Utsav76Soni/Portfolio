"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GlassCard } from "@/components/common/glass-card";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setError(
        "Contact form is not configured. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local"
      );
      setLoading(false);
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: String(formData.get("name") ?? "").trim(),
          email: String(formData.get("email") ?? "").trim(),
          subject: String(formData.get("subject") ?? "").trim(),
          message: String(formData.get("message") ?? "").trim(),
        }),
      });

      let data: { success?: boolean; message?: string } = {};
      try {
        data = await res.json();
      } catch {
        setError("Unexpected response from email service. Please try again.");
        return;
      }

      if (!data.success) {
        setError(
          data.message ??
            "Message could not be sent. Email me directly from the address on the left."
        );
        return;
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setError("Network error. Please try again or email directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <GlassCard className="flex flex-col items-center justify-center py-16 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="h-16 w-16 text-primary" />
        </motion.div>
        <h3 className="mt-4 text-xl font-semibold text-foreground">Message Sent!</h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for reaching out. I&apos;ll get back to you soon.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </GlassCard>
    );
  }

  return (
    <GlassCard glow>
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
          >
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
            <p>{error}</p>
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" name="subject" placeholder="Project inquiry" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            required
          />
        </div>
        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? (
            "Sending..."
          ) : (
            <>
              <Send />
              Send Message
            </>
          )}
        </Button>
      </form>
    </GlassCard>
  );
}
