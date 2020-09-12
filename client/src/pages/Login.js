import React from "react";
import { Form, Button } from "semantic-ui-react";

const Login = () => {
  return (
    <React.Fragment>
      <h1 className="page-title">Login</h1>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" type="email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" type="password" />
        </Form.Field>

        <Button type="submit">Login</Button>
      </Form>
    </React.Fragment>
  );
};

export default Login;
