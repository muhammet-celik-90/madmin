"use client";

import * as React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

export interface IUploadPhotoProps {
  source?: string;
}

type ImageProps = FileList | null;

export default function UploadPhoto({source}: IUploadPhotoProps) {
  const [image, setImage] = React.useState<ImageProps>();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let file = e.target.files;
    if (file?.length && file.length > 0) {
      setImage(file);
    } else if (image) {
      setImage(image);
    } else {
      setImage(null);
    }
  };


  return (
    <Box
      component="label"
      htmlFor="upload"
      sx={{
        "&:hover": { opacity: "0.6", cursor: "pointer" },
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Image
        src={image ? URL.createObjectURL(image?.[0]) : source ? source : "/images/avatar.png"}
        alt="avatar"
        width={300}
        height={300}
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "300px",
          maxHeight: "300px",
        }}
      />
      <input
        type="file"
        id="upload"
        name="image"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
    </Box>
  );
}
