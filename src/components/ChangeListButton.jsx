import style from 'styles/ChangeListButton.module.css';
import { ReactComponent as LeftArrow } from 'assets/svgs/ic_left_arrow.svg';
import { ReactComponent as RightArrow } from 'assets/svgs/ic_right_arrow.svg';

function ChangeListButton({ prevList, nextList, onChange }) {
  return (
    <>
      {prevList && (
        <button className={style.leftIcon} type="button" aria-label="prevList" onClick={() => onChange(prevList)}>
          <LeftArrow />
        </button>
      )}

      {nextList && (
        <button className={style.rightIcon} type="button" aria-label="nextList" onClick={() => onChange(nextList)}>
          <RightArrow />
        </button>
      )}
    </>
  );
}

export default ChangeListButton;
