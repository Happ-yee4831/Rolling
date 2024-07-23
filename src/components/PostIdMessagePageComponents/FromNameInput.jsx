import { useRef } from 'react';
import { StyledSection } from '../../styles/PostIdMessageStyle';

const FromNameInput = ({ children, sender, setSender }) => {
  const inputRef = useRef();
  const pRef = useRef();

  const handleOnChange = e => {
    setSender(e.currentTarget.value);
  };

  const handleBlur = e => {
    if (!e.target.value) {
      inputRef.current.classList.add('error');
      pRef.current.classList.add('error');
    } else {
      inputRef.current.classList.remove('error');
      pRef.current.classList.remove('error');
    }
  };

  return (
    <StyledSection>
      <label htmlFor="sender">{children}</label>
      <div>
        <input
          type="text"
          id="sender"
          name="sender"
          placeholder="이름을 입력해 주세요."
          ref={inputRef}
          value={sender}
          onChange={handleOnChange}
          onBlur={handleBlur}
        />
        <p className="message" ref={pRef}>
          값을 입력해 주세요
        </p>
      </div>
    </StyledSection>
  );
};

export default FromNameInput;
