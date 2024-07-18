import React, { useEffect, useState } from 'react';
import { Button, Count, BorderButton, Emoji, RelativeWrapper, TopReaction } from 'styles/styled/Reactions';
import DropDownArrow from 'assets/images/arrow_down@2x.png';
import EmojiAdd from 'assets/images/add-24@2x.png';
import EmojiPicker from 'emoji-picker-react';
import axios from 'axios';

async function fetchReactionsByRecipientId(id) {
  try {
    const { data } = await axios.get(`https://rolling-api.vercel.app/8-5/recipients/${id}/reactions/?limit=8`);
    return data;
  } catch (e) {
    throw new Error(e);
  }
}

const EmojiPickerStyles = {
  position: 'absolute',
  top: '48px',
  right: 0,
};

function ReactionsMenu({ topReactions, id }) {
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  const handleToggleEmojiPicker = () => {
    setEmojiPickerOpen(p => !p);
  };

  useEffect(() => {
    const handleLoad = async () => {
      const data = await fetchReactionsByRecipientId(id);
      return data;
    };
    handleLoad();
  }, [id]);

  return (
    <RelativeWrapper>
      {topReactions?.map(top => (
        <TopReaction key={top.id}>
          <Emoji>{top.emoji}</Emoji>
          <Count>{top.count}</Count>
        </TopReaction>
      ))}
      <Button type="button">
        <img width={24} height={24} src={DropDownArrow} alt="drop down" />
      </Button>
      <BorderButton type="button" onClick={handleToggleEmojiPicker}>
        <img width={24} height={24} src={EmojiAdd} alt="Add reactions" />
        추가
      </BorderButton>
      <EmojiPicker style={EmojiPickerStyles} onEmojiClick={e => console.log(e)} open={emojiPickerOpen} />
    </RelativeWrapper>
  );
}

export default ReactionsMenu;
