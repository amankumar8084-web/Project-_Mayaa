const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./src/config/db');

dotenv.config({ path: path.join(__dirname, '.env') });
connectDB();

const app = require('./src/app');

app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running on port ${process.env.PORT || 3000}`);
})