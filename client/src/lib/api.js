// Central place for backend wiring. Swap VITE_API_URL in a .env file once
// the Node.js/Express API is running (e.g. VITE_API_URL=https://api.logicandlayers.dev).
export const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";

/**
 * Posts a project inquiry to the backend.
 * Expected server route: POST {API_BASE_URL}/inquiries
 * Expected MongoDB document shape mirrors the payload below.
 *
 * @param {{
 *   name: string,
 *   email: string,
 *   company: string,
 *   projectType: string,
 *   budget: string,
 *   description: string,
 * }} payload
 */
export async function submitInquiry(payload) {
  const response = await fetch(`${API_BASE_URL}/inquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.message || "Something went wrong. Please try again.");
  }

  return response.json();
}
