import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import MainNavigator from './Navigation/MainNavigator';
function App() {  
  return (
    <Provider store={store}>
    <MainNavigator />
    </Provider>
  );
}

export default App;
