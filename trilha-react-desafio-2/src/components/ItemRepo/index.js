import React from 'react'

import { ItemContainer } from './styles';

export function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo)
  }

  return (
    <ItemContainer >
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
        <a href="#" onClick={handleRemove} rel="noreferrer" className="remover">Remover</a>
        <hr />
    </ItemContainer>
  )
}

export function EmptyRepo({}) {
  return (
    <ItemContainer >
        <h2>Nenhum Repositório Armazenado.</h2>
    </ItemContainer>
  )
}
