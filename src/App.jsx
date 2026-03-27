
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import Players from './Components/Players/Players';
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Footer/Footer';


const fetchPlayersData = fetch('playerData.json').then(res => res.json());

function App() {

  const [coin, setCoin]= useState(10000)

  return (
    <>    
      <header className='mb-8'>
        <NavBar coin={coin}></NavBar>
      </header>

      <main>
        <Banner></Banner>

        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
          <Players fetchPlayersData={fetchPlayersData} setCoin={setCoin} coin={coin}></Players>
        </Suspense>
      </main>

      <footer>
        <Footer></Footer>
      </footer>

      <ToastContainer />
    </>
  )
}

export default App
