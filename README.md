# Gestão Produtos
Projeto desenvolvido em Angular v13.x , Django v4.x , Docker e Bootstrap

Funcionalidades : CRUD, Listagem, Webservice de consulta, paginação no backend, swagger com endpoints

Primeiramente clonar o repositório, após isso seguir as duas etapas(em dois terminais):  

# Como executar Backend
No caminho backend/GestaoProdutos digite:
```
docker-compose build
```
Depois digite:
```
docker-compose up
```
Acessar a aplicação backend em:

```
http://localhost/api/produtos/
```

Acessar o swagger:
```
http://localhost/swagger/schema/
```

# Como executar Frontend
No caminho frontend/produtos_front executar:
```
npm install
```
Após baixado as depedências, iniciar a aplicação:

```
npm start
```

Acessar a aplicação frontend em 

```
http://localhost:4200/
```
