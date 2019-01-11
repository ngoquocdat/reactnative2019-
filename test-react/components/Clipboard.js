import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Clipboard,TouchableOpacity } from 'react-native';

export default class ClipboardScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Hello this it your address',
      clipboardContent: null,
    };
  }

  readFromClipboard = async () => {   
    const clipboardContent = await Clipboard.getString();   
    this.setState({ clipboardContent }); 
  };

  writeToClipboard = async () => {
    await Clipboard.setString(this.state.text);
    alert('Copied to Clipboard!');
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder="Type here..."/>
        <Button
          onPress={this.writeToClipboard}
          title="Copy to Clipboard"/>
        <TouchableOpacity onPress={this.writeToClipboard}>
          <Text style={{
            backgroundColor:'#1c5c7b',
            color:'white',
            padding: 10,
          }}>{this.state.text}</Text>
        </TouchableOpacity>
        <Text style={styles.boldText}>Clipboard Contents: </Text>
        <Text>{this.state.clipboardContent}</Text>
        <Button
          onPress={this.readFromClipboard}
          title="Paste from Clipboard"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:50,
  },
  boldText: {
    fontWeight: '600',
    marginTop:60,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom:20,
  },
});