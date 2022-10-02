import React, { useState, useEffect, useLayoutEffect } from "react";
import {
    View,
    ActivityIndicator,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Brand } from "@/components";
import { useTheme } from "@/hooks";
import { useLazyFetchOneQuery } from "@/services/modules/users";
import { changeTheme } from "@/store/Theme";
import { logInfo } from "@/utils";
import { navigate } from "@/navigators/utils";
import { useNavigation } from "@react-navigation/native";
import Header from "@/components/Common/Header";
import { MAIN_SCREENS } from "@/constants";
import CustomButton from "@/components/Common/CustomButton";

const HomeContainer = (props) => {

    const { t } = useTranslation();
    const { Common, Fonts, Gutters, Layout } = useTheme();
    const dispatch = useDispatch();
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => <Header
                title='Home Page'
                isShowBackIcon
                isShowLeftIcon
                isShowRightIcon
                onGoBack={() => { if (navigation.canGoBack) navigation.goBack() }}
                onPressRightIcon={() => navigation.openDrawer()}
            // onPressLeftIcon = {()=> navigation.navigate('')}
            />,
        })
    }, [navigation])

    return (
        <ScrollView
            style={Layout.fill}
            contentContainerStyle={[
                Layout.fill,
                Layout.colCenter,
                Gutters.smallHPadding,
            ]}
        >
            <View style={[[Layout.rowCenter, Gutters.smallHPadding]]}>
                <CustomButton
                    title="additional contract"
                    onPress={() => navigate(MAIN_SCREENS.SURVEY_PERFORMING)}
                />
            </View>
            <View style={[[Layout.rowCenter, Gutters.smallHPadding]]}>
                <CustomButton
                    title="Survey Performing"
                    onPress={() => navigation.openDrawer()}
                />

            </View>
            <View style={[[Layout.rowCenter, Gutters.smallHPadding]]}>
                <CustomButton
                    title="Special Information"
                    onPress={() => navigation.openDrawer()}
                />
            </View>
            <View style={[[Layout.rowCenter, Gutters.smallHPadding]]}>
                <CustomButton
                    title="Contract Appendix"
                    onPress={() => navigation.openDrawer()}
                />
            </View>
        </ScrollView>
    )
}

export default HomeContainer;
