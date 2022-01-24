import '../styles/style.scss'
import Header from './header'
import Main from './main'
import Footer from './footer'
import Banner from './banner'


function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Banner/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
