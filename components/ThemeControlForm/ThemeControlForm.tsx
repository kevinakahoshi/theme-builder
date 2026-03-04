import { Slider } from '../ui/slider';

export const ThemeControlForm = () => (
  <div className="grid gap-4">
    <fieldset className="flex gap-4 items-center justify-center">
      <span>Neutral</span>
      <Slider defaultValue={50} max={100} step={1} className="w-full" />
      <span>Vivid</span>
    </fieldset>
    <fieldset className="flex gap-4 items-center justify-center">
      <span>Neutral</span>
      <Slider defaultValue={50} max={100} step={1} className="w-full" />
      <span>Vivid</span>
    </fieldset>
  </div>
);
