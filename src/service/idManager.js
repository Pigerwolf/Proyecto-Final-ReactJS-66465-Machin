import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const fetchData = async () => {
  try {

    const querySnapshot = await getDocs(collection(db, "Productos"));
    const GetElements = querySnapshot.docs.map((element) => ({

      id, ...element.data(),
      
        }
    )
);
    return GetElements;
  } catch (error) {
    console.log(error);
  }
};


const getProductId = async (id) => {
  let ProductData = await fetchData();
  let productId = ProductData.find((e) => e.id == id);
  return productId;
};

export default getProductId 