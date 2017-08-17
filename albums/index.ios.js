import React from 'react'
import { Text, AppRegistry } from 'react-native';

//Create a component

//
// var App = function App() {
//   return React.createElement(
//     Text,
//     null,
//     "Some text"
//   );
// };


const App = () => (
    <Text>Some text</Text>
  );

// render it to the device
AppRegistry.registerComponent('albums', () => App);
