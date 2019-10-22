import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, FlatList, SafeAreaView,Button} from 'react-native';

import GoalItems from '../components/GoalItems';
import GoalInput from '../components/GoalInput';

//flatlist screen data display and UI

const FlatListScreen = props => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const AddGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...courseGoals, {id: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  };

  const RemoveGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const CancelGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="ADD New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={AddGoalHandler}
        onCancel={CancelGoalHandler}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItems
            id={itemData.item.id}
            onDelete={RemoveGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

export default FlatListScreen;
