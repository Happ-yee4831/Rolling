import { Link } from 'react-router-dom';
import style from 'styles/PaperCard.module.css';
import styled from 'styled-components';
import purple from 'assets/images/card-pattern-purple.png';
import beige from 'assets/images/card-pattern-beige.png';
import blue from 'assets/images/card-pattern-blue.png';
import green from 'assets/images/card-pattern-green.png';

const PATTERN = {
  purple: { purple },
  beige: { beige },
  blue: { blue },
  green: { green },
};

const Paper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 208px;
  height: 232px;
  padding: 30px 22px 20px 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  @media (min-width: 768px) {
    width: 275px;
    height: 260px;
    padding-right: 24px;
  }

  background-position: center;
  background-repeat: no-repeat;

  ${({ $paper }) =>
    $paper.backgroundImageURL
      ? `
      background-image:
      linear-gradient(rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0.54)),
      url(${$paper.backgroundImageURL});
      background-size: 100% 100%;
      color: var(--white);

      p {
        color: var(--gray200);
      }`
      : `
      background-color: var(--${$paper.backgroundColor}200);
      background-image: url(${Object.values(PATTERN[$paper.backgroundColor])});
      background-size: 50% 50%;
      background-position : right bottom;
      color: var(--gray900);

      p {
        color: var(--gray700);
      }`};
`;

function PaperCard({ paper }) {
  return (
    <Link to={`/post/${paper.id}`}>
      <Paper $paper={paper}>
        <section className={style.Author}>
          <h3>To. {paper.name}</h3>

          <section className={style.recentMessages}>
            {!!paper.messageCount &&
              paper.recentMessages.map((writer, index) => (
                <img
                  key={writer.id}
                  src={writer.profileImageURL}
                  alt="프로필 아이콘"
                  width={28}
                  height={28}
                  style={{
                    borderRadius: '50px',
                    border: '1.5px solid #ffffff',
                    position: 'absolute',
                    left: `${index * 16}px`,
                  }}
                />
              ))}
            {paper.messageCount > 3 ? <small>+{paper.messageCount - 3}</small> : ''}
          </section>

          <p>
            {paper.messageCount}
            <span>명이 작성했어요!</span>
          </p>
        </section>

        <section className={style.topReactions}>
          {!!paper.reactionCount &&
            paper.topReactions.map(Reaction => (
              <div key={Reaction.id} className={style.emoji}>
                <div>{Reaction.emoji}</div>
                <p>{Reaction.count}</p>
              </div>
            ))}
        </section>
      </Paper>
    </Link>
  );
}

export default PaperCard;
