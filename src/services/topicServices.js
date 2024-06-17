import { del, get, patch, post } from "../utils/request";

export const getTopic = async () => {
  const result = await get(`topics`);
  return result;
}

export const defineTopic = (topicId) => {
  if (topicId === 1) {
    return "HTML5"
  } else if (topicId === 2) {
    return "CSS3"
  } else if (topicId === 3) {
    return "Javascript"
  } else if (topicId === 4) {
    return "ReactJS"
  }
}