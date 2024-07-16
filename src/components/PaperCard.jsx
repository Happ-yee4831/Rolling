import style from 'styles/PaperCard.module.css';
import profileIcon from 'assets/images/test_김강우.png';
import emoji1 from 'assets/images/temporary_emoji_1.png';
import emoji2 from 'assets/images/temporary_emoji_2.png';
import emoji3 from 'assets/images/temporary_emoji_3.png';

function PaperCard({ item }) {
  return (
    <div className={style.rollingPaper}>
      <div className={style.writer}>
        To. Sowon
        <br />
        {item.name}
        <img src={profileIcon} alt="프로필 아이콘" width={81} height={28} />
        <p>
          30<span>명이 작성했어요!</span>
        </p>
      </div>

      <div className={style.emoji}>
        <img src={emoji1} alt="이모지 아이콘" />
        <img src={emoji2} alt="이모지 아이콘" />
        <img src={emoji3} alt="이모지 아이콘" />
      </div>
    </div>
  );
}

export default PaperCard;
