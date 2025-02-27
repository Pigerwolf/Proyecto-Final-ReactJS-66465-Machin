import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";


const useGetFirebase = () => {

    const [ data, setData ] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Productos"))                
                const documents = querySnapshot?.docs?.map( document => ({id: document.id, ...document.data()}))
                setData(documents)

            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return data
}

export default useGetFirebase;