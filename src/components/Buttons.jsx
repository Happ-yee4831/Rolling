import { BorderButton } from 'styles/styled/PostId';
import TrashCan from '../assets/svgs/trash-can.svg';

function TrashBtn({ onClick, styles }) {
  return (
    <BorderButton onClick={onClick} style={styles}>
      <img src={TrashCan} alt="" />
    </BorderButton>
  );
}

export { TrashBtn };
