import React, { useContext, useEffect, useState } from 'react';
import DropDownArrow from 'assets/images/arrow_down@2x.png';
import EmojiAdd from 'assets/images/add-24@2x.png';
import EmojiPicker from 'emoji-picker-react';
import axios from 'axios';
import {
  ReactionsList,
  Button,
  Count,
  BorderButton,
  Emoji,
  RelativeWrapper,
  ReactionItem,
  VerticalDivider,
} from 'styles/styled/PostId';
import { RecipientHeaderContext } from 'contexts/RecipientHeaderProvider';
import useResponsive from 'hooks/useResponsive';

async function fetchReactionsByRecipientId(id, limit) {
  try {
    const result = await axios.get(`https://rolling-api.vercel.app/8-5/recipients/${id}/reactions/?limit=${limit}`);
    return result;
  } catch (e) {
    throw new Error(e);
  }
}

async function postReactionsByRecipientId(id, params) {
  try {
    const response = await fetch(`https://rolling-api.vercel.app/8-5/recipients/${id}/reactions/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    const result = await response.json();
    return result;
  } catch (e) {
    throw new Error(e);
  }
}

const EmojiPickerStyles = {
  position: 'absolute',
  top: '48px',
  right: '-50px',
};

function ReactionsMenu({ id }) {
  const device = useResponsive();
  const [reactions, setReactions] = useState([]);
  const { dropdowns, handleDropdownToggle } = useContext(RecipientHeaderContext);
  const { isReactionsOpen, isEmojiPickerOpen } = dropdowns;
  const limit = device === 'pc' ? 8 : 6;

  const handlePostReactions = async e => {
    const params = {
      emoji: e.emoji,
      type: 'increase',
    };
    const data = await postReactionsByRecipientId(id, params);
    setReactions(prevReactions => {
      const index = prevReactions.findIndex(reaction => reaction.id === data.id);
      if (index > 0) {
        return [...prevReactions.slice(0, index), data, ...prevReactions.slice(index + 1)];
      }
      if (index === 0) {
        return [data, ...prevReactions.slice(1)];
      }
      return [...prevReactions, data];
    });
  };

  useEffect(() => {
    const handleLoad = async () => {
      const { data } = await fetchReactionsByRecipientId(id, limit);
      setReactions(() => data.results);
    };
    handleLoad();
  }, [id, limit]);

  return (
    <>
      <RelativeWrapper>
        {reactions?.slice(0, 3).map(top => (
          <ReactionItem key={top.id}>
            <Emoji>{top.emoji}</Emoji>
            <Count>{top.count}</Count>
          </ReactionItem>
        ))}
        <Button type="button" onClick={() => handleDropdownToggle('isReactionsOpen')}>
          <img width={24} height={24} src={DropDownArrow} alt="drop down" />
        </Button>
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
        <BorderButton type="button" onClick={() => handleDropdownToggle('isEmojiPickerOpen')}>
          <img width={24} height={24} src={EmojiAdd} alt="Add reactions" />
          {device !== 'mobile' && '추가'}
        </BorderButton>

        <EmojiPicker
          style={EmojiPickerStyles}
          onEmojiClick={handlePostReactions}
          open={isEmojiPickerOpen}
          width={device !== 'mobile' ? 305 : 280}
          height={390}
        />
      </RelativeWrapper>
      <VerticalDivider $height={28} $marginX={13} />
    </>
  );
}

export default ReactionsMenu;
