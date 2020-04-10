import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, StatusBar, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'

import api from './services/api'

export default function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data)
      setProjects(response.data)
    })
  }, [])

  async function handleNewProject() {
    const response = await api.post('projects', {
      title: `Novo project ${Date.now()}`,
      owner: "Rodrigo Facholi"
    })

    setProjects([...projects, response.data])
  }
  
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#6149B1"/>
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.container}
        data={projects}
        keyExtractor={project => project.id}
        renderItem={({ item: project }) => (
          <Text style={styles.title}>{project.title}</Text>
        )} />

        <TouchableOpacity 
          activeOpacity={0.6} 
          style={styles.button} 
          onPress={handleNewProject}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    {/* <View style={styles.container}>
      {projects.map(project => (
        <Text key={project.id} style={styles.title}>{project.title}</Text>
      ))}
    </View> */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159C1',
  },

  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: "bold"
  },

  button: {
    backgroundColor: "#FFF",
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})