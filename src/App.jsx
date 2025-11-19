import React from "react";
import StudentCard from "./components/StudentCard";
import { activeStudents, alumni } from "./data/students";

export default function App() {
  const total = activeStudents.length + alumni.length;

  // Count most common skill
  const skillFrequency = {};
  [...activeStudents, ...alumni].forEach(s =>
    s.skills.forEach(skill => {
      skillFrequency[skill] = (skillFrequency[skill] || 0) + 1;
    })
  );
  const mostCommonSkill =
    Object.entries(skillFrequency).sort((a, b) => b[1] - a[1])[0][0];

  return (
    <div className="container">
      <h1>Student Directory 2025</h1>
      <p className="subtitle">Full Stack Development Batch</p>

      <section className="stats">
        <p>Total Students: {total}</p>
        <p>Active: {activeStudents.length}</p>
        <p>Alumni: {alumni.length}</p>
        <p>Most Common Skill: {mostCommonSkill}</p>
      </section>

      <h2>Active Students</h2>
      <div className="grid">
        {activeStudents.map(std => (
          <StudentCard key={std.rollNumber} {...std} />
        ))}
      </div>

      <h2>Alumni</h2>
      <div className="grid">
        {alumni.map(std => (
          <StudentCard key={std.rollNumber} {...std} />
        ))}
      </div>

      <footer>
        <p>Kalvium Full Stack Development</p>
        <p>Contact: shadaaminadk@gmail.com</p>
        <p>© 2025 Student Portal</p>
      </footer>
    </div>
  );
}
