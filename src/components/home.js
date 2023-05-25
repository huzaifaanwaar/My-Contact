import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="body-light text-center">
            <div>
                <h1 className="text-primary  mt-5 text-uppercase" >WellCome To Your Contact Book</h1>
            </div>
            <Link to="/addcontact"><button type="button" className="btn btn-primary btn-lg mt-5 ">Start Add Contact Now →</button>
            </Link>
        </div>
    )
}
export default Home;