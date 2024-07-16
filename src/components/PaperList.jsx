import style from 'styles/PaperList.module.css';
import profileIcon from 'assets/images/test_김강우.png';
import emoji1 from 'assets/images/temporary_emoji_1.png';
import emoji2 from 'assets/images/temporary_emoji_2.png';
import emoji3 from 'assets/images/temporary_emoji_3.png';
import { ReactComponent as LeftIcon } from 'assets/svgs/ic_left_arrow.svg';
import { ReactComponent as RightIcon } from 'assets/svgs/ic_right_arrow.svg';

function PaperList({ items }) {
  return (
    <ol className={style.paperList}>
      {items.map(item => (
        <li key={item.id} className={style.rollingPaper}>
          <div className={style.writer}>
            To. Sowon
            <br />
            {item.name}
            <img src={profileIcon} alt="프로필 아이콘" width={81} height={28} />
            <p>
              30<span>명이 작성했어요!</span>
            </p>
          </div>

          <ol>
            <li>
              <img src={emoji1} alt="이모지 아이콘" />
            </li>
            <li>
              <img src={emoji2} alt="이모지 아이콘" />
            </li>
            <li>
              <img src={emoji3} alt="이모지 아이콘" />
            </li>
          </ol>
        </li>
      ))}
      <LeftIcon className={style.leftArrow} />
      <RightIcon className={style.rightArrow} />
    </ol>
  );
}

export default PaperList;
