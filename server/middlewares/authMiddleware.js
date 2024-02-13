import JWT from "jsonwebtoken";

export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send({
        success: false,
        message: "Token not found!",
      });
    }

    const decode = JWT.verify(token, process.env.SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Token verification failed!",
      error,
    });
  }
};
