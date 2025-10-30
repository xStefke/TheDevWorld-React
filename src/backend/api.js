let fakeAccessExpiry=Date.now()+5000;
const refreshTokenExpiry=Date.now()+30*24*60*60*1000;
export const wait = (ms) => new Promise((res) => setTimeout(res, ms));

export const loginUser = async ({ email, password }) => {
  await wait(500);
  if (email === "test@gmail.com" && password === "1234") {
    return {
      user: { email },
      accessToken: "fake-access-token",
      refreshToken: "fake-refresh-token"
    };
  } else {
    throw new Error("invalid credentials");
  }
};

export const getMe = async (token) =>{
  await wait(300);

  if (token !== "fake-access-token" || Date.now() > fakeAccessExpiry) {
    throw new Error("Invalid token");
  }

  return {
    user: { email: "test@gmail.com" },
  };
}
export const refreshAccesToken = async (token) =>{
  await wait(300);
  if (
    token !== "fake-refresh-token" ||
    Date.now() > refreshTokenExpiry
  ) {
    throw new Error("Invalid refresh token");
  }

  fakeAccessExpiry = Date.now() + 5000; 
  return { accessToken: "fake-access-token" };
}
