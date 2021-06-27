import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    console.log(newTaskTitle);
    if (!newTaskTitle) return null;
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    //TODO - add new task if it's not empty
    setTasks(state => [...state, data]);
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists

    setTasks(state =>
      state.map(task => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      }),
    );
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(state => state.filter(t => t.id !== id));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
