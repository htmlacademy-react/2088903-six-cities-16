import FavoritesList from '../../components/favorites/favorites-list/favorites-list.tsx';
import Layout from '../../components/layout/layout.tsx';
import cn from 'classnames';
import useFavorites from '../../hooks/use-favorites.tsx';
import FavoritesEmpty from '../../components/favorites/favorites-empty/favorites-empty.tsx';


function FavoritesPage() {
  const favorites = useFavorites();

  const pageClasses = cn({
    'page--favorites-empty': favorites.length === 0
  });
  const mainClasses = cn('page__main--favorites', {
    'page__main--favorites-empty': favorites.length === 0
  });

  return (
    <Layout
      title='Favorites'
      pageClass={pageClasses}
      mainClass={mainClasses}
      showFooter
    >
      <div className="page__favorites-container container">
        {favorites.length > 0 ?
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList favorites={favorites}/>
          </section>
          : <FavoritesEmpty/>}
      </div>
    </Layout>
  );
}

export default FavoritesPage;
