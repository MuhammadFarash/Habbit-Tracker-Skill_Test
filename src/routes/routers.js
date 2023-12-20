import  express  from "express";
import HabbitController from "../controller/controller.js";

const router = express.Router()

const habbitController = new HabbitController()

router.get("/", (req,res)=>{
    habbitController.getAll(req,res)
});

router.post("/add-habit", (req,res)=>{
    habbitController.addHabbit(req,res)
});

router.post("/update-status/:id", (req,res)=>{
    habbitController.updateHabit(req,res)
});
// router.get("/:id", (req,res)=>{
//     habbitController.deleteHabbit(req,res)
// });



export default router;
