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

const lightnessThreshold = 75;

const getLightModeClasses = () => ({
  backgroundColor: 'hsl(0 0% 90%)',
  color: 'hsl(0 0% 10%)',
  colorSecondary: 'hsl(0 0% 30%)',
});

const getDarkModeClasses = () => ({
  backgroundColor: 'hsl(0 0% 10%)',
  color: 'hsl(0 0% 90%)',
  colorSecondary: 'hsl(0 0% 70%)',
});

const getModeClasses = (mode: Mode) =>
  mode === 'light' ? getLightModeClasses() : getDarkModeClasses();

export const DisplayCard = ({ mode }: DisplayCardProps) => {
  const { hue, saturation, lightness } = useAtomValue(hslAtom);
  const { backgroundColor, color, colorSecondary } = getModeClasses(mode);

  return (
    <Card className={cn(mode)} style={{ backgroundColor }}>
      <CardHeader>
        <CardTitle className={cn('text-xl font-bold')} style={{ color }}>
          The Story of the Fox
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription style={{ color: colorSecondary }}>
          The quick brown fox jumps over the lazy dog.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          style={{
            backgroundColor: `hsl(${hue} ${saturation}% ${lightness})`,
            color:
              lightness < lightnessThreshold
                ? getDarkModeClasses().color
                : getLightModeClasses().color,
          }}
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};
