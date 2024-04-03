export default async function getTopics(topic_slug: string) {
  const response = await fetch(
    `https://oseseo.pythonanywhere.com/api/topic/${topic_slug}`,
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
