// Queue - Fila

// Fila é um tipo de estrutura de dados com um controle definido pela lógica FIFO (do inglês first in, last out). Esse controle quer dizer que os dados contidos nela são podem entrar apenas por uma ponta e deverão sair pela outra. Com isso, garante-se que o primeiro dado que entrou será o primeiro a sair da fila.

class Fila {
  constructor() {
    let quantidade = 0;
    let primeiro = null;
    let ultimo = null;

    //Retorna a quantidade na fila
    this.GetQuantidade = function () {
      return quantidade;
    };
    //adiciona um item a fila
    this.Adicionar = function (data) {
      let node = {
        data: data,
        prox: primeiro,
      };

      if (primeiro === null) {
        ultimo = node;
      }

      primeiro = node;

      quantidade++;
    };
    //Remove um item da fila
    this.Remover = function () {
      //se a fila estiver vaiza, retorna nulo
      if (ultimo === null) {
        return null;
      } else {
        //senão percorre a fila até o ultimo item para removelo e ajusta a lista
        let current = primeiro;
        let previous = null;

        while (current.prox) {
          previous = current;
          current = current.prox;
        }

        if (quantidade > 1) {
          previous.prox = null;

          ultimo = previous;
        }

        //zera/reseta a fila
        else {
          primeiro = null;
          ultimo = null;
        }
        quantidade--;
      }
      //Exibe todos os itens da fila
      this.ExibirTodos = function () {
        if (primeiro === null) {
          return null;
        } else {
          let arr = new Array();
          let current = primeiro;

          for (let i = 0; i < quantidade; i++) {
            arr[i] = current.data;
            current = current.prox;
          }

          return arr;
        }
      };
    };
  }
}

// Cria uma fila vazia
let fila = new Fila();

// Adiciona lementos na fila
fila.Adicionar('Carregador');
fila.Adicionar('Cabo USB');
fila.Adicionar('Bateria');

// Retorna a quantidade de elementos na fila
console.log(fila.GetQuantidade());

// Remove o primeiro elemento da fila
fila.Remover();

// Exibe os elementos presentes na fila
console.log(fila.ExibirTodos());
