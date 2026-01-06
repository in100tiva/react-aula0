import React from 'react';
import './App.css';

function App(){
    return (
        <div className='conteiner-principal'>
            <div className='card-boas-vindas'>
                <h1>Boas vindas ao nosso site</h1>
                <p>Esse e seu ponto de partida no React.</p>
                <button className='botao-entrar' onClick={() => alert('Iniciando sua Jornada!')}>Começar Jornada</button>
            </div>
        </div>
    );
}

export default App;