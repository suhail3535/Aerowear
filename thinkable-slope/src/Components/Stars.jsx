import React from "react";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const BasicFn = ({Rating}) => {
  const totalStars = 5;
  const activeStars = Rating;

  return (
    <Box>
      {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? <StarIcon  /> : <StarBorderIcon />;
      })}
    </Box>
  );
};

export default BasicFn;