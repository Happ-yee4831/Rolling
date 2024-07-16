import React, { useState } from 'react';
import { Count, Emoji, ReactionsWrapper, TopReaction } from 'styles/styled/Reactions';
import DropDownArrow from 'assets/images/arrow_down@2x.png';
import EmojiPicker from 'emoji-picker-react';

function Reactions({ reactions }) {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDownEmojiMenu = () => {
    setDropDown(p => !p);
  };

  return (
    <ReactionsWrapper>
      {reactions?.map(reaction => (
        <TopReaction key={reaction.id}>
          <Emoji>{reaction.emoji}</Emoji>
          <Count>{reaction.count}</Count>
        </TopReaction>
      ))}
      <button type="button" onClick={handleDropDownEmojiMenu}>
        <img width={24} height={24} src={DropDownArrow} alt="drop down" />
      </button>
      <EmojiPicker onEmojiClick={e => console.log(e)} open={dropDown} />
    </ReactionsWrapper>
  );
}

export default Reactions;
