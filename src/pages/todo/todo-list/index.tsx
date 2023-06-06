import { useState } from "react";
import Cron from "react-cron-generator";
const TodoList = () => {
  const [value, setValue] = useState<string>();
  return (
    <div>
      <Cron
        onChange={(e) => {
          setValue(e);
        }}
        value={value}
        showResultText={true}
        showResultCron={true}
        locale="zh_CN"
      />
    </div>
  );
};

export default TodoList;
