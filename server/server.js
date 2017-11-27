import express  from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import Coctail from './model/coctail';
import * as db from './utils/dbutils'

const app = express();

db.setUpConnection();

app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/coctails', (req, res)=>{
  db.listCoctails().then(data => res.send(data));
})
app.post('/coctails', (req, res)=> {
  db.createCoctail(req.body).then(data => res.send(data))
 })
app.delete('/coctails/:id', (req, res)=>{
  db.deleteCoctail(req.params.id).then(data => res.send(data))
 })

const server = app.listen(3001, () => {
    console.log(`Server is up and running on port 3001`);
});
