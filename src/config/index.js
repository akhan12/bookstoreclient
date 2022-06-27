const environmentUrls = new Map();

environmentUrls.set('localhost','http://localhost:8080');
environmentUrls.set('book-demo-store23.herokuapp.com',
'https://book-demo-store23.herokuapp.com/'
);

export default environmentUrls.get(window.location.hostname);