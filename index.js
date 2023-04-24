const express = require('express');
const app = express();

app.use(express.static('./build'));

const path = require('path');
app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
console.log('server started on port:',PORT);
app.listen(PORT);