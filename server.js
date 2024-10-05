require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// DB
const connectDb = require('./db/db');
// Routers
const authRouter = require('./routes/auth-route');
const deviceRouter = require('./routes/device-route');
const adminRouter = require('./routes/admin-route');
const contactRouter = require('./routes/contact-route');
const errorMiddleware = require('./middleware/error-middleware');

const app = express();

app.use(express.json());

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, PATCH, DELETE",
    credentials: true,
}

app.use(cors(corsOptions));

app.use("/api/auth", authRouter);
app.use("/api/device", deviceRouter);
app.use("/api/admin", adminRouter);
app.use("/api/contact", contactRouter);


app.use(errorMiddleware);

// use the client
app.use(express.static(path.join(__dirname, '/client/dist')));

// Render client for every path
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/dist/index.html'));
})

app.get('/', (req, res) => {
    res.send("Welcome To ShieldLink Technolytix");
})

const port = 4000;
// const host = '127.0.0.1';


connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Server is started on http://127.0.0.1:${port}`);

    })
})