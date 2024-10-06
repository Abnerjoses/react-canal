import { useState } from 'react'
import './index.scss'
import Cabecalho from '../../components';
import axios from 'axios'


export default function Consultar() {
    const [canal, setCanal] = useState([]);
    const [canalPrograma, setCanalP] = useState([]);
    const [usuario, setUsuario] = useState([]);
    const [canalFavorito, setCanalFavorito] = useState([]);


    async function buscar() {
        const url = 'http://localhost:5010/canal/';
        let resposta = await axios.get(url);
        setCanal(resposta.data);  
    }
    async function buscarCP() {
        const url = 'http://localhost:5010/programa/';
        let resposta = await axios.get(url);
        setCanalP(resposta.data);  
    }
    async function buscarUsuario() {
        const url = 'http://localhost:5010/usuario/';
        let resposta = await axios.get(url);
        setUsuario(resposta.data);  
    }
    async function buscarCanalF() {
        const url = 'http://localhost:5010/programaFavorito/';
        let resposta = await axios.get(url);
        setCanalFavorito(resposta.data);  
    }
    
    return (
    <div className='conteiner'>
        <Cabecalho/>
        
        <div className='sub-conteiner'>

        <div className='tabela-canal'>
            <h1> Consultar tabela Canal </h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do Canal</th>
                        <th>Numero do Canal</th>
                        <th>Canal Aberto</th>
                    </tr>
                </thead>

                <tbody>
                    {canal.map(item => 
                         <tr>
                         <td>{item.id_canal}</td>
                         <td>{item.nm_canal}</td>
                         <td>{item.nr_canal}</td>
                         <td>{item.bt_aberto ? 'Sim' : 'Não'}</td>
                     </tr> )}
                </tbody>

            </table>           
             <button onClick={buscar}>Buscar</button>
        </div>

        <div className='tabela-canal-programa'>
            <h1> Consultar tabela Canal Programa </h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Id Canal Programa</th>
                        <th>nome</th>
                        <th>Genero</th>
                        <th>hora</th>
                        <th>nome canal</th>
                        <th>numero canal</th>
                        <th>Canal Aberto</th>
                    </tr>
                </thead>
                <tbody>
                    {canalPrograma.map(item => 
                         <tr>
                         <td>{item.id_canal_programa}</td>
                         <td>{item.id_canal}</td>
                         <td>{item.nm_programa}</td>
                         <td>{item.ds_genero}</td>
                         <td>{item.hr_programa}</td>
                         <td>{item.nm_canal}</td>
                         <td>{item.nr_canal}</td>
                         <td>{item.bt_aberto ? 'Sim' : 'Não'}</td>
                     </tr> )}
                </tbody>
            </table>           
            <button onClick={buscarCP}>Buscar</button>
        </div>
    </div>


    <div className='sub-contei'>
        <div className='tabela-usuario'>
            <h1> Consultar tabela Usuario </h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                </thead>

                <tbody>
                    {usuario.map(item => 
                         <tr>
                         <td>{item.id_usuario}</td>
                         <td>{item.nm_usuario}</td>
                     </tr> )}
                </tbody>
            </table>           
            <button onClick={buscarUsuario}>Buscar</button>
        </div>
        
        <div className='tabela-programa'>
            <h1>Consultar tabela Programa Favorito</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID programa Favorito</th>
                        <th>id programa</th>
                        <th>avaliacao</th>
                        <th>id Usuario</th>
                        <th>Nome usuario</th>
                        <th>id canal</th>
                        <th>Nome programa</th>
                        <th>Genero</th>
                        <th>hora</th>
                        <th>Nome canal</th>
                        <th>Numero canal</th>
                        <th>canal aberto</th>
                    </tr>
                </thead>

                <tbody>
                    {canalFavorito.map(item => 
                         <tr>
                         <td>{item.id_programa_favorito}</td>
                         <td>{item.id_canal_programa}</td>
                         <td>{item.vl_avaliacao}</td>
                         <td>{item.id_usuario}</td>
                         <td>{item.nm_usuario}</td>
                         <td>{item.id_canal}</td>
                         <td>{item.nm_programa}</td>
                         <td>{item.ds_genero}</td>
                         <td>{item.hr_programa}</td>
                         <td>{item.nm_canal}</td>
                         <td>{item.nr_canal}</td>
                         <td>{item.bt_aberto ? 'Sim': 'Não'}</td>
                     </tr> )}
                </tbody>

            </table>           
             <button onClick={buscarCanalF}>Buscar</button>
        </div>
    </div>
        
 </div>
    )

}