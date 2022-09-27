import {Platform, StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';
import appStyles from '../../themes/AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: MetricsMod.baseMargin,
    paddingVertical: MetricsMod.marginFifteen,
    marginTop: MetricsMod.baseMargin,
    backgroundColor: AppStyles.colorSet.white,
  },
  headerTitleStyle: {
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.medium,
  },
  headerTitleStyleII: {
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.small,
  },
  rightImageStyle: {
    width: MetricsMod.doubleBaseMargin,
    height: MetricsMod.doubleBaseMargin,
    marginLeft: MetricsMod.smallMargin,
  },
  detailContainer: {
    marginVertical: MetricsMod.baseMargin,
    marginHorizontal: MetricsMod.baseMargin,
    paddingHorizontal: MetricsMod.smallMargin,
    paddingVertical: MetricsMod.marginFifteen,
    backgroundColor: AppStyles.colorSet.white,
    borderRadius: MetricsMod.marginFifteen,
  },
  textFieldStyle: {
    marginLeft: MetricsMod.marginFifteen,
    marginBottom: MetricsMod.smallMargin,
    fontSize: appStyles.fontSet.medium,
    color: AppStyles.colorSet.black,
  },
  textFieldStyleII: {
    marginLeft: MetricsMod.marginFifteen,
    marginBottom: MetricsMod.smallMargin,
    fontSize: appStyles.fontSet.mediumI,
    color: AppStyles.colorSet.black,
    fontWeight: '500',
  },
  titleStyle: {
    marginLeft: MetricsMod.baseMargin,
    marginVertical: MetricsMod.baseMargin,
    fontSize: appStyles.fontSet.medium,
    color: AppStyles.colorSet.black,
    fontWeight: '500',
  },
  linkStyle: {
    marginLeft: MetricsMod.baseMargin,
    marginVertical: MetricsMod.baseMargin,
    fontSize: appStyles.fontSet.normal,
    color: AppStyles.colorSet.blue,
    fontWeight: '500',
  },
  inputStyle: {
    paddingVertical: Platform.OS === 'ios' ? 15 : 13,
    backgroundColor: AppStyles.colorSet.lightGray,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.smaller,
    marginHorizontal: MetricsMod.marginFifteen,
  },
  inputStyleTable: {
    marginTop: 10,
    paddingVertical: Platform.OS === 'ios' ? 5 : 5,
    backgroundColor: AppStyles.colorSet.lightGray,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.xsmallII,
    // marginHorizontal: MetricsMod.marginFifteen,
  },
  wrapperStyleTable: {
    width: '90%',
    backgroundColor: AppStyles.colorSet.white,
  },
  wrapperStyle: {
    width: '90%',
    marginBottom: MetricsMod.section,
    backgroundColor: AppStyles.colorSet.white,
  },
  datePicker: {
    alignSelf: 'center',
    width: '90%',
    // marginHorizontal: MetricsMod.smallMargin,
    // marginTop: MetricsMod.smallMargin,
  },
  bookNowContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: MetricsMod.smallMargin,
    borderRadius: MetricsMod.baseMargin,
    backgroundColor: AppStyles.colorSet.white,
    paddingVertical: MetricsMod.baseMargin,
    borderWidth: 1,
    borderColor: AppStyles.colorSet.black,
  },
  branchTitleStyle: {
    fontSize: appStyles.fontSet.small,
    color: AppStyles.colorSet.black,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  containerII: {
    flex: 1,
    marginHorizontal: MetricsMod.baseMargin,
    // padding: 16,
    backgroundColor: '#fff',
    borderRadius: MetricsMod.doubleBaseMargin,
    borderWidth: 0,
    marginBottom: 20,
  },
  head: {
    borderTopRightRadius: MetricsMod.baseMargin,
    borderTopLeftRadius: MetricsMod.baseMargin,
    backgroundColor: '#d4d6d9',
    // fontSize: AppStyles.fontSet.large,
    paddingLeft: MetricsMod.doubleBaseMargin,
  },
  title: {
    paddingVertical: MetricsMod.baseMargin,
    fontSize: 15,
    color: AppStyles.colorSet.black,
    fontWeight: '500',
  },
  text: {
    height: 40,
    fontSize: 14,
    paddingLeft: MetricsMod.doubleBaseMargin,
    paddingTop: MetricsMod.smallMargin,
    color: AppStyles.colorSet.black,
  },
  textStyle: {
    flex: 1,
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    borderWidth: 0,
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
});

export default styles;
