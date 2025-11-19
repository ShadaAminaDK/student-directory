export default function StudentCard({ name, rollNumber, course, email, skills, isActive }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{name}</h3>
        <span className={`badge ${isActive ? "active" : "inactive"}`}>
          {isActive ? "Active" : "Inactive"}
        </span>
      </div>

      <p><strong>Roll Number:</strong> {rollNumber}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Email:</strong> {email}</p>

      <div className="skills">
        {skills.map((skill, idx) => (
          <span key={idx} className="skill">{skill}</span>
        ))}
      </div>
    </div>
  );
}
