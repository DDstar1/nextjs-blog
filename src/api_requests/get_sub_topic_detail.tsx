export default async function get_topics_detail(topic_slug, detail_slug) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/topic/${topic_slug}/${detail_slug}`,
    {
      cache: "no-cache",
    }
  );

  if (!response.ok) {
    throw new Error("failed to fetch topics");
  }

  const data = response.json();
  console.log(data);
  return data;
}
