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

    return (
        <div>
            {props.Categories.map((category) => {

                const categoryTasks = tasks.filter(
                    (task) => String(task.categoryId) === String(category.id)
                );

                return (
                    <div style={styles.category_card} key={category.id}>
                        <div style={styles.category_header}>
                            <h2>{category.title}</h2>
                            <button
                                style={styles.delete_btn}
                                onClick={() => deleteCategory(category.id)}
                            >
                                Delete
                            </button>
                        </div>

                        {categoryTasks.length === 0 ? (
                            <p className="empty">NO Tasks Exist</p>
                        ) : (
                            <ul style={styles.ul1}>
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
        border: "1px solid black",
        padding: "15px",
        border_radius: "8px",
        background_color:"#f9f9f9",
        margin_bottom: "10px"
    },
    category_header :{
    display: "flex",
    justify_content: "space-between",
    align_items: "center"
},
    delete_btn: {
        color: "black",
        font_size: "20px",
        padding: "5px 10px",
        border:"2px red solid"
    },
    ul1 :{
        margin_top: "10px",
        padding_left: "20px"
    },
        p1:{
        font_size: "15px",
        color: "black",
        background_color: "red",
        padding: "4px"

    }
}
export default ListCategories;