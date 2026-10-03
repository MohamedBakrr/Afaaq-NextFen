import { ArrowUpRight, Check } from 'lucide-react'
import Brand from './Brand.jsx'

function Footer() {
    return (
        <footer className="bg-deep pb-5 pt-[57px] text-white">
            <div className="mx-auto w-[min(1180px,calc(100%-80px))] max-[900px]:w-[min(calc(100%-48px),720px)] max-[640px]:w-[calc(100%-40px)] max-[640px]:pt-[43px]">
                <div className="grid grid-cols-[1.3fr_.7fr_1fr_auto] gap-[60px] pb-[50px] max-[900px]:gap-[35px] max-[640px]:grid-cols-2 max-[640px]:gap-[30px_20px] max-[640px]:pb-[34px]">
                    <div className="max-[640px]:col-span-full"><Brand footer /><p className="mt-[17px] text-[10px] leading-[1.8] text-white/55">Good people. Good ideas.<br />A reason to get together.</p></div>
                    <div className="flex flex-col items-start gap-2.5"><span className="mb-[7px] text-[8px] font-bold tracking-[1.5px] text-copper-light">EXPLORE</span><a className="text-[10px] text-white/65 transition hover:text-sky" href="#home">Home</a><a className="text-[10px] text-white/65 transition hover:text-sky" href="#events">Events</a><a className="text-[10px] text-white/65 transition hover:text-sky" href="#speakers">Speakers</a><a className="text-[10px] text-white/65 transition hover:text-sky" href="#about">About</a></div>
                    <div className="flex flex-col items-start gap-2.5"><span className="mb-[7px] text-[8px] font-bold tracking-[1.5px] text-copper-light">SAY HELLO</span><a className="text-[10px] text-white/65 transition hover:text-sky" href="mailto:hello@evently.community">hello@evently.community</a><a className="inline-flex items-center gap-[5px] text-[10px] text-white/65 transition hover:text-sky" href="https://www.instagram.com/">Instagram <ArrowUpRight size={12} /></a><a className="inline-flex items-center gap-[5px] text-[10px] text-white/65 transition hover:text-sky" href="https://www.linkedin.com/">LinkedIn <ArrowUpRight size={12} /></a></div>
                    <a className="grid h-[39px] w-[39px] place-items-center self-start justify-self-end border border-white/30 text-sky transition hover:bg-sky hover:text-ink" href="#home" aria-label="Back to top"><ArrowUpRight size={18} /></a>
                </div>
                <div className="flex justify-between gap-[15px] border-t border-white/15 pt-[17px] text-[7px] tracking-[1.1px] text-white/45 max-[640px]:flex-wrap max-[640px]:gap-3 max-[640px]:text-[6px] [&_span]:flex [&_span]:items-center [&_span]:gap-[7px] [&_span:last-child]:max-[640px]:hidden [&_i]:h-[3px] [&_i]:w-[3px] [&_i]:rounded-full [&_i]:bg-copper-light [&_svg]:text-sky"><span>© 2026 EVENTLY. MADE FOR THE MOMENT.</span><span>CAIRO, EGYPT <i /> EVERYWHERE</span><span>BUILT AROUND GOOD COMPANY <Check size={12} /></span></div>
            </div>
        </footer>
    )
}

export default Footer