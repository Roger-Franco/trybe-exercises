inserçoes no terminal:

- depois de criado o projeto Node, 
git init
git add .
git commit -m 'First commit'

npm install express

- inicializo o Heroku com: 
heroku create

git add .
git commit -m 'Install express and add index.js'

Publicar o Heroku:
git push heroku master

Add um variavel:
heroku config:set MESSAGE='Variáveis funcionam!!!' --app nome-do-seu-app-12345 (desolate-atoll-28413)

Add a variavel mensagem no index

Add .
git commit -m "Adiciona mensagem de response por variável de ambiente"

- Deploy das alteraçoes
git push heroku master

Criaçao do arquivo indexProcfile e Procfile. Add e commit:
git add .
git commit -m "Adiciona Procfile"

- Deploy das alteraçoes
git push heroku master

-Deploy em multi ambientes (produção e homologação)
git remote rename heroku homolog

- Criar um novo remote chamado prod:
heroku create --remote prod

-Alterando a variavel ambiente de homolog
heroku config:set MESSAGE="HOMOLOG: Variáveis de ambiente funcionam" --app desolate-atoll-28413

-Alterando a variavel ambiente de PROD
heroku config:set MESSAGE="PROD: Variáveis de ambiente funcionam" --app protected-brushlands-62200

** Com React **
npx create-react-app my-app

cd my-app

# Só necessário se CRA não criar automaticamente um novo repositório
git init
git add .
git commit -m 'react-create-app on Heroku'

heroku create -b https://github.com/mars/create-react-app-buildpack.git

git push heroku master