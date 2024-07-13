import LoginForm from '../../components/login-form/login-form.tsx';
import LocationItem from '../../components/common/location-item/location-item.tsx';
import Layout from '../../components/layout/layout.tsx';
import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const/const.ts';

function LoginPage() {
  const currentCity = 'Amsterdam';

  const handleClick = () => <Navigate to={AppRoute.Root}/>;

  return (
    <Layout
      title='Login'
      pageClass='page--gray page--login'
      mainClass='page__main--login'
    >
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <LoginForm/>
        </section>
        <section className="locations locations--login locations--current">
          <LocationItem city={currentCity} handleClick={handleClick}/>
        </section>
      </div>
    </Layout>
  );
}

export default LoginPage;
