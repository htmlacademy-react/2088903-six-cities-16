import LoginForm from '../../components/login-form/login-form.tsx';
import LocationItem from '../../components/common/location-item/location-item.tsx';
import Layout from '../../components/layout/layout.tsx';
import {getRandomCity} from '../../utils/utils.ts';

function LoginPage() {
  return (
    <Layout
      title='Login'
      pageClass='page--gray page--login'
      mainClass='page__main--login'
      showUser={false}
    >
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <LoginForm/>
        </section>
        <section className="locations locations--login locations--current">
          <LocationItem city={getRandomCity()}/>
        </section>
      </div>
    </Layout>
  );
}

export default LoginPage;
