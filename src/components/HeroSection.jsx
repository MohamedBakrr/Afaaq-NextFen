import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'

function HeroSection() {
    return (
        <section className="relative flex min-h-[max(720px,100svh)] items-center overflow-hidden bg-deep text-white" id="home">
            <div className="hero-backdrop absolute inset-0" />
            <div className="hero-grain pointer-events-none absolute inset-0 opacity-[.12]" />
            <div className="relative z-[1] mx-auto flex min-h-svh w-[min(1180px,calc(100%-80px))] flex-col justify-center pt-[76px] max-[900px]:w-[min(calc(100%-48px),720px)] max-[640px]:w-[calc(100%-40px)] max-[640px]:pt-[65px]">
                <div className="hero-reveal w-[min(660px,70%)] pb-[85px] max-[900px]:w-[min(620px,86%)] max-[640px]:w-full max-[640px]:pb-20">
                    <p className="mb-[22px] flex items-center gap-2.5 text-[9px] font-bold uppercase tracking-[1.8px] text-copper-light max-[640px]:text-[8px] max-[640px]:tracking-[1.5px]"><span className="h-px w-[29px] bg-copper-light" /> A place for ideas to happen</p>
                    <h1 className="m-0 font-serif text-[clamp(48px,6.8vw,88px)] font-medium leading-[1.06] tracking-[-2px] max-[640px]:text-[clamp(48px,13vw,69px)] max-[640px]:tracking-[-1.5px]">Discover events<br />that move you <em className="font-medium text-sky">forward.</em></h1>
                    <p className="mb-[30px] mt-6 max-w-[430px] text-[13px] leading-[1.9] text-white/75 max-[640px]:max-w-[345px] max-[640px]:text-xs">Good things happen when curious people get together. Find your people, learn something new, and leave with a little more momentum.</p>
                    <div className="flex flex-wrap gap-3 max-[640px]:gap-[9px]">
                        <a className="inline-flex min-h-12 items-center justify-center gap-5 border border-copper bg-copper px-[21px] text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#9f7052] hover:bg-[#9f7052] max-[640px]:min-h-[45px] max-[640px]:gap-3 max-[640px]:px-[14px] max-[640px]:text-[10px]" href="#events">Explore events <ArrowUpRight size={16} /></a>
                        <a className="inline-flex min-h-12 items-center justify-center gap-5 border border-white/45 px-[21px] text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:border-sky hover:text-sky max-[640px]:min-h-[45px] max-[640px]:gap-3 max-[640px]:px-[14px] max-[640px]:text-[10px]" href="#speakers">Become a speaker <ArrowRight size={16} /></a>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-7 flex items-center justify-between text-[8px] font-semibold tracking-[1.5px] text-white/60 max-[640px]:bottom-[21px] max-[640px]:text-[7px] max-[640px]:tracking-[.8px] [&_a]:flex [&_a]:items-center [&_a]:gap-2 [&_a]:transition [&_a]:hover:text-sky max-[640px]:[&_a]:gap-1">
                    <span>CAIRO · EVERYWHERE</span>
                    <a href="#categories">SCROLL TO EXPLORE <ArrowDown size={13} /></a>
                    <span className="max-[640px]:hidden">EST. 2026</span>
                </div>
            </div>
            <div className="absolute bottom-[29%] right-[max(40px,calc((100vw-1320px)/2))] flex items-center gap-3 text-[9px] tracking-[1px] text-white/60 [writing-mode:vertical-rl] max-[640px]:hidden"><span className="text-copper-light">01</span><i className="h-[55px] w-px bg-white/35" /> 06</div>
        </section>
    )
}

export default HeroSection