import React, { useState, useEffect } from "react";
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

const surveyPerformainingData = {
    requestId: '8',
    measurePoint: '23.345',
    customerName: 'dummy name',
    address: 'abc street xyz',
    surveyDetails: 'abc  dummy dummy xyz',
    street: ' 23 street ',
    phone: '6834234',
    stationId: '32',
};

const HomeContainer = (props) => {

    const { t } = useTranslation();
    const { Common, Fonts, Gutters, Layout } = useTheme();
    const dispatch = useDispatch();

    return (

        <ScrollView
            style={Layout.fill}
            contentContainerStyle={[
                Layout.fill,
                Layout.colCenter,
                Layout.justifyContentEnd,
                Gutters.smallHPadding,
            ]}
        >
            <View style={[[Layout.rowCenter, Gutters.smallHPadding]]}>
                <TouchableOpacity
                    style={[Common.button.rounded, Layout.fill, Gutters.regularBMargin]}
                // onPress={() => navigate(MAIN_SCREENS.ADDITIONAL_CONTRACT)}
                >
                    <Text style={[Fonts.textRegular, Fonts.textCenter]}>{t('additional contract')}</Text>
                </TouchableOpacity>
            </View>
            <View style={[[Layout.rowCenter, Gutters.smallHPadding]]}>
                <TouchableOpacity
                    style={[Common.button.rounded, Layout.fill, Gutters.regularBMargin]}
                // onPress={() => navigate(MAIN_SCREENS.ADDITIONAL_CONTRACT)}
                >
                    <Text style={[Fonts.textRegular, Fonts.textCenter]}>{t('Survey  Performing')}</Text>
                </TouchableOpacity>
            </View>
            <View style={[[Layout.rowCenter, Gutters.smallHPadding]]}>
                <TouchableOpacity
                    style={[Common.button.rounded, Layout.fill, Gutters.regularBMargin]}
                // onPress={() => navigate(MAIN_SCREENS.ADDITIONAL_CONTRACT)}
                >
                    <Text style={[Fonts.textRegular, Fonts.textCenter]}>{t('Special Information')}</Text>
                </TouchableOpacity>
            </View>
            <View style={[[Layout.rowCenter, Gutters.smallHPadding]]}>
                <TouchableOpacity
                    style={[Common.button.rounded, Layout.fill, Gutters.regularBMargin]}
                // onPress={() => navigate(MAIN_SCREENS.ADDITIONAL_CONTRACT)}
                >
                    <Text style={[Fonts.textRegular, Fonts.textCenter]}>{t('Contract Appendix')}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default HomeContainer;
