import { Style } from "@mui/icons-material";
import { Chip, Avatar, createSvgIcon, SvgIcon } from "@mui/material";
import { width } from "@mui/system";
import React from "react";

export type LocateChipsProps = {
  label: string;
};

function LocateChips(props: LocateChipsProps) {
  const handleClick = () => {
    console.info("you clicked tho Chip.");
  };

  return (
    <div>
      <Chip
        sx={{ fontSize: "20px" }}
        label={props.label}
        variant="outlined"
        onClick={handleClick}
        size="medium"
      />
    </div>
  );
}

export default LocateChips;
