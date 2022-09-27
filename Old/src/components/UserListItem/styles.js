import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';
import appStyles from '../../themes/AppStyles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: MetricsMod.baseMargin,
    marginTop: 2,
    // paddingVertical: MetricsMod.eighteen
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sessionStyle: {
    fontSize: AppStyles.fontSet.medium,
    color: AppStyles.colorSet.black,
  },
  divider: {
    marginVertical: 4,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '88%',
    height: 0.8,
    backgroundColor: AppStyles.colorSet.lightBlackI,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: MetricsMod.forty,
    height: MetricsMod.forty,
    borderColor: AppStyles.colorSet.white,
    backgroundColor: AppStyles.colorSet.white,
    borderWidth: 1,
    borderRadius: MetricsMod.fifty / 2,
    marginLeft: MetricsMod.smallMargin,
  },
  userInfoMainView: {
    flex: 1,
    borderRadius: MetricsMod.marginFifteen,
    backgroundColor: AppStyles.colorSet.transparent,
    flexDirection: 'row',
    padding: MetricsMod.smallMargin,
    alignItems: 'center',
    // opacity:0.3
  },
  nameStyle: {
    fontSize: appStyles.fontSet.smaller,
    color: AppStyles.colorSet.black,
    textAlign: 'left',
  },
  time: {
    fontSize: appStyles.fontSet.xxsmallI,
    color: AppStyles.colorSet.black,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  desc: {
    marginTop: 2,
    fontSize: appStyles.fontSet.xxsmallI,
    color: AppStyles.colorSet.lightBlackI,
    textAlign: 'left',
    width: '85%',
    // marginLeft: -4
  },
  count: {
    marginTop: 2,
    backgroundColor: AppStyles.colorSet.primaryButtonColor,
    width: MetricsMod.doubleBaseMargin,
    borderRadius: MetricsMod.doubleBaseMargin / 2,
    fontSize: appStyles.fontSet.xxsmallI,
    color: AppStyles.colorSet.black,
    textAlign: 'center',
    padding: 4,
  },
});

export default styles;
