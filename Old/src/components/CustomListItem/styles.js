import {StyleSheet} from 'react-native';
import AppStyles from '../../themes/AppStyles';
import {MetricsMod} from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppStyles.colorSet.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: MetricsMod.smallMargin,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    marginLeft: MetricsMod.xSmallMargin,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.mediumI,
  },
  textStyleII: {
    marginTop: MetricsMod.smallMargin,
    marginLeft: MetricsMod.xSmallMargin,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.smaller,
  },
  textStyleIII:{
    marginLeft: MetricsMod.xSmallMargin,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.smaller,
  },
  imageStyle: {
    width: MetricsMod.thirty,
    height: MetricsMod.thirty,
    marginRight: MetricsMod.marginFifteen,
  },
  rightImageStyle: {
    width: MetricsMod.doubleBaseMargin,
    height: MetricsMod.doubleBaseMargin,
    marginLeft: MetricsMod.baseMargin,
  },
  divider: {
    marginTop: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    height: 0.7,
    backgroundColor: AppStyles.colorSet.black,
  },
});

export default styles;
