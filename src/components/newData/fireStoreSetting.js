import { ref, set, remove, get } from "firebase/database";
import { database } from "./firebase";

// Pass the required context values as parameters to the function
export async function fireStoreSetting(data, type, myRef) {
  const fetchAllData = async () => {
    const dataRef = ref(database, "data");
    try {
      const dataSnapshot = await get(dataRef);
      if (dataSnapshot.exists()) {
        const data = [];
        dataSnapshot.forEach((childSnapshot) => {
          data.push(childSnapshot.val());
        });
        return data;
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error fetching data from the database:", error);
      return [];
    }
  };

  if (type === "add") {
    try {
      // Fetch the current data
      const currentData = await fetchAllData();

      // Add the new data to the current data array
      currentData.push(data);

      // Set the updated data array back in the database
      const dataRef = ref(database, "data");
      await set(dataRef, currentData);

      console.log("Data stored successfully");
    } catch (error) {
      console.error("Error storing data:", error);
    }
  } else if (type === "delete") {
    // You can remove the data using the remove() function
    const dataRefToDelete = ref(database, "data"); // Make sure to get the correct reference
    remove(dataRefToDelete)
      .then(() => {
        console.log("Data deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  } else if (type === "fetch") {
    try {
      const fetchedData = await fetchAllData();
      console.log("Fetched data:", fetchedData);
      myRef.current = fetchedData;

      return fetchedData;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }
}

// Usage example:
// const contextValues = useContext(MyContext); // Get context values from your component
// fireStoreSetting(data, "add", contextValues);
