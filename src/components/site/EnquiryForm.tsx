import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2, Loader2 } from "lucide-react";
import { courses } from "@/lib/site-data";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20)
    .regex(/^[0-9+\-\s()]+$/, "Only digits and + - ( ) allowed"),
  email: z.string().trim().email("Enter a valid email").max(120),
  course: z.string().min(1, "Please select a course"),
  mode: z.string().min(1, "Please select a training mode"),
  message: z.string().trim().max(600).optional().or(z.literal("")),
});

type FormState = z.infer<typeof schema>;

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState<FormState>({
    name: "", phone: "", email: "", course: "", mode: "", message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setValues((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    toast.success("Thank you! Our team will call you back shortly.");
    setValues({ name: "", phone: "", email: "", course: "", mode: "", message: "" });
    setTimeout(() => setStatus("idle"), 3500);
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-white p-8 text-center shadow-card">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-sunshine">
          <CheckCircle2 className="h-7 w-7 text-navy-deep" />
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-navy">Enquiry received</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks for reaching out. Our training team will call you back shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-white p-6 shadow-card md:p-8"
    >
      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <Field label="Full Name" error={errors.name} htmlFor="ef-name">
          <Input id="ef-name" value={values.name} onChange={(e) => update("name", e.target.value)} placeholder="Your full name" />
        </Field>
        <Field label="Phone Number" error={errors.phone} htmlFor="ef-phone">
          <Input id="ef-phone" inputMode="tel" value={values.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 98765 43210" />
        </Field>
        <Field label="Email" error={errors.email} htmlFor="ef-email" className={compact ? "" : "sm:col-span-2"}>
          <Input id="ef-email" type="email" value={values.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" />
        </Field>
        <Field label="Interested Course" error={errors.course} htmlFor="ef-course">
          <Select value={values.course} onValueChange={(v) => update("course", v)}>
            <SelectTrigger id="ef-course"><SelectValue placeholder="Select a course" /></SelectTrigger>
            <SelectContent className="max-h-72">
              {courses.map((c) => (
                <SelectItem key={c.slug} value={c.title}>{c.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Training Mode" error={errors.mode} htmlFor="ef-mode">
          <Select value={values.mode} onValueChange={(v) => update("mode", v)}>
            <SelectTrigger id="ef-mode"><SelectValue placeholder="Choose mode" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Classroom">Classroom</SelectItem>
              <SelectItem value="Online">Live Online</SelectItem>
              <SelectItem value="Either">Either works</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Message" error={errors.message} htmlFor="ef-msg" className={compact ? "" : "sm:col-span-2"}>
          <Textarea id="ef-msg" rows={4} value={values.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us about your background or any questions..." />
        </Field>
      </div>

      <Button type="submit" size="lg" variant="sunshine" className="mt-6 w-full" disabled={status === "loading"}>
        {status === "loading" ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>) : "Request a Callback"}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        By submitting, you agree to be contacted by our training team.
      </p>
    </form>
  );
}

function Field({
  label, htmlFor, error, children, className = "",
}: { label: string; htmlFor: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-navy">{label}</Label>
      {children}
      {error && <p className="mt-1 text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}
