import { useState, useEffect } from "react";
import { Container, Typography, Grid, Button, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Link from "next/link";
import ArchiveLayout from "@/components/archive/ArchiveLayout";

export default function RegisterTaskPage() {
  const [newTask, setNewTask] = useState({ detail: "", limit: null });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  const handleDetailChange = (e) =>
    setNewTask((prev) => ({ ...prev, detail: e.target.value }));

  const handleLimitChange = (date) =>
    setNewTask((prev) => ({ ...prev, limit: date }));

  const handleRegisterTask = () => {
    if (!newTask.detail) {
      alert("タスク内容を入力してください！");
      return;
    }
    if (!newTask.limit) {
      alert("期限を入力してください！");
      return;
    }

    const taskWithId = {
      id: Date.now(),
      detail: newTask.detail,
      limit: newTask.limit.format("YYYY-MM-DD"),
    };

    const updatedTasks = [...tasks, taskWithId];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setNewTask({ detail: "", limit: null });
    alert("タスクを登録しました！");
  };

  return (
    <ArchiveLayout>
      <Header />
      <Container sx={{ py: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          新規タスクの登録
        </Typography>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="期日"
                onChange={handleLimitChange}
                value={newTask.limit}
                format="YYYY-MM-DD"
                minDate={dayjs()}
                sx={{ width: "100%" }}
              />
            </LocalizationProvider>
            <TextField
              label="タスク内容"
              variant="outlined"
              fullWidth
              value={newTask.detail}
              onChange={handleDetailChange}
              sx={{ mt: 2 }}
            />
          </Grid>
          <Grid item sx={{ textAlign: "right" }}>
            <Button variant="contained" onClick={handleRegisterTask}>
              登録
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ArchiveLayout>
  );
}

export const Header = () => (
  <header
    style={{
      padding: "16px 0",
      borderBottom: "1px solid #1976d2",
      backgroundColor: "#f5f5f5",
    }}
  >
    <Container>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={6}>
          <Typography variant="h5" style={{ color: "#333" }}>
            タスク管理アプリ
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <nav>
            <Link
              href="/blog/archive/react-lesson9-10/list"
              style={{
                marginRight: "16px",
                color: "#1976d2",
                textDecoration: "none",
              }}
            >
              タスク一覧
            </Link>
            <Link
              href="/blog/archive/react-lesson9-10"
              style={{ color: "#1976d2", textDecoration: "none" }}
            >
              タスク登録
            </Link>
          </nav>
        </Grid>
      </Grid>
    </Container>
  </header>
);

export const Footer = () => (
  <footer
    style={{
      padding: "16px 0",
      textAlign: "center",
      backgroundColor: "#1976d2",
    }}
  >
    <Container>
      <Typography variant="body2" style={{ color: "#fff" }}>
        © 2025 タスク管理アプリ
      </Typography>
    </Container>
  </footer>
);
