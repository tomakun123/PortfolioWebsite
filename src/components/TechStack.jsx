export default function TechStack() {
  const stack = [
    { name: "Python", icon: "tech/python.svg" },
    { name: "C++", icon: "tech/cpp.svg" },
    { name: "JavaScript", icon: "tech/js.svg" },
    { name: "React", icon: "tech/react.svg" },
    { name: "PostgreSQL", icon: "tech/postgresql.svg" },
    { name: "MySQL", icon: "tech/mysql.svg" },
    { name: "HTML5", icon: "tech/html5.svg" },
    { name: "CSS3", icon: "tech/css3.svg" },
    { name: "Flask", icon: "tech/flask.svg" },
    { name: "Linux", icon: "tech/linux.svg" },
    { name: "Docker", icon: "tech/docker.svg" },
    { name: "n8n", icon: "/tech/n8n.svg" },
    { name: "Supabase", icon: "/tech/supabase.svg" },
    { name: "Jupyter", icon: "/tech/jupyter.svg" },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold tracking-tight mb-2">
        Tech Stack
      </h2>

      <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
        {stack.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-center rounded-xl border border-zinc-300 bg-zinc-50 p-3 hover:bg-white transition"
            title={item.name}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="h-12 w-12 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
