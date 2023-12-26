import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Employelist = () => {
  const [empdata, empdatachange] = useState(null);
   const navigate= useNavigate();

const LoadDetail = (id) => {
     navigate('/employee/detail/:empid'+id);

}
const LoadEdit = (id) => {
    navigate('/employee/edit/:empid'+id);
}
const Removefunction = (id) => {
   if (window.confirm('Do you want to remove?')) {
       fetch("http://localhost:8000/employee/" + id, {
           method: "DELETE"
       }).then((res) => {
           alert('Removed successfully.')
           window.location.reload();
       }).catch((err) => {
           console.log(err.message)
       })
   }
}
 

  const getDatafuction = async () => {
    await fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp);
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getDatafuction();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Employee List</h2>
        </div>
        <div className="card-body">
         <div className="divbtn"></div>
          <div className="divbtn">
            <Link to="employee/create" className="btn btn-success">
              Add New(+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td> ID</td>
                <td> Name</td>
                <td> Email</td>
                <td> Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a  onClick={()=>{LoadEdit(item.id) }} className="btn btn-primary">Detail</a>

                      <a  onClick={()=>{Removefunction (item.id) }} className="btn btn-danger">Delete</a>
                      <a  onClick={() => {LoadDetail (item.id) }} className="btn btn-success">Edit</a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Employelist;
