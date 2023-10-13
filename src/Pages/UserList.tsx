import {useState, useEffect} from "react";
import { IUserData } from "../types/types";

function UserList() {
  const [users, setUsers] = useState<IUserData[]>([]);

  useEffect(() => {
    const fetchData  = async() =>{
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json(); // the data will now be the array of users

      setUsers([...data])

      console.log(data) // here you will get the data

    }
    fetchData()
}, []);

return (
  <div>
    <h1>User Data</h1>
    <ul>
      {users.map((user) => (
        <li key ={user.id}>
          <p>Name : {user.name}</p>
          <p>Email : {user.email}</p>
          <p>Address : {user.address.street}{user.address.city}{user.address.zipcode} </p>
          <p>Contact : {user.phone}</p>
          <p>WEbsite : {user.website}</p>
        </li>
      ))

      }
    </ul>
  </div>
)
}

export default UserList;
