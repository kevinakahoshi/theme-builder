'use client';

import { hslAtom } from '@/lib/atoms/hsl';
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

export const DisplayCard = () => {
  const { hue, saturation, lightness } = useAtomValue(hslAtom);

  return (
    <Card>
      <CardHeader>
        <CardTitle>The Story of the Fox</CardTitle>
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
