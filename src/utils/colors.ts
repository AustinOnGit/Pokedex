import { FastAverageColor } from "fast-average-color";

export const getColorFromUrl = async (url: string) => {
    const fcolor = new FastAverageColor();
    const color = await fcolor.getColorAsync(url)
    if (color.error) return null
    return color.hex
}