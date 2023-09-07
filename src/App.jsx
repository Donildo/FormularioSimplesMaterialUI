import React, {Component} from 'react'
import './App.css'
import FormularioCadastro from './componentes/FormularioCadastro'

import { Container, Typography } from '@mui/material';
class App extends Component{
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant='h3' component="h1" align='center'>Formualrio de Cadastro</Typography>
        <FormularioCadastro/>
        </Container>        

    )
}

}

export default App
