# ProjetoNuvem
Guia do Bebê: aplicação web interativa que organiza informações essenciais sobre cuidados com bebês. Frontend em HTML/JS, backend em Node.js/Express, containerizado com Docker e deploy na AWS EC2.

p isa: 
instalar docker e afins:
wsl --install
wsl --set-default-version 2
docker version
docker info
docker build -t backend-bebe .
docker run -p 25000:25000 backend-bebe

rodar backend - separadamente
cd backend-bebe
docker build -t backend-bebe .
docker run -p 25000:25000 backend-bebe

rodar frontend - separadamente
cd frontend-bebe
docker build -t frontend-bebe .
docker run -d -p 8080:80 frontend-bebe

[rodar os dois juntinhos e shallow]
pasta raiz - ProjetoNuvem
docker-compose up --build

back: http://localhost:25000/api/data
front: http://localhost:8080

