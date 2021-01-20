import React, { useEffect, useCallback, useState } from 'react';

import styled, { darkTheme, ThemeProvider, applyColor } from './theme';
import { TaskModel, TaskStatus } from '@app/common/models';

const defaultTask: TaskModel = { description: '', id: '', status: TaskStatus.OPEN, title: '' };

interface WebAppProperties {
  message: string;
  defaultCounter?: number;
}

const Quote = styled.h1`
  background-color: ${applyColor((colors) => colors.background)};
  color: ${applyColor((colors) => colors.primary)};
  font: 400 36px/1.4 Times, serif, Apple Color Emoji;
  font-style: italic;
  font-weight: normal;
  text-align: left;
  text-align: center;
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
`;

const Error = styled.pre`
  background-color: '#e02460';
  color: white;
`;

const fetchTasks = () =>
  fetch('/api/tasks').then((response): Promise<TaskModel[]> => response.json());

const WebApp = ({ message, defaultCounter = 0 }: WebAppProperties): JSX.Element => {
  const [counter, setCounter] = useState(defaultCounter);
  const [task, setTask] = useState(defaultTask);
  const [error, setError] = useState('');
  const [tasks, setTasks] = useState([] as TaskModel[]);
  const refreshTasks = useCallback(async () => {
    try {
      const fetchedTasks = await fetchTasks();

      setTasks(fetchedTasks);
    } catch (error_) {
      setError(error_);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    refreshTasks();
  }, [refreshTasks]);

  return (
    <ThemeProvider theme={darkTheme}>
      <p>{message}</p>
      <a href="/about" title="Hello">
        Go to the about page.
      </a>
      {error ? <Error>{error}</Error> : undefined}
      <Quote>{counter}</Quote>
      <Quote>{task.title}</Quote>
      <Quote>{task.description}</Quote>
      <Quote>{task.status}</Quote>
      <button
        type="button"
        onClick={() => {
          const newCounter = (counter ?? 0) + 1;

          setCounter(newCounter);
          task.description = `react is awesome, ${task.description}`;
          task.title = `Take react course, ${task.title}`;
          task.status =
            task.status === TaskStatus.IN_PROGRESS ? TaskStatus.DONE : TaskStatus.IN_PROGRESS;
          setTask(task);
        }}
      >
        Inc ++
      </button>
      <button type="button" onClick={refreshTasks}>
        Refresh
      </button>
      <ul>
        {tasks.map((tsk) => {
          return <li key={tsk.id}>{tsk.title}</li>;
        })}
      </ul>
    </ThemeProvider>
  );
};

WebApp.defaultProps = {
  defaultCounter: 0,
};

export default WebApp;
