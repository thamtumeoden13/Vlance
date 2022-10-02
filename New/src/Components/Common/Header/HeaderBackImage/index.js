import { useTheme } from '@/hooks';
import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';

export default HeaderBackImage = ({ onPress }) => {
    const { Colors, Gutters, Common, Layout, Fonts } = useTheme()
    return (
        <TouchableOpacity onPress={onPress}>
            <Image
                source={require('@/assets/images/back.webp')}
                style={[Common.imageIcon.regular]}
                // style={styles.Image}
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