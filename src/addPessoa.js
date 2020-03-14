import React from 'react'

function AddPessoa({pessoa, handleChange, addPessoa}) {
    return (
        <div>
            <form>
                <input value={pessoa.nome} onChange={e => handleChange(e)} id="nome"></input>
                <input value={pessoa.telefone} onChange={(val) => handleChange(val)} id="telefone"></input>
                <button onClick={addPessoa}>ADD</button>              
            </form>
        </div>
    )
}

export default AddPessoa
