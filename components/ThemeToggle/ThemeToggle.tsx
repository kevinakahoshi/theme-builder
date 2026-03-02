import { headers as getHeaders } from 'next/headers';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

export const ThemeToggle = async () => {
  const headers = await getHeaders();
  const prefersDarkMode = headers.get('sec-ch-prefers-color-scheme') === 'dark';
  const id = 'theme-toggle';

  return (
    <div>
      <Switch id={id} defaultChecked={prefersDarkMode} />
      <Label htmlFor={id}>Dark Mode</Label>
    </div>
  );
};
