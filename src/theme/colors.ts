import { warning } from "../utilities/logger";

export const palette = {
  //green
  greenLight: "#ecf5ee",
  greenLightHover: "#e2f0e6",
  greenLighter: "#C3E0CA",
  greenNormal: "#45a348",

  //grey
  greyLight: "#fafafb",
  greyDarker: "#48494A",
  grayDarker2: "#9B9D9E",
  greyNormal: "#CED1D2",
  greyLightHover: "#d9d9d9",

  //yellow
  yellowNormal: "#EEB500",
  yellowDarker: "#533F00",
  yellowLight: "#FAE8B0",

  //black
  blackDarker: "#000000",
  blackNormal: "#2f2e2e",
  blackDarker2: "#1D1B20",

  //red
  redNormal: "#B3261E",
  redLight: "#e7bcb9",
  //blue
  blueDarker: "#29292A",

  //white
  whiteNormal: "#FFFFFF",
  whiteLight: "#ECF5EE",

  //purple
  purpleNormal: "#C297F9",
  purpleDarker: "#200444",

  //aqua
  aquaNormal: "#A2E9F9",
  aquaDarker: "#072744",

  //orange
  orangeNormal: "#FDCFA4",
  orangeDarker: "#6A3605",
} as const;

/**
 * Tagged string function that return one color from the color palette by using it name. If no color is found it will throw an error
 * @param name Tagged string with one of the colors in the palette with the format colorGroupShadeNumber or just groupShadeNumber ex. colorAlert500, alert500
 * @returns
 */
export function colors(name: keyof typeof palette) {
  const hasError = !(name in palette);

  if (hasError) {
    warning(
      hasError,
      `Requested color named ${name} was not found on theme palette.`
    );
    throw new Error(
      `Requested color named ${name} was not found on theme palette.`
    );
  }

  return palette[name];
}
