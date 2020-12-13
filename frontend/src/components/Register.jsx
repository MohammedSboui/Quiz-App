import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

const Register = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Image size="huge" src="/QUIZ-3D.png" />

      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Name"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Adress Email"
          />

          <Button color="teal" fluid size="large">
            Register
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default Register;
