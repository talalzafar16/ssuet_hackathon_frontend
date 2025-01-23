import Footer from './footer'
import Header from './header'
const Layout = ({children,className}:{children:any,className?:any}) => {
  return (
    <div className={`${className}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout