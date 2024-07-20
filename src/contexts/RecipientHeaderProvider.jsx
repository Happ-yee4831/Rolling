import React, { createContext, useCallback, useMemo, useState } from 'react';

const initialDefault = {
  isReactionsOpen: false,
  isEmojiPickerOpen: false,
  isSharedOpen: false,
};

export const RecipientHeaderContext = createContext();

function RecipientHeaderProvider({ children }) {
  const [dropdowns, setDropdowns] = useState(initialDefault);

  const handleDropdownToggle = useCallback(
    clickedKey => {
      let nextManageDropdowns = {};
      const isKeyTrue = dropdowns[clickedKey];
      if (isKeyTrue) nextManageDropdowns = initialDefault;
      else {
        Object.entries(dropdowns).forEach(([key]) => {
          nextManageDropdowns[key] = clickedKey === key;
        });
      }
      setDropdowns(nextManageDropdowns);
    },
    [dropdowns],
  );

  const providerValue = useMemo(
    () => ({
      dropdowns,
      handleDropdownToggle,
    }),
    [dropdowns, handleDropdownToggle],
  );

  return <RecipientHeaderContext.Provider value={providerValue}>{children}</RecipientHeaderContext.Provider>;
}

export default RecipientHeaderProvider;
