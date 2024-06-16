import mongoose, {Schema, mongo} from "mongoose";

const topicSchema = new Schema (
    {
        title: String,
        description: String,
        facebook_url: String,
        cdn_url: String,
    }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema)
export default Topic;