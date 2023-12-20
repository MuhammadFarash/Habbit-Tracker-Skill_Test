import mongoose from "mongoose";
import { habbitSchema } from "./model.schema.js";

export const Habit = mongoose.model("habbit" , habbitSchema)

export class DeleteHabbit{

    static delete(id) {
        const index = Habit.findByIdAndDelete(
          (p) => p.id == id
        );
        Habit.splice(index, 1);
      }
}