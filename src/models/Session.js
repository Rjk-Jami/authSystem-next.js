import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  userAgent: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
  lastActive: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    default: () => {
      // expire in 24 hours from creation
      const date = new Date();
      date.setDate(date.getDate() + 1);
      return date;
    },
  },
});

// Create a TTL index that automatically removes expired sessions
SessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });


const Session =
  mongoose.models.Session || mongoose.model("Session", SessionSchema);

export default Session;
