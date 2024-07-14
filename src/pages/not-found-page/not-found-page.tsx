import {Link} from 'react-router-dom';
import Layout from '../../components/layout/layout.tsx';

function NotFoundPage() {
  return (
    <Layout
      title='Not found'
      pageClass='page--gray'
    >
      <div style={{textAlign: 'center', marginTop: '200px'}}>
        <h1>404 Страница не найдена!</h1>
        <Link to="/" className='form__submit button'>Go to main page</Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
