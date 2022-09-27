import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppStyles.colorSet.white,
    marginHorizontal: MetricsMod.marginFifteen,
    borderRadius: MetricsMod.baseMargin,
    marginVertical: MetricsMod.eight,
    paddingLeft: MetricsMod.baseMargin,
    shadowColor: '#8d8d89',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1.25,
    shadowRadius: 1.84,
    zIndex: 1,
    elevation: 2,
  },
  input: {
    flex: 1,
    marginHorizontal: MetricsMod.baseMargin,
    marginBottom: MetricsMod.baseMargin,
    backgroundColor: AppStyles.colorSet.white,
    fontSize: AppStyles.fontSet.smaller,
    borderRadius: MetricsMod.baseMargin,
    color: AppStyles.colorSet.black,
    paddingLeft: MetricsMod.marginFifteen,
  },
  iconStyle: {
    tintColor: AppStyles.colorSet.primaryButtonColor,
    width: MetricsMod.marginFifteen,
    height: MetricsMod.marginFifteen,
    marginRight: MetricsMod.smallMargin,
  },
  imageStyle: {
    tintColor: AppStyles.colorSet.primaryButtonColor,
    width: MetricsMod.eighteen,
    height: MetricsMod.eighteen,
    marginRight: MetricsMod.baseMargin,
  },
});

export default styles;
