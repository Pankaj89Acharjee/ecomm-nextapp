import axiosInstance from "./GlobalAPI";

export const getProductCategories = async () => {
   
    try {
        //const getCat = await axiosInstance.get(`/productCategories`);

        return ["Medicines", "Fruits", "Vegetables", "Cosmetics", "Grocery"];
    } catch (error) {
        console.log("Error in getting job list", error);
        return error.message;
    }
};
