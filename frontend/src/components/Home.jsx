import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Grid, Image, Container } from "semantic-ui-react";

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
);

const Home = () => {
  const subjects = [
    {
      image: "/QUIZ-3D.png",
      header: "Mathematique",
      description: "Subject 1",
    },
    {
      image: "/QUIZ-3D.png",
      header: "Mathematique",
      description: "Subject 1",
    },
    {
      image: "/QUIZ-3D.png",
      header: "Mathematique",
      description: "Subject 1",
    },
    {
      image: "/QUIZ-3D.png",
      header: "Mathematique",
      description: "Subject 1",
    },
    {
      image: "/QUIZ-3D.png",
      header: "Mathematique",
      description: "Subject 1",
    },
    {
      image: "/QUIZ-3D.png",
      header: "Mathematique",
      description: "Subject 1",
    },
  ];
  return (
    <Container>
      <Grid columns={3} divided>
        <Grid.Row style={{ marginTop: "4rem" }}>
          {subjects.map((subject) => (
            <Grid.Column style={{ marginBottom: "2rem" }}>
              <Card
                style={{ cursor: "pointer" }}
                image={subject.image}
                header={subject.header}
                description={subject.description}
                extra={extra}
              />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Home;
