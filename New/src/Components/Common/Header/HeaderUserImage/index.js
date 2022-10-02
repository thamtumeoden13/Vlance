import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { useEffect } from 'react';
import {
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';

export default HeaderUserImage = ({ onPress }) => {
    const { Colors, Gutters, Common, Layout, Fonts } = useTheme()

    return (
        <TouchableOpacity onPress={onPress}>
            <Image
                source={require('@/assets/images/person.png')}
                style={[
                    Common.imageIcon.contain,
                    // Gutters.smallLMargin,
                    // Gutters.regularRMargin,
                    // Gutters.regularVMargin,
                    {
                        // height: 25,
                        // width: 25,
                        // marginLeft: 6,
                        // marginRight: 12,
                        // marginVertical: 12,
                        // resizeMode: 'contain',
                    }
                ]}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Image: {
        height: 25,
        width: 25,
        marginLeft: 6,
        marginRight: 12,
        marginVertical: 12,
        resizeMode: 'contain',
    },
});