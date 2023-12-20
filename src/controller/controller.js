import { DeleteHabbit, Habit } from "../model/model.js";


export default class HabbitController{
    async getAll(req,res){
        const habits = await Habit.find();
        res.render('hab', { habits });

    }

    async addHabbit(req,res){
        const newHabit = new Habit({ name: req.body.habitName });
        await newHabit.save();
        res.redirect('/');
    }

    async updateHabit(req,res){
        const habit = await Habit.findById(req.params.id);
        habit.status = req.body.status;
        await habit.save();
        res.redirect('/');
    }

    // async deleteHabbit(req, res){
    //     const {id} = req.params;
    //     console.log(id);
    //     const documentProduct = await Habit.findByIdAndDelete(id);
    //     // if (!documentProduct) {
    //     //     res.status(500).json(err);
    //     // } 
    //     await documentProduct.save();
    //     res.redirect('/')
    // }
}
