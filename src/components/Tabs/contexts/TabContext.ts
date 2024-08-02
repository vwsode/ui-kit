import { createContext, useContext } from 'react';

import { TabContextType } from '../type';

export const TabContext = createContext<TabContextType>({
  selected: undefined,
  onChange: undefined,
});

export const TabContextProvider = TabContext.Provider;

export const useTabContext = (): TabContextType => {
  return useContext(TabContext);
};
