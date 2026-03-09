import { useState } from "react";
import { Send } from "lucide-react";
import VrifSection from "./VrifSection";

const ApplyForm = () => {
  const [status, setStatus] = useState<{ text: string; success: boolean } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    let valid = true;

    data.forEach((value, key) => {
      if (!String(value).trim() && key !== "message") valid = false;
    });

    if (!valid) {
      setStatus({ text: "Please fill all required fields.", success: false });
      return;
    }

    setStatus({ text: "Application submitted successfully! We will contact you soon.", success: true });
    form.reset();
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <VrifSection id="apply" title="Apply for VRIF Programs">
      <p className="text-foreground mb-6">
        Fill out the form below to apply for our innovation and entrepreneurship programs:
      </p>
      <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto space-y-6">
        {[
          { label: "Full Name", name: "name", type: "text", placeholder: "Enter your full name" },
          { label: "Email Address", name: "email", type: "email", placeholder: "you@example.com" },
          { label: "Mobile Number", name: "phone", type: "tel", placeholder: "+91 9876543210" },
          { label: "College/Organization", name: "college", type: "text", placeholder: "Your college or organization" },
        ].map((field) => (
          <div key={field.name}>
            <label className="block mb-2 font-semibold text-primary">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required
              className="w-full px-4 py-3 border border-input rounded-md bg-card font-sans transition-all focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
            />
          </div>
        ))}

        <div>
          <label className="block mb-2 font-semibold text-primary">Select Program</label>
          <select
            name="program"
            required
            className="w-full px-4 py-3 border border-input rounded-md bg-card font-sans transition-all focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
          >
            <option value="">-- Choose a Program --</option>
            <option>Technical Workshop</option>
            <option>Innovation Challenge</option>
            <option>Startup Incubation</option>
            <option>Research Grant</option>
            <option>Industry Project</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold text-primary">
            Why are you interested in this program?
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Describe your background and interests..."
            required
            className="w-full px-4 py-3 border border-input rounded-md bg-card font-sans transition-all focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 resize-y"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold inline-flex items-center gap-2 transition-all hover:bg-secondary hover:-translate-y-0.5 hover:shadow-lg"
        >
          <Send size={16} /> Submit Application
        </button>

        {status && (
          <p className={`mt-4 font-semibold animate-fade-in-up ${status.success ? "text-green-600" : "text-destructive"}`}>
            {status.text}
          </p>
        )}
      </form>
    </VrifSection>
  );
};

export default ApplyForm;
