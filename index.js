import  express  from "express";
import bodyParser from "body-parser";
import fs from 'fs';
import path from "path";
import ejsLayouts from 'express-ejs-layouts';
import session from "express-session";
import { connectUsingMongoose } from "./src/config/mongoose.js";
import router from "./src/routes/routers.js";


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('src/views'))


// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(),'public')));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(ejsLayouts);
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views',path.join(path.resolve(),'src','views'))

app.use('/',router);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectUsingMongoose()
  });

