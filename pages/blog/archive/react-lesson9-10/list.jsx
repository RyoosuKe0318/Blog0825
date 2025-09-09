import { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import dayjs from "dayjs";
import ArchiveLayout from "@/components/archive/ArchiveLayout";
import { Header, Footer } from "./index";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleDone = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleSort = (order) => {
    const sorted = [...tasks].sort((a, b) => {
      const dateA = dayjs(a.limit).valueOf();
      const dateB = dayjs(b.limit).valueOf();
      return order === "ascend" ? dateA - dateB : dateB - dateA;
    });
    setTasks(sorted);
  };

  return (
    <ArchiveLayout>
      <Header />
      <Grid container spacing={1} sx={{ mb: 2 }}>
        <Button
          variant="contained"
          sx={{ width: 100, backgroundColor: "#89a0ecff", mr: 1 }}
          onClick={() => handleSort("ascend")}
        >
          ↑昇順
        </Button>
        <Button
          variant="contained"
          sx={{ width: 100, backgroundColor: "#89a0ecff" }}
          onClick={() => handleSort("descend")}
        >
          ↓降順
        </Button>
      </Grid>

      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "8px",
            padding: "8px",
          }}
        >
          <div>
            <p>期限: {task.limit}</p>
            <p>タスク: {task.detail}</p>
          </div>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#ff6f00" }}
            onClick={() => handleDone(task.id)}
          >
            DONE
          </Button>
        </div>
      ))}

      <Footer />
    </ArchiveLayout>
  );
};

export default TaskList;
