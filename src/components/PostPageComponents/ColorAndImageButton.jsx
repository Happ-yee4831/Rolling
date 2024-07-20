


const ColorAndImageButton = ({ setIsColor, isColor }) => {
  const changeType = (type) => {
    setIsColor(type);
  };

  return (
    <UpperLowerInterval>
      {isColor === true ? (
        <SelectedButton type="button">컬러</SelectedButton>
      ) : (
        <UnselectedButton type="button" onClick={() => changeType(true)}>
          컬러
        </UnselectedButton>
      )}
      {isColor === false ? (
        <SelectedButton type="button">이미지</SelectedButton>
      ) : (
        <UnselectedButton type="button" onClick={() => changeType(false)}>
          이미지
        </UnselectedButton>
      )}
    </UpperLowerInterval>
  );
}

export default ColorAndImageButton;