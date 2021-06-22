<div align="center">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="100" />
    <h1>
        Projeto HTML<br>
        100% Javascript
    </h1>
    <h4>
        Front-end feito "sem HTML"
    </h4> 
    <img  alt="Dependencies"  src=https://img.shields.io/badge/dependecies-0-brightgreen.svg?style=flat-square">
    <img  alt="Language Top"  src="https://img.shields.io/github/languages/top/joaovictornsv/http-node-api-web">
     <a  href="https://github.com/joaovictornsv/http-node-api-web/blob/master/LICENSE">
        <img  alt="License"  src="https://img.shields.io/github/license/joaovictornsv/http-node-api-web">
    </a>
</div>

---

<h2 id="conteudos">Conteúdos</h2>

[➜ Sobre o projeto](#mag_right-sobre-o-projeto)<br>
[➜ O que aprendi](#books-o-que-aprendi)<br>
[➜ Como usar](#information_source-como-usar)<br>

---

## :mag_right: Sobre o projeto

<sup>[Voltar ao topo](#conteudos)</sup><br>

O objetivo dessa aplicação era criar um frontend feito totalmente em Javascript, sem nenhum arquivo HTML ou CSS pré-criado. Para gerar as páginas em HTML usei o próprio JS para criá-las e inserir os componentes necessários. Além disso, esse projeto também é o frontend da minha API 100% NodeJS (sem dependências).

---

### ➡ API
A API utilizada é feita totalmente em NodeJS, ou seja, todo esse projeto (frontend e backend) foi feito sem nenhuma dependência externa.
<br/><br/>
Para ver mais detalhes de como usar a API acesse o repositório: [joaovictornsv/http-node-api](https://github.com/joaovictornsv/http-node-api)

---

### ➡ Arquitetura
Para gerar todos os componentes necessários criei uma arquitetura que se resume basicamente em:
- Prototypes
- Factories
- Components
- Pages


### Prototypes
  Os *prototypes* são adições nos métodos dos elementos HTML que fiz para facilitar a criação de componentes estilizados.

  <br>

  <details>
    <summary>
      Um exemplo de como um prototype funciona:
    </summary>

```javascript
// Mudando a cor de um botao
const button = document.getElementById('btn')


// ❌ SEM PROTOTYPE
button.style.backgroundColor = 'blue'


// ✅ COM PROTOTYPE

// Criando uma função nova no prototype da tag 'button'
HTMLButtonElement.prototype.setCSS = function setCSS(new_css) {
  // add CSS in element
}

// Usando a função criada
button.setCSS({ color: 'blue'})

```
  </details>

### Factories
  As *factories* são **closures**, ou seja, funções que "se lembram" do escopo de quando foram criadas. Funcionam semelhante a uma espécie de classe. Não escolhi trabalhar com classes para poder pôr em prática o que havia estudado sobre as closures. Caso deseje ler mais sobre closures [clique aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures).
  
  <br>

  <details>
    <summary>
      Um exemplo de como uma closure funciona:
    </summary>
      
```javascript
// Cria um botão escrito 'Botão 1'
const button1 = makeButton({ value: 'Botão 1' });

// Cria outro botão escrito 'Botão 2'
const button2 = makeButton({ value: 'Botão 2' });



// Muda a cor do texto do Botão 1 para azul
button1.setCSS({ color: 'blue' })

// Muda a cor do texto do Botão 1 para Vermelho
button1.setCSS({ color: 'red' });


// Ambos os botões tem seus escopos próprios
```

  </details>

### Components
  Os *components* são os elementos HTML já criados e estilizados prontos para uso (assim como ocorre com o [styled-components](https://styled-components.com/)).
  
  <br>

  <details>
    <summary>
      Um exemplo de como um component funciona:
    </summary>
      
```javascript
// Criação de um elemento 'h1'
const title = makeText({tag: 'h1', value: 'Título Princiapl'});

// Estilização do elemento
titleMain.setCSS({
  fontSize: '22px',
  color: 'black',
  fontFamily: 'Arial, sans-serif'
});

export default title;
```

  </details>

### Pages
  As *pages* são os conjuntos de componentes organizados para formar uma página completa.
  
  <br>

  <details>
    <summary>
      Um exemplo de como uma página funciona:
    </summary>
      
```javascript
// Criação de um elemento 'h1'
import header from './components/header.js'
import title from './components/title.js'
import subtitle from './components/subtitle.js'

function HomePage() {
  // Adicionando components na div 'header'
  header.append(title);
  header.append(subtitle);
}

export default HomePage;
```

  </details>

---

### ➡ Funcionalidades ✔️
A aplicação realiza o CRUD da API (Create, Read, Update and Delete) e possui as seguintes funcionalidades:

#### Funções principais:
- Listagem de usuários ou usuário único
- Criação de novo usuário
- Alteração de dados de um usuário
- Remoção de um usuário

#### Outras funcionalidades:
- Criação de arquivos HTML a partir do Javascript
- Tratamento de erros retornados da api

---

## :books: O que aprendi

<sup>[Voltar ao topo](#conteudos)</sup><br>

Além de aprender como funcionam as closures, também fixei mais alguns conceitos:

- Uso dos Prototypes
- Uso da função Object.entries
- Requisições com AJAX
- Tratamento de erros com AJAX
- Correção de erros de CORS da API
- Uso das classes `URL` e `URLSearchParams`
- Organização de código no geral

---

## :information_source: Como usar

<sup>[Voltar ao topo](#conteudos)</sup><br>

Para testar essa aplicação na sua máquina você precisa atender aos requisitos:
- Baixar o repositório da API
- Instalar a extensão [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no seu Visual Studio Code


```bash
# Clone this repository
$ git clone https://github.com/joaovictornsv/http-node-api-web

# Clone the server repository
$ git clone https://github.com/joaovictornsv/http-node-api


#### 🟡 BACK-END

# Go into the server repository
$ cd http-node-api

# Run the server
$ yarn start


#### 🔵 FRONT-END

# Back to this repository

# Generate HTML files
$ yarn start

# Run frontend server
➜ Use 'Live Server' to run (Visual Studio Code Extension)
```

<div align="center">
    <img src="https://i.imgur.com/XMyEPXc.gif"/>
</div>

---

<div>
  <img align="left" src="https://i.imgur.com/ufUYAFh.png" width=35 alt="Profile"/>
  <sub>Made with 💙 by <a href="https://github.com/joaovictornsv">João Victor</a></sub>
</div>
