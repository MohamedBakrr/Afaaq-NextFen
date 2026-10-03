import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Brand from './Brand.jsx'

const navLinks = [['Home', '#home'], ['Events', '#events'], ['Speakers', '#speakers'], ['About', '#about'], ['Contact', '#contact']]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="absolute inset-x-0 top-0 z-20 text-white">
            <div className="mx-auto flex h-[86px] w-[min(1320px,calc(100%-80px))] items-center justify-between border-b border-white/20 max-[900px]:w-[min(calc(100%-48px),720px)] max-[640px]:h-[70px] max-[640px]:w-[calc(100%-40px)]">
                <Brand />
                <nav className={`${menuOpen ? 'absolute inset-x-0 top-[69px] flex flex-col items-stretch gap-0 border-b border-white/20 bg-deep/95 px-5 pb-4 pt-2' : 'hidden'} min-[641px]:static min-[641px]:ml-auto min-[641px]:mr-12 min-[641px]:flex min-[641px]:min-h-0 min-[641px]:flex-row min-[641px]:items-center min-[641px]:gap-[clamp(20px,3vw,42px)] min-[641px]:border-0 min-[641px]:bg-transparent min-[641px]:p-0`} aria-label="Main navigation">
                    {navLinks.map(([label, href]) => <a className="group relative py-3 text-[13px] text-white/75 transition hover:text-white min-[641px]:py-0 min-[641px]:text-xs after:absolute after:-bottom-[7px] after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-copper-light after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 max-[640px]:after:hidden" key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
                </nav>
                <a className="ml-auto inline-flex min-h-[39px] items-center justify-center gap-2.5 border border-copper bg-copper px-4 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#9f7052] hover:bg-[#9f7052] min-[641px]:ml-0 max-[640px]:mr-[13px] max-[640px]:min-h-[35px] max-[640px]:px-[11px] max-[640px]:text-[10px] [&_svg]:max-[640px]:w-[13px]" href="#events">Register <ArrowUpRight size={15} /></a>
                <button className="hidden place-items-center border-0 bg-transparent p-[5px] text-white max-[640px]:grid" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={21} /> : <Menu size={21} />}
                </button>
            </div>
        </header>
    )
}

export default Navbar