var h1 = React.createElement('h1', null, 'O Diego está aprendendo React.js') // Tipo do elemento, propriedades, conteúdo

const container = document.getElementById('app');

const root = ReactDOM.createRoot(container);

root.render(h1);