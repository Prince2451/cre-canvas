export const saltRound = +process.env.BCRYPT_SALT_ROUND;
export const jwtSecret = process.env.JWT_TOKEN_SECRET;
export const jwtRefreshTokenSecret = process.env.JWT_REFRESH_TOKEN_SECRET;
export const tokenExpiry =
  +process.env.TOKEN_EXPIRY * 60 * 60; /* should be in hours */
