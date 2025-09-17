import { createFileRoute } from "@tanstack/react-router";
import { TasksPage } from "./_ui/TasksPage";

export const Route = createFileRoute("/(private)/_private/tasks/")({
  component: TasksPage,
});
