import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import './src/config/ReactotronConfig';
import './src/I18n/I18n';

AppRegistry.registerComponent(appName, () => App);
