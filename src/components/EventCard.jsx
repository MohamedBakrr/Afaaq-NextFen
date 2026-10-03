import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react'

function EventCard({ title, description, date, location, category, speaker, image, position = 0, onSelect, compact = false, number }) {
    if (compact) {
        return (
            <article className="group grid min-h-[292px] grid-cols-[.92fr_1.08fr] border border-white/15 bg-[#15343c] transition duration-300 hover:-translate-y-1 hover:border-sky/55 max-[900px]:grid-cols-[.8fr_1.2fr] max-[640px]:min-h-[250px] max-[640px]:grid-cols-[.78fr_1.22fr]">
                <button className="group/image relative min-h-full overflow-hidden border-0 bg-ink p-0" type="button" onClick={onSelect} aria-label={`View ${title}`}>
                    <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/image:scale-105" src={image} alt="" />
                    <span className="absolute inset-0 bg-gradient-to-t from-[#0a1f26]/55 to-transparent" />
                    <span className="absolute left-4 top-4 z-[1] text-[9px] tracking-[1px] text-white">{number}</span>
                    <span className="absolute bottom-[14px] right-[14px] z-[1] grid h-[34px] w-[34px] place-items-center bg-sky text-ink transition-transform group-hover/image:rotate-45"><ArrowUpRight size={17} /></span>
                </button>
                <div className="flex flex-col items-start p-6 pb-[19px] max-[900px]:px-[17px] max-[900px]:py-5 max-[640px]:px-[14px] max-[640px]:pb-[14px] max-[640px]:pt-[18px]">
                    <span className="text-[8px] font-bold uppercase tracking-[1.3px] text-copper-light">{category}</span>
                    <h3 className="mb-[9px] mt-2.5 font-serif text-[21px] font-medium leading-[1.2] text-white max-[640px]:text-[19px]">{title}</h3>
                    <p className="m-0 text-[10px] leading-[1.7] text-white/60 max-[640px]:text-[9px]">{description}</p>
                    <div className="mt-[17px] flex flex-col gap-2 text-[9px] text-white/75 max-[640px]:mt-3 max-[640px]:text-[8px] [&_span]:flex [&_span]:items-center [&_span]:gap-[7px] [&_svg]:text-sky"><span><CalendarDays size={13} />{date}</span><span><MapPin size={13} />{location}</span></div>
                    <button className="mt-auto flex items-center gap-2 border-0 bg-transparent pt-[14px] text-[10px] text-sky" type="button" onClick={onSelect}>Event details <ArrowUpRight size={13} /></button>
                </div>
            </article>
        )
    }

    const distance = Math.abs(position)
    const style = {
        transform: `translateX(${position * 255}px) scale(${1 - Math.min(distance, 2) * 0.11}) rotateY(${position * -12}deg)`,
        opacity: 1 - Math.min(distance, 2) * 0.32,
        zIndex: 10 - distance,
    }

    return (
        <article className={`event-carousel-card ${position === 0 ? 'is-active' : ''}`} style={style} aria-hidden={distance > 1}>
            <button className="group relative block h-full w-full overflow-hidden rounded border border-ink/10 bg-ink p-0 text-left text-white shadow-[0_23px_46px_rgba(16,43,52,.18)]" type="button" onClick={onSelect} tabIndex={position === 0 ? 0 : -1} aria-label={position === 0 ? `View details for ${title}` : `Show ${title}`}>
                <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.055]" src={image} alt="" />
                <span className="absolute inset-0 bg-gradient-to-b from-[#05151a]/50 via-transparent to-[#05151a]/85" />
                <span className="absolute left-[25px] right-[25px] top-[22px] z-[1] flex justify-between text-[8px] font-semibold uppercase tracking-[1.3px] max-[640px]:left-[19px] max-[640px]:right-[19px]">
                    <span className="border border-white/55 bg-ink/25 px-[9px] py-[7px]">{category}</span>
                    <span>EVENT NO. {String(number || `0${(distance % 6) + 1}`)}</span>
                </span>
                <span className="absolute bottom-6 left-[25px] right-[25px] z-[1] flex flex-col items-start max-[640px]:left-[19px] max-[640px]:right-[19px]">
                    <span className="mb-[11px] flex items-center gap-[7px] text-[10px] text-sky"><CalendarDays size={13} />{date}</span>
                    <strong className="max-w-[310px] font-serif text-[29px] font-medium leading-[1.1] max-[640px]:text-[25px]">{title}</strong>
                    <span className="mt-4 flex w-full justify-between gap-2 text-[8px] tracking-[.8px] text-white/75"><span className="inline-flex items-center gap-[5px]"><MapPin size={13} />{location}</span><span>WITH {speaker.toUpperCase()}</span></span>
                    <span className="mt-[22px] flex w-full items-center gap-2 border-t border-white/30 pt-[13px] text-[10px]">Explore event <ArrowUpRight className="ml-auto text-copper-light" size={15} /></span>
                </span>
            </button>
        </article>
    )
}

export default EventCard