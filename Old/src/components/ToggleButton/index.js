import React from 'react';
import {View} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';
import PropTypes from 'prop-types';
import {ICON_TYPES} from '../../constants/constant';
import VectorIconComponent from '../VectorIconComponent';
import {isBoolean} from 'lodash';

function ToggleButton(props) {
  const {isToggle, size, color} = props;
  return (
    <View>
      {isToggle ? (
        <VectorIconComponent
          name={'toggle-on'}
          size={size}
          color={color}
          type={ICON_TYPES.FontAwesome}
        />
      ) : (
        <VectorIconComponent
          name={'toggle-off'}
          size={size}
          color={color}
          type={ICON_TYPES.FontAwesome}
        />
      )}
    </View>
  );
}

export default ToggleButton;

ToggleButton.propTypes = {
  isToggle: PropTypes.any,
  size: PropTypes.number,
  color: PropTypes.string,
};

ToggleButton.defaultProps = {
  isToggle: isBoolean(0),
  size: MetricsMod.doubleBaseMargin,
  color: AppStyles.colorSet.white,
  circleStyle: {},
};
