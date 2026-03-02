import { cn } from '@/lib/utils';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const Body = ({ children }: React.ComponentProps<'body'>) => {
  return (
    <body
      className={cn(geistSans.className, geistMono.className, 'antialiased')}
      data-theme="light"
    >
      {children}
    </body>
  );
};
