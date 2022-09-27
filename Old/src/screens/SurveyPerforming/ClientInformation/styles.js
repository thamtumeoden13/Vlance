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
  inputStyleII: {
    backgroundColor: AppStyles.colorSet.lightGray,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.smaller,
    marginHorizontal: MetricsMod.marginFifteen,
    paddingVertical: Platform.OS === 'ios' ? 15 : 12,
    paddingHorizontal: MetricsMod.baseMargin,
    borderRadius: MetricsMod.baseMargin,
  },
  inputStyleIII: {
    paddingVertical: Platform.OS === 'ios' ? 20 : 13,
    backgroundColor: AppStyles.colorSet.lightGray,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.smaller,
    marginHorizontal: MetricsMod.marginFifteen,
    paddingHorizontal: MetricsMod.baseMargin,
    borderRadius: MetricsMod.baseMargin,
  },
  wrapperStyleII: {
    width: '90%',
    height: 300,
    marginBottom: MetricsMod.section,
    backgroundColor: AppStyles.colorSet.white,
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
    marginTop: MetricsMod.marginFifteen,
  },
  detailContainerII: {
    // marginHorizontal: MetricsMod.smallMargin,
    backgroundColor: AppStyles.colorSet.white,
    borderRadius: MetricsMod.marginFifteen,
    marginTop: MetricsMod.smallMargin,
  },
  bookNowContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: MetricsMod.fifty,
    borderRadius: MetricsMod.doubleBaseMargin,
    backgroundColor: AppStyles.colorSet.blue,
    paddingVertical: MetricsMod.baseMargin,
    marginVertical: MetricsMod.doubleBaseMargin,
  },
  bookNowContainerII: {
    flex: 0,
    height: MetricsMod.forty,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: MetricsMod.fifty,
    borderRadius: MetricsMod.doubleBaseMargin,
    // backgroundColor: AppStyles.colorSet.blue,
    // paddingVertical: MetricsMod.baseMargin,
    marginVertical: MetricsMod.baseMargin,
  },
  branchTitleStyle: {
    fontSize: appStyles.fontSet.small,
    color: AppStyles.colorSet.white,
  },
  textAreaContainer: {
    // borderColor: COLORS.grey20,
    // padding: 5,
    marginBottom: MetricsMod.baseMargin,
  },
  textArea: {
    height: 100,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    backgroundColor: AppStyles.colorSet.lightGray,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.smaller,
    marginHorizontal: MetricsMod.marginFifteen,
    paddingHorizontal: MetricsMod.baseMargin,
    borderRadius: MetricsMod.baseMargin,
  },
});

export default styles;
