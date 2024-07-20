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

const getProductsCategory = async (Categoría) => {
  let ProductData = await fetchData();
  let products = ProductData.filter((e) => e.Categoría.includes(Categoría[0]));
  return products;
};

export default getProductsCategory