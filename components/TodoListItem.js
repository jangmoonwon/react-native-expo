import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TodoListItem = () => {
    return (
      <View style={styles.listItemContainer}>
        <TouchableOpacity>
          <View style={styles.circleBtn} />
        </TouchableOpacity>
        <Text style={styles.todoText}>첫 번째 할 일</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    listItemContainer: {
      flex: 1,
      borderBottomColor: '#bbb',
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    todoText: {
      flex: 5,
      fontWeight: '500',
      fontSize: 18,
      marginVertical: 20,
      width: 100,
    },
    circleBtn: {
      width: 30,
      height: 30,
      borderRadius: 15,
      borderColor: '#ff7272',
      borderWidth: 2,
      marginRight: 20,
      marginLeft: 20,
    },
  });
  
  export default TodoListItem;