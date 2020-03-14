import React from 'react'

function ListPessoa({ pessoas, removePessoa }) {
    return (
        <ol>
            {pessoas.map(function (item, index) {
                return (<ListPessoa pessoas={pessoas} key={index} item={item} removePessoa={removePessoa} />)
            })}
        </ol>
    )
}

export default ListPessoa
