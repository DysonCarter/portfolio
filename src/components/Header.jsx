function Header(){
    return <>
    <header className="sticky top-0 z-50 border-b border-slate-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <h1 className="text-xl font-bold tracking-tight">
        Dyson Carter
      </h1>

      <nav className="flex items-center gap-8">
        <a href="#about" className="transition-all hover:font-bold hover:text-red-600">
            About
        </a>
        <a href="#projects" className="transition-all hover:font-bold hover:text-sky-700">
            Projects
        </a>
        <a href="mailto:dysonac04@gmail.com" className="transition-all hover:font-bold hover:text-emerald-800">
            Email
        </a>
      </nav>
      </div>
    </header>
    </>
}

export default Header;