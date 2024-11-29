import React from 'react';
import { useLocation } from 'react-router-dom';

function Relatorio() {
  const location = useLocation();
  const { data } = location.state || {};

  return (
    <div>
      <h1>Relatório de Cadastro</h1>
      {data ? (
        <div>
          <p><strong>Nome Completo:</strong> {data.nome}</p>
          <p><strong>CPF:</strong> {data.cpf}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Data de Nascimento:</strong> {data['data-nascimento']}</p>
          <p><strong>Estado Civil:</strong> {data['estado-civil']}</p>
          <p><strong>Endereço:</strong> {data.endereco}</p>
          <p><strong>Bairro:</strong> {data.bairro}</p>
          <p><strong>Cidade:</strong> {data.cidade}</p>
          <p><strong>UF:</strong> {data.uf}</p>
          <p><strong>CEP:</strong> {data.cep}</p>
          <p><strong>Celular:</strong> {data.celular}</p>
          <p><strong>Login:</strong> {data.login}</p>
          <p><strong>Interesses:</strong> {data.informacoes && data.informacoes.join(', ')}</p>
        </div>
      ) : (
        <p>Nenhum dado recebido.</p>
      )}
    </div>
  );
}

export default Relatorio;