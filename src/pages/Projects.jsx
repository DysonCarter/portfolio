import Project from '../components/Project'

function Projects() {
    return (
        <section id="projects" className="max-w-5xl mx-auto px-6 py-12">
            <div className="border-b border-slate-100 pb-4 mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                    My Projects
                </h1>
            </div>

            {/* Grid Container: 1 column on mobile, 2 columns on medium screens and up */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Project 
                    Image="src/assets/8bb.png"
                    Title="8BB"
                    Href="https://8bb.online"
                    Description="8BB is a tool for creating 8-bit music. Inspired by the tune builder from the Animal Crossing series, 8BB offers an intuitive and playful way to compose your own melodies."
                />

                <Project 
                    Image="src/assets/transpose.png"
                    Title="TransposeHero"
                    Href="https://transposehero.com"
                    Description="A guitar utility that instantly maps chord shapes to any key and calculates the correct capo position."
                />
            </div>
        </section>
    )
}

export default Projects;