import {ReactNode} from 'react';
import {Helmet} from 'react-helmet-async';
import Header from '../header/header.tsx';
import cn from 'classnames';
import Footer from '../footer/footer.tsx';

type LayoutProps = {
  title: string;
  children: ReactNode;
  pageClass?: string;
  mainClass?: string;
  showUser?: boolean;
  showFooter?: boolean;
}

function Layout({title, children, pageClass = '', mainClass = '', showUser = true, showFooter = false}: LayoutProps) {
  const pageClassNames = cn('page', pageClass);
  const mainClassName = cn('page__main', mainClass);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className={pageClassNames}>
        <Header showUser={showUser}/>
        <main className={mainClassName}>
          {children}
        </main>
        {showFooter && <Footer/>}
      </div>
    </>
  );
}

export default Layout;
