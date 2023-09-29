import { Hind, Noto_Sans } from "next/font/google";

// ...

export const hind = Hind({
  weight: ["300", "400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const noto = Noto_Sans({
  weight: ["300", "400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});