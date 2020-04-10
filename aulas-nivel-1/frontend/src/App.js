import React, { useState, useEffect } from 'react'

import api from './services/api'
import Header from './components/Header'

import './App.css'

function App() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])
  
  async function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`)
    // setProjects([...projects, `Novo projeto ${Date.now()}`])
    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Rodrigo Facholi"
    })
    const project = response.data
    setProjects([...projects, project])

    console.log(projects)
  }

  async function handleRemoveProject(id) {
    setProjects(projects.filter(project => project.id !== id))
  }
  
  return (
    <>
      <Header title="Título 1" />

      <ul>
        {projects.map(project =>
          <li key={project.id}>
            {project.title}
            <button onClick={() => handleRemoveProject(project.id)}>
              Remover
            </button>
          </li>
        )}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  )
}

export default App