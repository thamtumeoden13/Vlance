import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';
import PropTypes from 'prop-types';
import VectorIconComponent from '../VectorIconComponent';
import {ICON_TYPES} from '../../constants/constant';

function RadioButton(props) {
  const {isActive, size, color, style, onPress} = props;
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      {isActive ? (
        <VectorIconComponent
          name={'ios-radio-button-on'}
          size={size}
          color={color}
          style={style}
          type={ICON_TYPES.IonIcons}
        />
      ) : (
        <VectorIconComponent
          name={'ios-radio-button-off'}
          size={size}
          color={color}
          style={style}
          type={ICON_TYPES.IonIcons}
        />
      )}
    </TouchableOpacity>
  );
}

export default RadioButton;

RadioButton.propTypes = {
  isActive: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
};

RadioButton.defaultProps = {
  isActive: false,
  size: MetricsMod.doubleBaseMargin,
  color: AppStyles.colorSet.white,
  circleStyle: {},
};
