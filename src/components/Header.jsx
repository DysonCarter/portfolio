import { Link } from 'react-router-dom';

function Header(){
    return <>
    <header className="sticky top-0 z-50 border-b border-slate-100 shadow-sm bg-white">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight">
          Dyson Carter
        </Link>

        <nav className="flex items-center gap-8">
          <Link to="/about" className="transition-all hover:font-bold hover:text-red-600">
            About
          </Link>
          
          <Link to="/projects" className="transition-all hover:font-bold hover:text-sky-700">
            Projects
          </Link>
          
          <a href="mailto:dysonac04@gmail.com" className="transition-all hover:font-bold hover:text-emerald-800">
            Email
          </a>
        </nav>
      </div>
    </header>
    </>
}

export default Header;