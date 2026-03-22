# Perfil-de-Usu-rio-Interativo
Este projeto cria uma página de perfil simples onde o usuário pode:  Inserir o próprio nome, que substitui o título padrão. Enviar uma imagem para substituir a imagem padrão do usuário.  Os dados do usuário (nome e imagem) são salvos no localStorage, garantindo que permaneçam mesmo após recarregar a página.


Funcionalidades: 

-Atualização de nome
-Campo de texto para digitar o nome.
-Validação para impedir envio de nomes vazios.
-Nome atualizado é salvo no navegador (localStorage).

-Atualização de imagem
-Campo de upload de imagem.
-Valida se o arquivo é uma imagem (image/*).
-Limite de tamanho de arquivo: 2MB.

Ao enviar, a imagem substitui a imagem padrão e é salva no localStorage.
Nome e imagem são carregados automaticamente ao abrir a página, mantendo as preferências do usuário.

Tecnologias utilizadas:

-HTML5
-CSS3
-JavaScript (ES6)
-localStorage para persistência de dados
