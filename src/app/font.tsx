import localFont from "next/font/local";

export const mainFont = localFont({
  src: [
    {
      path: "../../public/fonts/SVN-Gilroy/SVN-Gilroy-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SVN-Gilroy/SVN-Gilroy-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SVN-Gilroy/SVN-Gilroy-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/SVN-Gilroy/SVN-Gilroy-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/SVN-Gilroy/SVN-Gilroy-XBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/SVN-Gilroy/SVN-Gilroy-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});
