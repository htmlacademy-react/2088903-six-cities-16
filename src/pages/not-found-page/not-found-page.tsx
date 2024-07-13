import {ReactElement} from 'react';
import Header from '../../components/header/header.tsx';
import {Link} from 'react-router-dom';


function NotFoundPage(): ReactElement {
  return (
    <div className="page">
      <Header/>
      <main className="page__main">
        <p>404 Страница не найдена! </p>

        <Link to="/">Go to main page</Link>
      </main>
    </div>
  );
}

export default NotFoundPage;
