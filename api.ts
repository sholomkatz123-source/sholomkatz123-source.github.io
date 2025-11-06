const BASE = process.env.NEXT_PUBLIC_API || 'http://localhost:4000/api';

export async function api(path: string, init: RequestInit = {}) {
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init.headers || {}) },
    credentials: 'include',
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function me() {
  try {
    return await api('/auth/me');
  } catch {
    return null;
  }
}
