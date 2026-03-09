'use client';

import { useState } from 'react';
import { Slider } from '../ui/slider';

export const ThemeControlForm = () => {
  const [values, setValues] = useState({
    hue: 180,
    saturation: 100,
    lightness: 50,
  });
  const { hue, saturation, lightness } = values;

  return (
    <div className="grid gap-4">
      {/* <fieldset className="flex gap-4 items-center justify-center">
        <span>Hue</span>
        <Slider
          value={saturation}
          defaultValue={50}
          max={100}
          step={1}
          onValueChange={(value) => setSaturation(value as number)}
          className="w-full"
        />
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
      <fieldset className="flex gap-4 items-center justify-center">
        <span>Lightness</span>
        <Slider
          value={lightness}
          max={100}
          step={1}
          onValueChange={(value) => setLightness(value as number)}
          className="w-full"
        />
      </fieldset> */}
      {Object.entries(values).map(([key, value], index) => (
        <fieldset key={key} className="grid gap-1">
          <label>
            {[key.slice(0, 1).toUpperCase(), key.slice(1)].join('')}
          </label>
          <Slider
            className="w-full"
            value={value}
            max={index ? 100 : 360}
            step={1}
            onValueChange={(changeVal) =>
              setValues((curr) => ({
                ...curr,
                [key]: changeVal,
              }))
            }
          />
        </fieldset>
      ))}
      <div
        className="w-14 aspect-video rounded"
        style={{ backgroundColor: `hsl(${hue} ${saturation}% ${lightness}%)` }}
      />
    </div>
  );
};
