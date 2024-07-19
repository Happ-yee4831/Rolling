import React, { useState } from 'react';
import { BorderButton, DropDownItem, DropDownMenu, RelativeWrapper } from 'styles/styled/Reactions';
import SharedImage from 'assets/images/share-24@2x.png';

function Shared() {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(p => !p);
  };

  return (
    <RelativeWrapper>
      <BorderButton onClick={handleDropDown}>
        <img src={SharedImage} alt="shared" width={24} height={24} />
      </BorderButton>
      {dropDown && (
        <DropDownMenu>
          <DropDownItem>카카오톡 공유</DropDownItem>
          <DropDownItem>URL 공유</DropDownItem>
        </DropDownMenu>
      )}
    </RelativeWrapper>
  );
}

export default Shared;
