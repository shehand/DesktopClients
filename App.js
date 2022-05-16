
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class App extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://netflix.com/' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export default App;