import { cn, getPreferredColorScheme } from '@/lib/utils';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const Body = async ({ children }: React.ComponentProps<'body'>) => {
  const preferredColorScheme = await getPreferredColorScheme();

  return (
    <body
      className={cn(
        geistSans.className,
        geistMono.className,
        'antialiased p-4 sm:p-8',
      )}
      data-theme={preferredColorScheme}
    >
      {children}
    </body>
  );
};
