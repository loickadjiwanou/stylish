import React from "react";
import CustomButtonStyle from "./CustomButton.style.js";
import { Button } from "@rneui/themed";
import colors from "../../assets/colors/colors.js";

const CustomButton = (props) => {
  return (
    <Button
      title={props.title}
      titleStyle={[CustomButtonStyle.titleStyle, { color: props.textColor }]}
      buttonStyle={[
        CustomButtonStyle.buttonStyle,
        {
          borderWidth: 1,
          borderColor: props.borderColor,
          height: props.buttonHeight || 55,
          width: props.buttonWidth || "100%",
        },
      ]}
      disabled={props.isDisabled}
      color={props.color}
      loading={props.loading}
      loadingProps={{ color: props.loaderColor || colors.black }}
      onPress={props.handlePress}
    />
  );
};
export default CustomButton;
