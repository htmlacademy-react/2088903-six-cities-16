import {Link, useRouteError} from 'react-router-dom';
import Layout from '../../components/layout/layout.tsx';

function ErrorPage() {
  const error = useRouteError();
  const DEFAULT_MESSAGE = 'Something went wrong';

  const message = (error instanceof Error) ? error.message : DEFAULT_MESSAGE;

  return (
    <Layout
      title='Error'
      pageClass='page--gray'
    >
      <div style={{textAlign: 'center', marginTop: '200px'}}>
        <h1>{message}</h1>
        <Link to="/" className='form__submit button'>Go to main page</Link>
      </div>
    </Layout>
  );
}

export default ErrorPage;
