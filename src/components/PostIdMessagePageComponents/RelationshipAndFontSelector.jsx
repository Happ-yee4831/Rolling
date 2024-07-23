import { useState, useRef, useEffect } from 'react';
import { StyledSection } from '../../styles/PostIdMessageStyle';
import ArrowDownSign from '../../assets/images/arrowDownSign.svg';
import ArrowUpSign from '../../assets/images/arrowUpSign.svg';

function RelationshipAndFontSelector({ children, optionType, last, setRelationship, setFont }) {
  let options = [];

  if (optionType === 'relationship') {
    options = ['지인', '친구', '동료', '가족'];
  } else if (optionType === 'font') {
    options = ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체'];
  }

  const buttonRef = useRef();
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptions = (e) => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    buttonRef.current.classList.toggle('focus');
  };

  useEffect(() => {
    const handleCloseOptions = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        setIsOpen(false);
        buttonRef.current.classList.remove('focus');
      }
    };

    window.addEventListener('click', handleCloseOptions);
    return () => {
      window.removeEventListener('click', handleCloseOptions);
    };
  }, []);

  const selectOption = (e) => {
    const selectedOption = e.target.textContent;
    setSelected(selectedOption);
    setIsOpen(false);
    buttonRef.current.classList.remove('focus');

    if (optionType === 'relationship') {
      setRelationship(selectedOption);
    } else if (optionType === 'font') {
      setFont(selectedOption);
    }
  };

  return (
    <StyledSection last={last}>
      <label htmlFor={options}>{children}</label>
      <button type="button" onClick={handleOptions} ref={buttonRef}>
        {selected}
        {isOpen ? (
          <img src={ArrowUpSign} alt="위쪽 화살표 이미지" />
        ) : (
          <img src={ArrowDownSign} alt="아래쪽 화살표 이미지" />
        )}
      </button>
      <div className="toggle-options">
        {isOpen && (
          <ul>
            {options.map((option) => (
              <li key={option} onClick={selectOption} tabIndex="0" role="button">
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </StyledSection>
  );
}

export default RelationshipAndFontSelector;
