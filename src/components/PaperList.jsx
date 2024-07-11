import style from 'styles/PaperList.module.css';

function PaperList() {
  return (
    <div className={style.paperList}>
      <div className={style.rollingPaper} />
      <div className={style.rollingPaper} />
      <div className={style.rollingPaper} />
      <div className={style.rollingPaper} />
    </div>
  );
}

export default PaperList;
