// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ILoveTypeScript = any;

export type Sticker = {
  id: number;
  src: string;
  title: string;
  size?: {
    width: number;
    height: number;
  };
};
