import { useState } from "react";
import API from "./Api";
import { toast } from "react-toastify";

function StudentForm({ refresh }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const addStudent = async () => {
    if (!name.trim()) {
      toast.error("Enter student name");
      return;
    }

    await API.post("/students", {
      name,
      date
    });

    toast.success("Student added!");
    setName("");
    refresh();
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* ✅ Date-wise attendance */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={addStudent}>Add</button>
    </div>
  );
}

export default StudentForm;
