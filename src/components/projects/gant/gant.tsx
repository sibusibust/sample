import React from "react";
import Link from 'next/link'

import { ViewSwitcher } from "components/projects/gant/view-switcher";
import { getStartEndDateForProject, initTasks } from "lib/gant/helper";
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'lib/gant/index';


const currentDate = new Date();

const GantPage = () => {
  const [view, setView] = React.useState<ViewMode>(ViewMode.Day);
  const [tasks, setTasks] = React.useState<Task[]>(initTasks());
  const [isChecked, setIsChecked] = React.useState(true);
  let columnWidth = 65;
  if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

  // タスク変更時の日時再計算
  const handleTaskChange = (task: Task) => {
    console.log("On date change Id:" + task.id);

    let newTasks = tasks.map(t => (t.id === task.id ? task : t));

    // parentタスクが存在する場合
    if (task.project) {
      const [reservedStart, reservedEnd] = getStartEndDateForProject(newTasks, task.project);
      const project = newTasks[newTasks.findIndex(t => t.id === task.project)];
      if (
        project.reservedStart.getTime() !== reservedStart.getTime() ||
        project.reservedEnd.getTime() !== reservedEnd.getTime()
      ) {
        const changedProject = { ...project, reservedStart, reservedEnd };
        newTasks = newTasks.map(t =>
          t.id === task.project ? changedProject : t
        );
      }
    }
    setTasks(newTasks);
  };

  const handleTaskDelete = (task: Task) => {
    const conf = window.confirm("Are you sure about " + task.name + " ?");
    if (conf) {
      setTasks(tasks.filter(t => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = async (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    console.log("On progress change Id:" + task.id);
  };

  const handleDblClick = (task: Task) => {
    alert("On Double Click event Id:" + task.id);
  };

  const handleSelect = (task: Task, isSelected: boolean) => {
    console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
  };

  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };

  return (
    <div>
      <ViewSwitcher
        onViewModeChange={viewMode => setView(viewMode)}
        onViewListChange={setIsChecked}
        isChecked={isChecked}
      />
      <div>
        <Link href="/">
          <a>home</a>
        </Link>
      </div>
      <h3>Gantt With Unlimited Height</h3>
      <Gantt
        tasks={tasks}
        viewMode={view}
        onDateChange={handleTaskChange}
        onDelete={handleTaskDelete}
        onProgressChange={handleProgressChange}
        onDoubleClick={handleDblClick}
        onSelect={handleSelect}
        onExpanderClick={handleExpanderClick}
        listCellWidth={isChecked ? "155px" : ""}
        columnWidth={columnWidth}
      />
    </div>
  );
}

export default GantPage;

