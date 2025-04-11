const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('./keys');
const LoginService = require('../services/loginService');

module.exports = (passport) => {
    const opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = keys.secretOrKey;

    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        try {
            const loginService = new LoginService();
            const user = await loginService.findById(jwt_payload.id);

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (err) {
            return done(err, false);
        }
    }));
};
