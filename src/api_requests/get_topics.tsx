import { apiUrl } from "@/components/api";

export default async function getTopics() {
  const response = await fetch(`${apiUrl}/api/blog_topics`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("failed to fetch topics");
  }

  const data = response.json();
  return data;
}
