import { headers as getHeaders } from 'next/headers';

export const getPreferredColorScheme = async () => {
  const headers = await getHeaders();
  return headers.get('sec-ch-prefers-color-scheme');
};
