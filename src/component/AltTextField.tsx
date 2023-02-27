import { BrandingWatermark } from "@mui/icons-material";
import { SxProps, TextField, Theme } from "@mui/material";
import React, { useState } from "react";

export type AltTextFieldProps = {
  errorMsg: string;
  label: string;
  placeholder: string;
  sx?: SxProps<Theme>;
  fieldtype: "ID" | "PW" | "EMAIL" | "NAME" | "NICKNAME";
};
function AltTextField(props: AltTextFieldProps) {
  const [isValid, setIsValid] = useState(true);
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  function CheckValidation(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    let textLength: number = event.target.value.length;

    switch (props.fieldtype) {
      case "ID":
        setIsValid((textLength > 4 && textLength < 15) || textLength == 0);

        break;
      case "PW":
        break;
      case "EMAIL":
        setIsValid(expression.test(event.target.value));
        break;
      case "NAME":
        break;
      case "NICKNAME":
        break;

      default:
        break;
    }
  }
  return (
    <TextField
      error={!isValid}
      sx={props.sx}
      style={{ margin: "4px" }}
      id={isValid ? "outlined-basic" : "outlined-error-helper-text"}
      label={props.label}
      placeholder={!isValid ? props.placeholder : ""}
      variant="outlined"
      onChange={CheckValidation}
      helperText={!isValid ? props.errorMsg : ""}
      type={props.fieldtype == "PW" ? "password" : ""}
    />
  );
}

export default AltTextField;
