import { useState } from 'react'
import './index.scss'

import axios from 'axios'
import { Link } from 'react-router-dom'
import Cabecalho from '../../components'



export default function Home() {
     
    return (
        <div className='comeco'>
            <Cabecalho/>
            <div className='meio'>

                <Link className='li' to= '/consultar'>                
                <div className='card'>
                    <h1>Consultar tabelas</h1>
                    <p>Conferir todas as informações presentes nas tabelas</p>
                </div>
                </Link>

                <Link className='li' to = '/inserir'>
                <div className='card'>
                    <h1>Inserir nas tabelas</h1>
                    <p>Inserir todas as informações presentes nas tabelas</p>
                </div>
                </Link>

                <Link className='li' to= '/alterar/:id'>
                <div className='card'>
                    <h1>Alterar tabelas</h1>
                    <p>Alterar todas as informações presentes nas tabelas</p>
                </div>
                </Link>
            </div>
        </div>
    )
}