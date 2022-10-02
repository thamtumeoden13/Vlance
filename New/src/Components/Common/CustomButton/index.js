import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';

const CustomButton = ({
    title,
    onPress,
    disabled,
    loading,
    titleStyle,
    buttonContainer,
}) => {

    const { Common, Fonts, Gutters, Layout } = useTheme();

    return (
        <View style={[Layout.fill, { buttonContainer }]}>
            <TouchableOpacity
                style={[Common.button.rounded, Gutters.regularBMargin]}
                disabled={disabled || loading}
                onPress={onPress}
            >
                <Text style={[Fonts.textRegular, Fonts.textCenter, titleStyle]}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CustomButton;

CustomButton.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    // image: ropTypes.string,
    loading: PropTypes.bool,
    titleStyle: PropTypes.object,
    buttonContainer: PropTypes.object,
};

CustomButton.defaultProps = {
    title: '',
    onPress: () => { },
    disabled: false,
    loading: false,
    titleStyle: {},
    buttonContainer: {},
};