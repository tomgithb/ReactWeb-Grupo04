import './style.css'
import { useState } from 'react'

function FormularioCategoria() {
    const [categoria, setCategoria] = useState();
    const [descricao, setDescrição] = useState();

    function cadastrarCategoria(e) {
        e.preventDefault()
        console.log("Categoria cadastrada")
        console.log(categoria)
        console.log(descricao)
    }

    return (
        <div className="container-categoria">
            <h1 className="text-cadastro-categoria">Cadastro de categoria</h1>
            <form className="formulario-categoria" onSubmit={cadastrarCategoria}>
                <label htmlform="categoria-label">Nome da categoria: </label>
                <input className="digite-categoria" type="text" placeholder="Digite categoria" onChange={(e) => setCategoria(e.target.value)} />

                <label htmlform="descricao">Descrição: </label>
                <textarea className="input" type="text" id="descricao" name="descricao" placeholder="Descreva categoria" onChange={(e) => setDescrição(e.target.value)} />
                
                <input className="button-cadastrar" type="submit" value="Cadastrar categoria" />
            </form>
        </div>

    )
}

export default FormularioCategoria;