import API from "./Api";

function StudentList({ students, refresh }) {

  const markAttendance = async (id, status) => {
    await API.put(`/students/${id}`, { isPresent: status });
    refresh();
  };

  const deleteStudent = async (id) => {
    await API.delete(`/students/${id}`);
    refresh();
  };

  if (students.length === 0) {
    return <p className="empty">No students found</p>;
  }

  return (
    <div className="student-list">
      {students.map(student => (
        <div key={student._id} className="student-card">

          {/* LEFT: Student Info */}
          <div className="student-info">
            <h4>{student.name}</h4>
            <span className="date">{student.date}</span>
          </div>

          {/* CENTER: Attendance */}
          <div className="attendance">
            <button
              className={`att-btn present ${student.isPresent ? "active" : ""}`}
              onClick={() => markAttendance(student._id, true)}
            >
              P
            </button>

            <span className="divider">|</span>

            <button
              className={`att-btn absent ${!student.isPresent ? "active" : ""}`}
              onClick={() => markAttendance(student._id, false)}
            >
              A
            </button>
          </div>

          {/* RIGHT: Delete */}
          <button
            className="delete-btn"
            onClick={() => deleteStudent(student._id)}
          >
            ✕
          </button>

        </div>
      ))}
    </div>
  );
}

export default StudentList;
