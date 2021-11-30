import {
  STATUS_TODO,
  STATUS_DONE,
  STATUS_IN_PROGRESS,
  STATUS_BLOCKED,
} from "../common/constants";

const translation = {};
translation[STATUS_TODO] = "To do trans";
translation[STATUS_DONE] = "Done trans";
translation[STATUS_IN_PROGRESS] = "In Progress trans";
translation[STATUS_BLOCKED] = "Blocked trans";

export const en = {
  translation,
};
