import fetch from 'node-fetch';

export const fetchContentFromURL = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch url');
  }

  return await response.text();
};
