import React, { createContext, useState, useEffect } from 'react'

const TiendaContext = createContext()

export const TiendaProvider = ({children}) => {

  const [shop, setShop] = useState([])

  const [localStorageShop, setLocalStorageShop] = useState([])


  const loadedToLocalStorage = (shopping) => {

    const shopString = JSON.stringify(shopping)
    localStorage.setItem("products00142979120", shopString)

  }

  useEffect(() => {


    const shoppingLocal = localStorage.getItem("products00142979120")

    const shopObject = JSON.parse(shoppingLocal)
    
 
    setLocalStorageShop(shopObject)



  }, [shop])




  const addToCard = (product, numberProduct, talleProduct, colorProduct) => {


    const {description, name, price, urlImg, _id} = product

    const productCard = {_id, name, price, urlImg ,color: colorProduct, cantidad: numberProduct , talle: talleProduct, description}

    // setShop([...shop, productCard])


    if(shop.find(prod => prod._id === _id)){


        const newShop = shop.map(prod => prod.name === productCard.name 
        
        ? ({

            ...prod,
            cantidad: prod.cantidad + 1

            })  : prod  
            
        )

        loadedToLocalStorage(newShop)

    console.log(newShop)

       
       
        return setShop(newShop)
    } 

    const car =  shop.concat({
        ...productCard,
        cantidad: 1,

    })


    loadedToLocalStorage(car)

    console.log(car)
       
    return setShop(car)


    // Validar si el usuario esta poniendo el mismo producto, en el caso de esta poniendo el mismo producto que este  se añada pero que cambie
    // en numero de veces

}



    const deleteShop = () => {

      const deleteShopping  = setShop([])

      loadedToLocalStorage(deleteShopping)
    }



    // Delete one product

    const deleteOndeProduct = (product) => {

      if(shop.find(x => x._id === product._id)){

        if(product.cantidad > 1){

          const newShop = shop.map(x => x._id === product._id 

          ? ({
              ...x,
              cantidad: x.cantidad - 1,

          }) : x
          )

          loadedToLocalStorage(newShop)

          return setShop(newShop)

        }else{

          const newCarro = shop.filter(x => x.name !== product.name)

          loadedToLocalStorage(newCarro)
          setShop(newCarro)

        }
      }
    }



    // const checkOut = (products) => {






    // }







  return (

    <TiendaContext.Provider
    value={{

      addToCard,
      deleteShop,
      deleteOndeProduct,

      localStorageShop,
        
    }}
    >

        {children}
    </TiendaContext.Provider>

  )
}

export default TiendaContext