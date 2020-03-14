import React, { useState } from 'react';
import AddPessoa from './addPessoa';
import ListPessoa from './listPessoa';

function App() {

  const initialState = {
    nome: '',
    telefone: ''
  }

  const [pessoa, setPessoa] = useState(initialState)
  const [pessoas, setPessoas] = useState([]);


  const removePessoa = (e) => {
    console.log(e);
    setPessoas(pessoas.filter(item => item !== e ));
  }

  const addPessoa = (e) => {
    e.preventDefault();

    if (validate()) {
      setPessoas([...pessoas, pessoa]);
      setPessoa({ ...initialState });
    }
  }

  const handleChange = (e) => {
    setPessoa({ ...pessoa, [e.target.id]: e.target.value });
  }

  function validate() {
    let ret = [];
    Object.keys(pessoa).map(item => {
      // return pessoa[item] === "" ? false : true;      
      ret.push(pessoa[item] === "" ? false : true);
      return null;
    })
    return ret.indexOf(false) === -1 ? true : false;
  }

  return (
    <>
      <AddPessoa pessoa={pessoa} handleChange={handleChange} addPessoa={addPessoa} />
      <ListPessoa pessoas={pessoas} removePessoa={removePessoa}/>
    </>
  );
}

export default App;
