const API_URL = "http://localhost:3001";

export async function fetchTexts() {
  const res = await fetch(`${API_URL}/texts`);
  return res.json();
}

export async function fetchLibrary(status) {
  const url = status
    ? `${API_URL}/library?status=${status}`
    : `${API_URL}/library`;

  const res = await fetch(url);
  return res.json();
}

export async function setTextStatus(textId, status) {
  await fetch(`${API_URL}/texts/${textId}/status`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  });
}
