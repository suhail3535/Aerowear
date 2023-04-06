
import styles from "./admin.module.css";
import React from "react";
import { useDispatch } from "react-redux";
import { deletedata, getRequest } from "../../Redux/AdminReducer/action";
import { Link} from "react-router-dom";
import Swal from "sweetalert2";
const AdminCard = ({ id, image, name, price, Rating }) => {
    const dispatch = useDispatch();


    const handleDelete = (id) => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
        dispatch(deletedata(id)).then(() => dispatch(getRequest()));
    };

    const handleClick = () => {
        let timerInterval;
        Swal.fire({
            title: "Admin please wait!",
            html: "I will close in <b></b> milliseconds.",
            timer: 1000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector("b");
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft();
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    };

    return (
        <div id={styles.card}>
            <div>
                <img id={styles.img} src={image} alt="title" />
            </div>
            <div style={{ textAlign: "center" }}>
                <h1>Title : {name} </h1>
                <p>Price : {price} $/-</p>
                <p>Rating : {Rating}</p>
                <div id={styles.button}>
                    <Link to={`/edit/${id}`}>
                        <button id={styles.edit} onClick={handleClick}>
                            Edit
                        </button>
                    </Link>
                    <button id={styles.delete} onClick={() => handleDelete(id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminCard;
