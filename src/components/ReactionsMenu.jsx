import React, { useContext, useEffect, useState } from 'react';
import DropDownArrow from 'assets/images/arrow_down@2x.png';
import EmojiAdd from 'assets/images/add-24@2x.png';
import EmojiPicker from 'emoji-picker-react';
import axios from 'axios';
import { ReactionsList, Button, Count, BorderButton, Emoji, RelativeWrapper, ReactionItem } from 'styles/styled/PostId';
import { RecipientHeaderContext } from 'contexts/RecipientHeaderProvider';

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
  const [reactions, setReactions] = useState([]);
  const { dropdowns, handleDropdownToggle } = useContext(RecipientHeaderContext);
  const { isReactionsOpen, isEmojiPickerOpen } = dropdowns;

  useEffect(() => {
    const handleLoad = async () => {
      const data = await fetchReactionsByRecipientId(id);
      setReactions(() => data.results);
    };
    handleLoad();
  }, [id]);

  return (
    <RelativeWrapper>
      {topReactions?.map(top => (
        <ReactionItem key={top.id}>
          <Emoji>{top.emoji}</Emoji>
          <Count>{top.count}</Count>
        </ReactionItem>
      ))}
      <Button type="button" onClick={() => handleDropdownToggle('isReactionsOpen')}>
        <img width={24} height={24} src={DropDownArrow} alt="drop down" />
      </Button>
      <BorderButton type="button" onClick={() => handleDropdownToggle('isEmojiPickerOpen')}>
        <img width={24} height={24} src={EmojiAdd} alt="Add reactions" />
        추가
      </BorderButton>
      {isReactionsOpen && (
        <ReactionsList>
          {reactions.map(reaction => (
            <ReactionItem key={reaction.id}>
              <Emoji>{reaction.emoji}</Emoji>
              <Count>{reaction.count}</Count>
            </ReactionItem>
          ))}
        </ReactionsList>
      )}
      <EmojiPicker style={EmojiPickerStyles} onEmojiClick={e => console.log(e)} open={isEmojiPickerOpen} />
    </RelativeWrapper>
  );
}

export default ReactionsMenu;
