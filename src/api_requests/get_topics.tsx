export default async function getTopics() {
  const response = await fetch("http://127.0.0.1:8000/api/blog_topics", {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("failed to fetch topics");
  }

  const data = response.json();
  return data;
}
