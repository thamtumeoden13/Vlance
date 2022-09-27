import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {AppStyles, MetricsMod} from '../../themes';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import VectorIconComponent from '../VectorIconComponent';
import Images from '../../themes/Images';

function CustomHeader(props) {
  const navigation = useNavigation();
  const {
    isLeftIcon,
    leftIconType,
    leftIconName,
    leftIconSize,
    isRightIcon,
    rightIconType,
    rightIconName,
    title,
    headerTitleStyle,
    headerContainerStyle,
    leftIconStyle,
    rightIconStyle,
    rightIconOnPress,
    leftIconOnPress,
    isLeftImage,
    leftImageName,
    rightImageName,
    isRightImage,
    leftImageOnPress,
    rightImageOnPress,
  } = props ?? {};
  return (
    <SafeAreaView>
      <View style={[styles.header, headerContainerStyle]}>
        <TouchableOpacity onPress={leftIconOnPress}>
          {isLeftIcon && (
            <VectorIconComponent
              name={leftIconName}
              size={leftIconSize}
              color={AppStyles.colorSet.white}
              style={[styles.iconWhite, leftIconStyle]}
              type={leftIconType}
            />
          )}
          {isLeftImage && (
            <TouchableOpacity onPress={leftImageOnPress} activeOpacity={0.9}>
              <Image
                resizeMode={'contain'}
                style={styles.imageStyle}
                source={leftImageName}
              />
            </TouchableOpacity>
          )}
          {!isLeftIcon && (
            <View
              style={{
                width: MetricsMod.doubleBaseMargin,
              }}
            />
          )}
        </TouchableOpacity>
        {title && (
          <View>
            <Text style={[styles.headerText, headerTitleStyle]}>{title}</Text>
          </View>
        )}
        <View>
          <TouchableOpacity onPress={rightIconOnPress}>
            {isRightIcon && (
              <VectorIconComponent
                name={rightIconName}
                size={MetricsMod.thirty}
                color={AppStyles.colorSet.white}
                style={[styles.iconWhite, rightIconStyle]}
                type={rightIconType}
              />
            )}
            {isRightImage && (
              <TouchableOpacity onPress={rightImageOnPress} activeOpacity={0.9}>
                <Image
                  resizeMode={'contain'}
                  style={styles.imageStyle}
                  source={rightImageName}
                />
              </TouchableOpacity>
            )}
            {!isRightIcon && (
              <View
                style={{
                  width: MetricsMod.doubleBaseMargin,
                }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CustomHeader;

CustomHeader.propTypes = {
  isLeftIcon: PropTypes.bool,
  leftIconName: PropTypes.string,
  // leftImageName: PropTypes.string,
  // rightImageName: PropTypes.string,
  isLeftImage: PropTypes.bool,
  isRightImage: PropTypes.bool,
  isRightIcon: PropTypes.bool,
  isLogo: PropTypes.bool,
  rightIconName: PropTypes.string,
  rightImageOnPress: PropTypes.func,
  rightIconOnPress: PropTypes.func,
  leftIconOnPress: PropTypes.func,
  leftIconSize: PropTypes.number,
};

CustomHeader.defaultProps = {
  isLeftIcon: false,
  isLeftImage: false,
  isRightImage: false,
  iconName: '',
  // leftImageName: '',
  // rightImageName: '',
  leftIconName: '',
  isRightIcon: false,
  isLogo: false,
  rightIconName: '',
  rightIconOnPress: () => {},
  leftIconOnPress: () => {},
  rightImageOnPress: () => {},
  leftIconSize: MetricsMod.thirty,
};
