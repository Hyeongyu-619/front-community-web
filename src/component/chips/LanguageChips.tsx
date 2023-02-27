import { Style } from "@mui/icons-material";

import { Chip, Avatar, createSvgIcon, SvgIcon } from "@mui/material";

import { width } from "@mui/system";

import React, { useState } from "react";

export type LanguageChipsProps = {
  label: string;

  languagetype:
    | "graphql"
    | "kotlin"
    | "mysql"
    | "mongodb"
    | "php"
    | "firebase"
    | "swift"
    | "unity"
    | "git"
    | "zest"
    | "javascript"
    | "typescript"
    | "react"
    | "vue"
    | "svelte"
    | "nextjs"
    | "nodejs"
    | "java"
    | "spring"
    | "go"
    | "nestjs"
    | "express"
    | "django"
    | "figma"
    | "zeplin"
    | "aws"
    | "docker"
    | "kubernetes"
    | "flutter"
    | "reactnative"
    | "c"
    | "c++"
    | "c#"
    | "python";
};

function LanguageChips(props: LanguageChipsProps) {
  const [chipOpacity, setOpacity] = useState("0.5");

  const handleClick = () => {
    if (chipOpacity == "0.5") {
      setOpacity("1");
    } else {
      setOpacity("0.5");
    }

    console.log(chipOpacity);
  };

  return (
    <div>
      <Chip
        sx={{ fontSize: "17px", height: "", opacity: chipOpacity }}
        icon={
          <img
            style={{ objectFit: "contain", margin: "5px", height: "30px" }}
            src={"/src/assets/iconsvg/" + props.languagetype + ".svg"}
          />
        }
        label={props.label}
        variant="outlined"
        onClick={handleClick}
        size="small"
      />
    </div>
  );
}

export default LanguageChips;
