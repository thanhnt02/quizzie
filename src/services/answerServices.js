import { del, get, patch, post } from "../utils/request";

export const getAnswer = async (userId) => {
  const result = await get(`answers?userId=${userId}`);
  return result;
}

export const getAnswerById = async (id) => {
  const result = await get(`answers/${id}`);
  return result;
}

export const postAnswer = async (data) => {
  const result = await post('answers', data);
  return result;
}

export const deleteAnswer = async (id) => {
  const result = await del(`answers/${id}`)
  return result;
}