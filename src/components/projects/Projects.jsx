import React, { useEffect, useState, useMemo } from 'react';
import { projectsData, projectsNav } from "./Data";
import ProjectItems from "./ProjectItems";

const Projects = () => {
    const [activeNav, setActiveNav] = useState(0);
    const [filter, setFilter] = useState("All");
    const [query, setQuery] = useState("");

    // derive filtered projects
    const projects = useMemo(() => {
        const byCategory = filter === "All" ? projectsData : projectsData.filter(p => p.category === filter);
        if (!query) return byCategory;
        const q = query.toLowerCase();
        return byCategory.filter(p => (p.title + " " + (p.description || "")).toLowerCase().includes(q));
    }, [filter, query]);

    const handleNavClick = (name, index) => {
        setFilter(name);
        setActiveNav(index);
    };

    return (
        <div>
            <div className="project__filters">
                {projectsNav.map((nav, index) => (
                    <button
                        key={nav.name}
                        type="button"
                        className={`project__item ${index === activeNav ? 'active__project' : ''}`}
                        onClick={() => handleNavClick(nav.name, index)}
                    >
                        {nav.name}
                    </button>
                ))}
            </div>

            <div className="project__container container grid">
                {projects.length ? (
                    projects.map((item) => <ProjectItems item={item} key={item.id} />)
                ) : (
                    <p style={{ textAlign: 'center', width: '100%', color: 'var(--title-color)' }}>No projects found.</p>
                )}
            </div>
        </div>
    );
}

export default Projects;