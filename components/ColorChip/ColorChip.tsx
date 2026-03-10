type ColorChipProps = {
  hue: number;
  saturation: number;
  lightness: number;
};

const hsl = ({ hue, saturation, lightness }: ColorChipProps) =>
  `hsl(${hue} ${saturation}% ${lightness}%)`;

export const ColorChip = (props: ColorChipProps) => {
  return (
    <div
      className="w-14 aspect-video rounded"
      style={{ backgroundColor: hsl(props) }}
    />
  );
};
