import React, { useState } from 'react';
import { StatusBar, Dimensions } from "react-native";
import styled, { ThemeProvider } from 'styled-components/native'; 
import {theme} from "../theme";
import Input from "../components/Input";
import Task from "../components/Task";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from 'expo-app-loading';

/*const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #d4e6ff;
`; */
/*
const StyledText = styled.Text`
  
  font-size: 38px;
  font-weight: 800;
  color: #778bdd;
  align-self: flex-start;
  margin: 10px 25px;
`;
*/
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 38px;
  font-weight: 800;
  color:${({ theme }) => theme.main};
  align-self: flex-start;
  margin: 10px 25px;
`;

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;



/*
export const Todo = () => {
    return (
      <Container>
        <StyledText>Todo</StyledText>
      </Container>
    );
  }; */

export default function Todo(){
  const width = Dimensions.get("window").width;

  const[isReady, setIsReady] = useState(false);
  const[newTask, setNewTask] = useState("");
  const[tasks, setTasks] = useState({});

  const _saveTasks =async(tasks) => {
    try {
      await AsyncStorage.setItem("tasks", JASON.stringify(tasks));
      setTasks(tasks);
    } catch (e){
      console.error(e);
    }
  };

  const _loadTasks = async()=>{
    const loadedTasks=await AsyncStorage.getItem("tasks");
    setTasks(JSON.parse(loadedTasks || "{}"));
  };

  const _addTask =()=>{
    const ID=Date.now().toString();
    const newTaskObject={
      [ID]:{id:ID, text:newTask, completed:false},
    }
    /*alert(`Add: ${newTask}`); */
    setNewTask('');
    setTasks({...tasks, ...newTaskObject});
  };

  const _deleteTask = id => {
    const currentTasks =Object.assign({}, tasks);
    delete currentTasks[id];
    setTasks(currentTasks);
  };

  const _toggleTask = id=>{
    const currentTasks =Object.assign({}, tasks);
    currentTasks[id]['completed'] = !currentTasks[id]['completed'];
    setTasks(currentTasks);
  };

  const _updateTask = item =>{
    const currentTasks =Object.assign({}, tasks);
    currentTasks[item.id]=item;
    setTasks(currentTasks);
  }

  const _handleTextChange =(text)=>{
    setNewTask(text);
  };

  const _onBlur=()=>{
    setNewTask("");
  };

  return isReady ? (
    
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
        barStyle="light-content"
        backgroundColor="#ffffff"/>

        <Title>TODO List</Title>
        <Input
          placeholder="+"
          value={newTask}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
          onBlur={_onBlur}/>

        <List width={width}>
          {Object.values(tasks)
            .reverse()
            .map((item)=>(
              <Task
                key={item.id}
                item={item}
                deleteTask={_deleteTask}
                toggleTask={_toggleTask}
                updateTask={_updateTask}
              />  
            ))}
        </List>  
      </Container>
    </ThemeProvider>
  ) : (
    <AppLoading
      startAsync={_loadTasks}
      onFinish={()=>setIsReady(true)}
      onError={console.error}/>
  );
}