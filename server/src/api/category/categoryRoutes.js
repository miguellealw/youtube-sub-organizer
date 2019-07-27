import { Router } from "express";
import { cateogoryModel } from '../../../config/db';

const routes = new Router();

routes.get('/categories', (req, res) => {
  res.send("this is the categories route")
})

routes.post('/categories', (req, res) => {
  res.send("this will create a categories")
})

routes.put('/categories/:id', (req, res) => {
  res.send(`this will update the category with id of ${req.params.id}`)
})

routes.delete('/categories/:id', (req, res) => {
  res.send(`this will delete the category with id of ${req.params.id}`)
})

export default routes