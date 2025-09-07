import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <div className="p-2">
      <h3>IndexPage</h3>
    </div>
  );
}
