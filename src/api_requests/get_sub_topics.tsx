import { apiUrl } from "@/components/api";

export default async function getTopics(topic_slug: string) {
  const response = await fetch(`${apiUrl}/api/topic/${topic_slug}`, {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("failed to fetch topics");
  }

  const data = response.json();
  console.log(data);
  return data;
}

// https://www.pythonanywhere.co
