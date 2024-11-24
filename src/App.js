import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/qualification';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Portfolio from './components/projects/Portfolio';

const App = () => {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home />
        <Skills />
        <Qualification />
        <Portfolio />
        
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
