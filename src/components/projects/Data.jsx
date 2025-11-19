import Project1 from "../../assets/Project1.png";
import Project2 from "../../assets/Project2.png";

export const projectsData = [
    {
        id: 1,
        image: Project1,
        title: "Website in React",
        category: "web",
        description: "A React website built during internship showcasing projects and contact info.",
        link: "https://github.com/slamasamar4/Internship24",
    },
    {
        id: 2,
        image: Project2,
        title: "Face Recognition",
        category: "ml",
        description: "Face recognition system using OpenCV and ML models.",
        link: "https://github.com/slamasamar4/FaceRecognition",
    },
];

// Navigation categories for filters; automatically include unique categories from data
export const projectsNav = [
    { name: "All" },
    ...Array.from(new Set(projectsData.map(p => p.category))).map(c => ({ name: c }))
];
