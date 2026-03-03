import { getPreferredColorScheme } from '@/lib/utils/getPreferredColorScheme';
// import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

export const ThemeToggle = async (props: React.ComponentProps<'div'>) => {
  const preferredColorScheme = await getPreferredColorScheme();
  const prefersDarkMode = preferredColorScheme === 'dark';
  const id = 'theme-toggle';

  return (
    <div {...props}>
      <Switch id={id} defaultChecked={prefersDarkMode} />
      {/* <Label htmlFor={id}>Dark Mode</Label> */}
    </div>
  );
};
