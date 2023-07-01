import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Bunner from './components/Bunner/Bunner';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Bunner />
            {/* <Home /> */}
            <Catalog />
            {/* <About /> */}
            {/* <Contacts /> */}
            {/* <NotFound /> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
