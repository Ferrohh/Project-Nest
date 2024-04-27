import express, {Router, Request, Response, Application} from 'express';
const router: Router = Router();

router
    .route('/:id')
    .get((req, res) => {
        req.params.id;
        res.json({"message": "get project with ID ${req.params.id}"});
    })
    .put((req, res) => {
        req.params.id;
        res.send("update project with ID ${req.params.id}");
    })
    .delete((req, res) => {
        req.params.id;
        res.send("delete project with ID ${req.params.id}");
    })

export default router