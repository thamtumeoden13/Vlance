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
    fontSize: appStyles.fontSet.normal,
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
  wrapperStyle: {
    width: '90%',
    marginBottom: MetricsMod.section,
    backgroundColor: AppStyles.colorSet.white,
  },
  datePicker: {
    alignSelf: 'center',
    width: '90%',
    // marginHorizontal: MetricsMod.smallMargin,
    marginBottom: MetricsMod.smallMargin,
  },
});

export default styles;
