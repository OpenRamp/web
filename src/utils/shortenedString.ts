export function shortenedString(text: string, length: number, dots: number) {
  const sliceIndex = (length - dots) / 2;
  return text.length >= length
    ? `${text.slice(0, sliceIndex)}${new Array(dots + 1).join('.')}${text.slice(text.length - sliceIndex)}`
    : text;
}
