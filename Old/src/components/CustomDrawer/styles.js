import {StyleSheet} from 'react-native';
import {AppStyles, Metrics, MetricsMod} from '../../themes';
import appStyles from '../../themes/AppStyles';

const styles = StyleSheet.create({
  drawerItemContainer: {
    flex: 1,
    backgroundColor: AppStyles.colorSet.lightGray,
  },
  itemContainer: {
    marginTop: MetricsMod.marginFifteen,
    marginLeft: MetricsMod.marginFifteen,
    marginRight: MetricsMod.marginFifteen,
    backgroundColor: AppStyles.colorSet.whiteII,
  },
  itemContainerII: {
    backgroundColor: AppStyles.colorSet.whiteII,
    paddingBottom: MetricsMod.smallMargin,
  },
  logoutContainer: {
    marginBottom: MetricsMod.thirty,
    marginLeft: MetricsMod.doubleBaseMargin,
  },
  userDetails: {
    backgroundColor: AppStyles.colorSet.blue,
    height: MetricsMod.hundredForty,
  },
  imageContainer: {
    marginTop: MetricsMod.thirtyFive,
    marginLeft: MetricsMod.baseMargin,
  },

  userImage: {
    width: MetricsMod.eighty,
    height: MetricsMod.eighty,
    borderRadius: MetricsMod.hundred / 2,
    borderColor: AppStyles.colorSet.white,
    borderWidth: MetricsMod.smallMargin,
    marginTop: MetricsMod.marginFifteen,
    backgroundColor: 'white',
  },
  userTitle: {
    marginVertical: MetricsMod.smallMargin,
    fontSize: appStyles.fontSet.xmiddle,
    color: AppStyles.colorSet.white,
    marginHorizontal: MetricsMod.thirtyTwo,
  },
  userSubTitle: {
    fontSize: MetricsMod.baseMarginIII,
    color: AppStyles.colorSet.white,
  },
  divider: {
    borderTopColor: 'red',
    borderTopWidth: 5,
  },
  lightContainer: {
    backgroundColor: AppStyles.colorSet.primary,
  },
  darkContainer: {
    backgroundColor: AppStyles.colorSet.blackN,
  },
  lightThemeText: {
    color: AppStyles.colorSet.white,
  },
  darkThemeText: {
    color: AppStyles.colorSet.silver,
  },
  customContainerStyle: {
    // paddingVertical: MetricsMod.baseMargin,
    backgroundColor: AppStyles.colorSet.white,
  },
  editContainer: {
    marginLeft: MetricsMod.seven,
    backgroundColor: AppStyles.colorSet.primary,
    marginVertical: MetricsMod.baseMarginIII,
  },
  drawerTextStyle: {
    paddingTop: MetricsMod.baseMargin,
    fontWeight: '500',
    marginLeft: MetricsMod.smallMargin,
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.normal,
    // flex: 1,
  },
  drawerTextStyleWithoutIcon: {
    fontWeight: 'bold',
    marginLeft: 0,
    fontSize: AppStyles.fontSet.tiny,
    color: AppStyles.colorSet.blackX,
  },
  logoutTextStyle: {
    fontWeight: '500',
    marginLeft: MetricsMod.seventeen,
    color: AppStyles.colorSet.redII,
    fontSize: AppStyles.fontSet.normal,
  },
  editTextStyle: {
    marginLeft: MetricsMod.marginFifteen,
    color: AppStyles.colorSet.white,
    fontSize: AppStyles.fontSet.smaller,
  },
  imageStyle: {
    marginTop: MetricsMod.baseMarginIII,
    tintColor: AppStyles.colorSet.white,
    width: MetricsMod.eighteen,
    height: MetricsMod.eighteen,
    marginRight: MetricsMod.smallMargin,
  },
  editImageStyle: {
    marginTop: MetricsMod.smallMargin,
    tintColor: AppStyles.colorSet.white,
    width: MetricsMod.baseMargin,
    height: MetricsMod.baseMargin,
    // marginRight: MetricsMod.smallMargin
  },
  logoutRightStyle: {
    marginTop: MetricsMod.smallMargin,
    tintColor: AppStyles.colorSet.greyColor,
    width: MetricsMod.eighteen,
    height: MetricsMod.eighteen,
    // marginRight: MetricsMod.smallMargin
  },
  editSection: {
    marginLeft: MetricsMod.doubleBaseMargin,
    marginRight: MetricsMod.forty,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: MetricsMod.smallMargin,
  },
  leftImageStyle: {
    width: MetricsMod.section,
    height: MetricsMod.section,
    tintColor: AppStyles.colorSet.black,
    // marginRight: MetricsMod.marginFifteen
  },
  logoutImageStyle: {
    width: MetricsMod.section,
    height: MetricsMod.section,
    tintColor: AppStyles.colorSet.redII,
    // marginRight: MetricsMod.marginFifteen
  },
});

export default styles;
