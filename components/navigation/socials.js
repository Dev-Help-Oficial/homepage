import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";

const SocialIcon = ({ name, icon, link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <Tooltip title={name}>
      <IconButton style={{color:'#ccc'}} onClick={handleClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default SocialIcon;
