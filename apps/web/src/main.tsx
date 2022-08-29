import React, { useEffect, useCallback, useState } from 'react';

import { DefaultTheme } from 'styled-components';

import styled, { darkTheme, lightTheme, ThemeProvider, applyColor } from './theme';
import { TaskModel, TaskStatus } from '@app/common/models';

const defaultTask: TaskModel = { description: '', id: '', status: TaskStatus.OPEN, title: '' };

interface WebAppProperties {
  message: string;
  defaultCounter?: number;
}

const Quote = styled.h1`
  background-color: ${applyColor((colors) => colors.background)};
  color: ${applyColor((colors) => colors.primary)};
  font-style: italic;
  font-weight: 500;
  text-align: center;
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
`;

const Description = styled.b`
  color: pink;
`;

const Error = styled.pre`
  background-color: #e02460;
  color: white;
`;

const fetchTasks = () =>
  fetch('/api/tasks').then((response): Promise<TaskModel[]> => response.json());

enum TypesTheme {
  LIGHT = 'light',
  DARK = 'DARK',
}

type ThemesAvailable = Record<TypesTheme.LIGHT | TypesTheme.DARK, DefaultTheme>;

const Themes: ThemesAvailable = {
  [TypesTheme.LIGHT]: lightTheme,
  [TypesTheme.DARK]: darkTheme,
};

const WebApp = ({ message, defaultCounter = 0 }: WebAppProperties): JSX.Element => {
  const [counter, setCounter] = useState(defaultCounter);
  const [task, setTask] = useState(defaultTask);
  const [errorMessage, setErrorMessage] = useState('');
  const [theme, setTheme] = useState(TypesTheme.DARK);
  const [tasks, setTasks] = useState([] as TaskModel[]);

  const refreshTasks = useCallback(async () => {
    try {
      const fetchedTasks = await fetchTasks();

      setTasks(fetchedTasks);
    } catch (error) {
      setErrorMessage(error);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    refreshTasks();
  }, [refreshTasks]);

  const handleClickIncButtom = () => {
    const newCounter = (counter ?? 0) + 1;

    setCounter(newCounter);

    task.description = `react is awesome, ${newCounter}`;
    task.title = `Take react course, ${newCounter}`;
    task.status = task.status === TaskStatus.IN_PROGRESS ? TaskStatus.DONE : TaskStatus.IN_PROGRESS;

    setTask(task);
  };

  const handleClickRefreshButton = () => refreshTasks();

  return (
    <ThemeProvider theme={Themes[theme]}>
      <p>{message}</p>
      <a href="/about" title="Hello">
        Go to the about page.
      </a>
      {errorMessage ? <Error>{errorMessage}</Error> : undefined}
      <Quote>{counter}</Quote>
      <Quote>{task.title}</Quote>
      <Quote>{task.description}</Quote>
      <Quote>{task.status}</Quote>
      <button type="button" onClick={handleClickIncButtom}>
        Inc ++
      </button>
      <button type="button" onClick={handleClickRefreshButton}>
        Refresh
      </button>
      <div>
        <button type="button" onClick={() => setTheme(TypesTheme.LIGHT)}>
          Use Light Theme
        </button>
        <button type="button" onClick={() => setTheme(TypesTheme.DARK)}>
          Use Dark Theme
        </button>
      </div>
      <ul>
        {tasks.map((tsk) => {
          return (
            <li key={tsk.id}>
              {tsk.title}(<Description>{tsk.description}</Description>)
            </li>
          );
        })}
      </ul>
    </ThemeProvider>
  );
};

WebApp.defaultProps = {
  defaultCounter: 0,
};

export default WebApp;
