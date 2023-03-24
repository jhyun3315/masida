export const imgLoader = ({
    src,
    width,
    quality,
  }: {
    src: string;
    width: number;
    quality?: number;
  }): string => {
    return `https://j8b208.p.ssafy.io/${src}?w=${width}&q=${quality || 75}`;
  };