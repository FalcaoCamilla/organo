import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const salvarForm = (evento) => {
        evento.preventDefault();
        console.log(nome, cargo, imagem, time)
        //evitar o comportamento padrão
    }

    return (
        <section className='formulario'>
            <form onSubmit={salvarForm}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}>
                </CampoTexto>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}>
                </CampoTexto>
                <CampoTexto 
                    obrigatorio={true}
                    label="Imagem" 
                    placeholder="Digite o endereço da Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}>
                </CampoTexto> 
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens = {times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}>
                </ListaSuspensa>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario