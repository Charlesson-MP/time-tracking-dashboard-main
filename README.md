# 🖥️ Time Tracking Dashboard

## 📖 Sobre o Projeto
Este é um projeto de um painel de controle para rastreamento de tempo, desenvolvido para praticar conceitos de CSS, Flexbox e JavaScript assíncrono. O dashboard apresenta dados de atividades diárias, semanais e mensais em um layout responsivo, adaptando-se a diferentes tamanhos de tela.

## ⚙️ Tecnologias Utilizadas
O projeto foi construído utilizando as seguintes tecnologias:

- **HTML5**: Para estruturar o conteúdo do painel.
- **CSS3**: Para estilização e responsividade do layout, com foco em Flexbox.
- **JavaScript (ES6+)**: Para manipular o DOM e consumir dados de um arquivo JSON.
- **Fetch API**: Para a requisição assíncrona dos dados do projeto.

## 🚧 Desafios Enfrentados
O desenvolvimento deste projeto trouxe alguns desafios importantes:

- **Consumo de Dados**: A primeira dificuldade foi a recuperação dos dados do arquivo `data.json` utilizando a Fetch API e JavaScript assíncrono. O desafio foi garantir que os dados fossem carregados corretamente antes da renderização do painel.

- **Responsividade e Estilização**: A estilização dos cartões (cards) para o layout de desktop com CSS  exigiu um planejamento cuidadoso para garantir que o espaçamento e o alinhamento ficassem perfeitos, evitando problemas de "vazamento" de elementos e garantindo a adaptabilidade do layout.

## 📂 Estrutura de Arquivos

```
/time-tracking-dashboard-main
├── src/
│   ├── css/
│   │   ├── media.css
│   │   └── style.css
│   ├── images/
│   │   ├── favicon-32x32.png
│   │   ├── icon-ellipsis.svg
│   │   ├── icon-exercise.svg
│   │   ├── icon-play.svg
│   │   ├── icon-self-care.svg
│   │   ├── icon-social.svg
│   │   ├── icon-study.svg
│   │   ├── icon-work.svg
│   │   └── image-jeremy.png
│   └── script/
│       └── script.js
├── data.json
├── index.html
├── LICENSE
└── README.md
```

## ▶️ Como Acessar o Projeto

Você pode acessar o projeto de duas formas:

1. Através do GitHub Pages: Clique no link para jogar diretamente no seu navegador: https://charlesson-mp.github.io/time-tracking-dashboard-main/

2. Através do Repositório GitHub: Você pode clonar o repositório para a sua máquina e executá-lo localmente: https://github.com/Charlesson-MP/adivinhe-o-numero

## ✍️ Contribuições

Sinta-se à vontade para contribuir com este projeto! Se você encontrar algum bug ou tiver sugestões de melhoria, abra uma issue ou um pull request.

## 📝 Licença
Este projeto está sob a licença GPL-3.0. Para mais detalhes, consulte o arquivo LICENSE.