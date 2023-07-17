// How do you handle errors properly in NodeJS/ExpressJS applications?

/**
 *      We use try and catch block for handling the errors in NodeJS/ExpressJS.
 *      another way for this is to make .then and .catch for your promises if it throws any error it will catch in catch block
 *
 *      Here are the examples for these methods:
 */

/**
 *      suppose we are requsting for user in express server so we will do something like this
 */

app.get("/user", async (req, res) => {
  const { email } = req.body;
  try {
    // User is the UserModel from mongoose
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      user: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Something went wrong",
    });
  }
});

app.get("/user", (req, res) => {
  const { email } = req.body;
  // User is the UserModel from mongoose
  const user = User.findOne({
    email,
  })
    .then((user) => {
      return res.status(200).json({
        user: user,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: err.message || "Something went wrong",
      });
    });
});
