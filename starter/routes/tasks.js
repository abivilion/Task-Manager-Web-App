const express = require('express')
const router  = express.Router();

const { getALLTasks,
        createTask,
        getTask,
        updateTask,
        deleteTask,
        
         } = require('../controllers/tasks')

// all these not need anything
router.route('/').get(getALLTasks).post(createTask)

//all these needs id 
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports=router