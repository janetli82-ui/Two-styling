export const getImageURL = (imageName: string): string => {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href
}
