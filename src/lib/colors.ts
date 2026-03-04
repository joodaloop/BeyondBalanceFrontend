export const pastelBubblegumColors = [
  "#FFB6C1", // light pink - more vibrant
  "#FFC0CB", // pink - more vibrant
  "#E6E6FA", // lavender - more vibrant
  "#DDA0DD", // plum - more vibrant
  "#F0F8FF", // alice blue - very light blue
  "#E0F6FF", // light cyan - more vibrant
  "#F5F5DC", // beige - very light cream
  "#F0FFF0", // honeydew - very light green
  "#FFF0F5", // lavender blush - more vibrant
  "#FDF5E6", // old lace - very light cream
  "#F0F8FF", // alice blue - very light blue
  "#FAF0E6", // linen - very light tan
  "#F5FFFA", // mint cream - very light mint
  "#FFF5EE", // seashell - very light peach
  "#F0FFFF", // azure - very light cyan
  "#FDF5E6"  // old lace - very light cream
];

export const getRandomColor = () => {
  return pastelBubblegumColors[Math.floor(Math.random() * pastelBubblegumColors.length)];
};

export const getSequentialColor = (index: number) => {
  return pastelBubblegumColors[index % pastelBubblegumColors.length];
};

export const createGradient = (color1?: string, color2?: string) => {
  const c1 = color1 || getRandomColor();
  const c2 = color2 || getRandomColor();
  return `linear-gradient(135deg, ${c1}, ${c2})`;
};

export const createRadialGradient = (color1?: string, color2?: string, opacity1 = 0.1, opacity2 = 0.05) => {
  const c1 = color1 || getRandomColor();
  const c2 = color2 || getRandomColor();
  return `radial-gradient(circle, ${c1}${Math.floor(opacity1 * 255).toString(16).padStart(2, '0')}, ${c2}${Math.floor(opacity2 * 255).toString(16).padStart(2, '0')})`;
};

export const createMildCircularGradient = (size = '200px', opacity = 0.08) => {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  return {
    background: `radial-gradient(circle ${size} at 50% 50%, ${color1}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}, ${color2}${Math.floor(opacity * 0.5 * 255).toString(16).padStart(2, '0')}, transparent)`,
  };
};

// New function for consistent wave colors - more vibrant but still mild with more blues
export const getWaveColors = () => {
  return [
    "#FFB6C1", // light pink - more vibrant
    "#87CEEB", // sky blue - added more blue
    "#FFC0CB", // pink - more vibrant
    "#ADD8E6", // light blue - added more blue
    "#E6E6FA", // lavender - more vibrant
    "#B0E0E6", // powder blue - added more blue
    "#DDA0DD", // plum - more vibrant
    "#87CEFA", // light sky blue - added more blue
    "#F0F8FF", // alice blue - very light blue
    "#E0F6FF", // light cyan - more vibrant
    "#AFEEEE", // pale turquoise - added more blue
    "#F0FFF0", // honeydew - very light green
    "#B0C4DE", // light steel blue - added more blue
    "#FFF0F5", // lavender blush - more vibrant
    "#E6F3FF", // very light blue - added more blue
    "#F5FFFA", // mint cream - very light mint
    "#FFF5EE", // seashell - very light peach
    "#F0FFFF", // azure - very light cyan
    "#F8F8FF", // ghost white - very light white
    "#FAF0E6", // linen - very light tan
    "#FDF5E6"  // old lace - very light cream
  ];
};
