"use strict";

import express from 'express';
import path from "path";
import  {jades} from "./lib/jades.js";



const __dirname = path.resolve();

const app = express();

app.set("views",path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine",'jade');



app.get("/",jades.index);
app.get("/signup",jades.signup);
app.get('/cart',jades.Cart)
app.get("/shop",jades.shop);
app.get('/signin',jades.signin);

app.use(jades.notFound);

app.listen(3000,()=>console.log(`Server listening at port 3000`));