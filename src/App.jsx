
import { Route, Routes } from 'react-router-dom'
import BtnHeader from './Components/Header/BtnHeader'
import TopHeader from './Components/Header/TopHeader'
import Home from './Pages/Home/Home'
import ProudectDetalis from './Pages/ProudectDetalis/ProudectDetalis'

function App() {

  return (
    <>
    <header>
      <TopHeader/>
      <BtnHeader />
    </header>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProudectDetalis/>}/>
    </Routes>
     
    </>
  )
}

export default App
