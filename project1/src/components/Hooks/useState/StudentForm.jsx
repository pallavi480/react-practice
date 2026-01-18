import { useState } from "react";

const StudentForm = () => {

  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
    batch: ""
  });

  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(true);

  function handleChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      student.name === "" ||
      student.age === "" ||
      student.course === "" ||
      student.batch === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    setStudents([...students, student]);

    // clear form
    setStudent({
      name: "",
      age: "",
      course: "",
      batch: ""
    });
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Management</h2>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Form" : "Show Form"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={student.name}
            onChange={handleChange}
          />
          <br />

          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={student.age}
            onChange={handleChange}
          />
          <br />

          <input
            type="text"
            name="course"
            placeholder="Enter Course"
            value={student.course}
            onChange={handleChange}
          />
          <br />

          <input
            type="text"
            name="batch"
            placeholder="Enter Batch"
            value={student.batch}
            onChange={handleChange}
          />
          <br />

          <button type="submit">Add Student</button>
        </form>
      )}

      <hr />

      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        students.map((stu, index) => (
          <p key={index}>
            {stu.name} - {stu.age} - {stu.course} - {stu.batch}
          </p>
        ))
      )}
    </div>
  );
};

export default StudentForm;
