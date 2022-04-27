import { StyleSheet } from "react-native";


//A stylesheet
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
      backgroundColor: 'lightblue',
    },
    box:{
        backgroundColor: 'lightpink',
        fontWeight: 'bold',
        fontSize: 30,
        padding: 10,
    }
  });

export default styles;
