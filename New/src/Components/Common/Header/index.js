import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, SafeAreaView, } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import HeaderTitle from '@/components/Common/Header/HeaderTitle'
import HeaderBackImage from '@/components/Common/Header/HeaderBackImage'
import HeaderUserImage from '@/components/Common/Header/HeaderUserImage';
import HeaderTOMImage from '@/components/Common/Header/HeaderTOMImage';
import { useTheme } from '@/hooks';

const Header = ({
    isShowBackIcon = false,
    isShowLeftIcon = false,
    isShowRightIcon = false,
    title = '',
    onGoBack,
    onPressLeftIcon,
    onPressRightIcon
}) => {
    const { Colors, Gutters, Common, Layout } = useTheme()

    return (
        <SafeAreaView
            style={[
                Layout.row,
                Layout.justifyContentBetween,
                Common.backgroundPrimary,
                // {
                //     flexDirection: 'row',
                //     justifyContent: 'space-between',
                //     backgroundColor: Colors.primary
                // }
            ]}>
            <View style={[
                Layout.center,
                Layout.alignItemsStart,
                {
                    width: (48), height: (48),
                }
            ]}>
                {!!isShowBackIcon ?
                    <HeaderBackImage onPress={onGoBack} />
                    :
                    null
                }
            </View>
            {!!isShowLeftIcon ?
                <View style={[
                    Layout.colHCenter,
                    {
                        width: (48), height: (48),
                        // justifyContent: 'center', alignItems: 'flex-start'
                    }
                ]}
                >
                    <HeaderTOMImage onPress={onPressLeftIcon} />
                </View>
                :
                null
            }
            <View style={[
                Layout.fill, Layout.center,
                // { flex: 1, justifyContent: 'center', alignItems: 'center' }
            ]}>
                {!!title && <HeaderTitle title={title} />}
            </View>

            <View style={[
                Layout.colHCenter,
                Layout.alignItemsEnd,
                {
                    width: (48), height: (48),
                    // justifyContent: 'center', alignItems: 'flex-end'
                }
            ]}>
                {!!isShowRightIcon &&
                    <HeaderUserImage onPress={onPressRightIcon} />
                }
            </View>
        </SafeAreaView>
    )
}

export default Header