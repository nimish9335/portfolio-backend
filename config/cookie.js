const baseCookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
};

const accessTokenCookieOptions = {
    ...baseCookieOptions,
    maxAge: 15 * 60 * 1000, // 15 minutes
};

const refreshTokenCookieOptions = {
    ...baseCookieOptions,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};

module.exports = {
    accessTokenCookieOptions,
    refreshTokenCookieOptions,
};