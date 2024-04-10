import { apiUrl } from "@/components/api";

export default async function getFaqs() {
  const response = await fetch(`${apiUrl}/api/faqs`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("failed to fetch topics");
  }

  const data = response.json();
  return data;
}
