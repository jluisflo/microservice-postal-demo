const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const postalRoute = require('./api/routes/postal.route');
app.use(postalRoute)

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});