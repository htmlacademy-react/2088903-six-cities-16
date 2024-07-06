import {ReactElement} from 'react';
import Header from '../../components/header/header.tsx';
import Footer from '../../components/footer/footer.tsx';
import FavoritesList from '../../components/favorites/favorites-list/favorites-list.tsx';


function FavoritesPage(): ReactElement {
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList/>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesPage;
