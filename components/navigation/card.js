import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const CustomCard = ({ title, description, imageUrl, link, linkText }) => {
  return (
    <main className="content">
      <Card className="bg-gradient-to-r from-gray-500 via-gray-500 to-gray-400 border border-indigo-700 rounded-md max-w-screen-2xl">
        <div className="flex">
          <CardContent className="flex-1 p-5">
            <Typography
              className="text-lg text-white font-bold p-3"
              variant="h8"
              component="div"
            >
              {title}
            </Typography>
            <Typography
              className="text-gray-800 whitespace-wrap"
              variant="body2"
            >
              {description}
            </Typography>
          </CardContent>
          <div className="w-1/4 flex items-center justify-center">
            <CardMedia component="img" alt={title} image={imageUrl} />
          </div>
        </div>

        {link && link.trim() !== "" && (
          <a
            href={link}
            className="text-center text-gray-100 hover:underline hover:text-gray-300"
          >
            {linkText || "Saiba mais"}
            <LaunchIcon className="m-1" />
          </a>
        )}
      </Card>
    </main>
  );
};

export default CustomCard;
