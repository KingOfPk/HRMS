import React, {useEffect} from 'react';
import {Alert, Button, Linking, Text, View} from 'react-native';

import AppNavigator from './src/route/AppNavigator';
import {Provider as StoreProvider, useDispatch, useSelector} from 'react-redux';
import {ToastProvider} from 'react-native-toast-notifications';

import {store} from './src/store';
import {Fonts} from './src/helper/theme';

// import configureStore from './src/store/config';

export default App = () => {
  // const {store, persistor} = configureStore();

  useEffect(() => {
    // checkAppVersion();
  }, []);

  return (
    <StoreProvider store={store}>
      <View style={{flex: 1}}>
        <ToastProvider
          placement="top"
          offset={50}
          duration={3000}
          renderType={{
            custom_success_toast: toast => (
              <View
                style={{
                  width: '90%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 50,
                  borderColor: '#219958',
                  borderWidth: 1,
                  borderRadius: 10,
                  backgroundColor: '#fff',
                }}>
                {/* <AntDesign name="check" size={20} color={'#219958'} /> */}
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: Fonts.regular,
                    color: '#219958',
                  }}>
                  {toast.message}
                </Text>
              </View>
            ),
            custom_error_toast: toast => (
              <View
                style={{
                  width: '90%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 50,
                  borderColor: '#e71a1a',
                  borderWidth: 1,
                  borderRadius: 10,
                  backgroundColor: '#fff',
                }}>
                {/* <AntDesign name="check" size={20} color={'#219958'} /> */}
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: Fonts.regular,
                    color: '#e71a1a',
                  }}>
                  {toast.message}
                </Text>
              </View>
            ),
          }}>
          <AppNavigator />
        </ToastProvider>
      </View>
    </StoreProvider>
  );
};
