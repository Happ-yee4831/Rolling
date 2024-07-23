import React, { useContext, useEffect, useState } from 'react';
import DropDownArrow from 'assets/images/arrow_down@2x.png';
import EmojiAdd from 'assets/images/add-24@2x.png';
import EmojiPicker from 'emoji-picker-react';
import * as S from 'styles/styled/PostId';
import { RecipientHeaderContext } from 'contexts/RecipientHeaderProvider';
import useResponsive from 'hooks/useResponsive';
import { getReactionsByRecipientId, postReactionsByRecipientId } from 'api';

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

  const handlePostReactions = async ({ emoji }) => {
    const params = {
      emoji,
      type: 'increase',
    };
    const { data } = await postReactionsByRecipientId(id, params);
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
      const { data } = await getReactionsByRecipientId(id, limit);
      setReactions(() => data.results);
    };
    handleLoad();
  }, [id, limit]);

  return (
    <>
      <S.RelativeWrapper>
        {reactions?.slice(0, 3).map(top => (
          <S.ReactionItem key={top.id}>
            <S.Emoji>{top.emoji}</S.Emoji>
            <S.Count>{top.count}</S.Count>
          </S.ReactionItem>
        ))}
        <S.Button type="button" onClick={() => handleDropdownToggle('isReactionsOpen')}>
          <img width={24} height={24} src={DropDownArrow} alt="drop down" />
        </S.Button>
        {isReactionsOpen && (
          <S.ReactionsList>
            {reactions.map(reaction => (
              <S.ReactionItem key={reaction.id}>
                <S.Emoji>{reaction.emoji}</S.Emoji>
                <S.Count>{reaction.count}</S.Count>
              </S.ReactionItem>
            ))}
          </S.ReactionsList>
        )}
        <S.BorderButton type="button" onClick={() => handleDropdownToggle('isEmojiPickerOpen')}>
          <img width={24} height={24} src={EmojiAdd} alt="Add reactions" />
          {device !== 'mobile' && '추가'}
        </S.BorderButton>
        <EmojiPicker
          style={EmojiPickerStyles}
          onEmojiClick={handlePostReactions}
          open={isEmojiPickerOpen}
          width={device !== 'mobile' ? 305 : 280}
          height={390}
        />
      </S.RelativeWrapper>
      <S.VerticalDivider $height={28} $marginX={13} />
    </>
  );
}

export default ReactionsMenu;
