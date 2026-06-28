import { useMutation } from "@apollo/client/react";
import { gql } from "apollo-server-express";
import { useFormik } from "formik";

const AddUser = () => {
  const CREATE_USER = gql`
    mutation createUser($name: String!, $age: Int!, $married: Boolean!) {
      createUser(name: $name, age: $age, married: $married) {
        name
        age
        married
      }
    }
  `;
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const formik = useFormik({
    initialValues: {
      name: "",
      age: 0,
      married: false,
    },
    onSubmit: (values) => {
      createUser({
        variables: {
          name: values.name,
          age: parseInt(values.age),
          married: values.married,
        },
      });
    },
  });
  return (
    <>
      <h1>Panel crear Usuario</h1>
      <form action="#" onSubmit={formik.handleSubmit}>
        <label htmlFor="nombre">
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </label>
        <label htmlFor="edad">
          <input
            type="text"
            name="edad"
            id="edad"
            value={formik.values.age}
            onChange={formik.handleChange}
          />
        </label>
        <label htmlFor="married">
          <input
            type="checkbox"
            name="married"
            id="married"
            value={formik.value.married}
            onChange={formik.handleChange}
          />
        </label>
        <input type="submit" placeholder="Crear Usuario" />
      </form>
    </>
  );
};

export default AddUser;
