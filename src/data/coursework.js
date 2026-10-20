// src/data/coursework.js

// The semester labeled "This semester" on the Projects & Coursework page
export const CURRENT_TERM = "Fall 2026";

export const DEGREE =
  "B.S. Computer Science · Minors in Mathematics and Quantum Technology";

// Courses grouped by category. Set status: "in-progress" for current-semester
// courses; anything without a status counts as completed.
export const COURSEWORK = [
    {
        category: "Computer Science",
        courses: [
            { name: "Design & Analysis of Algorithms", status: "in-progress" },
            { name: "Intro to Machine Learning", status: "in-progress" },
            { name: "Applied Cryptography" },
            { name: "Introduction to Operating Systems" },
            { name: "Computer Architecture and Organization" },
            { name: "Introduction to Databases" },
            { name: "Object Oriented Programming" },
            { name: "Data Structures & Algorithms" },
        ],
    },

    {
        category: "Quantum",
        courses: [
            { name: "Mathematical Foundations for Quantum Computing", status: "in-progress" },
            { name: "Introduction to Quantum Programming", status: "in-progress" },
            { name: "Intro to Quantum Science" },
        ],
    },

    {
        category: "Mathematics",
        courses: [
            { name: "Probability and Statistics for Engineers" },
            { name: "Linear Algebra & Differential Equations" },
            { name: "Discrete Mathematics" },
            { name: "Calculus II" },
        ],
    },
];
