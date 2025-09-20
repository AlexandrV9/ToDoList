import { ScrollArea, type ScrollAreaRootProps } from "~/shared/ui";

export interface MainContainerProps extends ScrollAreaRootProps {}

export const MainContainer = ({ children, ...props }: MainContainerProps) => {
  return (
    <ScrollArea.Root as="main" p="1rem" display="flex" size="xs" {...props}>
      <ScrollArea.Viewport>
        <ScrollArea.Content>{children}</ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar>
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
};
