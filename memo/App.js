import * as React from 'react';
import { Text, View, Button, ActivityIndicator, TextInput, ScrollView, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './Styles';




class AddMemo extends React.Component {
  //super(props)
  render(){
    return (
      <View  >
        <TextInput placeholder="New Memo" style={styles.text}/>
        <View style={styles.box}>
        <Button title="Add" onPress={() => alert('Nothing happens')} /> 
        </View>
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
 /* AsyncStorage.getItem('@content')
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
  /* AsyncStorage.setItem('id', this.state.id +1)
  */
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