import { Button, Modal, Text, Title } from "@mantine/core";

interface Props {
  opened: boolean;
  onClose: any;
  title: string;
  date: string;
  text: string;
  link: string;
}

export function ModalNews({ opened, onClose, title, text, date, link }: Props) {
  return (
    <Modal
      size="80%"
      overflow="inside"
      withCloseButton={true}
      opened={opened}
      onClose={onClose}
    >
      <div style={{ padding: "20px" }}>
        <Title>{title}</Title>
        <Text size="xl" mt="md" mb="md">
          {date}
        </Text>
        <Text size="lg" mb="md">
          {text}
        </Text>
        <a href={link}>
        <Button variant="outline" size="md">
          Link to the research paper
        </Button>
        </a>
      </div>
    </Modal>
  );
}
