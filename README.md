# 🌤️ Weather App - Consulta de Clima com Angular + OpenWeatherMap API

Este projeto é uma aplicação web simples desenvolvida em **Angular** que permite ao usuário consultar as condições climáticas de qualquer cidade do mundo em tempo real, utilizando a **OpenWeatherMap API**.

## 🎯 Objetivo

O objetivo deste projeto é fornecer uma interface amigável e responsiva onde o usuário pode:
- Buscar informações de clima de qualquer cidade.
- Ver detalhes como temperatura atual e descrição do clima.
- Exibir ícones representativos do clima atual.

Além disso, o projeto foi desenvolvido com foco em boas práticas de desenvolvimento web, como:
- Design responsivo.
- Código modular.
- Estrutura clara de arquivos Angular.

## 🛠️ Tecnologias Utilizadas

- **Angular (v17+)**
- **TypeScript**
- **HTML5 e CSS3 (com Flexbox e Gradiente)**
- **OpenWeatherMap API** ([https://openweathermap.org/api](https://openweathermap.org/api))

## 🚀 Funcionalidades

- Campo de input para o nome da cidade.
- Busca das condições climáticas em tempo real via OpenWeatherMap.
- Exibição do nome da cidade, país, temperatura (em Celsius) e descrição do clima.
- Exibição do ícone do clima correspondente.
- Mensagem de erro caso a cidade não seja encontrada.

## 📡 API Utilizada

A aplicação consome dados da **OpenWeatherMap API**, que fornece informações detalhadas de previsão do tempo. Para utilizar a API, é necessário obter uma chave de API gratuita no site oficial.

- Endpoint utilizado:

https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric&lang=pt_br


## 🗂️ Arquitetura de Pastas
  ```bash
    ├── .editorconfig
    ├── .gitignore
    ├── .vscode
        ├── extensions.json
        ├── launch.json
        └── tasks.json
    ├── README.md
    ├── angular.json
    ├── package-lock.json
    ├── package.json
    ├── public
        └── favicon.ico
    ├── src
        ├── app
        │   ├── app.component.css
        │   ├── app.component.html
        │   ├── app.component.spec.ts
        │   ├── app.component.ts
        │   ├── app.config.server.ts
        │   ├── app.config.ts
        │   ├── app.routes.server.ts
        │   └── app.routes.ts
        ├── environments
        │   └── environment.ts
        ├── index.html
        ├── main.server.ts
        ├── main.ts
        ├── server.ts
        └── styles.css
    ├── tsconfig.app.json
    ├── tsconfig.json
    └── tsconfig.spec.json
```

## 📌 Como rodar o projeto

1. Clone o repositório:
    ```bash
   git clone https://github.com/felipedestroo/clima-tempo.git
   cd clima-tempo

2. Instale as dependências:
    ```bash
    npm install
    
3. Configure sua chave da API da OpenWeatherMap no arquivo app.component.ts.

4. Rode o projeto localmente:
    ```bash
    ng serve
5. Acesse em: http://localhost:4200

Feito por Felipe Destro 🚀
