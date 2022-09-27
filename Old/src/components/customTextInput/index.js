import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Images from '../../themes/Images';
import {AppStyles, MetricsMod} from '../../themes';
import VectorIconComponent from '../VectorIconComponent';
import {ICON_TYPES} from '../../constants/constant';

function CustomTextInput(props) {
  const {
    placeholder,
    onChangeText,
    secureTextEntry,
    inputTextStyle,
    placeholderTextColor,
    onBlur,
    value,
    onChange,
    onSubmitEditing,
    autoFocus,
    numberOfLines,
    multiline,
    returnKeyLabel,
    returnKeyType,
    onfocus,
    selectTextOnFocus,
    editable,
    keyboardType,
    maxLength,
    rightIcon,
    rightIconName,
    rightIconSize,
    iconName,
    iconType,
    iconColor,
    rightIconStyle,
    isRightIcon,
    onPressRightIcon,
  } = props || {};
  return (
    <View>
      <TextInput
        style={[styles.input, inputTextStyle]}
        value={value}
        onChangeText={onChangeText}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        editable={editable}
        selectTextOnFocus={selectTextOnFocus}
        onBlur={onBlur}
        multiline={multiline}
        numberOfLines={numberOfLines}
        returnKeyType={returnKeyType}
        returnKeyLabel={returnKeyLabel}
        onSubmitEditing={onSubmitEditing}
        maxLength={maxLength}
        onFocus={onfocus}
        keyboardType={keyboardType}
      />
      {rightIcon ? (
        <TouchableOpacity activeOpacity={0.9} onPress={onPressRightIcon}>
          <Image
            resizeMode={'contain'}
            style={[styles.imageStyle, rightIconStyle]}
            source={rightIconName}
          />
        </TouchableOpacity>
      ) : null}
      {isRightIcon ? (
        <VectorIconComponent
          name={iconName}
          size={rightIconSize}
          style={[styles.iconStyle, rightIconStyle]}
          color={iconColor}
          type={iconType}
          onPress={onPressRightIcon}
        />
      ) : null}
    </View>
  );
}

export default CustomTextInput;

CustomTextInput.propTypes = {
  leftIcon: PropTypes.bool,
  rightIcon: PropTypes.bool,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
  inputTextStyle: PropTypes.object,
  autoFocus: PropTypes.bool,
  multiline: PropTypes.bool,
  isIcon: PropTypes.bool,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconColor: PropTypes.string,
  color: PropTypes.string,
  rightIconSize: PropTypes.number,
};

CustomTextInput.defaultProps = {
  leftIcon: false,
  rightIcon: false,
  placeholder: '',
  errorMessage: '',
  onChangeText: () => {},
  secureTextEntry: false,
  inputTextStyle: {},
  autoFocus: false,
  multiline: false,
  isIcon: false,
  iconName: 'lock',
  iconType: ICON_TYPES.Feather,
  iconColor: AppStyles.colorSet.lockColor,
  color: AppStyles.colorSet.black,
  rightIconSize: 16,
};
