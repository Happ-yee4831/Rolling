/* eslint-disable */
import { useState, useRef, useEffect } from 'react';
import { StyledSection } from '../../styles/PostIdMessageStyle';
import ArrowDownSign from '../../assets/images/arrowDownSign.svg';
import ArrowUpSign from '../../assets/images/arrowUpSign.svg';

const RelationshipAndFontSelector = ({
  children,
  optionType,
  last,
  setRelationship,
  setFont,
}) => {
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
    setIsOpen(!isOpen);
    e.target.classList.toggle('focus');
  };

  useEffect(() => {
    const handleCloseOptions = (e) => {
      if (!buttonRef.current) {
        return;
      }
      if (isOpen && !buttonRef.current.contains(e.target)) setIsOpen(false);
    };

    window.addEventListener('click', handleCloseOptions);
    return () => {
      window.removeEventListener('click', handleCloseOptions);
    };
  }, [isOpen]);

  const selectOption = (e) => {
    setSelected(e.target.textContent);
  };

  if (optionType === 'relationship') {
    setRelationship(selected);
  } else if (optionType === 'font') {
    setFont(selected);
  }

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
            {options.map((option) => {
              return (
                <li onClick={selectOption} onKeyDown={selectOption}>
                  {option}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </StyledSection>
  );
}

export default RelationshipAndFontSelector;
