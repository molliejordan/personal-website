import { useState } from "react";
import Masonry from "@mui/lab/Masonry";
import { Card, CardMedia, CardContent, Box } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import interests from "../data/interests.json";

const imageModules = import.meta.glob("../assets/images/*.{jpeg,jpg,png}", { eager: true });
const imageMap = Object.fromEntries(
  Object.entries(imageModules).map(([path, module]) => {
    const fileName = path.split("/").pop();
    return [fileName, module.default];
  })
);

const InterestsMasonry = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        padding: 2,
      }}
    >
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={4}>
        {interests.map((item) => (
          <Card
            key={item.id}
            sx={{
              borderRadius: 2,
              boxShadow: 2,
              overflow: "hidden",
              transition: "transform 0.3s ease-in-out",
              "&:hover": { transform: "scale(1.05)" },
            }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Box sx={{ position: "relative" }}>
              {/* Image */}
              <CardMedia
                component="img"
                image={imageMap[item.src]}
                alt={item.title}
                sx={{
                  width: "100%",
                  display: "block",
                  transition: "opacity 0.3s ease-in-out",
                  filter:
                    hoveredId === item.id
                      ? "brightness(40%)"
                      : "brightness(100%)", // Darken image on hover
                  //   opacity: hoveredId === item.id ? 0 : 1, // Hide image on hover
                }}
              />

              {/* Hover Content (matches image height) */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%", // This makes the text container match the image height
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  // justifyContent: "space-between",
                  padding: 2,
                  opacity: hoveredId === item.id ? 1 : 0, // Show text on hover
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                <p className="font-jetbrains text-left text-xs" style={{ flexGrow: 1 }}>
                  {item.keywords}
                </p>
                <p className="font-jetbrains text-left text-xs" style={{ flexGrow: 1 }}>
                  {item.description}
                </p>
                {item.link && (
                  <button
                    className="bg-gray-200 rounded-full flex transform transition-transform duration-300 hover:scale-105"
                    onClick={() => openLink(item.link)}
                  >
                    <p className="pr-2 font-jetbrains text-sm flex flex-col text-black">
                      See more
                    </p>
                    <EastIcon className="text-black" />
                  </button>
                )}
              </Box>
            </Box>
            <CardContent className="font-jetbrains text-left flex flex-col">
              <p>{item.title}</p>
            </CardContent>
          </Card>
        ))}
      </Masonry>
    </Box>
  );
};

export default InterestsMasonry;
