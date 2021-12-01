import {
  STATUS_TODO,
  STATUS_DONE,
  STATUS_IN_PROGRESS,
  STATUS_BLOCKED,
} from "../common/constants";

const translation = {};
translation[STATUS_TODO] = "To do";
translation[STATUS_DONE] = "Done";
translation[STATUS_IN_PROGRESS] = "In Progress";
translation[STATUS_BLOCKED] = "Blocked";

translation["add task"] = "Add new task";
translation["save task"] = "Save task";
translation["cancel"] = "Cancel";

export const en = {
  translation,
};
