import Nav from './Nav';
import Meta from './Meta';
import Footer from './Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
