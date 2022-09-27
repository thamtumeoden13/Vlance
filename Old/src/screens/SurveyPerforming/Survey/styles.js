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
    // marginLeft: MetricsMod.baseMargin,
    marginVertical: MetricsMod.marginFifteen,
    fontSize: appStyles.fontSet.normal,
    color: AppStyles.colorSet.black,
    fontWeight: '500',
  },
  textContainer: {
    marginVertical: MetricsMod.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: MetricsMod.doubleBaseMargin,
  },
  tabBarContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    color: AppStyles.colorSet.black,
    fontWeight: '500',
  },
  tabBarIndicator: {
    borderColor: 'rgba(39,28,22,0.82)',
    borderWidth: 1,
    backgroundColor: AppStyles.colorSet.transparent,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  detailContainer: {
    flex: 1,
    marginHorizontal: MetricsMod.baseMargin,
    paddingHorizontal: MetricsMod.smallMargin,
    paddingVertical: MetricsMod.marginFifteen,
    backgroundColor: AppStyles.colorSet.white,
    borderRadius: MetricsMod.marginFifteen,
  },
  textFieldStyle: {
    marginLeft: MetricsMod.marginFifteen,
    marginVertical: MetricsMod.baseMargin,
    fontSize: appStyles.fontSet.medium,
    color: AppStyles.colorSet.black,
    fontWeight: 'bold',
  },
  titleStyleII: {
    marginLeft: MetricsMod.baseMargin,
    marginBottom: MetricsMod.baseMargin,
    fontSize: appStyles.fontSet.normal,
    color: AppStyles.colorSet.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  datePicker: {
    alignSelf: 'center',
    width: '90%',
    // marginHorizontal: MetricsMod.smallMargin,
    // marginTop: MetricsMod.smallMargin,
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
  textAreaContainer: {
    // borderColor: COLORS.grey20,
    // padding: 5,
    marginBottom: MetricsMod.baseMargin,
  },
  textArea: {
    height: 100,
    justifyContent: 'flex-start',
    backgroundColor: AppStyles.colorSet.lightGray,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.smaller,
    marginHorizontal: MetricsMod.marginFifteen,
    paddingHorizontal: MetricsMod.baseMargin,
    borderRadius: MetricsMod.baseMargin,
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
  listContainer: {
    paddingVertical: MetricsMod.marginFifteen,
    marginBottom: MetricsMod.baseMargin,
  },
});

export default styles;
