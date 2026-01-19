import { useEffect, useState } from "react";
import API from "./Api";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await API.get("/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container">
      <h2>Student Attendance System</h2>

      <StudentForm refresh={fetchStudents} />
      <StudentList students={students} refresh={fetchStudents}/>

      {/* ✅ Toast area */}
      <ToastContainer position="top-right" autoClose={2000}/>
    </div>
  );
}

export default App;
