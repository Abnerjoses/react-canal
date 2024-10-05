import { useState } from 'react'
import './index.scss'
import './global.scss'
import axios from 'axios'
import { Link } from 'react-router-dom';


export default function Cabecalho() {
     
    return (
        <div className='comeco'>
            <header>

            <div className='imga'>
            <Link className='a' to= '/'><img src="/assets/images/logofrei.png" alt="" /></Link>
            </div>

            <div className='links'>
            <Link className='a' to= '/'>Home</Link>
            <Link className='a' to= '/consultar'>Consulte</Link>
            <Link className='a' to= '/inserir'>Insira</Link>
            <Link className='a' to= '/alterar/:id'>Altere</Link>
            </div>
            </header>
        </div>
    )
}