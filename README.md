![GitHub contributors](https://img.shields.io/github/contributors/usbangelo/covid19-telegramBot-nodejs?color=blue&logo=GitHub%20Sponsors&logoColor=white&style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/usbangelo/covid19-telegramBot-nodejs?logo=GitHub&style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/usbangelo/covid19-telegramBot-nodejs?logo=Python&logoColor=white&style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/usbangelo/covid19-telegramBot-nodejs?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/usbangelo/covid19-telegramBot-nodejs?color=blue&style=for-the-badge)
![GitHub Repo stars](https://img.shields.io/github/stars/usbangelo/covid19-telegramBot-nodejs?color=blue&logo=Star&style=for-the-badge)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/usbangelo/covid19-telegramBot-nodejs">
    <img src="https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Covid-19 TelegramBOT</h3>

  <p align="center">
    Um bot funcional e responsivo para telegram para você se informar sobre vacinação, cuidados/profilaxia, informações e ficar longe das fakenews.
    Esse bot foi desenvolvido para antender a cidade de Brasília-DF. Porém ele pode ter seu modelo aproveitado para sua cidade.
    <br />
    <a href="https://github.com/usbangelo/covid19-telegramBot-nodejs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/usbangelo/covid19-telegramBot-nodejs">View Demo</a>
    ·
    <a href="https://github.com/usbangelo/covid19-telegramBot-nodejs/issues">Report Bug</a>
    ·
    <a href="https://github.com/usbangelo/covid19-telegramBot-nodejs/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#construido-com">Construido com</a></li>
        <li><a href="#ajustes-e-melhorias">Ajustes e melhorias</a></li>
      </ul>
    </li>
    <li><a href="#-usando-o-bot">Uso</a></li>
    <li>
      <a>Acesso ao código</a>
      <ul>
        <li><a href="#-pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#-instalando">Instalação/Execução</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#-colaboradores">Colaboradores</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contato">Contato</a></li>
    <li><a href="#conhecimentosye">Conhecimentos</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Sobre o projeto

![alt text][telegrambot]

[telegrambot]: https://user-images.githubusercontent.com/50382278/149072595-aa51c310-2968-44e7-a77c-b6f21dcb40c6.png "COVID-19DFBot"

Devido a crise que ocorreu em 2020 e 2021 pela pandemia do Covid-19, a necessidade de acesso a fácil informação sobre a doença cresceu e a maioria das informações estão separadas na pela internet, para atender à centralização de informações e as fake news envolvendo o Covid-19 desenvolvemos esse bot do telegram que compila e entrega informações retiradas de fontes confiáveis como Secretaria de Saúde do DF, Site da OMS(Organização Mundial da Saúde). O usuário tem acesso aos postos de saúde mais próximos indicados para suas doses da vacina, informações sobre combate e profilaxia, recomendação de máscaras, informações, curiosidades, combate a fake news e incentivo das medidas recomendadas. O software faz integração com aplicativo do Telegram, onde o usuário realiza uma solicitação por ele e a mesma é processada, analisada pelo chatbot, a fim de sanar dúvidas relacionadas ao covid-19 com respostas automatizadas.

### Construido com

- [Python 3.9](https://www.python.org)

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Acesso a API do Telegram
- [x] Token do bot
- [x] Event Listener dos inputs do chat
- [x] Respostas automatizadas
- [x] 1️⃣ - Locais Postos de vacinação
- [x] 2️⃣ - Máscaras Recomendadas
- [x] 3️⃣ - Cuidados e Profilaxia
- [x] 4️⃣ - Taxa de eficácia das vacinas
- [x] 5️⃣ - Tempo de intervalo das doses
- [x] 6️⃣ - Link de redirecionamento (agendamento, cadastro, consulta e imprimir)
- [x] 7️⃣ - Como a vacina funciona
- [x] 8️⃣ - Terceira dose
- [x] 9️⃣ - A vacina contra a nova variante

## ☕ Usando o Bot

Para usar Covid-19 TelegramBOT, siga estas etapas:

Adicione o bot no seu telegram no link [t.me/CovidDFBot](t.me/CovidDFBot) e comece a usar.

```
Interaja com o bot respeitando os inputs recomendados durante a navegação do fluxo
```

_Para mais exemplos siga o fluxo aqui [Tutorial](https://example.com)_

### 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->

- Você instalou a versão mais recente `<python 3.9>`
- Você tem uma máquina `<Windows / Linux / Mac>`. Indique qual sistema operacional é compatível / não compatível.
- Você leu `<guia / link / documentação_relacionada_ao_projeto>`

### 🚀 Instalando

1. Clone the repo
   ```sh
   git clone https://github.com/usbangelo/covid19-telegramBot-nodejs
   ```
2. Install pip packages
   ```sh
   npm i
   ```
3. Enter your bot API in the code `index.js`
   ```JavaScript
   EXEMPLO
   const bot = new Telegraf("298163XXXXXX:AKSJHDXXXXXX_hqjkhdkXXXX_VAAXXXXX_d76XXX_cOCXXX");
   ```

<!-- ROADMAP -->

## Roadmap

1️⃣ - Locais Postos de vacinação
2️⃣ - Máscaras Recomendadas
3️⃣ - Cuidados e Profilaxia
4️⃣ - Taxa de eficácia das vacinas
5️⃣ - Tempo de intervalo das doses
6️⃣ - Link de redirecionamento
(agendamento, cadastro, consulta e imprimir)
7️⃣ - Como a vacina funciona
8️⃣ - Terceira dose
9️⃣ - A vacina contra a nova variante

<!-- CONTRIBUTING -->

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/50382278?v=4" width="100px;" alt="Avatar"/><br>
        <sub>
          <b>Angelo S Dorfey</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contato

Project Link: [https://github.com/usbangelo/covid19-telegramBot-nodejs](https://github.com/usbangelo/covid19-telegramBot-nodejs)

<!-- ACKNOWLEDGEMENTS -->

## Conhecimentos Utilizados

- [Telegram Bot API](https://core.telegram.org/bots/api)
- [Telegraf.js - v4.5.2](https://telegraf.js.org/)
- [CORONAVÍRUS BRASIL](https://covid.saude.gov.br/)
- [Brasil.io Site](https://brasil.io/dataset/covid19/caso/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/images/screenshot.png
