import { UseUserContext } from "../../context/UserContext";

const UserList = () => {
  const { users } = UseUserContext();

  return (
    <>
      {users?.map((user) => {
        return (
          <>
            <p>Nombre: {user.name}</p>
            <p>Edad: {user.age}</p>
          </>
        );
      })}
    </>
  );
};
export default UserList;
