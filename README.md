# ProjetoNuvem - Guia do Bebê 
Aplicação web interativa que organiza informações essenciais sobre cuidados com bebês. Frontend em HTML/JS, backend em Node.js/Express, containerizado com Docker e deploy na AWS EC2.

* Link para o vídeo com explicação das configurações e demo: [Configs para o deploy da aplicação via AWS](https://www.youtube.com/watch?v=BOiTgWbgy2o)
* Acesse a documentação completa

### Como rodar a aplicação em ambiente local:
1. instale o Docker e faça login <br>
2. vá ao seu terminal CMD ou Vs Code e insira os codigos: <br>
• wsl --install<br>
•	wsl --set-default-version 2<br>
•	docker version<br>
•	docker info<br>

3. para executar o front-end:<br>
•	cd frontend-bebe<br>
•	docker build -t frontend-bebe .<br>
•	docker run -d -p 8080:80 frontend-bebe<br>

4. para executar o back-end:<br>
•	cd backend-bebe<br>
•	docker build -t backend-bebe .<br>
•	docker run -p 25000:25000 backend-bebe <br>

5. excecutar os dois juntos:
•	pasta raiz - ProjetoNuvem<br>
•	docker-compose up --build<br>
•	back: http://localhost:25000/api/data<br>
•	front: http://localhost:8080<br>


Projeto desenvolvido por: <br>
Isabella Sofia Martins - 10420398 <br> Jennifer Tondade - 10420574
