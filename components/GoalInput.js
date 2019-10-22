import React,{Component,useState} from 'react';
import {StyleSheet,View,Text,Modal,TextInput,Button} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("");

  //calling function
  const GoalInputHandler = enteredGoal => {
    setEnteredGoal(enteredGoal);
  };

  const AddGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          //do not add parenthesis if you want the event to occur on press
          onChangeText={GoalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={AddGoalHandler}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      input: {
        width: "80%",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10
      },
      buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%"
      },
      button: {
        width: "40%"
      }
});

export default GoalInput;