import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Masonry from "@mui/lab/Masonry";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import CommunityServicePic from "../assets/images/community_service.jpeg";
import LeadershipPic from "../assets/images/leadership_backpacking.jpeg";
import SustainabilityPic from "../assets/images/sustainable_cities_seattle.jpeg";
import WomenMinoritiesTechPic from "../assets/images/women_in_tech.jpg";
import GlobalPerspectivePic from "../assets/images/global_perspective.jpg";
import InterdisciplinaryPic from "../assets/images/interdisciplinary_cs.png";
import SpanishFlagPic from "../assets/images/spanish-flag.jpg";
import FunPic from "../assets/images/fun.jpg";
import EnvironmentPic from "../assets/images/environmental_conservation.jpg";
import EastIcon from "@mui/icons-material/East";

const images = [
  {
    id: 1,
    title: "Leadership",
    src: LeadershipPic,
    keywords: "founder | vice president | social media manager | trip leader",
    description:
      "I am a founding executive board member for Backpacking Club at NC State. I created our club's logo and branding, served as Vice President, and have led multiple weekend trips!",
    link: "https://www.instagram.com/ncstatebackpackingclub/",
  },
  {
    id: 2,
    title: "Women and Minorities in Tech",
    src: WomenMinoritiesTechPic,
    description:
      "I am a strong supporter of diversity in technology and am a part of both Women in Computer Science and the NC State Women and Minority Engineering Program.",
    link: "https://engr.ncsu.edu/wmep/",
  },
  {
    id: 3,
    title: "Sustainable Cities and Infrastructure",
    src: SustainabilityPic,
    keywords: "affordable housing | transportation | eco-engineering | social justice",
    description: "In 2023 I spent my spring break in Seattle, WA, with the University Honors Program studying sustainable transportation, urban design, and social justice issues affecting communities in the Seattle area.",
    link: "https://sites.google.com/ncsu.edu/uhpdoesseattle2023/home",
  },
  {
    id: 4,
    title: "Community Service",
    src: CommunityServicePic,
    keywords: "volunteer | leadership | friendship | service",
    description: "I am a brother of the Iota Lambda chapter of Alpha Phi Omega, a national co-ed service fraternity. As a brother, I complete 25 service hours per semester and participate in fellowship events to build community in our chapter.",
    link: "https://www.ncsuapo.org/",
  },
  {
    id: 5,
    title: "Global Perspective",
    src: GlobalPerspectivePic,
    keywords:
      "study abroad | cultural exchange | international education | global learning",
    description: "During the Spring 2024 semester I studied abroad in Madrid, Spain at Universidad Pontificia Comillas. This experience broadened my global perspective and deepened my passion for exploring cultures worldwide.",
    link: "https://www.comillas.edu/en/icai/",
  },
  {
    id: 6,
    title: "Computer Graphics",
    src: InterdisciplinaryPic,
    keywords: "webgl | game design",
    description: "I'm passionate about exploring different areas of computer science and challenged myself by taking a graphics course, where I developed a deeper appreciation for game design and interactive visuals.",
  },
  {
    id: 9,
    title: "Fun!",
    src: FunPic,
    keywords: "school spirit | community",
    description: "I love being part of the NC State community, and one of my favorite ways to engage is by attending sporting events. Cheering on the Wolfpack alongside fellow students has been an unforgettable part of my experience. In fact, I made it to all but two home football games during my four years at NC State!",
  },
  {
    id: 7,
    title: "Environmental Conservation",
    src: EnvironmentPic,
    keywords: "national outdoor leadership school | stewardship",
    description: "As an outdoor enthusiast, I’m passionate about preserving wilderness areas and protecting wildlife for future generations to enjoy.",
  },
  {
    id: 8,
    title: "Learning Languages",
    src: SpanishFlagPic,
    keywords: "spanish | language immersion",
    description: "I am energized by learning new languages and just finished my minor in Spanish at NC State. ¡Espero seguir aprendiendo y practicando después de graduarme!"

  },
  
  
  
];

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
        {images.map((item) => (
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
                image={item.src}
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
