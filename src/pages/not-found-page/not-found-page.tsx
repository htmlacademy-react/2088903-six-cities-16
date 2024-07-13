import {ReactElement} from 'react';
import {Link} from 'react-router-dom';
import Layout from '../../components/layout/layout.tsx';


function NotFoundPage(): ReactElement {
  return (
    <Layout
      title='Not found'
    >
      <div style={{textAlign: 'center', marginTop: '200px'}}>
        <p>404 Страница не найдена!</p>
        <Link to="/">Go to main page</Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
