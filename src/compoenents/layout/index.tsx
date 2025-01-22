import { Haeder } from './header'
import Footer from './footer'

const Layout = ({children}:{children:any}) => {
  return (
    <>
    <Haeder/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout