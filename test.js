const test = require('tape');
const app = require('./app');
test('Teste do aplicativo', (t) => {
    t.assert(app.boraTestar() === true, "App está funcionando");
    t.end();
})