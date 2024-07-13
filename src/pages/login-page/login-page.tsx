import {ReactElement} from 'react';
import Header from '../../components/header/header.tsx';
import LoginForm from '../../components/login-form/login-form.tsx';
import LocationItem from '../../components/common/location-item/location-item.tsx';

function LoginPage(): ReactElement {
  const currentCity = 'Amsterdam';

  return (
    <div className="page page--gray page--login">
      <Header/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm/>
          </section>
          <section className="locations locations--login locations--current">
            <LocationItem city={currentCity}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
