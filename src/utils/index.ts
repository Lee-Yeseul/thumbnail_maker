export const randomRGB = () => {
  let rgb = '#';
  rgb += (Math.floor(Math.random() * 90 + 1) + 150)
    .toString(16)
    .padStart(2, '0');
  rgb += (Math.floor(Math.random() * 90 + 1) + 150)
    .toString(16)
    .padStart(2, '0');
  rgb += (Math.floor(Math.random() * 90 + 1) + 150)
    .toString(16)
    .padStart(2, '0');
  return rgb;
};
