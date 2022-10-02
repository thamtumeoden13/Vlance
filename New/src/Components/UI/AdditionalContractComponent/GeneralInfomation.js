import React, { useState } from 'react';
import { ScrollView, SafeAreaView, StatusBar, Text, TextInput, View } from 'react-native';

import { useTranslation } from 'react-i18next';

// local imports
import { useTheme } from '@/hooks';
import CustomTextInput from '@/components/Common/CustomTextInput';

function GeneralInfomation(props) {

    const { Common, Fonts, Gutters, Layout } = useTheme();

    const [state, setState] = useState({
        customerCode: '',
        customerName: '',
        department: '',
        staff: '',
        reason: '',
        dateOfLiquidation: '',
    })

    const handleChangeValue = (name, value) => {
        setState(perv => { return { ...perv, [name]: value } })
    }

    const renderCustomerDeital = () => {
        return (
            <View style={[Layout.fill, Layout.radius, Common.backgroundPrimary]}>
                <View
                    style={[
                        Layout.column,
                        Layout.columnVCenter,
                        Gutters.smallHPadding,
                    ]}
                >
                    <Text style={[Layout.fill, Fonts.textLeft, Fonts.textSmall, Gutters.smallVMargin]}>
                        {`Customer's Code`}
                    </Text>
                    <CustomTextInput
                        value={state.customerCode}
                        onChangeText={value => handleChangeValue('customerCode', value)}
                        keyboardType={"number-pad"}
                        maxLength={8}
                        selectTextOnFocus={true}
                    />
                </View>
                <View
                    style={[
                        Layout.column,
                        Layout.columnVCenter,
                        Gutters.smallHPadding,
                        // Gutters.smallVMargin,
                    ]}
                >
                    <Text style={[Layout.fill, Fonts.textLeft, Fonts.textSmall, Gutters.smallVMargin]}>
                        {`Customer Name`}
                    </Text>
                    <CustomTextInput
                        value={state.customerName}
                        onChangeText={value => handleChangeValue('customerName', value)}
                        keyboardType={"number-pad"}
                        maxLength={8}
                        selectTextOnFocus={true}
                    />
                </View>
            </View>
        )
    }

    const renderLiquidationInformation = () => {
        return (
            <View style={[Layout.fill, Layout.radius, Common.backgroundPrimary]}>
                <View
                    style={[
                        Layout.column,
                        Layout.columnVCenter,
                        Gutters.smallHPadding,
                    ]}
                >
                    <Text style={[Layout.fill, Fonts.textLeft, Fonts.textSmall, Gutters.smallVMargin]}>
                        {`Department`}
                    </Text>
                    <CustomTextInput
                        value={state.department}
                        onChangeText={value => handleChangeValue('department', value)}
                        keyboardType={"number-pad"}
                        maxLength={8}
                        selectTextOnFocus={true}
                    />
                </View>
                <View
                    style={[
                        Layout.column,
                        Layout.columnVCenter,
                        Gutters.smallHPadding,
                        // Gutters.smallVMargin,
                    ]}
                >
                    <Text style={[Layout.fill, Fonts.textLeft, Fonts.textSmall, Gutters.smallVMargin]}>
                        {`Staff`}
                    </Text>
                    <CustomTextInput
                        value={state.staff}
                        onChangeText={value => handleChangeValue('staff', value)}
                        keyboardType={"number-pad"}
                        maxLength={8}
                        selectTextOnFocus={true}
                    />
                </View>
                <View
                    style={[
                        Layout.column,
                        Layout.columnVCenter,
                        Gutters.smallHPadding,
                        // Gutters.smallVMargin,
                    ]}
                >
                    <Text style={[Layout.fill, Fonts.textLeft, Fonts.textSmall, Gutters.smallVMargin]}>
                        {`Reason`}
                    </Text>
                    <CustomTextInput
                        value={state.reason}
                        onChangeText={value => handleChangeValue('reason', value)}
                        keyboardType={"number-pad"}
                        maxLength={8}
                        selectTextOnFocus={true}
                    />
                </View>
                <View
                    style={[
                        Layout.column,
                        Layout.columnVCenter,
                        Gutters.smallHPadding,
                        // Gutters.smallVMargin,
                    ]}
                >
                    <Text style={[Layout.fill, Fonts.textLeft, Fonts.textSmall, Gutters.smallVMargin]}>
                        {`Staff`}
                    </Text>
                    <CustomTextInput
                        value={state.dateOfLiquidation}
                        onChangeText={value => handleChangeValue('dateOfLiquidation', value)}
                        keyboardType={"number-pad"}
                        maxLength={8}
                        selectTextOnFocus={true}
                    />
                </View>
            </View>
        )
    }

    return (
        <ScrollView
            style={[Layout.fill, Gutters.smallVMargin]}
            showsVerticalScrollIndicator={false}
        >
            <Text style={[Fonts.textRegular, Gutters.smallVMargin]}>Customer Details</Text>
            {renderCustomerDeital()}
            <Text style={[Fonts.textRegular, Gutters.smallVMargin]}>Liquidation Information</Text>
            {renderLiquidationInformation()}
        </ScrollView>
    );
}

export default GeneralInfomation;