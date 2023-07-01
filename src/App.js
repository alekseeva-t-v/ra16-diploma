import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Bunner from './components/Bunner/Bunner';
import About from './components/About/About';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <div class="row">
          <div class="col">
            <Bunner />
            <About />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
