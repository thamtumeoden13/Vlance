import { useTheme } from '@/hooks';
import React from 'react';
import { View, Text } from 'react-native'

const HeaderTitle = ({ title = '' }) => {
    const { Colors, Gutters, Common, Layout, Fonts } = useTheme()

    return (
        <View style={[
            Layout.center,
            // {
            //     justifyContent: 'center',
            //     alignItems: 'center',
            // }
        ]}>
            <Text style={[
                Fonts.textRegular,
                Fonts.textCenter,
                // {
                //     fontSize: (16),
                //     textAlign: 'center',
                // }
            ]}>{title}</Text>
        </View>
    )
};

export default HeaderTitle;