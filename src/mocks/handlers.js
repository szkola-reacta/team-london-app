import { rest } from "msw";

import users from "./data/users.json";

const userHandlers = [
  rest.post("/login", (req, res, ctx) => {
    const user = users.find(
      (u) => u.login === req.body.login && u.password === req.body.password
    );

    if (user) {
      const { name, accessToken } = user;
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({
          name,
          accessToken,
        })
      );
    } else {
      return res(
        ctx.status(401),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    // sessionStorage.setItem('is-authenticated', 'true')
  })
];

export const handlers = [
 ...userHandlers
];
