import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SingIn from './pages/SingIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';


export default function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
  <Route path='/' element = {<Home/>}/>
  <Route path = '/profile' element = {<Profile/>}/>
  <Route path = '/sign-in' element = {<SingIn/>}/>
  <Route path = '/sign-up' element = {<SignUp/>}/>
  
  <Route path = '/about' element = {<About/>}/>
   </Routes>
   </BrowserRouter>
  )
}

