export const luminanace = (r, g, b) => {
  const a = [r, g, b].map(v => {
    const v_ = v / 255;
    return v_ <= 0.03928 ? v_ / 12.92 : Math.pow((v_ + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

export const contrast = (rgb1, rgb2) =>
  (luminanace(rgb1[0], rgb1[1], rgb1[2]) + 0.05) /
  (luminanace(rgb2[0], rgb2[1], rgb2[2]) + 0.05);

export const contrastText = hex => {
  const r = 255 - parseInt(hex.slice(0, 2), 16);
  const g = 255 - parseInt(hex.slice(2, 4), 16);
  const b = 255 - parseInt(hex.slice(4, 6), 16);

  return contrast([r, g, b], [0, 0, 0]) > 4 ? "white" : "black";
};
