import { Box, Text, Heading } from "~/shared/ui";

import { useParams } from "@tanstack/react-router";

export function TaskPage() {
  const { taskId } = useParams({ from: "/(private)/_private/tasks/$taskId" });

  return (
    <Box p="md">
      <Heading>Задача #{taskId}</Heading>
      <Text>Cодержимое конкретной задачи</Text>
    </Box>
  );
}
