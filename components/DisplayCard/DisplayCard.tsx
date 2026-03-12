'use client';

import { hslAtom } from '@/lib/atoms/hsl';
import { cn } from '@/lib/utils';
import { useAtomValue } from 'jotai';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

type Mode = 'light' | 'dark';

type DisplayCardProps = {
  mode: Mode;
};

const getLightModeClasses = () => [
  'bg-[hsl(0 0% 10%)]',
  'text-[hsl(0 0% 95%)]',
];

const getDarkModeClasses = () => ['text-[hsl(0 0% 5%)]'];

const getModeClasses = (mode: Mode) =>
  mode === 'light' ? getLightModeClasses() : getDarkModeClasses();

export const DisplayCard = ({ mode }: DisplayCardProps) => {
  const { hue, saturation, lightness } = useAtomValue(hslAtom);

  return (
    <Card className={cn(mode, ...getModeClasses(mode))}>
      <CardHeader>
        <CardTitle className={cn('text-xl font-bold')}>
          The Story of the Fox
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          The quick brown fox jumps over the lazy dog.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          style={{ backgroundColor: `hsl(${hue} ${saturation}% ${lightness})` }}
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};
