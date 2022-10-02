import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';
import { Colors } from '@/themes/Variables';

const CustomTextInput = ({
    placeholder,
    onChangeText,
    secureTextEntry,
    inputTextStyle,
    placeholderTextColor,
    value,
    onChange,
    autoFocus,
    onfocus,
    selectTextOnFocus,
    editable,
    keyboardType,
    maxLength,
}) => {

    const { Common, Fonts, Gutters, Layout } = useTheme();

    return (
        <View>
            <TextInput
                style={[Layout.fill, Common.textInput.rounded, Fonts.textLeft, Fonts.textRegular, Gutters.smallHPadding, inputTextStyle]}
                value={value}
                onChangeText={onChangeText}
                onChange={onChange}
                onFocus={onfocus}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                selectTextOnFocus={selectTextOnFocus}
                editable={editable}
                maxLength={maxLength}
                autoFocus={autoFocus}
                keyboardType={keyboardType}
            />
        </View>
    );
}

export default CustomTextInput;

CustomTextInput.propTypes = {
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    secureTextEntry: PropTypes.bool,
    inputTextStyle: PropTypes.object,
    placeholderTextColor: PropTypes.string,
    autoFocus: PropTypes.bool,
    selectTextOnFocus: PropTypes.bool,
    editable: PropTypes.bool,
    keyboardType: PropTypes.string
};

CustomTextInput.defaultProps = {
    placeholder: '',
    onChangeText: () => { },
    secureTextEntry: false,
    inputTextStyle: {},
    placeholderTextColor: Colors.text,
    autoFocus: false,
    selectTextOnFocus: false,
    editable: true,
    keyboardType: 'default'
};
