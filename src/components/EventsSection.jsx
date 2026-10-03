import { ArrowLeft, ArrowRight, MoveUpRight } from 'lucide-react'
import EventCard from './EventCard.jsx'

function EventsSection({ events, activeIndex, onMove, onSetActiveIndex, onSelectEvent }) {
    const safeIndex = events.length ? activeIndex % events.length : 0

    return (
        <section className="events-section" id="events">
            <div className="page-width">
                <div className="section-topline">
                    <div>
                        <p className="eyebrow eyebrow-dark">The good stuff, coming up</p>
                        <h2 className="section-heading">Make room for <em>something new.</em></h2>
                    </div>
                    <div className="carousel-controls">
                        <span className="carousel-count">{String(safeIndex + 1).padStart(2, '0')} <i /> {String(events.length).padStart(2, '0')}</span>
                        <button type="button" onClick={() => onMove(-1)} aria-label="Previous event" disabled={!events.length}><ArrowLeft size={18} /></button>
                        <button type="button" onClick={() => onMove(1)} aria-label="Next event" disabled={!events.length}><ArrowRight size={18} /></button>
                    </div>
                </div>
                <div className="carousel" aria-live="polite">
                    {events.map((event, index) => {
                        const offset = (index - safeIndex + events.length) % events.length
                        const position = offset > Math.floor(events.length / 2) ? offset - events.length : offset
                        if (Math.abs(position) > 2) return null
                        return <EventCard key={event.id} {...event} position={position} onSelect={() => position === 0 ? onSelectEvent(event) : onSetActiveIndex(index)} />
                    })}
                    {!events.length && <p className="empty-events">More gatherings in this category are on the way.</p>}
                </div>
                <div className="carousel-caption">
                    <span>01 — A GOOD PLACE TO START</span>
                    <button type="button" onClick={() => events[safeIndex] && onSelectEvent(events[safeIndex])} disabled={!events.length}>View event details <MoveUpRight size={14} /></button>
                    <span>DRAG YOUR CURIOSITY →</span>
                </div>
            </div>
        </section>
    )
}

export default EventsSection