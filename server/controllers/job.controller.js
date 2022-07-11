const { valid } = require('joi');
const js = require('../services/jobs.service');
const { jobSchema } = require('../validators/job.validator');


getall = async (req, res, next)=>{
    try {
       
        res.status(200).send(await js.getAll());   // send a json response to show all job Details
    } catch(e) {
     
        console.log(e);   // console log the error so we can see it in the console
        res.status(500).json({message : " Not Connected "});
    }
};

 get = async (req, res, next) => {
     
     try {

      const result = await js.gets(req.params.id);
     
      if (result.length === 0)
      return res.status(404).send({ message: 'id not found' });  // Returns a message if the given ID is not found
     
      return res.send({ jobDetails : result });  // send a json response to show the job Details for the given ID

  } catch(e) {

      console.log(e);  // console log the error so we can see it in the console
      
      res.status(500).json({message : "connection Error"}); // Returns a message when there is database connection error
  }
}

 create = async (req, res, next) => {
  try {
    let data= req.body;
    const result = await jobSchema.validateAsync(data);    
      const createdPost =  await js.creates(data);

      res.status(200).json({ message: 'job created', data : createdPost.insertId }) 
  

  } catch (err) {
    res.json(err.message);
  }
}

 update = async (req, res, next)  => {
  try {

    const result = await js.updates(req.params.id);   
    if (result.affectedRows == 0)
    return res.status(404).send({ message: 'id not found' });  // Returns a message if the given ID is not found
   
    return res.send({ message : "job updated "  });  // send a json response to show the job Details for the given ID

} catch(e) {

    console.log(e);  // console log the error so we can see it in the console
    
    res.status(500).json({message : "connection Error "  ,message: "job not deleted"}); // Returns a message when there is database connection error
}
}

 remove= async (req, res, next) => {
  try {


    const result = await js.removes(req.params.id);
    if (result.affectedRows == 0)
    return res.status(404).send({ message: 'id not found' });  // Returns a message if the given ID is not found
   
    return res.send({ message : "job deleted"  });  // send a json response to show the job Details for the given ID

} catch(e) {

    console.log(e);  // console log the error so we can see it in the console
    
    res.status(500).json({message : "connection Error"}); // Returns a message when there is database connection error
}
}

module.exports = {
  getall,
  get,
  create,
  update,
  remove
};
 