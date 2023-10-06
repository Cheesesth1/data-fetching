import React from "react";
import UserData from "./types";


function UserList() {
  const [userData, setUserData] = useState<IUserData[]>([]);

useEffect () => {
  const fetchData = async () => {
    const response = await fetch ("https://jsonplaceholder.typicode.com/users")
    console.log(data)
  }


}
}

export default UserList;
