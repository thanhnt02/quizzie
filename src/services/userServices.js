import { del, get, patch, post } from "../utils/request";
import {getCookie} from "../helpers/cookie"

export const getEmail = async (email) => {
  const result = await get(`users?email=${email}`);
  return result;
}

export const login = async (email, pass) => {
  const result = await get(`users?email=${email}&password=${pass}`);
  return result;
}

export const register = async (data) => {
  const result = await post("users", data);
  return result;
}

export const getUserId = async () => {
  const result = await getEmail(getCookie("email"));
  return(result[0].id);
}

// export const editItem = async (id, data) => {
//   const result = await patch(`products/${id}`, data)
//   return result;
// }

// export const deleteItem = async (id) => {
//   const result = await del(`products/${id}`)
//   return result;
// }