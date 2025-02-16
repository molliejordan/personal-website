import React from "react";
import { Box, Typography } from "@mui/material";
import "../CuratorsCompassButton/CuratorsCompassButton.css";

const logos = [
  { src: "/personal-website/ncstate-logo.png", alt: "NC State Logo" },
  { src: "/personal-website/sas-6-logo.png", alt: "SAS Logo" },
  { src: "/personal-website/postgresql-logo.svg", alt: "PostgreSQL Logo"},
  { src: "/personal-website/python-logo.svg", alt: "Python Logo"},
  { src: "/personal-website/react-logo.svg", alt: "React Logo"}
];

const CuratorsCompassButton = () => {
  return (
    <Box className="pt-4"
      sx={{
        display: "flex",
        overflow: "hidden", // Hides logos once they leave the container
        width: "100%",
        animation: "rotateLogos 10s linear infinite", // Define the continuous animation
      }}
    >
      {logos.map((logo, index) => (
        <Box
          key={index}
          sx={{
            minWidth: "150px", // Adjust size as needed
            marginRight: "30px", // Space between logos
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo.src} alt={logo.alt} style={{ height: "100px", objectFit: "contain" }} />
        </Box>
      ))}
    </Box>
  );
};

export default CuratorsCompassButton;
