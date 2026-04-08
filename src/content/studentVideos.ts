/** Súbory v `public/video/`: URL začínajú lomítkom */
export type StudentVideo = {
  id: string;
  name: string;
  /** cesta pod `public/`, napr. `/video/leo.mp4` */
  src: string | null;
  /** Celé video na Instagrame */
  instagramUrl: string;
};

export const studentVideos: StudentVideo[] = [
  {
    id: "leo",
    name: "Leo",
    src: "/video/leo.mp4",
    instagramUrl:
      "https://www.instagram.com/reel/DUJQcddgPde/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "alica",
    name: "Alica",
    src: "/video/alica.mp4",
    instagramUrl:
      "https://www.instagram.com/reel/DUbVPt7gAdV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "chudo",
    name: "Chuďo",
    src: "/video/chudo.mp4",
    instagramUrl:
      "https://www.instagram.com/reel/DUlgsukgACp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "tomas",
    name: "Tomáš",
    src: "/video/tomas.mp4",
    instagramUrl:
      "https://www.instagram.com/reel/DUYeKpNCgyx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "miso",
    name: "Mišo",
    src: "/video/miso.mp4",
    instagramUrl:
      "https://www.instagram.com/reel/DUOQ665illQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];
