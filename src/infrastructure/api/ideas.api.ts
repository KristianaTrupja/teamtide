const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export async function getRecentIdeas() {
  const response = await fetch(`${API_URL}/ideas?status=NEW`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch recent ideas');
  }

  return response.json();
}