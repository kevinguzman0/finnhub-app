/* eslint-disable prettier/prettier */
import { warning } from "../utilities/logger";

export const palette = {
  //green
  greenNormal: "#5cb43c",

  //grey
  greyDarker: "#9B9D9E",
  greyNormal: "#CED1D2",

  //black
  blackDarker: "#000000",
  blackNormal: "#2f2e2e",

  //red
  redNormal: "#B3261E",
  redLight: "#FFC0CB",

  //white
  whiteNormal: "#FFFFFF",
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
