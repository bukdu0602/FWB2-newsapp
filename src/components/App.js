import '../styles/style.scss'
import Header from './header'
import Articles from './Articles'
import Footer from './footer'
import Hero from './Hero'


function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Hero/>
        <Articles/>
        <Footer/>
    </div>
  );
}

export default App;
