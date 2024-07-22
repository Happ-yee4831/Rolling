import { Link } from 'react-router-dom';
import style from 'styles/ListPage.module.css';
import PaperList from 'components/PaperList';

function ListPage() {
  return (
    <>
      <main>
        <section className={style.popularPaper}>
          <h2>인기 롤링 페이퍼 🔥</h2>
          <PaperList />
        </section>
        <section className={style.recentlyCreated}>
          <h2>최근에 만든 롤링 페이퍼 ⭐</h2>
          <PaperList />
        </section>
      </main>

      <footer>
        <Link to="/post" className={style.postLink}>
          나도 만들어보기
        </Link>
      </footer>
    </>
  );
}

export default ListPage;
