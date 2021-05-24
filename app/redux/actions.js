import {
  LOGIN,
  SIGN_UP,
  SIGN_OUT,
  ADD_TASK,
  REMOVE_TASK,
  STARTED_TASK,
  COMPLETED_TASK,
  EDIT_TASK,
} from './constants';
import AsyncStorage from '@react-native-community/async-storage';
import compareValues, { compareTimes } from '../utils/compare-values';

export const SIGN_UP_ACTION = (user_data) => {
  return {
    type: SIGN_UP,
    user_data: {
      // id: user_data.id,
      fullname: user_data.fullname,
      email: user_data.email,
      password: user_data.password,
      confirm_password: user_data.confirm_password,
      phone_number: user_data.phone_number,
      portfolio_link: user_data.portfolio_link,
      resume_link: user_data.resume_link,
      area_of_specialization: user_data.area_of_specialization,
      isSignedIn: user_data.isSignedIn,
    },
  };
};

export const LOGIN_ACTION = (user_data) => {
  return {
    type: LOGIN,
    user_data: {
      fullname: user_data.fullname,
      email: user_data.email,
      password: user_data.password,
      confirm_password: user_data.confirm_password,
      phone_number: user_data.phone_number,
      portfolio_link: user_data.portfolio_link,
      resume_link: user_data.resume_link,
      area_of_specialization: user_data.area_of_specialization,
      isSignedIn: user_data.isSignedIn,
    },
  };
};

export const SIGN_OUT_ACTION = (user_data) => {
  return {
    type: SIGN_OUT,
    user_data: {
      fullname: user_data.fullname,
      email: user_data.email,
      password: user_data.password,
      confirm_password: user_data.confirm_password,
      phone_number: user_data.phone_number,
      portfolio_link: user_data.portfolio_link,
      resume_link: user_data.resume_link,
      area_of_specialization: user_data.area_of_specialization,
      isSignedIn: user_data.isSignedIn,
    },
  };
};

export async function setAsync(key, data) {
  const json_data = JSON.stringify(data);
  try {
    await AsyncStorage.setItem(key, json_data);
  } catch (e) {
    console.log('data read error:::', e);
  }
}

export async function getAsync(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      console.log('read data error');
    }
  } catch (e) {
    console.log('data read error');
  }
}

export async function removeAsync(key) {
  try {
    await AsyncStorage.removeItem(key);
    await console.log('data removed');
  } catch (e) {
    console.log(e);
  }
}

export function setStorage(key, data) {
  setAsync(key, data);
}

export function readStorage(key) {
  let json_data;
  return getAsync(key).then((result) => {
    json_data = JSON.parse(result);
    // return json_data;
    console.log('\n \n \n the result is \n \n \n ', json_data, ' \n \n \n');
  });
}

export const AddTask = (task) => {
  return {
    type: ADD_TASK,
    // task: {
    //   id: task.id,
    //   title: task.title,
    //   description: task.description,
    //   date: task.date,
    //   start: task.start,
    //   stop: task.stop,
    //   category: task.category,
    // },
    task: task.sort(compareTimes('start', 'ascending')),
  };
};

export const RemoveTask = (task, taskId) => {
  let newTask = task.filter((t) => t.id !== taskId);
  return {
    type: REMOVE_TASK,
    task: newTask.sort(compareTimes('start', 'ascending')),
  };
};

export const StartedTask = (tasks, taskId, data = {}) => {
  let allTask = tasks;
  let extraInfo = data;
  let newTasks = allTask.map((item) => (item.id !== taskId ? item : { ...item, ...extraInfo }));
  return {
    type: STARTED_TASK,
    task: newTasks.sort(compareTimes('start', 'ascending')),
  };
};

export const CompletedTask = (tasks, taskId, data = {}) => {
  let allTask = tasks;
  let extraInfo = data;
  let newTasks = allTask.map((item) => (item.id !== taskId ? item : { ...item, ...extraInfo }));
  return {
    type: COMPLETED_TASK,
    task: newTasks.sort(compareTimes('start', 'ascending')),
  };
};

export const EditedTask = (tasks, taskId, data = {}) => {
  let allTask = tasks;
  let extraInfo = data;
  let newTasks = allTask.map((item) => (item.id !== taskId ? item : { ...item, ...extraInfo }));
  return {
    type: EDIT_TASK,
    task: newTasks.sort(compareTimes('start', 'ascending')),
  };
};
