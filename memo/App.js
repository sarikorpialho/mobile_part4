import * as React from 'react';
import { Text, View, Button, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from "react-native";


class AddMemo extends React.Component {
  //super(props)
  render(){
    return (
      <View>
        <TextInput placeholder="New Memo" />
        <Button title="Add" onPress={() => alert('Nothing happens')} />  
      </View>
    );

  }
}



class MemoList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      error: false,
      memos: [
        {
          id:1,
          content: "käy kaupassa",
        },
        {
          id:2,
          content: "käy apteekissa"
        }
      ]
    }
}

 componentDidMount() {
//async lataus tähän
/*
  AsyncStorage.getItem('memos')
  .then(value =>{
      this.setState({
        memos: value,
        loading: false})
  })
  .catch(error => {this.setState({loading: false, error: true})

  */
this.setState({loading: false})

 }

 componentDidUpdate() {
//uuden memon tallennus tähän
//sekä async ja array

 }

  render() {
    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator animating={true} />
        </View>
      )
    }

    if (this.state.error) {
      return (
        <View>
          <Text>Failed to load Memos!</Text>
        </View>
      )
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          {this.state.memos.map(memo =>
            <Memo
              key={memo.id}
              content={memo.content}
              navigation={this.props.navigation}
            />)}
        </View>  
        <View style={styles.button}>
          <Button title="Add Memo" onPress={() => this.props.navigation.navigate('AddMemo')}/>
        </View>
      </ScrollView>
    );
  }
}

const Memo = (props) => {
  return (
    <Button
      title={props.content}
      onPress={() => props.navigation.navigate('Memos', { id: props.id, content: props.content })}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightgrey',
    alignItems: 'flex-start'
  },
  button:{
    flex: 1,
    padding: 20,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
    marginBottom: 6,
    minWidth: "48%"
  },
  button2:{
    flex: 1,
    padding: 20,
  }
});

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Memo">
        <Stack.Screen name="Memo" component={MemoList} />
        <Stack.Screen name="AddMemo" component={AddMemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;