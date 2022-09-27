import {Platform, StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../../../themes';
import appStyles from '../../../../themes/AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    // marginBottom: MetricsMod.twoHundred,
  },
  titleStyle: {
    marginLeft: MetricsMod.baseMargin,
    marginVertical: MetricsMod.marginFifteen,
    fontSize: appStyles.fontSet.medium,
    color: AppStyles.colorSet.black,
    fontWeight: '500',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: MetricsMod.doubleBaseMargin,
  },
  listContainer: {
    paddingVertical: MetricsMod.marginFifteen,
    marginBottom: MetricsMod.baseMargin,
  },
});

export default styles;
