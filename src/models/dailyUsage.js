import mongoose from "mongoose";

export const DailyUsageSchema = new mongoose.Schema({
    date: {type: String, required: true, unique: true},
    count: {type: Number, default: 0}
})

const DailyUsage = mongoose.model("DailyUsage", DailyUsageSchema)
export default DailyUsage