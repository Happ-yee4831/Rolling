import React, { useState } from 'react';
import { Button, Count, BorderButton, Emoji, RelativeWrapper, TopReaction } from 'styles/styled/Reactions';
import DropDownArrow from 'assets/images/arrow_down@2x.png';
import EmojiAdd from 'assets/images/add-24@2x.png';
import EmojiPicker from 'emoji-picker-react';

const EmojiPickerStyles = {
  position: 'absolute',
  top: '48px',
  right: 0,
};

function Reactions({ reactions }) {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDownEmojiMenu = () => {
    setDropDown(p => !p);
  };

  return (
    <RelativeWrapper>
      {reactions?.map(reaction => (
        <TopReaction key={reaction.id}>
          <Emoji>{reaction.emoji}</Emoji>
          <Count>{reaction.count}</Count>
        </TopReaction>
      ))}
      <Button type="button">
        <img width={24} height={24} src={DropDownArrow} alt="drop down" />
      </Button>
      <BorderButton type="button" onClick={handleDropDownEmojiMenu}>
        <img width={24} height={24} src={EmojiAdd} alt="Add reactions" />
        추가
      </BorderButton>
      <EmojiPicker style={EmojiPickerStyles} onEmojiClick={e => console.log(e)} open={dropDown} />
    </RelativeWrapper>
  );
}

export default Reactions;
