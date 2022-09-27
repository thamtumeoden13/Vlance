import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: MetricsMod.section,
    // paddingBottom: MetricsMod.smallMargin,
    backgroundColor: AppStyles.colorSet.white,
    borderRadius: MetricsMod.doubleBaseMargin,
    elevation: MetricsMod.baseMargin,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    // shadowRadius: 4,
  },
  customContainerStyle: {
    paddingVertical: MetricsMod.baseMargin,
    paddingHorizontal: MetricsMod.baseMargin,
    backgroundColor: AppStyles.colorSet.white,
    borderBottomRightRadius: MetricsMod.marginFifteen,
    borderBottomLeftRadius: MetricsMod.marginFifteen,
  },
  headerStyle: {
    borderTopRightRadius: MetricsMod.marginFifteen,
    borderTopLeftRadius: MetricsMod.marginFifteen,
  },
});
export default styles;
