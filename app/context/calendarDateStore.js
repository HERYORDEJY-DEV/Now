import { createGlobalHook } from '@devhammed/use-global-hook';
import moment from 'moment';
import { useState } from 'react';

export const calendarDateStore = createGlobalHook('calendarDateStore', () => {
  const [calendarDate, setCalendarDate] = useState(moment());

  const _setCalendarDate = (date) => setCalendarDate(date);

  return {
    calendarDate,
    _setCalendarDate,
  };
});
