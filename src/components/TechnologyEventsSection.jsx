import { ArrowUpRight } from 'lucide-react'
import EventCard from './EventCard.jsx'

function TechnologyEventsSection({ events, onSelectEvent }) {
    const technologyEvents = events.filter((event) => event.category === 'Technology')

    return (
        <section className="bg-ink py-[104px] pb-28 text-white max-[640px]:py-[76px] max-[640px]:pb-[82px]">
            <div className="mx-auto w-[min(1180px,calc(100%-80px))] max-[900px]:w-[min(calc(100%-48px),720px)] max-[640px]:w-[calc(100%-40px)]">
                <div className="flex items-end justify-between max-[640px]:gap-3">
                    <div><p className="mb-[22px] flex items-center gap-2.5 text-[9px] font-bold uppercase tracking-[1.8px] text-copper-light max-[640px]:mb-[13px] max-[640px]:text-[8px] max-[640px]:tracking-[1.5px]">A little more signal</p><h2 className="m-0 font-serif text-[clamp(34px,4.2vw,52px)] font-medium leading-[1.12] tracking-[-1px] text-white max-[640px]:text-[35px]">Technology, <em className="font-medium text-sky">up close.</em></h2></div>
                    <a className="mb-1 inline-flex shrink-0 items-center gap-3 border-b border-copper pb-1.5 text-[11px] text-white transition-all hover:gap-[17px] hover:text-sky max-[640px]:gap-[5px] max-[640px]:text-[9px]" href="#events">Explore all events <ArrowUpRight size={15} /></a>
                </div>
                <p className="mb-[37px] mt-[15px] text-xs text-white/60 max-[640px]:mb-[25px] max-[640px]:mt-3 max-[640px]:text-[11px]">For the people building what comes next.</p>
                <div className="grid grid-cols-2 gap-5 max-[640px]:grid-cols-1 max-[640px]:gap-[13px]">
                    {technologyEvents.map((event, index) => <EventCard key={event.id} {...event} compact number={String(index + 1).padStart(2, '0')} onSelect={() => onSelectEvent(event)} />)}
                </div>
            </div>
        </section>
    )
}

export default TechnologyEventsSection