import { Link } from 'react-router-dom';
import PaperList from 'components/PaperList';
import style from 'styles/ListPage.module.css';

function ListPage() {
  return (
    <>
      <section className={style.popularPaper}>
        <h3>인기 롤링 페이퍼 🔥</h3>
        <PaperList />
      </section>

      <section className={style.recentlyCreated}>
        <h3>최근에 만든 롤링 페이퍼 ⭐</h3>
        <PaperList />
      </section>

      <Link to="/post" className={style.postLink}>
        나도 만들어보기
      </Link>
    </>
  );
}

export default ListPage;
