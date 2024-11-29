import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: formData[name] ? [...formData[name], value] : [value]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/cadastro_html', { state: { data: formData } });
  };

  return (
    <div className="App">
      <h1>Formulário de Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <label htmlFor="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" required onChange={handleChange} />

          <label htmlFor="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" required onChange={handleChange} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required onChange={handleChange} />

          <label htmlFor="data-nascimento">Data de Nascimento:</label>
          <input type="date" id="data-nascimento" name="data-nascimento" required onChange={handleChange} />

          <label htmlFor="estado-civil">Estado Civil:</label>
          <select id="estado-civil" name="estado-civil" required onChange={handleChange}>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="viuvo">Viúvo</option>
            <option value="divorciado">Divorciado</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Dados de Contato</legend>
          <label htmlFor="endereco">Endereço:</label>
          <input type="text" id="endereco" name="endereco" required onChange={handleChange} />

          <label htmlFor="bairro">Bairro:</label>
          <input type="text" id="bairro" name="bairro" required onChange={handleChange} />

          <label htmlFor="cidade">Cidade:</label>
          <input type="text" id="cidade" name="cidade" required onChange={handleChange} />

          <label htmlFor="uf">UF:</label>
          <select id="uf" name="uf" required onChange={handleChange}>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </select>

          <label htmlFor="cep">CEP:</label>
          <input type="text" id="cep" name="cep" required onChange={handleChange} />

          <label htmlFor="celular">Celular:</label>
          <input type="tel" id="celular" name="celular" required onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>Dados de Cadastro</legend>
          <label htmlFor="login">Login:</label>
          <input type="text" id="login" name="login" required onChange={handleChange} />

          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" required onChange={handleChange} />
        </fieldset>

        <fieldset className="checkbox-group">
          <legend>Deseja receber informações sobre:</legend>

          <label htmlFor="musica">Música</label>
          <input type="checkbox" id="musica" name="informacoes" value="musica" onChange={handleChange} />

          <label htmlFor="filmes">Filmes</label>
          <input type="checkbox" id="filmes" name="informacoes" value="filmes" onChange={handleChange} />

          <label htmlFor="esportes">Esportes</label>
          <input type="checkbox" id="esportes" name="informacoes" value="esportes" onChange={handleChange} />

          <label htmlFor="noticias">Notícias</label>
          <input type="checkbox" id="noticias" name="informacoes" value="noticias" onChange={handleChange} />

          <label htmlFor="viagem">Viagem</label>
          <input type="checkbox" id="viagem" name="informacoes" value="viagem" onChange={handleChange} />

          <label htmlFor="tecnologia">Tecnologia</label>
          <input type="checkbox" id="tecnologia" name="informacoes" value="tecnologia" onChange={handleChange} />
        </fieldset>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default App;