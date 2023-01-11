import {
  Container,
  createStyles,
  SimpleGrid,
  Title,
} from "@mantine/core";
import { ArticleCardVertical } from "../components/News";
import { TopAbout } from "../components/TopaAbout";

import NewsData from "../data/NewsData";

const useStyles = createStyles((theme) => ({
  news: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
  grid: {
    margin: "0 120px",
    "@media (min-width: 1260px)": {
      margin: "0 200px",
    },
  },
  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: 35,
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },
}));

const Main = () => {
  const { classes } = useStyles();
  return (
    <>
      {/* <HeaderResponsive /> */}
      <TopAbout />
      <Container className={classes.news}>
        <Title className={classes.title}>Latest news</Title>
      </Container>
      <SimpleGrid
        cols={2}
        mt="md"
        className={classes.grid}
        spacing="lg"
        verticalSpacing="lg"
        breakpoints={[{ maxWidth: 820, cols: 1, spacing: "md" }]}
      >
        {NewsData.map((item) => (
          <ArticleCardVertical
            title={item.title}
            image={item.image}
            date={item.date}
            category={item.category}
            author={item.author}
            description={item.description}
            link={item.link}
          />
        ))}
      </SimpleGrid>
      {/* <Subgrid/> */}
    </>
  );
};

export default Main;
