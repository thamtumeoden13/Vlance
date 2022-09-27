import {StyleSheet} from 'react-native';
import { AppStyles, MetricsMod } from "../../themes";
import appStyles from "../../themes/AppStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  bookNowContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: MetricsMod.marginFifteen,
    borderRadius: MetricsMod.doubleBaseMargin,
    backgroundColor: AppStyles.colorSet.dark,
    paddingVertical: MetricsMod.marginFifteen,
  },
  branchTitleStyle: {
    fontSize: appStyles.fontSet.small,
    color: AppStyles.colorSet.white,
  },
});

export default styles;
