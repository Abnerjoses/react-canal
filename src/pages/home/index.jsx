import { useState } from 'react'
import './index.scss'

import axios from 'axios'
import { Link } from 'react-router-dom'




export default function Home() {
     
    return (
        <div className='comeco'>
           <h1>Home</h1>
           <h2>Confira as seguintes funcionalidades</h2>
           <Link to= '/consultar'><h1>Consulte</h1></Link>
           <Link to= '/inserir'><h1>Insira</h1></Link>
           <Link to= '/alterar/:id'><h1>Altere</h1></Link>
           
        </div>
    )
}