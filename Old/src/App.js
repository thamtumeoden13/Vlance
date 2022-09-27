import React from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

// local imports
import './config/ReactotronConfig';
import {persistor, store} from './redux/Store';
import RootNavigator from './navigation/RootNavigator';
import {PersistGate} from 'redux-persist/integration/react';

LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
