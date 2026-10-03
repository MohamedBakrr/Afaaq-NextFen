import { ArrowLeft, ArrowRight, MoveUpRight } from 'lucide-react'
import EventCard from './EventCard.jsx'

function EventsSection({ events, activeIndex, onMove, onSetActiveIndex, onSelectEvent }) {
    const safeIndex = events.length ? activeIndex % events.length : 0

    return (
        <section className="overflow-hidden bg-paper py-[105px] pb-[75px] max-[640px]:py-[73px] max-[640px]:pb-[58px]" id="events">
            <div className="mx-auto w-[min(1180px,calc(100%-80px))] max-[900px]:w-[min(calc(100%-48px),720px)] max-[640px]:w-[calc(100%-40px)]">
                <div className="mb-[42px] flex items-end justify-between max-[640px]:mb-[27px] max-[640px]:gap-3">
                    <div>
                        <p className="mb-[17px] flex items-center gap-2.5 text-[9px] font-bold uppercase tracking-[1.8px] text-[#997252] max-[640px]:mb-3 max-[640px]:text-[8px] max-[640px]:tracking-[1.5px]">The good stuff, coming up</p>
                        <h2 className="m-0 max-w-[850px] font-serif text-[clamp(34px,4.2vw,52px)] font-medium leading-[1.12] tracking-[-1px] max-[640px]:max-w-[300px] max-[640px]:text-[34px]">Make room for <em className="font-medium text-copper">something new.</em></h2>
                    </div>
                    <div className="flex items-center gap-2 pb-[5px] max-[640px]:shrink-0 max-[640px]:gap-[5px] [&_button]:grid [&_button]:h-10 [&_button]:w-10 [&_button]:place-items-center [&_button]:border [&_button]:border-ink/25 [&_button]:bg-transparent [&_button]:transition [&_button]:hover:border-ink [&_button]:hover:bg-ink [&_button]:hover:text-white [&_button]:disabled:cursor-not-allowed [&_button]:disabled:opacity-40 max-[640px]:[&_button]:h-[34px] max-[640px]:[&_button]:w-[34px]">
                        <span className="mr-[11px] flex items-center gap-[9px] text-[10px] text-[#768084] max-[640px]:hidden">{String(safeIndex + 1).padStart(2, '0')} <i className="h-px w-[23px] bg-[#aeb5b2]" /> {String(events.length).padStart(2, '0')}</span>
                        <button type="button" onClick={() => onMove(-1)} aria-label="Previous event" disabled={!events.length}><ArrowLeft size={18} /></button>
                        <button type="button" onClick={() => onMove(1)} aria-label="Next event" disabled={!events.length}><ArrowRight size={18} /></button>
                    </div>
                </div>
                <div className="event-carousel" aria-live="polite">
                    {events.map((event, index) => {
                        const offset = (index - safeIndex + events.length) % events.length
                        const position = offset > Math.floor(events.length / 2) ? offset - events.length : offset
                        if (Math.abs(position) > 2) return null
                        return <EventCard key={event.id} {...event} position={position} onSelect={() => position === 0 ? onSelectEvent(event) : onSetActiveIndex(index)} />
                    })}
                    {!events.length && <p className="text-muted">More gatherings in this category are on the way.</p>}
                </div>
                <div className="mt-[23px] grid grid-cols-[1fr_auto_1fr] items-center text-[8px] tracking-[1.1px] text-[#8a9290] max-[640px]:mt-[11px] max-[640px]:grid-cols-[1fr_auto] max-[640px]:gap-[13px] [&_button]:inline-flex [&_button]:items-center [&_button]:gap-[9px] [&_button]:border-0 [&_button]:border-b [&_button]:border-copper [&_button]:bg-transparent [&_button]:pb-1 [&_button]:text-[10px] [&_button]:text-ink [&_button]:disabled:opacity-40 [&_button_svg]:text-copper [&_span:last-child]:text-right max-[640px]:[&>span:first-child]:hidden max-[640px]:[&>span:last-child]:text-[7px]">
                    <span>01 — A GOOD PLACE TO START</span>
                    <button type="button" onClick={() => events[safeIndex] && onSelectEvent(events[safeIndex])} disabled={!events.length}>View event details <MoveUpRight size={14} /></button>
                    <span>DRAG YOUR CURIOSITY →</span>
                </div>
            </div>
        </section>
    )
}

export default EventsSection