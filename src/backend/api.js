export const wait = (ms) => new Promise((res) => setTimeout(res, ms));

export const loginUser = async ({ email, password }) => {
  await wait(500);
  if (email === "test@gmail.com" && password === "1234") {
    return {
      user: { email },
      accesToken: "fake-jwt-token",
    };
  } else {
    throw new Error("invalid credentials");
  }
};
