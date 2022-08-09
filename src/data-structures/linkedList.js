// Lista Encadeada Simples

// A lista simples, também conhecido como lista encadeada simples ou lista de um caminho é um tipo básico de estrutura de dados que tem por foco a flexibilidade no manuseio das informações nela contida.

// Ela é disposta por nós (Nodes) que se conectam a no máximo 1 outro nó e não possuem conhecimento se um nó é ligado a eles. A forma mais simples de pensar na lista seria um número X de caixas colocadas em fila e cada uma contem duas informações: O dado (informação) e a referência (código) para a próxima caixa.

class ListaSimples {
  constructor() {
    let quantidade = 0;
    let primeiro = null;
    //Retorna a quantidade de itens na lista
    this.GetQuantidade = function () {
      return quantidade;
    };
    //Exibe todos os itens da lista no formato de vetor javascript
    this.ExibirTodos = function () {
      if (primeiro === null) {
        return null;
      } else {
        let arr = new Array();
        let atual = primeiro;
        for (let i = 0; i < quantidade; i++) {
          arr[i] = atual.dado;
          atual = atual.prox;
        }
        return arr;
      }
    };

    //Exibe o item que está localizado no indice pedido
    this.MostrarNoIndice = function (indice) {
      //Confere se o indice existe na lista
      if (indice > -1 && indice < quantidade) {
        let atual = primeiro;
        let i = 0;
        while (i++ < indice) {
          atual = atual.prox;
        }
        return atual.dado;
      } else {
        console.log('Indice inválido');
      }
    };

    //Adiciona na frente da lista
    this.AdicionarPrimeiro = function (dado) {
      let node = {
        dado: dado,
        prox: primeiro,
      };
      primeiro = node;
      quantidade++;
    };

    //Adiciona um item em uma posição especifica da lista
    this.Adicionar = function (dado, indice) {
      if (indice === 0) {
        this.AdicionarPrimeiro(dado);
      }

      //Confere se o indice existe na lista
      else if (indice > -1 && indice < quantidade) {
        let node = {
          dado: dado,
          prox: null,
        };
        let anterior;
        let atual = primeiro;
        let i = 0;
        //percorre a lista para adicionar no local correto
        while (i++ < indice) {
          anterior = atual;
          atual = atual.prox;
        }
        anterior.prox = node;
        node.prox = atual;
        quantidade++;
      } else {
        console.log('Indice inválido');
      }
    };

    //Remove o primeiro item da lista
    this.RemoverPrimeiro = function () {
      if (primeiro === null) {
        return null;
      } else {
        let sair = primeiro;
        primeiro = primeiro.prox;
        if (quantidade > 0) {
          quantidade--;
        }
        return sair.dado;
      }
    };

    //Remove o item na posição especifica do Indice
    this.RemoverNoIndice = function (indice) {
      let atual = primeiro;
      let anterior;
      let i = 0;

      if (indice === 0) {
        return this.RemoverPrimeiro(indice);
      }

      //Confere se o indice existe na lista
      else if (indice > -1 && indice < quantidade) {
        while (i++ < indice) {
          anterior = atual;
          atual = atual.prox;
        }
        //"pula" o item para remove-lo
        anterior.prox = atual.prox;
        quantidade--;
      } else {
        console.log('Indice inválido');
      }
      //Retorna o valor do item removido
      return atual.dado;
    };
  }
}

// Cria uma linked list vazia
let linkedList = new ListaSimples();

// Adiciona itens na lista
linkedList.AdicionarPrimeiro('Carregador');
linkedList.AdicionarPrimeiro('Bateria');
linkedList.AdicionarPrimeiro('Cabo USB');

// Adiciona um item em uma posição especifica
linkedList.Adicionar('Fone P2', 1);
linkedList.Adicionar('Fone Bluetooth', 2);

// Exibe todos os itens da lista
console.log(linkedList.ExibirTodos());

// Retorna o item que corresponde ao índice e caso não exita retorna undefined
console.log(linkedList.MostrarNoIndice(2));

// Remove o primeiro elemento da lista
linkedList.RemoverPrimeiro();
console.log(linkedList.ExibirTodos());

// Remove o elemento correspondente ao índice passado
linkedList.RemoverNoIndice(2);
console.log(linkedList.ExibirTodos());
