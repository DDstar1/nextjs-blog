export default async function getFaqs() {
  const response = await fetch("http://127.0.0.1:8000/api/faqs", {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("failed to fetch topics");
  }

  const data = response.json();
  return data;
}
