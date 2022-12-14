<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Data Structures" />    
</div>

<h1 align="center">Estrutura de Dados em Javascript</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/wsasouza/data-structures-in-javascript?color=FAE703">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/wsasouza/data-structures-in-javascript?color=FAE703">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/wsasouza/data-structures-in-javascript?color=FAE703">

  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/wsasouza/data-structures-in-javascript?color=FAE703">
  
</p>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/wsasouza" target="_blank">Author</a>
</p>

<br>

## :dart: About

**Estruturas de Dados em Javascript**<br>
Implementação das estruturas de dados mais conhecidas utilizando a linguagem Javascript.

## 1. Pilha (Stack)

<div align="left"> 
  <img src="./src/assets/pilha-01.png" alt="Pilha" />    
</div>

A pilha é uma estrutura de dados básica que fornece a lógica conhecida por LIFO(Last In, First out). Isso significa que o ultimo dado adicionado a estrutura será o primeiro removido dela e por isso foca a entrada e saída de dados na mesma ponta do vetor/lista.

<div align="left"> 
  <img src="./src/assets/pilha-02.png" alt="Pilha" />  
  <p><i>Passo a passo de um funcionamento de uma Pilha/Stack.</i></p>  
</div>

<br><br>

## 2. Fila (Queue)

<div align="left"> 
  <img src="./src/assets/fila-01.png" alt="Fila" />     
</div>

Fila é um tipo de estrutura de dados com um controle definido pela lógica FIFO (do inglês first in, last out). Esse controle quer dizer que os dados contidos nela são podem entrar apenas por uma ponta e deverão sair pela outra. Com isso, garante-se que o primeiro dado que entrou será o primeiro a sair da fila.

A fila é uma estrutura de dados muito útil quando se possui um serviço ao qual o sistema recebe alimentação de diversas fontes, mas precisa manter uma ordem do “primeiro que chegou será o primeiro servido”. Um exemplo simples é o sistema que administra diversos computadores ligados a uma única impressora.

<div align="left"> 
  <img src="./src/assets/fila-02.png" alt="Fila" />     
</div>

<br><br>

## 3. Lista Encadeada Simples(Linked List)

<div align="left"> 
  <img src="./src/assets/linkedList-01.png" alt="Linked List" />     
</div>

A lista simples, também conhecido como lista encadeada simples ou lista de um caminho é um tipo básico de estrutura de dados que tem por foco a flexibilidade no manuseio das informações nela contida.

Ela é disposta por nós (Nodes) que se conectam a no máximo 1 outro nó e não possuem conhecimento se um nó é ligado a eles. A forma mais simples de pensar na lista seria um número X de caixas colocadas em fila e cada uma contem duas informações: O dado (informação) e a referência (código) para a próxima caixa.

Ao contrario das estruturas de dados apresentadas anteriormente como pilhas e filas, a lista é bem mais flexível e permite que novos itens sejam adicionados em qualquer local. Quando isso acontece, ocorrerá o nó anterior e o que está naquela posição terão que ser ajustados conforme a imagem:

<div align="left"> 
  <img src="./src/assets/linkedList-02.png" alt="Linked List" />     
</div>

Remover de qualquer lugar da lista também é possível e, da mesma forma que o método de adicionar, será necessário ajustar os nós anteriores e posteriores de acordo.

<div align="left"> 
  <img src="./src/assets/linkedList-03.png" alt="Linked List" />     
</div>

## :rocket: Technologies

The following tools were used in this project:

- [Javascript](https://www.javascript.com/)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting

```bash
# Clone this project
$ git clone https://github.com/wsasouza/data-structures-in-javascript

# Access
$ cd data-structures-in-javascript

# Run the project
$ node [selected file]

```

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with :heart: by <a href="https://github.com/wsasouza" target="_blank">Walter Santos de Andrade Souza</a>

&#xa0;

<a href="#top">Back to top</a>
