import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";


const ContactDetail = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    const enterdata = () => {
        setLoader(true);
        const dataArray = [];
        axios
            .get("https://contactdetaildb-default-rtdb.firebaseio.com/ContactDB.json")
            .then((response) => {
                setLoader(false);
                console.log(response.data);
                if (response.data) {
                    Object.keys(response.data).forEach((key) => {
                        dataArray.push({ ...response.data[key], id: key });
                    });
                }
                console.log(dataArray);
                setData(dataArray);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const deleteHandler = (key) => {

        axios
            .delete(
                `https://contactdetaildb-default-rtdb.firebaseio.com/ContactDB/${key}.json`
            )
            .then((response) => {
                enterdata();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        enterdata();
    }, []);
    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact_No</th>
                        <th scope="col">Contact_Type</th>
                        <th scope="col">Address</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {loader && (
                        <tr>
                            <td colSpan="7">
                                <div className="d-flex justify-content-center">
                                    <HashLoader size={35} color={"#2686F4"} loading={loader} />
                                </div>
                            </td>
                        </tr>
                    )}
                    {data.map((value, index) => (
                        <tr key={index}>
                            <td>{value.fullname}</td>
                            <td>{value.lastname}</td>
                            <td>{value.email}</td>
                            <td>{value.Contact_No}</td>
                            <td>{value.Contact_Type}</td>
                            <td>{value.current_address}</td>
                            <td>
                                <button className="btn btn-danger me-2" onClick={() => deleteHandler(value.id)}>
                                    Delete
                                </button>
                                <Link className="btn btn-success" to={`/update-contact/${value.id}`}>
                                    Update
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default ContactDetail;