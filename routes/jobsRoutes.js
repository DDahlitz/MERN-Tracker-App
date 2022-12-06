import express from 'express'
const router = express.Router()

import {
    createJob,
    deleteJob,
    getAllJobs,
    updateJob,
    showStats,
} from '../controllers/jobsController.js'

router.route('/').post(createJob).get(getAllJobs)
        //stats has to be placed above if for it to work appropriately
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router