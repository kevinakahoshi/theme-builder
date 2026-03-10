import { list } from 'radash';
import { ColorChip } from '../ColorChip';

type NeutralShadesProps = {
  section: 'light' | 'dark';
};

export const NeutralShades = ({ section }: NeutralShadesProps) => {
  const range = list(10, 90, (val) => val, 20).toReversed();

  return (
    <>
      {range.map((lightness) => (
        <ColorChip
          key={[section, lightness].join('_')}
          hue={0}
          saturation={0}
          lightness={lightness}
        />
      ))}
    </>
  );
};
