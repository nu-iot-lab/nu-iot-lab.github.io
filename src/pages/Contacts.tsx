import {
  createStyles,
  Container,
  Title,
  Text,
} from "@mantine/core";
import { ContactIconsList } from "../components/Contacts";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
    alignItems: "center",
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,
    padding: "119px",
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export const Contacts = () => {
  const { classes } = useStyles();
  return (
    <Container>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            <span className={classes.highlight}>Contact</span> us <br />
          </Title>
          <Text color="dimmed" mt="md">
            Reach out to us with any questions or concerns you may have. We look
            forward to hearing from you!
          </Text>
        </div>

        <ContactIconsList />
      </div>
    </Container>
  );
};


