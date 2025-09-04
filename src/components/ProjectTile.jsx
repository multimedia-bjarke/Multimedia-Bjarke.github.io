import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProjectTile() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("/data/projects.json");
      const data = await response.json();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  if (!projects.length) return <p>Loading...</p>;

  return (
    <>
      <section>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <Link to={`/projects/${project.id}`}>
                <h2>{project.title}</h2>
              </Link>
              <p>{project.year}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
