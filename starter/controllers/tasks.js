const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')




// GET ALL TASK---------------------------------------------------------
const getALLTasks = asyncWrapper (async (req, res) => {
    // try {
        const tasks = await Task.find({})
        res.status(200).json({tasks })
    // }
    // catch(err)
    // {
    //     res.status(500).json({"Something Bad Occurs":err})
    // }
    // res.send('Get ALL ACCESS')
})

// CREATE A TASK-------------------------------------------------------
const createTask = asyncWrapper( async (req, res) => {
    // res.send('Create ACCESS')
    // try {
        const task = await Task.create(req.body)
        res.status(201).json({task});
        // res.json(req.body);
    // }
    // if validation failed then, its server error 500
    // catch(err) {
        
    //     res.status(500).json(err);

    // }
    
})

//GETTING A TASK----------------------------------------------------------
const getTask = asyncWrapper( async (req, res,next) => {
    // try {
        const {id:taskID} = req.params

       // finding the task  
        const task = await Task.findOne({_id:taskID});
        // res.json({foundtask})

        // if ID  doesn't found the findOne return NULL
        if(!task)
        {
            return next(createCustomError( `Invalid ID :No task wiht ID Exists : ${taskID}`,404))
            // return res.status(404).json({"Invalid ID ":`No task wiht ID Exists : ${taskID}`})
        }
        res.status(200).json({task})
    // } 
    // catch(err) {
    // res.status(500).json({"Error Occured - ":err})
    //  }
 
})
// DELETE A TASK----------------------------------------------------------
const deleteTask = asyncWrapper( async (req, res,next) => {
    // try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        
        if(!task)
        {
            return next(createCustomError(`No task with ID :${taskID} found!`,404))
            // return res.status(404).json({msg:`No task with ID :${taskID} found!`})
         }
       res.status(200).json({task}); // response after successfully executing operations
    // }
    // catch(err)
    // {
    //     res.status(500).json({"Error Occured ":err})
    // }
    // res.send('Delete ACCESS')
})

// UPDATE A TASK----------------------------------------------------------
const updateTask = asyncWrapper( async(req, res, next) => {
    //  try{
         const {id:taskID} =req.params;
         const task = await Task.findOneAndUpdate({_id:taskID},req.body, {
             new:true,
             runValidators:true,
         })
  
        if(!task) // if  task is not found
        {           
            return next(createCustomError(`No task with ID :${taskID} found!`,404))

            // return res.status(404).json({NOT_FOUND_ERROR:`No Task with id : ${taskID} found!`})
        }

        // everything run successfullly 
         res.status(200).json({task})
    //  }
    
    //  catch(err) {
    //     res.status(500).json({"Error Occured ":err})
    //  }

    // res.send('Update ACCESS')
})




// exporter
module.exports = {
    getALLTasks, 
    createTask, 
    getTask,
    updateTask,
     deleteTask
}