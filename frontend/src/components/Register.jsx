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
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };
  const submit = () => {
    console.log(email, password);
    axios.post("/admin/register", {
      email: email,
      password: password,
      username: username,
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
              onChange={handleUserNameChange}
              icon="user"
              iconPosition="left"
              placeholder="Name"
            />
            <Form.Input
              onChange={handleEmailChange}
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Adress Email"
            />
            <Form.Input
              onChange={handlePasswordChange}
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="teal" fluid size="large" onClick={submit}>
              Register
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
