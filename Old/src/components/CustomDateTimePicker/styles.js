import {Platform, StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';
import appStyles from '../../themes/AppStyles';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: MetricsMod.marginFifteen,
    // marginBottom: MetricsMod.smallMargin,
  },
  inputStyle: {
    paddingVertical: Platform.OS === 'ios' ? 15 : 12,
    backgroundColor: AppStyles.colorSet.lightGray,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.smaller,
    // marginHorizontal: MetricsMod.marginFifteen,
    borderRadius: MetricsMod.baseMarginIII,
  },
  textFieldStyle: {
    textAlign: 'center',
    fontSize: appStyles.fontSet.medium,
    color: AppStyles.colorSet.black,
  },
});
export default styles;
