import React, { useEffect, useState } from "react";
import api from './services/api';

import "./styles.css";
import { useEffect } from "react";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(responde.data);
    });
  }, [])

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: 'Mael',
      url:'https://github.com/rocketseat/mael',
      techs:[ 'NodeJS', 'ReactJS' ],
    })

    setRepositories([ ...repositories, responde.data ]);

  }

  async function handleRemoveRepository(id) {
    await api.delete( 'repositories/${id} ');

    setRepositories(repositories.filter(
      repository => repository.id !== id
    ))

  }

  return (
    
    <div>
      <ul data-testid="repository-list">  
        {respositories.map(respository =>{
          <li key={repository.id}>
            {repository.title}

            <button onClick={() => handleAddRepository(repository.id)}>
              Remover
            </button>
          </li>
        })} 
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
