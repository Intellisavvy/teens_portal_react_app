const { valid } = require('joi');
const usersService = require('../services/users.service');
const { userSchema } = require('../validators/job.validator');


async function getAll(req, res, next) {

  try {
   const x = await usersService.getAll()
    res.json(x);
  } catch (err) {
    console.error(`Error while getting`, err.message);
    next(err);
  }
}

async function get(req, res, next) {
     console.log(req.params.id);
  try {
    res.json(await usersService.get(req.params.id));


  } catch (err) {
    console.error(`Error while getting programming languages`, err.message);
    next(err);
  }
}
async function create(req, res, next) {
  try {
    let data= req.body;
    const value = await userSchema.validateAsync(data);
    res.json(await usersService.create(data));

  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await usersService.update(req.params.id));
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await usersService.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
}

module.exports = {
  getAll,
  get,
  create,
  update,
  remove
};