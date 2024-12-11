import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { app } from "../Firebase"; // Firebase configuration

const db = getFirestore(app);

const FireStore = () => {
  const [data, setData] = useState([]); // State to store user data

  // Function to add a new document to Firestore
  async function adddata() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID:", docRef.id);
    } catch (e) {
      console.error("Error adding document:", e);
    }
  }

  // Function to fetch data from Firestore
  async function getdata() {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() }); // Push document ID and data
      });
      setData(users); // Update state with fetched data
      console.log("Fetched data:", users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <button onClick={adddata}>Write</button>
      <button onClick={getdata}>Get Data</button>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
             First Name: {user.first}, Last Name: {user.last}, Born: {user.born}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FireStore;
