import media1 from "./design-tool-showcase-figma@2x.png";
import media2 from "./design-tool-showcase-sketch@2x.png";
import media3 from "./design-tool-showcase-xd@2x.png";

export const media = [media1, media2, media3];
export const mediaByIndex = index => media[index % media.length];
