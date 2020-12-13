import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const submit = () => {
    console.log(email, password);
    axios.post("/login", { email: email, password: password });
  };
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Image size="huge" src="/QUIZ-3D.png" />
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={handleEmailChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={handlePasswordChange}
            />

            <Button color="teal" fluid size="large" onClick={submit}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="/register">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
