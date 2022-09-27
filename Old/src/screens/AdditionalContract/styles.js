import {StyleSheet} from 'react-native';
import {AppStyles, MetricsMod} from '../../themes';
import appStyles from '../../themes/AppStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    // flex: 1,
  },
  headerTitleStyle: {
    color: AppStyles.colorSet.black,
    fontSize: AppStyles.fontSet.tiny,
  },
  scene: {
    flex: 1,
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
  textContainer: {
    borderWidth: 1,
  },

  titleStyle: {
    fontSize: AppStyles.fontSet.medium,
    color: AppStyles.colorSet.white,
  },
});

export default styles;
