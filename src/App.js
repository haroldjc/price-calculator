import './App.css';
// Components
import './components/layout/Header'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <main className='app-main'>
      <Header title='Get Price!' />
      <section className='main-content'>
        <div className='content-wrapper'>
          Content
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
