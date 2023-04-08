export type Photo = {
  id: number;
  width: number;
  height: number;
  alt_description: string;
  urls: { large: string; regular: string; raw: string; small: string; thumb: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
};
