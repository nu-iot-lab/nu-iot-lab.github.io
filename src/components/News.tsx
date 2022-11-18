import {
  createStyles,
  Card,
  Image,
  Avatar,
  Text,
  Group,
} from "@mantine/core";
import { useState } from "react";
import { ModalNews } from "./Modal";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    "&:hover": {
      cursor: "pointer",
    },
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));

interface ArticleCardVerticalProps {
  image: string;
  category: string;
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  description: string,
  link: string,
}

export function ArticleCardVertical({
  image,
  category,
  title,
  date,
  author,
  description,
  link,
}: ArticleCardVerticalProps) {
  const { classes } = useStyles();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleShowModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Card
      withBorder
      radius="md"
      p={0}
      className={classes.card}
      onClick={handleShowModal}
    >
      <ModalNews title={title} date={date} text={description} link={link} opened={isModalOpen} onClose={handleCloseModal} />
      <Group noWrap spacing={0}>
        <Image src={image} height={140} width={140} />
        <div className={classes.body}>
          <Text transform="uppercase" color="dimmed" weight={700} size="xs">
            {category}
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            {title}
          </Text>
          <Group noWrap spacing="xs">
            <Group spacing="xs" noWrap>
              <Avatar size={20} src={author.avatar} />
              <Text size="xs">{author.name}</Text>
            </Group>
            <Text size="xs" color="dimmed">
              •
            </Text>
            <Text size="xs" color="dimmed">
              {date}
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  );
}
