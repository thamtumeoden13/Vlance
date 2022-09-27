import {Platform, StyleSheet} from 'react-native';
import appStyles from '../../../themes/AppStyles';
import {AppStyles, MetricsMod} from '../../../themes';

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
    fontSize: appStyles.fontSet.normal,
    color: AppStyles.colorSet.black,
    fontWeight: '500',
  },
  textFieldStyle: {
    marginLeft: MetricsMod.marginFifteen,
    marginVertical: MetricsMod.baseMargin,
    fontSize: appStyles.fontSet.tiny,
    color: AppStyles.colorSet.black,
  },
  inputStyle: {
    paddingVertical: Platform.OS === 'ios' ? 15 : 13,
    backgroundColor: AppStyles.colorSet.lightGray,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.smaller,
    marginHorizontal: MetricsMod.marginFifteen,
  },
  wrapperStyle: {
    width: '90%',
    marginBottom: MetricsMod.section,
    backgroundColor: AppStyles.colorSet.white,
  },
  detailContainer: {
    marginHorizontal: MetricsMod.baseMargin,
    backgroundColor: AppStyles.colorSet.white,
    borderRadius: MetricsMod.marginFifteen,
  },
  datePicker: {
    alignSelf: 'center',
    width: '90%',
    // marginHorizontal: MetricsMod.smallMargin,
    // marginTop: MetricsMod.smallMargin,
  },
});

export default styles;
