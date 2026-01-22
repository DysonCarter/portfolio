function Project({ Title, Href, Image, Description, Technologies = [] }) {
  return (
    <a 
      href={Href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group block overflow-hidden rounded-xl border border-slate-100 bg-white transition-all hover:shadow-md hover:border-sky-200"
    >
      <div className="flex flex-col h-full">
        {/* Image Container */}
        <div className="w-full h-48 overflow-hidden bg-slate-50">
          <img 
            src={Image} 
            alt={Title} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-1 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
              {Title}
            </h3>
            <svg 
              className="w-5 h-5 text-slate-400 group-hover:text-sky-700 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
          
          <p className="text-slate-600 leading-relaxed mb-4">
            {Description}
          </p>

          {/* Technologies Tags */}
          <div className="mt-auto flex flex-wrap gap-2">
            {Technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200 group-hover:bg-sky-50 group-hover:text-sky-700 group-hover:border-sky-100 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export default Project;