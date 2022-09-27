import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';
import PropTypes from 'prop-types';
import VectorIconComponent from '../VectorIconComponent';
import {ICON_TYPES} from '../../constants/constant';

function CheckBoxButton(props) {
  const {isActive, size, color, style, onPress} = props;
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      {isActive ? (
        <VectorIconComponent
          name={'checkbox-marked'}
          size={size}
          color={color}
          style={style}
          type={ICON_TYPES.MaterialCommunityIcons}
        />
      ) : (
        <VectorIconComponent
          name={'checkbox-blank-outline'}
          size={size}
          color={color}
          style={style}
          type={ICON_TYPES.MaterialCommunityIcons}
        />
      )}
    </TouchableOpacity>
  );
}

export default CheckBoxButton;

CheckBoxButton.propTypes = {
  isActive: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
};

CheckBoxButton.defaultProps = {
  isActive: false,
  size: MetricsMod.doubleBaseMargin,
  color: AppStyles.colorSet.white,
  circleStyle: {},
};
