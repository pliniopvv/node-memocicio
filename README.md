# App MemoCício

Compilar o `back`:
- `npm run build` dirá compilar na pasta `../front/server`.

Compilar o `front`:
- copie os arquivos `.env`, para a pasta `front` para rodar `npm run electron-build`
- copie o banco de dados (com o nome `database.db`) para a pasta `server`
- copie o arquivo `ormconfig.json` para a pasta `server` e realize as alterações abaixo.
- execute `npm run package`
- (Se já não tiver) Copie o banco de dados para a pasta do arquivo compilado .

Altere a linha:
```json
    "entities": [
        "src/entity/*.ts"
    ]
```
para
```json
    "entities": [
        "server/entity/*.js"
    ]
```


#ORMCONFIG.JSON
```json
[{
    "name": "devop",
    "type": "sqlite",
    "database": "database.db",
    "synchronize": false,
    "logging": false,
    "entities": [
        "server/entity/*.js"
    ]
}, {
    "name": "production",
    "type": "sqlite",
    "database": "../../../database.db",
    "synchronize": false,
    "logging": false,
    "entities": [
      "resources/app/server/entity/*.js"
    ]
}]
```