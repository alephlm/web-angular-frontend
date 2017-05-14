# web-angular-frontend
Aplicação front-end usada para a comunicacao com o servidor do projeto [web-android-spring-backend](https://github.com/alephlm/web-android-spring-backend)

## Modo de Inicialização
Depois de clonar este repositório vá ate o arquivo app.js e mude a constante API_URL com o IP e PORTA do seu servidor.  
(neste caso o servidor instanciado do projeto de [backend](https://github.com/alephlm/web-android-spring-backend))
```shell
$ git clone https://github.com/alephlm/web-angular-frontend.git
$ cd web-angular-frontend/
```
```javascript
//app.js
.constant('API_URL', 'http://SERVER_IP:SERVER_PORT')
```
Depois basta iniciar um simples servidor web na pasta clonada. Ex:
```shell
$ http-server
```
Neste exemplo foi usado o servidor http-server. Mas qualquer servidor pode ser usado.  
[Aqui](https://gist.github.com/willurd/5720255) há uma lista de vários servidores pequenos.
Distribuiçes Ubuntu normalmente já vem com o servidor ```python -m SimpleHTTPServer``` que também pode ser usado.

## Tecnologias Usadas no projetos.
Nesse projeto foi utilizado [angularJs](https://angularjs.org/) como principal ferramenta para o desenvolvimento da aplicação.

