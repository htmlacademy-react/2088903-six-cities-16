import {ReactElement} from 'react';
import FavoritesList from '../../components/favorites/favorites-list/favorites-list.tsx';
import Layout from '../../components/layout/layout.tsx';


function FavoritesPage(): ReactElement {
  return (
    <Layout
      title='Favorites'
      pageClass='page__main--favorites'
      mainClass='page__main--favorites'
      showFooter
    >
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList/>
        </section>
      </div>
    </Layout>
  );
}

export default FavoritesPage;
