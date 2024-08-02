import type { OnChangeCallback, SelectedType } from './components/Tabs/types';

export type TabContextType = {
  /**
   * Selected tab index.
   */
  selected?: SelectedType;
  /**
   *  On change callback.
   */
  onChange?: OnChangeCallback;
};
