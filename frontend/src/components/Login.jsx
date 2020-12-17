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
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const submit = () => {
    console.log(username, password);
    axios
      .post("/admin/login", { username: username, password: password })
      .then((res) => {
        console.log(res.data);
        if (!res.data.error) {
          history.push("/home");
        }
      });
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
              placeholder="Username"
              onChange={handleUserNameChange}
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
