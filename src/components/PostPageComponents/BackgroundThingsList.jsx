/* eslint-disable */
import { ListInterval, BackgroundColorList } from '../../styles/PostStyle';
import BackgroundImgList from './BackgroundImgList';
import Vmark from '../../assets/images/VmarkInCircle.svg';

const BackgroundColors = [
  { id: 1, option: 'beige' },
  { id: 2, option: 'purple' },
  { id: 3, option: 'blue' },
  { id: 4, option: 'green' },
];

const BackgroundThingsList = ({
  isColor,
  backgroundImgs,
  selectColor,
  setSelectColor,
  selectImg,
  setSelectImg,
}) => {
  const handleColorChange = (option) => {
    setSelectColor(option);
  };

  return (
    <div>
      {isColor ? (
        <ListInterval>
          {BackgroundColors.map((item) => (
            <BackgroundColorList
              key={item.id}
              className={item.option}
              onClick={() => handleColorChange(item.option)}
            >
              {selectColor === item.option && (
                <img src={Vmark} alt="체크표시" />
              )}
            </BackgroundColorList>
          ))}
        </ListInterval>
      ) : (
        <BackgroundImgList
          backgroundImgs={backgroundImgs}
          selectImg={selectImg}
          setSelectImg={setSelectImg}
        />
      )}
    </div>
  );
}

export default BackgroundThingsList;
