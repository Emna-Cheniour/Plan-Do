import PlacesList from './components/PlacesList';
import Acceuil from './pages/Acceuil/Acceuil';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import SingleEstablish from './components/singleEstablishement/SingleEstablish';
import { ThemeProvider } from '@mui/material';
import { theme } from './components/shared/utils/theme.ts';  
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/loginForm';
import Navbar from './components/navbar/Navbar';

 
function App() {
  return (   
     <BrowserRouter>
     <div className="App"> 
     <Navbar />
       <div>  
         <Routes>
            <Route exact path="/" element={<Acceuil   />}  /> 
            <Route exact path="/login" element={<LoginForm   />}  /> 
            <Route exact path="/register" element={<RegisterForm />}  />  
            <Route exact path="/single" element={<SingleEstablish type =" " />}  />
            <Route exact path="/annif" element={<PlacesList type ="lorem" />}  />
            <Route exact path="/teambuilding" element={<PlacesList type ="molli" />}  />
            <Route exact path="/shoot" element={<PlacesList type ="ipsum" />}  />
            {/* <Route exact path="/projects/:id" element={<ShowPlaces/>}  />  */}
         </Routes>
       </div>
     </div>
     </BrowserRouter>   
  );
}


export default App;