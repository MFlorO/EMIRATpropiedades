import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

const auth  = getAuth();

export const useCheckAuth = () => {

  const [users, setUsers] = useState([]);
//   // const { status } = useSelector((state) => state.auth);

  console.log(users)

  useEffect(() => {
    const fetchUsers = async () => {
      const userRecords = await auth.listUsers();
      setUsers(userRecords.users);
    };
    fetchUsers();
  }, []);

    return users;
};
