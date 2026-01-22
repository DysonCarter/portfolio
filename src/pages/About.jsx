function About() {
  return(
    <section id="about" className="max-w-5xl mx-auto px-6 py-12 text-slate-900">
      {/* Header */}
      <div className="border-b border-slate-100 pb-4 mb-4">
      <h1 className="text-3xl font-bold tracking-tight mb-4">About Me</h1>

      <p>
        I'm a Computer Science student at the <span className="font-semibold text-sky-700">University of Akron</span> who enjoys
        building React apps and interested in game theory and
        algorithmic problem-solving. I currently work with <span className="font-semibold text-sky-700">DataAnnotation</span>, where
        I help train, evaluate, and improve AI models by producing high-quality,
        structured feedback.
      </p>
      </div>

      {/*Accomplishments*/}
      <div className="border-b border-slate-100 pb-4 mb-4">
      <h2 className="text-xl font-bold tracking-tight mb-2">Accomplishments</h2>
      <ul className="space-y-4">
        <li className="flex items-start gap-3">
            <span className="text-slate-700">
              <strong className="text-slate-900">Computer Science, B.S.</strong> — University of Akron (Expected May 2026)
            </span>
        </li>
        <li className="flex items-start gap-3">
            <span className="text-slate-700">
              <strong className="text-slate-900">Artificial Intelligence and Machine Learning Certificate</strong> — University of Akron
            </span>
        </li>
      </ul>
      </div>

      {/*Work History*/}
      <div>
        <h2 className="text-xl font-bold tracking-tight mb-6">Work History</h2>
        <div className="space-y-8">

           <div className="relative pl-4 border-l-2 border-slate-100">
            <h3 className="text-lg font-bold text-slate-900">DataAnnotation - AI Trainer</h3>
            <p className="text-sm font-medium text-sky-700 mb-2">May 2024 - Present</p>
            <p className="text-slate-700 leading-relaxed">
              Train and evaluate large language models by completing programming-heavy tasks, 
              writing and reviewing prompts, and refining the model responses to improve 
              accuracy, reasoning, structured output, and instruction-following.
            </p>
          </div>

          <div className="relative pl-4 border-l-2 border-slate-100">
            <h3 className="text-lg font-bold text-slate-900">Sam's Club - Front End Associate</h3>
            <p className="text-sm font-medium text-sky-700 mb-2">December 2023 - June 2024</p>
            <p className="text-slate-700 leading-relaxed">
              Worked as a cashier and exit door associate, identifying and preventing
              theft by verifying receipts and spotting inconsistencies  I had weeks of
              catching over $200 worth of unpaid merchandise per shift!
            </p>
          </div>

          <div className="relative pl-4 border-l-2 border-slate-100">
            <h3 className="text-lg font-bold text-slate-900">University of Akron - Computer-Based Assessment Proctor</h3>
            <p className="text-sm font-medium text-sky-700 mb-2">August 2022 - December 2023</p>
            <p className="text-slate-700 leading-relaxed">
              Monitored students during exams at a testing center, ensured academic
              integrity, and resolved technical issues in real time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;