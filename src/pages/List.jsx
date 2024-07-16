import PaperCard from 'components/PaperCard';
import style from 'styles/ListPage.module.css';
import items from 'api/dummy/mock.json';

function ListPage() {
  return (
    <>
      <section className={style.popularPaper}>
        <h2>인기 롤링 페이퍼 🔥</h2>
        <div className={style.paperList}>
          {items.map(item => (
            <PaperCard item={item} key={item.id} />
          ))}
        </div>
      </section>

      <section className={style.recentlyCreated}>
        <h2>최근에 만든 롤링 페이퍼 ⭐</h2>
        <div className={style.paperList}>
          {items.map(item => (
            <PaperCard item={item} key={item.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default ListPage;
