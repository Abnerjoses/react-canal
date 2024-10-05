import Inserir from './pages/inserir';
import Consultar from './pages/consulta';
import Home from './pages/home';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function Navegacao(){

    return(

        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='inserir' element={<Inserir/>} />
              <Route path='/consultar' element={<Consultar/>} />
         </Routes>
      </BrowserRouter>

    )

}