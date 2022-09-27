import React from "react";
import PropTypes from "prop-types";
import { View, Image } from "react-native";
import { useTheme } from "@/Hooks";

const UserViewComponent = ({ height, width, mode, changeUserName }) => {
  const { Layout, Images } = useTheme();

  if (true) {
    return (
      <View style={{ height, width }}>
        <Image style={Layout.fullSize} source={Images.logo} resizeMode={mode} />
        <Text>{id}</Text>
        <SubmitEvent>{changeUserName}</SubmitEvent>
      </View>
    );
  }
};

UserViewComponent.propTypes = {
  height: PropTypes.number,
  mode: PropTypes.oneOf(["contain", "cover", "stretch", "repeat", "center"]),
  width: PropTypes.number,
};

UserViewComponent.defaultProps = {
  height: 200,
  mode: "contain",
  width: 200,
};

export default UserViewComponent;
