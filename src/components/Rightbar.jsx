import React from "react";
import { Box, Typography, ImageList, ImageListItem } from "@mui/material";

const imagx = [
  {
    image:
      "https://e-file.huawei.com/-/media/EBG/Images/th_banner/KMUTTBanner-m.jpg",
    title: "kmutt1",
  },
  {
    image:
      "https://e-file.huawei.com/-/media/EBG/Images/th_banner/KMUTTBanner-m.jpg",
    title: "kmutt2",
  },
  {
    image:
      "https://e-file.huawei.com/-/media/EBG/Images/th_banner/KMUTTBanner-m.jpg",
    title: "kmutt3",
  },
  {
    image:
      "https://e-file.huawei.com/-/media/EBG/Images/th_banner/KMUTTBanner-m.jpg",
    title: "kmutt4",
  },
];

const Rightbar = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }} paddingRight={5}>
      <Box display={"flex"} flexDirection={"column"} marginTop={2} marginBottom={2}>
        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList sx={{ width: 250 }} cols={2}>
          {imagx.map((item) => (
            <ImageListItem key={item.image}>
              <img
                src={`${item.image}`}
                alt={item.title}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
