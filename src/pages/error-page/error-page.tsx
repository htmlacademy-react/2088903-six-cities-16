import {Link, Navigate, useRouteError} from 'react-router-dom';
import Layout from '../../components/layout/layout.tsx';
import {AppRoute} from '../../const/const.ts';

type TRouteError = {
  status: number;
  message?: string;
}

function ErrorPage() {
  const DEFAULT_MESSAGE = 'Something went wrong';
  const unknownError = useRouteError();
  const error = unknownError as TRouteError | Error | null;

  if (error && 'status' in error && error.status === 404) {
    return <Navigate to={AppRoute.NotFound} replace/>;
  }

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
