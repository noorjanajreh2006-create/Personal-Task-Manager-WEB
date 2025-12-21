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


    // const [categories, setCategories] = useState([
    //     {
    //         id: 1,
    //         title: "Projects",
    //         tasks: ["Do Team Project 1", "Do DataBase Project"],
    //     },
    //     {
    //         id: 2,
    //         title: "Work",
    //         tasks: ["retreive Emails", "Meeting Teams"],
    //     }, 
    // ]); 

    const [newCategory, setNewCategory] = useState(""); 


    const addCategory = () => {
        if (newCategory.trim() === "") return;

        setCategories([
            ...categories,
            {
                id: Date.now(),
                title: newCategory,
                tasks: [],
            },
        ]);

        setNewCategory("");
    };

    return (
        <div style={styles.categories_page}>
            <h1 style={styles.h1}>Categories</h1>

            <div style={styles.add_category}>
                <input style={styles.input} type="text" placeholder="Category name" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}/>
                <button style={styles.button} onClick={addCategory}>Add Category</button>
            </div>

            <ListCategories Categories={categories} setCategories={setCategories} />

        </div>
    )
}
const styles={
    categories_page : {
    border :"2px black solid",
    font_family:"sans-serif",
    margin_left: "650px",
    padding :"20px"
},
    h1: {
        margin_bottom: "20px",
        margin_left: "60px"
},
    add_category: {
    display: "flex",
    margin_bottom: "30px"
},
    input :{
        padding: "8px",
        width: "200px",
        font_size:"20px"
},
    button: {
        padding: "8px 15px",
        font_size:"20px",
        border :"2px black solid",
        margin_left: "15px",
        background:"lightgreen"
},

}
export default AddCategories;