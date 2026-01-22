import Project from '../components/Project'

import img8bb from '../assets/8bb.png'
import imgTranspose from '../assets/transpose.png'

function Main() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-slate-900">

      {/* About Preview */}
      <section className="border-b border-slate-100 pb-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-4">About Me</h1>
        <p>
          I'm a Computer Science student at the{" "}
          <span className="font-semibold text-sky-700">University of Akron</span> who enjoys
          building. I am interested in game theory, music, and
          algorithmic problem-solving. I currently work with{" "}
          <span className="font-semibold text-sky-700">DataAnnotation</span>, where
          I help train, evaluate, and improve AI models by producing high-quality,
          structured feedback.
        </p>
      </section>

      {/* Favorite Projects */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight mb-8">
          Favorite Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Project 
            Image={img8bb}
            Title="8BB"
            Href="https://8bb.online"
            Technologies={["React", "Tailwind", "Tone.js"]}
            Description="8BB is a tool for creating 8-bit music. Inspired by the tune builder from the Animal Crossing series, 8BB offers an intuitive and playful way to compose your own melodies."
          />

          <Project 
            Image={imgTranspose}
            Title="TransposeHero"
            Href="https://transposehero.com"
            Technologies={["HTML", "CSS", "JavaScript"]}
            Description="A guitar utility that instantly maps chord shapes to any key and calculates the correct capo position."
          />
        </div>
      </section>

    </main>
  )
}

export default Main
