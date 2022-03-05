import Characters from '../pages/Characters';
import Nav from '../components/HeaderNav';
import Footer from '../components/HeaderFooter';
import Locations from '../pages/Locations';
import Episodes from '../pages/Episodes';
import Home from '../pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='dash'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  )
}

export default Dashboard;