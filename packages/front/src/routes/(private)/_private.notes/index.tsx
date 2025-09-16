import { createFileRoute } from "@tanstack/react-router";
import { NotesPage } from "./_ui/NotesPage";

export const Route = createFileRoute("/(private)/_private/notes/")({
  component: NotesPage,
});
