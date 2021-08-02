import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { TASK } from './components/task-list/Task';

import Header from './components/header/Header';
import TaskList from './components/task-list/TaskList';
import ButtonAddTask from './components/button-add-task/ButtonAddTask';
import MenuTask from './components/menu-task/MenuTask';
import TextPrompt from './components/text-prompt/TextPrompt';
import { style } from './style';


export default function App() {

  const [task, setTask] = useState([]);
  const [isMenuTaskVisible, setIsMenuTaskVisible] = useState(false);
  const [isAddPromptVisible, setIsAddPromptVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const [idGenerator, setIdGenerator] = useState(0);

  const toggleMenuTaskVisibility = (task) => {
    setIsMenuTaskVisible(!isMenuTaskVisible);
    setCurrentTask(task);
  };

  const deleteCurrentTask = () => {
    setTask(task.filter(deleteTask => deleteTask.id !== currentTask.id));
    setCurrentTask({});
    setIsMenuTaskVisible(false);
  };

  const toggleTaskStatus = () => {
    let updateTask = [...task];
    let index = task.findIndex(obj => obj.id === currentTask.id);

    updateTask[index].status = currentTask.status === TASK.doneStatus ? TASK.toDoStatus : TASK.doneStatus;
    setTask(updateTask);
    setCurrentTask({});
    setIsMenuTaskVisible(false);
  };

  const hideAddPrompt = () => {
    setIsAddPromptVisible(false);
  };

  const onAddTask = (value) => {
    const newTask = {
      id: idGenerator,
      content: value,
      status: TASK.toDoStatus
    };
    setTask([...task, newTask]);
    setIsAddPromptVisible(false);
    setIdGenerator(idGenerator +1);
  };

  const displayAddPrompt = () => {
    setIsAddPromptVisible(true);
  };

  const renderTaskList = () => {
    if(task.length > 0){
      return(
        <TaskList 
          onPressCallBack={toggleMenuTaskVisibility}
          taskList={task}
        />
      );
    }
    return(
      <View style={style.noTask}>
        <Text>Cliquez sur le bouton pour ajouter une tâche</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Header content="Mes tâches" />
      <ScrollView>
        {renderTaskList()}
      </ScrollView>
      <MenuTask 
        isVisible={isMenuTaskVisible} 
        onDisapearCallBack={toggleMenuTaskVisibility}
        onDeleteCallBack={deleteCurrentTask}
        onChangeStatusCallBack={toggleTaskStatus}
      />
      <TextPrompt
        isVisible={isAddPromptVisible}
        onCancelCallBack={hideAddPrompt}
        onSubmitCallBack={onAddTask}
      />
      <ButtonAddTask onPressCallBack={displayAddPrompt} />
    </View>
  );
}
