import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../../../../themes';
import appStyles from '../../../../../themes/AppStyles';

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
    marginRight: MetricsMod.baseMarginIII,
  },
  rightImageStyle: {
    width: MetricsMod.doubleBaseMargin,
    height: MetricsMod.doubleBaseMargin,
    marginLeft: MetricsMod.smallMargin,
  },
  imagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: MetricsMod.baseMargin,
    paddingHorizontal: MetricsMod.baseMargin,
  },
  backgroundIcon: {
    alignSelf: 'center',
    padding: MetricsMod.baseMargin,
    backgroundColor: AppStyles.colorSet.red,
    borderRadius: MetricsMod.forty,
  },
  imageView: {
    flexDirection: 'row',
    marginHorizontal: MetricsMod.doubleBaseMargin,
    height: MetricsMod.hundredFifty,
    marginTop: MetricsMod.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: MetricsMod.baseMargin,
  },
  userImage: {
    borderWidth: 1,
    marginHorizontal: MetricsMod.doubleBaseMargin,
    width: MetricsMod.hundredThirty,
    height: MetricsMod.hundredSeventy,
    borderColor: AppStyles.colorSet.dividerColor,
  },
  emptyImageView: {
    marginTop: MetricsMod.baseMargin,
    marginHorizontal: MetricsMod.doubleBaseMargin,
    borderWidth: 1,
  },
  emptyImage: {
    borderWidth: 1,
    marginHorizontal: MetricsMod.doubleBaseMargin,
    width: MetricsMod.hundredFive,
    height: MetricsMod.hundredTwenty,
  },
  bookNowContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: MetricsMod.fifty,
    borderRadius: MetricsMod.doubleBaseMargin,
    backgroundColor: AppStyles.colorSet.blue,
    paddingVertical: MetricsMod.eight,
    marginVertical: MetricsMod.baseMargin,
  },
  branchTitleStyle: {
    fontSize: appStyles.fontSet.medium,
    color: AppStyles.colorSet.white,
  },
  crossContainer: {
    position: 'absolute',
    top: 0,
    right: 22,
    backgroundColor: AppStyles.colorSet.white,
    borderBottomLeftRadius: MetricsMod.doubleBaseMargin,
    padding: 5,
  },
});

export default styles;
