import "./Productos.css"
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore"

const Productos = () => {

    const [ data, setData ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                //el segundo argumento de la función collection es el nombre de nuestra colección
                const querySnapshot = await getDocs(collection(db, "Productos"))
                
                // para obtener los documentos (que son los datos que contiene la colección) debo mapearlos de la siguiente manera
                const obtenerDocumentos = querySnapshot.docs.map(element => ({ id: element.id, ...element.data()}))
                setData(obtenerDocumentos)
                console.log(obtenerDocumentos)
            } catch(error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])
  };


export default Productos;