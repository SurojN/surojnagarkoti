import Link from "next/link";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-md z-50 px-6 py-3 flex justify-center space-x-8 text-white shadow-md">
      {sections.map(({ id, label }) => (
        <Link
          key={id}
          href={`#${id}`}
          className="hover:text-indigo-400 transition font-medium"
          scroll={false}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
