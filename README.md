# Formulário Módulo 4 React

Este é um projeto em React para um formulário de cadastro para o módulo 4 disciplina Fundamentos da Web do curso superior em Tecnologia da Informação da UFMS. 

## Rotas

- `/` - Página inicial com o formulário de cadastro
- `/cadastro_html` - Página de relatório exibindo os dados cadastrados

## Como Utilizar

1. Clone o repositório:
    ```bash
    git clone https://github.com/linsjardim/form-react-modulo4-ti.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd formulario-modulo-4-react
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```
5. Abra o navegador e acesse `http://localhost:3000` para ver a aplicação em execução.

## Estrutura do Projeto

- `src/`
  - `App.js` - Componente principal com o formulário de cadastro
  - `index.js` - Ponto de entrada da aplicação
  - `relatorio.js` - Componente que exibe o relatório dos dados cadastrados
  - `App.css` - Estilos CSS utilizados no projeto

## Detalhes do Formulário

O formulário de cadastro possui os seguintes campos requeridos:

- Nome Completo
- CPF
- Email
- Data de Nascimento
- Estado Civil
- Endereço
- Bairro
- Cidade
- UF
- CEP
- Celular
- Login
- Senha

Além disso, há um grupo de checkboxes para selecionar interesses em diferentes categorias como Música, Filmes, Esportes, Notícias, Viagem e Tecnologia.

## Utilização do CSS

O arquivo `App.css` contém estilos para:

- Definir a aparência geral do formulário e da página
- Estilizar os campos de entrada, labels e botões
- Aplicar responsividade para diferentes tamanhos de tela
- Destacar campos obrigatórios e focados

## Função do Relatorio.js

O arquivo `relatorio.js` é responsável por exibir os dados cadastrados após o envio do formulário. Ele utiliza o hook `useLocation` do React Router para acessar os dados enviados e exibi-los em um formato legível na página de relatório.