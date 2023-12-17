// eslint-disable-next-line @typescript-eslint/no-var-requires
const app = require('./app')

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>
    console.log(`Server run on port ${PORT}`))