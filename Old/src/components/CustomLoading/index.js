import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import styles from './styles';
import AppStyles from '../../themes/AppStyles';

export default function CustomLoading(props) {
  const {
    containerStyles = styles.container,
    indicatorStyle = styles.indicatorStyle,
    size = 'large',
  } = props;

  return (
    <View style={containerStyles}>
      <ActivityIndicator
        style={indicatorStyle}
        size={size}
        color={AppStyles.colorSet.primaryButtonColor}
      />
    </View>
  );
}
