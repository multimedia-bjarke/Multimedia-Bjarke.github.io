import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function Projects() {
  const { id } = useParams(); // 👈 grabs the ":id" from the URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    async function fetchProject() {
      const response = await fetch("/data/projects.json");
      const data = await response.json();

      // Find the client with matching id
      const found = data.find((c) => String(c.id) === id);
      setProject(found);
    }
    fetchProject();
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <article>
      <h2>{client.name}</h2>
      <p>{client.title}</p>
      <p>{client.mail}</p>
      <img src={client.image} alt={client.name} />
    </article>
  );
}
