<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/BrunoCarvalhoFeitosa/BeTheHero">
    <img src="/public/google-logo.svg" width="500" height="160" alt="Logo" />
  </a>

  <p align="center">
    Clone do Google utilizando Next.js, Tailwind CSS e a API de busca da própria plataforma.
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
        <li><a href="#hospedagem">Hospedagem</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando-o-projeto">Iniciando o projeto</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#license">Licenças</a></li>
    <li><a href="#contato">Contato</a></li>
    <li><a href="#reconhecimentos">Reconhecimentos</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o projeto
Este app foi feito em Next.js, Tailwind CSS e Stripe, possuindo funcionalidades de login atráves do Next-Auth e funcionalidades de compra através de hooks e também do Stripe que possibilita o fechamento de compras utilizando um cartão de crédito, por exemplo.

### Home Page
Home page contendo links úteis e a busca de termos utilizando a própria API da plataforma.
![HomeGoogle](https://user-images.githubusercontent.com/46093815/154827730-73030ef4-a86c-4a8d-9ec4-3f361dfd8dfa.png)

### Search Page
Página contendo os resultados buscados juntamente com a paginação.
![BuscaGoogle](https://user-images.githubusercontent.com/46093815/154827743-d1767b16-d737-43ce-8777-d6b0889181fe.png)

### Feito com

* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Vercel](https://vercel.com/)

### Hospedagem

O app está em produção no endereço: (https://google-clone-eosin.vercel.app/)

<!-- GETTING STARTED -->
## Iniciando o projeto

Primeiramente será necessário clonar este projeto em (https://github.com/BrunoCarvalhoFeitosa/GoogleClone.git), após o download será necessário abrir este projeto no seu
editor e no terminal digitar npm install ou yarn, posteriormente é só rodar em seu terminal o comando yarn dev e o projeto abrirá localmente na porta 3000. Para a busca funcionar, será necessário obter sua própria API_KEY e CONTEXT_KEY, veja abaixo como obtê-las.

Para obter sua API_KEY bastar acessar: (https://developers.google.com/custom-search/v1/introduction).

Para obter sua CONTEXT_KEY basta acessar: (https://cse.google.com/cse/create/new).

### Pré-requisitos

* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/BrunoCarvalhoFeitosa/GoogleClone.git
   ```
2. Instale os pacotes do NPM
   ```sh
   npm install ou yarn
   ```
   
3. Inicie o projeto
   ```sh
   npm run dev ou yarn dev
   ```   

<!-- LICENSE -->
## License

Distribuído sob a licença MIT.

<!-- CONTACT -->
## Contato

Bruno Carvalho Feitosa - [GitHub](https://github.com/BrunoCarvalhoFeitosa) - [LinkedIn](https://www.linkedin.com/in/bruno-carvalho-feitosa/)

<!-- ACKNOWLEDGEMENTS -->
## Reconhecimentos
* [Google](https://www.google.com.br/)
