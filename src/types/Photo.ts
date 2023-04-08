export type Photo = {
  id: string;
  width: number;
  height: number;
  alt_description: string;
  links: { self: string; html: string; download: string; download_location: string };
  urls: { large: string; regular: string; raw: string; small: string; thumb: string };
  color: string | null;
  likes: number;
  user: {
    id: string;
    username: string;
    name: string;
    total_photos: number;
    portfolio_url: string;
  };
};
