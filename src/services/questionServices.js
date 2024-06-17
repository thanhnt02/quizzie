import { del, get, patch, post } from "../utils/request";

export const getQuestion = async (option) => {
  const result = await get(`questions?topicId=${option}`);
  return result;
}