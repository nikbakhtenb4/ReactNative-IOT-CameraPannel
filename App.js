import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider} from 'react-redux'

import { store, persistor } from './src/redux/store/index';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {AppState,View,Text} from 'react-native';
import RouterComponent from './src/router/RooterComponent';

// import {persistor } from 'redux-persist';

EStyleSheet.build({
  $fontColor: 'green',
  $bgColor: '#e6e6e6',
  $rem: 16,
});
   
export default class App extends React.Component{
// componentDidMount(){
//   const store = configureStore();
//   signalRRegistration(store);
// }
  // state = {
  //   appState: AppState.currentState,
  // };
  //

  // constructor(props) {
  //   super(props);

  // }
  render() {
    console.disableYellowBox = true;
    
    // global.changeProjNo=false;
    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
            
            <View style={{flex:1}}>
              <RouterComponent/>
              {/* <Text>ffff</Text> */}
            </View>
          </PersistGate>

        </Provider>
    );
  }
}

