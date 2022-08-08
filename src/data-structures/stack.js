// Pilha

// A pilha é uma estrutura de dados básica que fornece a lógica conhecida por LIFO(Last In, First out). Isso significa que o ultimo dado adicionado a estrutura será o primeiro removido dela e por isso foca a entrada e saída de dados na mesma ponta do vetor/lista.

class Pilha {
  constructor() {
    let topo = null;
    let quantidade = 0;
    //Retorna o número de itens na Pilha
    this.GetCount = function () {
      return quantidade;
    };
    //Push: Adiciona itens ao topo da pilha
    this.Push = function (dados) {
      let node = {
        dados: dados,
        proximo: null,
      };
      node.proximo = topo;
      topo = node;
      quantidade++;
    };
    //Pop: Remove itens do topo da pilha
    this.Pop = function () {
      if (topo === null) {
        return null;
      } else {
        let removido = topo;
        topo = topo.proximo;
        if (quantidade > 0) {
          quantidade--;
        }
        return removido.dados;
      }
    };
    //Exibe o Item do topo da pilha
    this.VerTopo = function () {
      if (topo === null) {
        return null;
      } else {
        return topo.dados;
      }
    };
    //Retorna um vetor com todos itens da Pilha
    this.VerTodos = function () {
      if (topo === null) {
        return null;
      } else {
        let arr = new Array();
        let current = topo;
        for (var i = 0; i < quantidade; i++) {
          arr[i] = current.dados;
          current = current.proximo;
        }
        return arr;
      }
    };
  }
}

// Cria uma pilha vazia
let pilha = new Pilha();

// Adiciona elementos na pilha
pilha.Push('Cabo USB');
pilha.Push('Bateria');
pilha.Push('Carregador');

// Retorna todos os elementos presentes na pilha
console.log(pilha.VerTodos());

// Remove um elemento da pilha
pilha.Pop();
console.log(pilha.VerTodos());

// Retorna o elemento que está no topo da pilha
console.log(pilha.VerTopo());

// Retorna a quantidade de elementos presentes na pilha
console.log(pilha.GetCount());
