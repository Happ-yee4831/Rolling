import { useEffect, useState } from 'react';
import style from 'styles/PaperList.module.css';
import getRecipients from 'api/paperListApi';
import PaperCard from './PaperCard';
import ChangeListButton from './ChangeListButton';

const RECIPIENTS_KEY = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const getPaperNum = () => {
  const width = window.innerWidth;
  const PC_SIZE = 1248;

  return width < PC_SIZE ? 8 : 4;
};

function PaperList() {
  const [list, setList] = useState(RECIPIENTS_KEY);
  const [paperNum, setPaperNum] = useState(getPaperNum());

  const fetchSortedData = async (param) => {
    const recipients = await getRecipients(param);
    setList(recipients);
  };

  useEffect(() => {
    const handlePaperRecount = () => {
      setPaperNum(getPaperNum());
    };

    window.addEventListener('resize', handlePaperRecount);
    fetchSortedData(`?limit=${paperNum}`);

    return () => {
      window.removeEventListener('resize', handlePaperRecount);
    };
  }, [paperNum]);

  const handleListChange = (changeList) => {
    fetchSortedData(changeList);
  };

  return (
    <div className={style.buttonPosition}>
      <div className={style.paperList}>
        {list.results.map((paper) => (
          <PaperCard paper={paper} key={paper.id} />
        ))}
      </div>

      <ChangeListButton prevList={list.previous} nextList={list.next} onChange={handleListChange} />
    </div>
  );
}

export default PaperList;
