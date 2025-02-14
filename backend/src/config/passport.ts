import {
  Strategy as JwtStrategy,
  ExtractJwt,
  StrategyOptions,
} from "passport-jwt";
import { PassportStatic } from "passport";
import { config } from "../config/app.config";

import { getCurrentUserService } from "../modules/user/user.service";

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.JWT.SECRET,
  algorithms: ["HS256"],
};

export const configurePassport = (passport: PassportStatic) => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        const user = await getCurrentUserService(payload.userId);
        if (!user) {
          return done(null, false);
        }
        
        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    })
  );
};
