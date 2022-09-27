import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import CheckBoxButton from '../CheckBoxButton';
import {AppStyles, MetricsMod} from '../../themes';
import PropTypes from 'prop-types';
import ToggleButton from '../ToggleButton';
import VectorIconComponent from '../VectorIconComponent';
import {isEmpty} from 'lodash';

function CustomListItem(props) {
  const {
    isLeftIcon,
    iconType,
    iconName,
    text,
    isRadio,
    isActive,
    onPress,
    isToggle,
    containerStyle,
    textStyleContainer,
    iconColor,
    isLeftImage,
    imageName,
    iconSize,
    rightImageName,
    isRightImage,
    leftImageStyle,
    isDisabled,
    rightStyleImage,
    desc,
    subTitle,
    subTitleII,
    iconStyle,
  } = props;
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      disabled={isDisabled}>
      <View style={styles.innerContainer}>
        {isLeftIcon && (
          <VectorIconComponent
            name={iconName}
            size={MetricsMod.doubleBaseMargin}
            color={iconColor}
            type={iconType}
            style={iconStyle}
          />
        )}
        {isLeftImage && (
          <Image
            resizeMode={'contain'}
            style={[
              styles.imageStyle,
              leftImageStyle,
              isDisabled && {tintColor: AppStyles.colorSet.greyColor},
            ]}
            source={imageName}
          />
        )}
        <View>
          <Text
            style={[
              styles.textStyle,
              textStyleContainer,
              isDisabled && {color: AppStyles.colorSet.greyColor},
            ]}
            numberOfLines={2}>
            {text}
          </Text>
          {desc && (
            <Text
              style={[
                styles.textStyleII,
                textStyleContainer,
                isDisabled && {color: AppStyles.colorSet.greyColor},
              ]}
              numberOfLines={2}>
              {desc}
            </Text>
          )}
          <View
            style={{
              flexDirection: 'row',
              marginTop: MetricsMod.baseMargin,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {subTitle && (
              <Text
                style={[
                  styles.textStyleIII,
                  textStyleContainer,
                  isDisabled && {color: AppStyles.colorSet.greyColor},
                ]}
                numberOfLines={1}>
                {subTitle}
              </Text>
            )}
            {subTitleII && (
              <Text
                style={[
                  styles.textStyleIII,
                  textStyleContainer,
                  {marginRight: MetricsMod.hundred},
                ]}
                numberOfLines={1}>
                {subTitleII}
              </Text>
            )}
          </View>
        </View>
      </View>
      {isRadio && (
        <CheckBoxButton isActive={isActive} size={iconSize} color={iconColor} />
      )}
      {isToggle && (
        <ToggleButton isToggle={isActive} size={iconSize} color={iconColor} />
      )}
      {isRightImage && (
        <Image
          resizeMode={'contain'}
          style={[styles.rightImageStyle, rightStyleImage]}
          source={rightImageName}
        />
      )}
    </TouchableOpacity>
  );
}

export default CustomListItem;

CustomListItem.propTypes = {
  isLeftIcon: PropTypes.bool,
  isLeftImage: PropTypes.bool,
  // iconType: PropTypes.func,
  iconName: PropTypes.string,
  text: PropTypes.string,
  isActive: PropTypes.any,
  isRadio: PropTypes.bool,
  isToggle: PropTypes.bool,
  isChat: PropTypes.bool,
  iconColor: PropTypes.string,
};

CustomListItem.defaultProps = {
  isLeftIcon: false,
  // iconType: () => {
  // },
  iconName: '',
  text: '',
  isActive: false,
  isChat: false,
  isRadio: false,
  isToggle: false,
  iconColor: AppStyles.colorSet.primaryButtonColor,
};
