import {
  SiPostgresql,
  SiTypescript,
  SiDjango,
  SiNextdotjs,
} from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaNode, FaReact } from "react-icons/fa";

export const stackData = [
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  {
    title: "JS",
    img: FaJs,
  },
  { title: "TypeScript", img: SiTypescript },
  {
    title: "Node JS",
    img: FaNode,
  },
  {
    title: "React",
    img: FaReact,
  },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Git", img: FaGit },
  { title: "Python", img: FaPython },
  { title: "Django", img: SiDjango },
  { title: "Next JS", img: SiNextdotjs },
];
