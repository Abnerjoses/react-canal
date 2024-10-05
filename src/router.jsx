import Inserir from './pages/inserir';
import Consultar from './pages/consulta';
import Home from './pages/home';
import Alterar from './pages/alterar';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function Navegacao(){

    return(

        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='inserir' element={<Inserir/>} />
              <Route path='/consultar' element={<Consultar/>} />
              <Route path='/alterar/:id' element={<Alterar/>} />
              <Route path='/alterar/' element={<Alterar/>} />
         </Routes>
      </BrowserRouter>

    )

}