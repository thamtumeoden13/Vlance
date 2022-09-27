import {NavigationService as navigation} from './rootNavigation';

export const navigateToScreen = (screen, params) => {
  navigation.navigate(screen, params);
};
