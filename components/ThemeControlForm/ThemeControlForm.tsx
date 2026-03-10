'use client';

import { hslAtom } from '@/lib/atoms/hsl';
import { useAtom } from 'jotai';
import { Slider } from '../ui/slider';

export const ThemeControlForm = () => {
  const [values, setValues] = useAtom(hslAtom);

  return (
    <div className="grid gap-4">
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
    </div>
  );
};
