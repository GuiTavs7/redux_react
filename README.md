# Redux shop

## Como rodar o projeto

Instalar as dependências
```bash
npm install
```

Execute a aplicação
```bash
npm run dev
```

## De onde vem os produtos da listagem?

A lista de produtos da listagem inicial vem do json de produtos:

src/json/products.json

----------------------------
## Fluxo de mudança do estado

No produto da listagem tem um botão pra adicionar ao carrinho 

Quando o usuário clicar em adicionar o produto dispara uma action "ADD_PRODUCT_TO_CART"

Essa action vai ser enviada ao reducer que a ouve, pegando todos os produtos atuais no carrinho e adicionando um novo

O novo estado é uma lista com o produto adicionado, todos os componentes que usam esse estado são atualizados.