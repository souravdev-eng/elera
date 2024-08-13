import {View, SafeAreaView} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
};

export default App;
