export default async function getTopics() {
  const response = await fetch(
    "https://oseseo.pythonanywhere.com/api/blog_topics",
    {
      cache: "no-cache",
    }
  );

  if (!response.ok) {
    throw new Error("failed to fetch topics");
  }

  const data = response.json();
  return data;
}
