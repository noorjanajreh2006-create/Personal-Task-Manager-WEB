import { useEffect, useState } from "react";
const ListCategories = (props) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        setTasks(Array.isArray(storedTasks) ? storedTasks : []);
    }, []);

    const deleteCategory = (id) => {
        props.setCategories(
            props.Categories.filter((category) => category.id !== id)
        );
    };

    const [editId, setEditId] = useState(null);
    const [editTitleCat, setEditTitleCat] = useState("");

    const saveEdit = (id)=>{
        props.setCategories(props.Categories.map((category)=>
            category.id===id? {...category,title:editTitleCat} : category)
        );
        setEditId(null);
        setEditTitleCat("");
    }

    return (
        <div>
            {props.Categories.map((category) => {

                const categoryTasks = tasks.filter(
                    (task) => String(task.categoryId) === String(category.id)
                );

                return (
                    <div style={styles.category_card} key={category.id}>
                        <div style={styles.category_header}>
                            {editId === category.id ?(
                                <input style={styles.inputEdit} value={editTitleCat} onChange={(e)=>setEditTitleCat(e.target.value)}/>
                                ):
                                    (
                                    <h2 style={styles.TitleCat}>{category.title}</h2>)
                            }
                            {editId === category.id ?(
                                <button style={styles.save_btn} onClick={()=>saveEdit(category.id)}>Save</button>
                            ) : (
                                <button style={styles.edit_btn} onClick={()=>{setEditId(category.id); setEditTitleCat(category.title)}}>Edit</button>
                            )}
                            <button style={styles.delete_btn} onClick={() => deleteCategory(category.id)}>
                                Delete
                            </button>

                        </div>

                        {categoryTasks.length === 0 ? (
                            <p className="empty">NO Tasks Exist</p>
                        ) : (
                            <ul>
                                {categoryTasks.map((task) => (
                                    <li style={styles.p1} key={task.id}>
                                        {task.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
const styles={
    category_card:{
        margin:"20px 0 10px 0",
        borderRadius:"10px",
        boxShadow:" rgba(0, 0, 0, 0.06) 0px 4px 14px",
        border: "1px solid gray",
        padding: "15px",
        border_radius: "8px",
        background_color:"#f9f9f9"
    },
    category_header :{
    display: "flex",

},
    delete_btn: {
        
        borderRadius:"10px",
        boxShadow:"rgba(0, 0, 0, 0.06) 0px 4px 14px",
        marginLeft: "10px",
        color: "black",
        fontSize: "20px",
        padding: "5px 10px",
        border:"1px solid gray"
    },
    li :{
        fontSize:"20px",
        margin_top: "10px",
        padding_left: "20px"
    },
        p1:{
        margin:"0 0 10px 0",
        borderRadius:"10px",
        border:"1px sloid gray",
        fontSize: "25px",
        color: "black",
        backgroundColor: "whitesmoke",
        padding: "4px"
    },
    edit_btn:{
        borderRadius:"10px",
        marginLeft:"10px",
        padding:"5px 10px",
        border:"1px solid lightgreen",
        boxShadow:" rgba(0, 0, 0, 0.06) 0px 4px 14px"
},
    save_btn:{
        fontSize:"20px",
        background:"lightblue",
        borderRadius:"10px",
        marginLeft:"10px",
        marginRight: "10px",
        padding:"5px 10px",
        border: "1px solid blue",
        boxShadow:" rgba(0, 0, 0, 0.06) 0px 4px 14px"
    },
    TitleCat:{
        fontSize:"20px"
    },
    inputEdit:{
        fontSize:"20px"
    }
}
export default ListCategories;