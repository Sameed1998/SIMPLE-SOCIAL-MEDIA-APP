import React, { useEffect } from 'react'
import { persistor,store } from './src/redux/store/Store'
import { Provider } from 'react-redux'
import Navigation from './src/navigation/Navigation'
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Navigation/>
      </PersistGate>
    </Provider>
  )
}

export default App
