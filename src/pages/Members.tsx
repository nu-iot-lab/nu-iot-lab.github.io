import {
  Paper,
  Avatar,
  Text,
  Container,
  createStyles,
  Grid,
  Title,
  List,
} from "@mantine/core";
import React from "react";
import { MembersData, PastMembersData } from "../data/MembersData";

const useStyles = createStyles((theme) => ({
  card: {
    minHeight: 330,
  },
  gridCard: {
    "&:last-child:nth-child(3n-1)": {
      display: "flex",
      justifyContent: "center",
    },
    "&:nth-last-child(2):nth-child(3n+1)": {
      display: "flex",
      justifyContent: "center",
    },
  },
  title: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing.xl,
  },
  pastMemberList: {
    padding: 0,
    border: "1px solid #eaeaea",
    borderRadius: theme.radius.md,
  },
  list: {
    listStyle: "none",
    textAlign: "center",
  },
  listItem: {
    padding: theme.spacing.xs,
    marginBottom: theme.spacing.md,
  }
}));

const Members = () => {
  const { classes } = useStyles();
  return (
    <Container>
      <Title className={classes.title}>Our Members</Title>

      <Grid gutter={20} mb="xl">
        {MembersData.map((member) => (
          <Grid.Col span={4} className={classes.gridCard}>
            <Paper
              radius="md"
              withBorder
              p="lg"
              className={classes.card}
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.white,
              })}
            >
              {member.image === "" ? (
                <Avatar size={120} radius={120} mx="auto" />
              ) : (
                <Avatar src={member.image} size={120} radius={120} mx="auto" />
              )}

              <Text align="center" size="lg" weight={500} mt="md">
                {member.fullName}
              </Text>
              <Text align="center" color="dimmed" size="sm">
                {member.email} • {member.position}
              </Text>

              <Text align="center" color="dimmed" size="sm">
                {member.description}
              </Text>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
      <Title className={classes.title}>Past Members</Title>
      <Container className={classes.pastMemberList}>
        {PastMembersData.map((member) => (
          <List spacing="xs" className={classes.list}>
            <List.Item className={classes.listItem}>
              <Text>{member.fullName}</Text>
            </List.Item>
          </List>
        ))}
      </Container>
    </Container>
  );
};

export default Members;
