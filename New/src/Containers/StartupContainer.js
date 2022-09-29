import React, { useEffect } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/hooks";
import { Brand } from "@/components";
import { setDefaultTheme } from "@/store/Theme";
import { navigateAndSimpleReset } from "@/navigators/utils";

const StartupContainer = () => {
  const { Layout, Gutters, Fonts } = useTheme();

  const { t } = useTranslation();

  const init = async () => {
    await setDefaultTheme({ theme: "evn", darkMode: false });
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 10)
    );
    navigateAndSimpleReset("Main");
  };

  useEffect(() => {
    init();
  });

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size={"large"} style={[Gutters.largeVMargin]} />
      <Text style={Fonts.textCenter}>{t("welcome")}</Text>
    </View>
  );
};

export default StartupContainer;
