import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

function AboutSection() {
    return (
        <section className="bg-paper py-[115px] max-[640px]:py-[78px] max-[640px]:pb-[84px]" id="about">
            <div className="mx-auto grid w-[min(1180px,calc(100%-80px))] grid-cols-[1.05fr_.95fr] items-center gap-[95px] max-[900px]:w-[min(calc(100%-48px),720px)] max-[900px]:gap-[55px] max-[640px]:w-[calc(100%-40px)] max-[640px]:grid-cols-1 max-[640px]:gap-[35px]">
                <div className="about-photo relative h-[480px] overflow-hidden bg-[#ced3ca] max-[900px]:h-[430px] max-[640px]:h-[310px]">
                    <img className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85" alt="A warm, welcoming venue ready for a gathering" />
                    <span className="absolute bottom-[22px] left-[23px] z-[1] inline-flex items-center gap-2.5 text-[8px] tracking-[1.3px] text-white">MAKE SOMETHING OF YOUR EVENING <ArrowDownRight className="text-sky" size={15} /></span>
                </div>
                <div className="relative pb-[55px] max-[640px]:pb-[54px]">
                    <p className="mb-[19px] flex items-center gap-2.5 text-[9px] font-bold uppercase tracking-[1.8px] text-[#997252] max-[640px]:text-[8px] max-[640px]:tracking-[1.5px]">A little about us</p>
                    <h2 className="m-0 font-serif text-[clamp(42px,5vw,61px)] font-medium leading-[1.12] tracking-[-1px] max-[640px]:text-[48px]">What is<br /><em className="font-medium text-copper">Evently?</em></h2>
                    <p className="mb-0 mt-[22px] max-w-[390px] text-xs leading-[1.9] text-[#536368]">We believe a room full of curious people can change everything. Evently brings together the workshops, conversations, and unexpected connections that make ideas feel possible.</p>
                    <p className="mb-0 mt-3 max-w-[390px] text-xs leading-[1.9] text-[#828c8c]">No awkward networking. No talking at you. Just thoughtful events, generous people, and a reason to get out of your usual orbit.</p>
                    <a className="mt-[25px] inline-flex items-center gap-3 border-b border-copper pb-1.5 text-[11px] text-ink transition-all hover:gap-[17px] hover:text-[#997252] max-[640px]:gap-[5px] max-[640px]:text-[9px]" href="#events">Find your next event <ArrowUpRight size={15} /></a>
                    <div className="absolute -bottom-[3px] right-0 flex items-center gap-[13px] text-[8px] leading-[1.6] tracking-[1px] text-[#798481] max-[640px]:bottom-0"><strong className="font-serif text-[34px] font-medium text-copper">01<span className="ml-1 font-sans text-base font-normal text-ink">—</span></strong><span>GOOD PEOPLE<br />GOOD ENERGY</span></div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection