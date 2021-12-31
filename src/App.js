// import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {NavigationContainer} from '@react-navigation/native';
// // import {Home, NewsDetail} from './pages';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       {/* <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{headerShown: false}}>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="News Detail" component={NewsDetail} />
//       </Stack.Navigator> */}
//     </NavigationContainer>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import {View, ScrollView,Text} from 'react-native'; 
import BasicJavascript from './pages/BasicJavascript';
//  todo tidak scroll
const app = () => {  
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent/>    
        <StylingComponent/>   */}
        {/* {isShow && <FlexBox/>} */}
        {/* <Position/>      */}
        {/* <FlexBox /> */}
        {/*  <PropsDinamis />*/} 
        {/* <StateDinamis/> */}
        {/* <TestSendiri />  */}
        {/* <Position /> */} 
        {/* <Communication/> */}  

        <BasicJavascript/> 
      </ScrollView>
    </View>
  );
};
export default app;
