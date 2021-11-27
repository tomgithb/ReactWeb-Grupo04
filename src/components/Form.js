import style from './Form.module.css'
import { useState } from 'react'

function Form() {

    function cadastrarCategoria(e) {
        e.preventDefault()
        console.log("Categoria cadastrada")
        console.log(categoria)
        console.log(descriçaõ)

    }

    const [categoria, setCategoria] = useState()
    const [descriçaõ, setDescrição] = useState()
    return (
        <div className={style.container}>
            <h3 className={style.textCadastroCategoria}>Cadastro de categoria</h3>

            <form className={style.formularioCategoria} onSubmit={cadastrarCategoria}>

                <label htmlform="categoria">Nome da categoria: </label>
                <input className={style.Categoria} type="text" id="categoria" name="categoria" placeholder="Digite categoria" onChange={(e) => setCategoria(e.target.value)} />

                <label htmlform="descrição">Descrição: </label>
                <textarea className={style.input} type="text" id="descriçaõ" name="descrição" placeholder="Descreva categoria" onChange={(e) => setDescrição(e.target.value)} />


                <input className={style.buttonCadastrar} type="submit" value="Cadastrar categoria" />

            </form>
        </div>

    )
}

export default Form;