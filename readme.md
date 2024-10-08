# README - Fluxo de Login com Firebase Auth e Firestore

## Descrição do Projeto

Este repositório contém um projeto acadêmico que implementa um fluxo de login utilizando o Firebase Authentication e o Firestore. O objetivo principal é demonstrar a integração de serviços de autenticação e banco de dados em uma aplicação React Native.

## Tecnologias Utilizadas

- **Firebase Authentication**: Serviço que permite a autenticação de usuários através de e-mail/senha, redes sociais e outros provedores de identidade.
- **Cloud Firestore**: Banco de dados NoSQL, orientado a documentos, ele permite armazenar e sincronizar dados entre usuários.

## Fluxo de Login

1. **Registro de Usuário**:
   - O usuário preenche um formulário com e-mail e senha.
   - O sistema utiliza o Firebase Authentication para criar um novo usuário.
   - As informações do usuário são armazenadas no Firestore, tendo o uid como primary-key, incluindo dados adicionais, como nome.

2. **Login de Usuário**:
   - O usuário insere suas credenciais em um formulário de login.
   - O Firebase Authentication valida as credenciais.
   - Após a validação, o usuário é autenticado e seu UID é utilizado para acessar os dados no Firestore.

3. **Logout**:
   - O usuário pode realizar o logout, que desconecta a sessão e limpa os dados da aplicação.

## Instruções de Uso

1. Clone o repositório:
   ```bash
   git clone https://github.com/omaatheus/TrackartApp.git
   cd trackart
   npm start
