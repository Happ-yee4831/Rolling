import { BorderButton } from 'styles/styled/Reactions';
import TrashCan from '../assets/svgs/trash-can.svg';

function TrashBtn({ onClick, styles }) {
  return (
    <BorderButton onClick={onClick} style={styles}>
      <img src={TrashCan} alt="" />
    </BorderButton>
  );
}

function _() {}

export { TrashBtn, _ };
