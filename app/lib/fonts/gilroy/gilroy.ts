import localFont from "next/font/local";

export const gilroy = localFont({
    src: [
      {
        path: "./Gilroy-ExtraBold.ttf",
        style: "extrabold",
        weight: "800",
      },
      {
        path: "./Gilroy-Bold.ttf",
        style: "bold",
        weight: "600",
      },
      {
        path: "./Gilroy-Regular.ttf",
        style: "regular",
        weight: "400",
      },
      {
        path: "./Gilroy-Light.ttf",
        style: "light",
        weight: "200",
      },
    ],
  });