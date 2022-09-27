import {AppStyles, MetricsMod} from '../themes';
import styles from '../screens/Home/styles';

export const DEFAULT_SCREEN_OPTIONS = {
  headerStyle: {
    backgroundColor: AppStyles.colorSet.white,
    shadowOpacity: 0,
    elevation: 0,
    height: MetricsMod.navBarHeight,
  },
  headerTintColor: AppStyles.colorSet.black,
  headerBackTitleVisible: false,
  headerTopInsetEnabled: true,
  headerTitleStyle: {
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.medium,
    textTransform: 'uppercase',
  },
  headerTitleAlign: 'center',
  headerTitleAllowFontScaling: true,
  headerMode: 'float',
};

export const TAB_BAR_STYLE = {
  height: 60,
  position: 'absolute',
  bottom: 20,
  right: 20,
  left: 20,
  elevation: 0,
  backgroundColor: AppStyles.colorSet.primary,
  borderRadius: 15,
  ...styles.shadow,
};
