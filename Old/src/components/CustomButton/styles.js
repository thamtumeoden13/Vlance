import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

const styles = StyleSheet.create({
  buttonVerifyWrapper: {
    flex: 1,
  },
  buttonVerify: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.primaryButtonColor,
    borderRadius: MetricsMod.baseMargin,
  },
  textButtonVerify: {
    alignSelf: 'center',
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.xsmall,
    textAlign: 'center',
  },
});

export default styles;
