'use client';

import { hslAtom } from '@/lib/atoms/hsl';
import { useAtomValue } from 'jotai';
import { ColorChip } from '../ColorChip';

export const AccentColorChip = () => {
  const hsl = useAtomValue(hslAtom);

  return <ColorChip {...hsl} />;
};
