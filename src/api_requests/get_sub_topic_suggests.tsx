import { apiUrl } from "@/components/api";

export default async function get_topics_suggestions(
  topic_slug: string,
  detail_slug: string
) {
  const response = await fetch(
    `${apiUrl}/api/topic/${topic_slug}/${detail_slug}/suggestions`,
    {
      credentials: "include",
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("failed to fetch topics");
  }

  const data = response.json();
  console.log(data);
  return data;
}
