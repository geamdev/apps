import { useEffect, useState } from "react";

import { User } from "../../../../../../models";
import { getUsers } from "../../../../../../services";

const useListUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (err) {
      return err;
    }
  };

  return { users };
};

export default useListUsers;
