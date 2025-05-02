'use client';

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link?: string;
}

const projects: Project[] = [
    {
        title: "Tri-Fantasy",
        description: "Triathlon fantasy league app to choose your favorite athletes and compete with your friends.",
        image: "/images/tri-fantasy.jpg",
        technologies: ["React", "TypeScript", "tailwind"],
        link: "https://tri-fantasy.vercel.app/"
    }

];

export default function ProjectShowcase() {
    return (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">My Projects</h2>
                <div className="grid grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                                    >
                                        View Project
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 