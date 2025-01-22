import Footer from './footer'
import Header from './header'
const Layout = ({children}:{children:any}) => {
  return (
    <>
      <Header />
      
      {children}
      <Footer />
    </>
  );
}

export default Layout