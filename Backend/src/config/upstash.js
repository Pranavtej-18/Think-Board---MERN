import {Ratelimit} from "@upstash/ratelimit"
import {Redis} from "@upstash/redis"

import dotEnv from "dotenv"

dotEnv.config();

// create a rateLimiter that allows 100req per 60sec
const ratelimit = new Ratelimit({
    redis:Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(10,"20 s")
});

export default ratelimit;