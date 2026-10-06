import { useState } from "react";
import { submitInquiry } from "../lib/api.js";

const initialForm = {
  name: "",
  email: "",
  company: "",
  projectType: "Full-stack web app",
  budget: "Not sure yet",
  description: "",
};

const projectTypes = [
  "Full-stack web app",
  "API / backend system",
  "E-commerce platform",
  "MVP / startup build",
  "Ongoing development support",
  "Other",
];

const budgets = ["Under ₹10k", "₹10k – ₹15k", "₹15k – ₹40k", "₹40k+", "Not sure yet"];

const fieldStyles =
  "w-full bg-transparent border-0 border-b border-ink-line py-3 text-paper placeholder:text-paper/35 focus:border-brass focus:outline-none transition-colors";

const labelStyles = "block text-sm text-steel mb-2";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitInquiry(form);
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err.message || "Couldn't send that. Try again, or email me directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="glass rounded-sm p-10 md:p-12 text-center">
        <p className="font-display text-2xl text-paper mb-3">Inquiry sent.</p>
        <p className="text-paper/65 max-w-[40ch] mx-auto">
          Thanks for the details — I read every one personally and reply within
          one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="link-underline mt-8 text-sm text-brass-bright"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-sm p-8 md:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelStyles}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className={fieldStyles}
            placeholder="Ram"
          />
        </div>

        <div>
          <label htmlFor="email" className={labelStyles}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={fieldStyles}
            placeholder="ram@company.com"
          />
        </div>

        <div>
          <label htmlFor="company" className={labelStyles}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className={fieldStyles}
            placeholder="Optional"
          />
        </div>

        <div>
          <label htmlFor="projectType" className={labelStyles}>
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className={`${fieldStyles} appearance-none cursor-pointer`}
          >
            {projectTypes.map((type) => (
              <option key={type} value={type} className="bg-ink">
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="budget" className={labelStyles}>
            Estimated budget
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={`${fieldStyles} appearance-none cursor-pointer`}
          >
            {budgets.map((b) => (
              <option key={b} value={b} className="bg-ink">
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="description" className={labelStyles}>
            Tell me about the project
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            value={form.description}
            onChange={handleChange}
            className={`${fieldStyles} resize-none`}
            placeholder="What you're building, roughly where it needs to land, and anything already in motion."
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-6 text-sm text-red-300/90">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex items-center rounded-sm bg-brass px-7 py-3 text-sm font-medium text-ink transition-all duration-300 hover:bg-brass-bright hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0"
      >
        {status === "submitting" ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}
