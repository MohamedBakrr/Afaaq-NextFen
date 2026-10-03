import { ArrowUpRight, AtSign, Globe } from 'lucide-react'

function SpeakerCard({ speaker }) {
    return (
        <article className="group grid min-h-[380px] grid-cols-[.86fr_1.14fr] bg-paper shadow-[0_24px_55px_rgba(16,43,52,.09)] transition duration-300 hover:-translate-y-[5px] hover:shadow-[0_30px_60px_rgba(16,43,52,.15)] max-[900px]:min-h-[350px] max-[900px]:grid-cols-[.75fr_1.25fr] max-[640px]:min-h-[325px] max-[640px]:grid-cols-[.78fr_1.22fr]">
            <div className="relative overflow-hidden bg-[#a8b5ad]">
                <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]" src={speaker.image} alt={speaker.name} />
                <span className="absolute inset-x-0 bottom-0 top-[40%] bg-gradient-to-t from-ink/55 to-transparent" />
                <span className="absolute left-[18px] top-[18px] z-[1] text-[8px] tracking-[1.2px] text-white">EVENTLY VOICE — 001</span>
                <span className="absolute bottom-[10px] right-4 z-[1] font-serif text-[41px] font-medium text-white/75">E<span className="text-copper-light">.</span></span>
            </div>
            <div className="flex flex-col p-[31px] pb-[22px] max-[900px]:px-[22px] max-[900px]:py-[25px] max-[640px]:px-4 max-[640px]:pb-[15px] max-[640px]:pt-[21px]">
                <div>
                    <p className="mb-[14px] flex items-center gap-2.5 text-[8px] font-bold uppercase tracking-[1.8px] text-[#997252]">Featured speaker</p>
                    <h3 className="mb-1 mt-0 font-serif text-[28px] font-medium max-[640px]:text-2xl">{speaker.name}</h3>
                    <span className="text-[10px] text-[#917456]">{speaker.role}</span>
                </div>
                <p className="my-[25px] max-w-[300px] text-[11px] leading-[1.8] text-[#637176] max-[640px]:my-[18px] max-[640px]:text-[10px]">{speaker.bio}</p>
                <div className="mt-auto flex items-center justify-between gap-2.5 border-t border-ink/15 pt-[17px] max-[640px]:items-end">
                    <span className="text-[7px] tracking-[1px] text-[#818b89] max-[640px]:max-w-[95px] max-[640px]:leading-[1.5]">SHARING IDEAS AT EVENTLY</span>
                    <div className="flex gap-[7px] max-[640px]:gap-1">
                        <a className="grid h-[30px] w-[30px] place-items-center border border-ink/15 transition hover:border-ink hover:bg-ink hover:text-white max-[640px]:h-[27px] max-[640px]:w-[27px]" href={speaker.linkedin} aria-label={`${speaker.name} on LinkedIn`} target="_blank" rel="noreferrer"><Globe size={16} /></a>
                        <a className="grid h-[30px] w-[30px] place-items-center border border-ink/15 transition hover:border-ink hover:bg-ink hover:text-white max-[640px]:h-[27px] max-[640px]:w-[27px]" href={speaker.instagram} aria-label={`${speaker.name} on Instagram`} target="_blank" rel="noreferrer"><AtSign size={16} /></a>
                        <a className="grid h-[30px] w-[30px] place-items-center border border-ink/15 transition hover:border-ink hover:bg-ink hover:text-white max-[640px]:h-[27px] max-[640px]:w-[27px]" href="mailto:hello@evently.community" aria-label="Contact this speaker"><ArrowUpRight size={16} /></a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default SpeakerCard