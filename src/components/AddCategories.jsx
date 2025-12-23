import { useState, useEffect } from "react";
import ListCategories from "./ListCategories"; 


const AddCategories=()=> {
    const [categories, setCategories] = useState(() => {
        const savedCategories = localStorage.getItem("categories");
        return savedCategories ? JSON.parse(savedCategories)
            : [
                {  
                    id: 1,
                    title: "Projects", 
                    tasks: [], 
                }, 
                {
                    id: 2,
                    title: "Work",
                    tasks: [],
                },
            ]; 
    });

    useEffect(() => {
        localStorage.setItem("categories", JSON.stringify(categories) ||[]);
    }, [categories]);


    const [newCategory, setNewCategory] = useState(""); 


    const addCategory = () => {
        if (newCategory.trim() === "") return;

        setCategories([
            ...categories,
            {
                id: Date.now(),
                title: newCategory,
            },
        ]);

        setNewCategory("");
    };

    return (
        <div style={styles.categories_page}>
            <h1 style={styles.h1}>Categories</h1>

            <div style={styles.add_category}>
                <input style={styles.input} type="text" placeholder="Category name" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
                <button style={styles.Addcategry_btn} onClick={addCategory}>Add Category</button>
            </div>

            <ListCategories Categories={categories} setCategories={setCategories} />

        </div>
    )
}
const styles={
    categories_page : {
    boxShadow:" rgba(0, 0, 0, 0.06) 0px 4px 14px",
    border :"1px gray solid",
    fontFamily:"sans-serif",
    padding :"20px"
},
    h1: {
        marginBottom: "20px",
        marginLeft: "60px"
},
    add_category: {
    display: "flex",
    marginBottom: "30px"
},
    input :{
        padding: "8px",
        width: "200px",
        fontSize:"20px"
},
    Addcategry_btn: {
        boxShadow:" rgba(0, 0, 0, 0.06) 0px 4px 14px",
        padding: "8px 15px",
        fontSize:"20px",
        border :"1px gray solid",
        marginLeft: "15px",
        background:"lightgreen"
},

}
export default AddCategories;