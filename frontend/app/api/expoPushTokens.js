import client from "./client";

const register = (pushToken) =>{
  client.post("/expoPushTokens", { token: pushToken });
//console.log(pushToken)
}

export default {
  register,
};
