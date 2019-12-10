import express from 'express';
import db from '../db';
import conflict, { courseConflictMsg, classConflict } from '../lib/conflicts';

const router = express.Router();

// grab the user list to select from
router.get('/list', (req, res) => {
    res.json({ message: 'TODO' });
});

// grab basic student audit information
router.get('/api/users/:studentId/audit', (req, res) => {
    const { studentId } = req.params;
    // TODO: replace with a db query
    res.json({ message: 'test', studentId });
});

router.get('/api/users/:studentId/completed', (req, res) => {
    const { studentId } = req.params;
    db.reads
        .getMyCompletedCourses(studentId)
        .then(data => {
            res.json({ data });
        })
        .catch(e => {
            console.log(e);
            res.send('error :) -- check server logs');
        });
});

// grab student registration
router.get('/api/users/:studentId/registration', (req, res) => {
    const { studentId } = req.params;
    db.reads
        .getMyRegistration(studentId)
        .then(regData => {
            res.json({ data: regData });
        })
        .catch(e => {
            console.log(e);
            res.send('error :) -- check server logs');
        });
});

router.post('/api/users/:studentId/register', (req, res) => {
    const { data } = req.body;
    // const { course, studentId } = data;
    /* conflict(data).then(conflictData => {
        res.json(conflictData);
    }); */
    classConflict(data).then(conflictSend =>{
        res.json({data: conflictSend});
    }).catch(e => {
        console.long(e);
        res.send('error :) -- check server logs')
    });
});















module.exports = router;
