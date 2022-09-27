import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: MetricsMod.baseMargin,
    paddingVertical: MetricsMod.marginFifteen,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: AppStyles.colorSet.blue,
  },
  iconWhite: {
    color: AppStyles.colorSet.black,
  },
  headerText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: '500',
    color: AppStyles.colorSet.black,
    fontSize: MetricsMod.marginFifteen,
  },
  imageStyle: {
    width: MetricsMod.section,
    height: MetricsMod.section,
    // tintColor: AppStyles.colorSet.white,
  },
});

export default styles;
