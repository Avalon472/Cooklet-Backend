import DailyUsage from "../models/dailyUsage";

export const dailyLimit = async (req, res, next) => {
    try {
        //YYYY-MM-DD format
        const today = new Date().toISOString().slice(0,10) 

        //returnDocument option returns result post-increment and not pre-increment,
        //upsert will update existing record or create one if none exists
        //increments count by one after pulling record
        const result = await DailyUsage.findOneAndUpdate(
            { date: today},
            {$inc: {count: 1}},
            {returnDocument: 'after', upsert: true}
        )

        //Rollback if found document is over the limit
       if (result.count > 20) {
            await DailyUsage.updateOne(
                { date: today },
                { $inc: { count: -1 } }
            )
            return res.status(429).json({ error: "Global daily limit reached" })
        }

        next()
    } catch (error) {
        console.log("Error in the daily limit middleware", error);
    res.status(500).json({ error: "Internal server error" });
    }
}