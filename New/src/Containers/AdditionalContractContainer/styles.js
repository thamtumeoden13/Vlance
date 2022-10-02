import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  tabBarContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    // color: AppStyles.colorSet.black,
    fontWeight: '500',
  },
  tabBarIndicator: {
    borderColor: 'rgba(39,28,22,0.82)',
    borderWidth: 1,
    // backgroundColor: AppStyles.colorSet.transparent,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
});

export default styles;
