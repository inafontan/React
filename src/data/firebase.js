import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, getDoc, setDoc, doc, addDoc} from 'firebase/firestore/lite'

// Completar con las credenciales de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDVz7oW9Bl159kelrL9UJ9oktsFCutRouc",
  authDomain: "productosenventa.firebaseapp.com",
  projectId: "productosenventa",
  storageBucket: "productosenventa.appspot.com",
  messagingSenderId: "1047351683433",
  appId: "1:1047351683433:web:60d5bfa20bf1c54ccff5f8",
  measurementId: "G-QXHB0PZ0CZ"
};
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Traer TODOS los items
export const getItems = async () => {
	const items = await getDocs(collection(db, "productos"))
	return items
}

// Traer UN item
export const getItem = async (id) => {
	const item = await getDoc(doc(db, "´productos", id))
	return item
}

// Generación de order
export const generateOrder = async (order) => {
	const newOrder = addDoc(collection(db, "orders"), {
		...order,
		date: Timestamp.fromDate(new Date()),
	})
	return newOrder
}

// Manejar stock --> plus
export const updateStock = async (itemId, quantity) => {
	const item = await getDoc(doc(db, "productos", itemId))
	await updateDoc(doc(db, "productos", itemId), {
		stock: item.data().stock - quantity,
	})
}

export default db

