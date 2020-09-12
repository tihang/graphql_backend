import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const Register = () => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log(result);
    },
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.exception.errors);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    addUser();
  };

  return (
    <React.Fragment>
      <h1 className="page-title">Register</h1>
      <Form
        loading={loading}
        className="form-container"
        noValidate
        onSubmit={onSubmit}
      >
        <Form.Field>
          <Form.Input
            label="Email"
            name="email"
            placeholder="Email"
            type="email"
            value={values.email}
            onChange={onChange}
            error={
              errors.email
                ? {
                    content: errors.email,
                    pointing: "below",
                  }
                : false
            }
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            label="Username"
            name="username"
            placeholder="Username"
            type="text"
            value={values.username}
            onChange={onChange}
            error={
              errors.username
                ? {
                    content: errors.username,
                    pointing: "below",
                  }
                : false
            }
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            label="Password"
            name="password"
            placeholder="Password"
            type="password"
            value={values.password}
            onChange={onChange}
            error={
              errors.password
                ? {
                    content: errors.password,
                    pointing: "below",
                  }
                : false
            }
          />
        </Form.Field>
        <Form.Field>
          <Form.Input
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm password"
            type="password"
            value={values.confirmPassword}
            onChange={onChange}
            error={
              errors.confirmPassword
                ? {
                    content: errors.confirmPassword,
                    pointing: "below",
                  }
                : false
            }
          />
        </Form.Field>

        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Register</Button>
      </Form>
    </React.Fragment>
  );
};

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Register;
