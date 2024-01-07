
import { useState, useEffect } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import {ItemRepo, EmptyRepo} from '../components/ItemRepo';
import { api } from '../services/api';


import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);


  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }

    }
    alert('Repositório não encontrado')

  }

  const handleRemoveRepo = (repo) => {
    console.log(repo.id)
    console.log(repos)
    if(window.confirm(`Deseja excluir o respositório ${repo.name} da lista?`) === true ){ 
      setRepos(item => [repos.filter( item => item.id !== repo.id)]);
      console.log(repos)

    }else{
      return false
    }
  }


  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
