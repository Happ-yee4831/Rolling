/* eslint-disable */
import { ListInterval, BackgroundImgList } from '../../styles/PostStyle';
import Vmark from '../../assets/images/VmarkInCircle.svg';

const showBackgroundImg = ({ backgroundImgs, selectImg, setSelectImg }) => {
  const handleImgChange = (img) => {
    setSelectImg(img);
  };

  return (
    <ListInterval>
      {backgroundImgs.map((img, index) => (
        <BackgroundImgList
          key={index}
          src={img}
          onClick={() => handleImgChange(img)}
        >
          {selectImg === img && <img src={Vmark} alt="체크마크" />}
        </BackgroundImgList>
      ))}
    </ListInterval>
  );
}

export default showBackgroundImg;