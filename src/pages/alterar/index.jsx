import { useState } from 'react'
import './index.scss'

import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function Alterar() {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [aberto, setAberto] = useState('');

    const [idP, setidP] = useState('');
    const [nomeP, setNomeP] = useState('');
    const [genero, setGenero] = useState('');
    const [poha, setPoha] = useState('');

    const [usuario, setUsuario] = useState('');

    const [idUsuario, setIdUsuario] = useState('');
    const [idCanalP, setIdCanalP] = useState('');
    const [avaliacao, setAvaliacao] = useState('');

    const{id} = useParams();


    
    async function salvar() {
        const paramCorpo = {
          "nome": nome,
          "numero": numero,
          "aberto": aberto
        }

        const url = `http://localhost:5010/canal/${id}`;

        try {
            let resp = await axios.put(url, paramCorpo);
            alert('Canal atualizado com sucesso');
        } 
        catch (error) {
            alert('Erro ao atualizar canal: ' + error.message);
        }
    }


    async function salvarCanalP() {
        const paramCorpo = {
          "id": idP,
          "nome": nomeP,
          "genero": genero,
          "poha": poha
        }
      
        const url = `http://localhost:5010/programa/${id}`;
        
        try {
            let resp = await axios.put(url, paramCorpo);
            alert('Canal atualizado com sucesso');
        } 
        catch (error) {
            alert('Erro ao atualizar canal: ' + error.message);
        }

    }

    async function salvarUsuario() {
        const paramCorpo = {
          "nome": usuario
        }

        const url = `http://localhost:5010/usuario/${id}`;
      
        try {
            let resp = await axios.put(url, paramCorpo);
            alert('Canal atualizado com sucesso');
        } 
        catch (error) {
            alert('Erro ao atualizar canal: ' + error.message);
        }
    }

    async function salvarPrograma() {
        const paramCorpo = {
          "idUsuario": idUsuario,
          "idCanalPro": idCanalP,
          "avaliacao": avaliacao
        }

        const url = `http://localhost:5010/programaFavorito/${id}`;
 
        try {
            let resp = await axios.put(url, paramCorpo);
            alert('Canal atualizado com sucesso');
        } 
        catch (error) {
            alert('Erro ao atualizar canal: ' + error.message);
        }
    }


    return (

    <div className='Conteiner'>

        <div className='pagina-cadastrar'>

            <h1>Altere na Tabela Canal</h1>

            <div className='form'>
                <div>
                    <label>Nome</label>
                    <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label>Numero</label>
                    <input type='text' value={numero} onChange={e => setNumero(e.target.value)}/>
                </div>
                <div>
                    <label>Aberto</label>
                    <input type='checkbox' checked={aberto} onChange={e => setAberto(e.target.checked)} />
                </div>
                
            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>

        <div className='pagina-cadastrar'>

        <h1>Inserir na Tabela Canal Programa</h1>

        <div className='form'>
            <div>
                <label>Id</label>
                <input type='text' value={idP} onChange={e => setidP(e.target.value)} />
            </div>
            <div>
                <label>Nome</label>
                <input type='text' value={nomeP} onChange={e => setNomeP(e.target.value)}/>
            </div>
            <div>
                <label>Genero</label>
                <input type='text' value={genero} onChange={e => setGenero(e.target.value)}/>
            </div>
            <div>
                <label>Horario</label>
                <input type='text' value={poha} onChange={e => setPoha(e.target.value)}/>
            </div>
           
        </div>
        <button onClick={salvarCanalP}> SALVAR </button>

        </div>

        <div className='pagina-cadastrar'>

        <h1>Inserir na Tabela Usuario</h1>

        <div className='form'>
            <div>
                <label>Nome do Usuario</label>
                <input type='text' value={usuario} onChange={e => setUsuario(e.target.value)}/>
            </div>
        </div>
        <button onClick={salvarUsuario}> SALVAR </button>

        </div>
        <div className='pagina-cadastrar'>

        <h1>Inserir na Tabela Programa Favorito</h1>

        <div className='form'>
            <div>
                <label>Id Usuario</label>
                <input type='text' value={idUsuario} onChange={e => setIdUsuario(e.target.value)} />
            </div>
            <div>
                <label>Id Canal programa</label>
                <input type='text' value={idCanalP} onChange={e => setIdCanalP(e.target.value)}/>
            </div>
            <div>
                <label>Avaliacao</label>
                <input type='text' value={avaliacao} onChange={e => setAvaliacao(e.target.value)}/>
            </div>
        </div>
        <button onClick={salvarPrograma}> SALVAR </button>

        </div>
    </div>
    
    )
}