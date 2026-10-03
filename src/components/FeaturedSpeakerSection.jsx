import { ArrowUpRight } from 'lucide-react'
import SpeakerCard from './SpeakerCard.jsx'

function FeaturedSpeakerSection({ speaker }) {
    return (
        <section className="bg-sky-pale py-[110px] pb-[120px] max-[640px]:py-[76px] max-[640px]:pb-[82px]" id="speakers">
            <div className="mx-auto grid w-[min(1180px,calc(100%-80px))] grid-cols-[.78fr_1.22fr] items-center gap-20 max-[900px]:w-[min(calc(100%-48px),720px)] max-[900px]:gap-[38px] max-[640px]:w-[calc(100%-40px)] max-[640px]:grid-cols-1 max-[640px]:gap-[30px]">
                <div className="speaker-intro">
                    <p className="mb-[22px] flex items-center gap-2.5 text-[9px] font-bold uppercase tracking-[1.8px] text-[#997252] max-[640px]:text-[8px] max-[640px]:tracking-[1.5px]">The people behind the ideas</p>
                    <h2 className="m-0 font-serif text-[clamp(34px,4.2vw,52px)] font-medium leading-[1.12] tracking-[-1px] max-[640px]:text-[40px]">Good ideas have<br />good <em className="font-medium text-copper">company.</em></h2>
                    <p className="mb-[25px] mt-5 max-w-[300px] text-xs leading-[1.85] text-[#667579] max-[640px]:mb-[18px] max-[640px]:mt-[15px]">Meet the thoughtful voices who make every Evently gathering worth showing up for.</p>
                    <a href="#contact" className="inline-flex items-center gap-3 border-b border-copper pb-1.5 text-[11px] text-ink transition-all hover:gap-[17px] hover:text-[#997252] max-[640px]:gap-[5px] max-[640px]:text-[9px]">Meet our community <ArrowUpRight size={15} /></a>
                </div>
                <SpeakerCard speaker={speaker} />
            </div>
        </section>
    )
}

export default FeaturedSpeakerSection