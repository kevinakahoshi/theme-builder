'use client';

import { useState } from 'react';
import { Slider } from '../ui/slider';

export const ThemeControlForm = () => {
  const [hue, setHue] = useState(180);

  return (
    <div className="grid gap-4">
      <fieldset className="flex gap-4 items-center justify-center">
        <span>Neutral</span>
        <Slider defaultValue={50} max={100} step={1} className="w-full" />
        <span>Vivid</span>
      </fieldset>
      <fieldset className="flex gap-4 items-center justify-center">
        <span>Neutral</span>
        <Slider
          value={hue}
          max={360}
          step={1}
          onValueChange={(value) => setHue(value as number)}
          className="w-full"
        />
        <span>Vivid</span>
      </fieldset>
      <div
        className="w-14 aspect-video rounded"
        style={{ backgroundColor: `hsl(${hue} 100% 50%)` }}
      />
    </div>
  );
};
