import { useParams } from "react-router";

export default function ProjectDetail() {
  const { id } = useParams(); // 👈 grabs the ":id" from the URL
}
