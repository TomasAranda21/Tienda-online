import React, { useEffect, useState, createContext  } from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc,onSnapshot, connectFirestoreEmulator, ref, arrayUnion } from "firebase/firestore";
import { db } from '../config/firebase' 
import { list } from 'postcss';


const AdminContext = createContext()

export const AdminProvider = ({children}) => {

    const [users, setUsers] = useState()


    useEffect(() => {

        const fetchData = onSnapshot(

            collection(db, "users"),

            (snapShot) => {

              let list = [];

              snapShot.docs.forEach((doc) => {

                list.push({ id: doc.id, ...doc.data() });

              });

              setUsers(list);
            },
            (error) => {
              console.log(error);
            }
          );
      
          return () => {

            fetchData();

          };
    }, [])


    const addProducts = async ({name, price, stock, description, id}) => {

        const userRef = doc(db, "users", id);


        await updateDoc(userRef, {

            products: arrayUnion({name, price, stock, description})
            // name,
            // price,
            // description,
            // stock,
        });

    }



  return (
    <AdminContext.Provider
    value={{
        addProducts,
        users,

    }}
    >

        {children}

    </AdminContext.Provider>
  )
}

export default AdminContext