import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
  const { empid } = useParams();
  const [empdata, empdatachange] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <div ClassName="card" style={{ textAlign: "left" }}>
        <div className="card-tittle">
          <h2>User created </h2>
        </div>
        <div className="card-body"></div>
        {empdata && (
          <div>
            <h3>
              The user is:<b>{empdata.name} </b>({empdata.id})
            </h3>
            <h3>Contact detail</h3>
            <h3>Email is :{empdata.email}</h3>
            <h3>Phone is :{empdata.phone}</h3>
            <Link className="btn btn-danger" to="/">
              {" "}
              Back
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default EmpDetail;
