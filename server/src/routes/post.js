import express from "express";
import {list,create} from '../controllers/post.js'
const router = express.Router();

router.route('/')
    .get( list)
    .post(create)


export default router;
