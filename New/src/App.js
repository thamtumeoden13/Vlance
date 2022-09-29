import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from '@/store';
import ApplicationNavigator from '@/navigators/Application';
import './translations';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
