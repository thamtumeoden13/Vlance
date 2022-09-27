import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import VectorIconComponent from '../VectorIconComponent';
import {AppStyles, Images} from '../../themes';
import CustomLoading from '../CustomLoading';

function CustomButton(props) {
  const {
    title,
    onPress,
    disabled,
    buttonStyleWrapper,
    iconName,
    iconType,
    image,
    isRightArrow,
    rightIconSize,
    rightArrowName,
    rightArrowColor,
    rightArrowType,
    rightArrowPress,
    isImage,
    loading,
    titleStyle,
    buttonContainer,
    rightIconStyle,
    leftTextAlign,
  } = props || {};

  const renderLeftIcon = () => {
    if ((loading && iconName) || (loading && isImage)) {
      return <CustomLoading size={'small'} />;
    } else {
      return (
        <>
          {iconName ? (
            <VectorIconComponent
              name={iconName}
              size={rightIconSize}
              color={AppStyles.colorSet.white}
              type={iconType}
              onPress={onPress}
            />
          ) : (
            !leftTextAlign && <View style={{width: '10%'}} />
          )}
          {isImage && <Image source={image} style={{width: 40, height: 40}} />}
        </>
      );
    }
  };

  const renderTitle = () => {
    if (loading) {
      return <CustomLoading size={'small'} />;
    } else {
      return <Text style={[styles.textButtonVerify, titleStyle]}>{title}</Text>;
    }
  };

  const renderRightIcon = () => {
    if (loading && isRightArrow) {
      return <CustomLoading size={'small'} />;
    } else {
      return (
        <>
          {isRightArrow ? (
            <VectorIconComponent
              name={rightArrowName}
              size={rightIconSize}
              color={rightArrowColor}
              type={rightArrowType}
              style={rightIconStyle}
              onPress={rightArrowPress}
            />
          ) : (
            <View style={{width: '10%'}} />
          )}
        </>
      );
    }
  };

  return (
    <View style={[styles.buttonVerifyWrapper, buttonContainer]}>
      <TouchableOpacity
        style={[styles.buttonVerify, buttonStyleWrapper]}
        activeOpacity={0.9}
        disabled={disabled || loading}
        onPress={onPress}>
        {renderLeftIcon()}
        {renderTitle()}
        {renderRightIcon()}
      </TouchableOpacity>
    </View>
  );
}

export default CustomButton;

CustomButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  // image: PropTypes.string,
  isImage: PropTypes.bool,
  isRightArrow: PropTypes.bool,
  loading: PropTypes.bool,
  rightArrowName: PropTypes.string,
  rightArrowPress: PropTypes.func,
  rightIconSize: PropTypes.number,
};

CustomButton.defaultProps = {
  title: '',
  onPress: () => {},
  disabled: false,
  loading: false,
  image: Images.booking,
  isImage: false,
  isRightArrow: false,
  rightArrowPress: () => {},
  rightIconSize: 25,
};
