# Shopping-Cart

Essa aplicação é um modelo de carrinho de compras para e-commerces.

É possível acessá-la em [https://shopping-cart-mocha-beta.vercel.app/](https://shopping-cart-mocha-beta.vercel.app/)

## Dependências

Criado com:

- [ReactJS](https://reactjs.org/)
- [Styled-Components](https://styled-components.com/)


## Como funciona?

- Os dados de um carrinho de compras são renderizados na tela via chamada de uma API.
- O preço final é calculado de acordo com os preços dos produtos e quantidades presentes no carrinho.
- Caso o preço seja maior do que um valor (R$ 10,00 nesse caso) é renderizado uma aviso de frete grátis.
- É possível limpar o carrinho de compras completamente.

## Testando a aplicação

Para fins de teste, há dois arquivos `.json` em `src/assests/json` com dados simulando diferentes respostas de api. 
O botão **Troca itens** (*adicionado apenas para fins de teste*) permite alternar entre essas duas respostas.

O botão **Limpar carrinho** remove os items do carrinho. 


## Instalação

Requisitos: 
- [Node.js](https://nodejs.org/en/download/) ou
- [Yarn](https://yarnpkg.com/) 

Para instalar na sua máquina, clone o repositório do projeto:

```bash
git clone https://github.com/le-santos/shopping-cart.git

```

Acesse o diretório do projeto com: 

```bash
cd shopping-cart.git
```

Instale as dependências do projeto usando `yarn` ou `npm` :

```
yarn install

# ou

npm install
```

No diretório do projeto podes rodar a aplicação com:

```
yarn start

# ou

npm start
```

Abra no browser [http://localhost:3000](http://localhost:3000) para acessar a aplicação.

