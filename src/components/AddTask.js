import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";

import { STATUS_TODO } from "../common/constants";
import { addTask } from "../store/tasks";
import { store } from "../store/store";

export default function AddTask() {
  const { t } = useTranslation();
  const [formShown, setFormShown] = useState(false);
  const [hasError, setHasError] = useState(false);
  const saveTask = () => {
    const title = document.getElementsByName("task-name")[0].value;
    if (!title) {
      setHasError(true);
      return;
    }

    setHasError(false);
    const status = STATUS_TODO;
    const id = uuid();

    store.dispatch(addTask({ id, title, status }));
    setFormShown(false);
  };
  return (
    <div className="add-task">
      <button onClick={() => setFormShown(!formShown)}>
        {t(!formShown ? "add task" : "cancel")}
      </button>
      {formShown && (
        <div className="add-task-form">
          <label>
            <input type="text" name="task-name" />
            <button onClick={saveTask}>{t("save task")}</button>
          </label>
          {hasError && <span className="error">{t("provide a title")}</span>}
        </div>
      )}
    </div>
  );
}
