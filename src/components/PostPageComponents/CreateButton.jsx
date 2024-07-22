import { CreateButtonStyle } from '../../styles/PostStyle';

const CreateButton = ({ disabled }) => {
  return (
    <CreateButtonStyle type="submit" disabled={disabled}>
      생성하기
    </CreateButtonStyle>
  );
};

export default CreateButton;
