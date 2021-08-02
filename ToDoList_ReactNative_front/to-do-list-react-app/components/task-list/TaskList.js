import React from 'react';
import { View } from 'react-native';
import { ListItem, Badge } from 'react-native-elements';
import { TASK } from './Task';
import { APP_COLORS } from '../../styles/Colors';
import { style } from './Style';

const TaskList = ({taskList, onPressCallBack, onLongPressCallBack }) => {
    return(
        <View>
            {
                taskList.map((task) => (
                    <ListItem 
                        key={task.id} bottomDivider 
                        containerStyle={style.list} 
                        onPress={() => onPressCallBack(task)}
                        onLongPress={() => onLongPressCallBack(task)}
                    >
                        <ListItem.Content>
                            <ListItem.Title>{task.content}</ListItem.Title>
                        </ListItem.Content>
                        <Badge
                            value={task.status}
                            badgeStyle={{
                                backgroundColor: task.status === TASK.toDoStatus 
                                ? APP_COLORS.accent
                                : APP_COLORS.validatedTask
                            }}
                        />
                    </ListItem>
                ))
            }
        </View>
    )

};

export default TaskList;