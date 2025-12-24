import rateLimit from "express-rate-limit";

export const generalLimiter = rateLimit({
    windowMs: 15*60*1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false
});

export const authLimiter = rateLimit({
    windowMs: 60*1000,
    max: 5,
    message: "Too many attempts. Try again later."
});