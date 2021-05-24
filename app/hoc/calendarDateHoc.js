import React from 'react';
import { useGlobalHook } from '@devhammed/use-global-hook';

export function calendarDateHoc(Component) {
  const InjectedData = function (props) {
    // Calendar Date Global Context store
    const { calendarDate, _setCalendarDate } = useGlobalHook(
      'calendarDateStore',
    );
    return (
      <Component
        {...props}
        calendarDate={calendarDate}
        _setCalendarDate={_setCalendarDate}
      />
    );
  };
  return InjectedData;
}
