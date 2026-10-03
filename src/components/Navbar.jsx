import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Brand from './Brand.jsx'

const navLinks = [['Home', '#home'], ['Events', '#events'], ['Speakers', '#speakers'], ['About', '#about'], ['Contact', '#contact']]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="site-header">
            <div className="header-inner flex items-center justify-between">
                <Brand />
                <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
                    {navLinks.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
                </nav>
                <a className="button button-copper header-cta" href="#events">Register <ArrowUpRight size={15} /></a>
                <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={21} /> : <Menu size={21} />}
                </button>
            </div>
        </header>
    )
}

export default Navbar