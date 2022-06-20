import React, { useEffect, useState, createContext  } from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc,onSnapshot, connectFirestoreEmulator, ref, arrayUnion, FieldValue, deleteField  } from "firebase/firestore";

import { deleteObject, ref as refSorage  } from "firebase/storage";


import { db, storage } from '../config/firebase' 

import { list } from 'postcss';

import idRandom from '../helpers/idUnique';


const AdminContext = createContext()

export const AdminProvider = ({children}) => {

    const [users, setUsers] = useState()
    const [categorias, setCategorias] = useState()
    const [dataBus, setDataBus] = useState()
    const [products, setProducts] = useState({})

    const [editData, setEditData] = useState()

    const [viewModal, setViewModal] = useState(false)



    

    const _id = idRandom()




    useEffect(() => {

        const fetchData = onSnapshot(

            collection(db, "users"),

            (snapShot) => {

              let list = [];

              snapShot.docs.forEach((doc) => {

                list.push({ id: doc.id, ...doc.data() });

              });

              setUsers(list);

              // Categories
              const categories = list.map(user => user.categories)

              categories.map(category => setCategorias(category))

              // DataBusiness
              const dataBuss = list.map(user => user.datos_tienda)

              dataBuss.map(datos => setDataBus(datos))


              // Get products

              const prod = list.map(user => user.products)

              prod.map(p => setProducts(p))

              


            },

            (error) => {
              console.log(error);
            }
          );
      
          
          return () => {

            fetchData();

          };

    }, [])



    // Add products
    const addProducts = async ({name, price, stock, description, id, categories, urlImg}) => {

        const userRef = doc(db, "users", id);

        await updateDoc(userRef, {

            products: arrayUnion({name, price, stock, description, categories, _id, urlImg})
            
        });

    }

    // Edit products
    const editProduct = async (values) => {

      const { id, name, price, stock, description, categories, _id, urlImg } = values;

      const newProduct = {_id, urlImg , name, price, stock, description, categories}


      const productsUpdate = products.filter(prod => prod._id !== _id)

      productsUpdate.push(newProduct)

      console.log(productsUpdate)



      const productsRef = doc(db, `users`, id);

      await updateDoc(productsRef, {

        products: productsUpdate
        
      });

    }


    // Delete Products

    const deleteProduct = async (id) => {

      console.log(id)

    }


   
    // Delete image

    const deleteImg = (name) => {

      console.log(name)
    

      const desertRef = refSorage(storage, `images/${name}`);

      // Delete the file
      deleteObject(desertRef).then(() => {
        // File deleted successfully
        console.log("Eliminado con exito")

      }).catch((error) => {
        // Uh-oh, an error occurred!
        console.log(error)
      });

    }





    // Add dataTienda

    const addDataTienda = async ({name, tel, email, location, id}) => {

      const userRef = doc(db, "users", id);

      try {

        await updateDoc(userRef, {
  
          datos_tienda: {name, tel, email, location, _id}
          
            
        });
        
      } catch (error) {

        console.log(error)

      }


    }


    // Edit DataTienda


    const editDataBus = async (data) => {

      setEditData(data)


    }

    const edit = async () => {

      const categoryRef = doc(db, 'users', id);

      try {
        
        await updateDoc(categoryRef, {
  
          datos_tienda: dataBus.filter(categories => categories._id === _id)
          
        });

      } catch (error) {

        console.log(error)
        
      }

    }






    const addCategories = async ({categories, id}) => {

      const userRef = doc(db, "users", id);


      await updateDoc(userRef, {

          categories: arrayUnion({categories, _id})
          
      });

    }


    // Delete category

    const deleteCategory = async (id, _id) => {

      const categoryRef = doc(db, 'users', id);

      try {
        
        await updateDoc(categoryRef, {
  
          categories: categorias.filter(categories => categories._id !== _id)
          
        });

      } catch (error) {

        console.log(error)
        
      }
    }



  return (
    <AdminContext.Provider
    value={{
        addProducts,
        editProduct,
        addCategories,
        deleteCategory,
        addDataTienda,
        editDataBus,
        deleteImg,
        setViewModal,
        users,
        categorias,
        dataBus,
        editData,
        products,
        viewModal,

    }}
    >

        {children}

    </AdminContext.Provider>
  )
}

export default AdminContext