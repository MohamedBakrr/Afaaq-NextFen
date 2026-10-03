import { ArrowUpRight } from 'lucide-react'
import EventCard from './EventCard.jsx'

function TechnologyEventsSection({ events, onSelectEvent }) {
    const technologyEvents = events.filter((event) => event.category === 'Technology')

    return (
        <section className="technology-section">
            <div className="page-width">
                <div className="tech-heading-row">
                    <div><p className="eyebrow">A little more signal</p><h2 className="section-heading light-heading">Technology, <em>up close.</em></h2></div>
                    <a className="text-link light-link" href="#events">Explore all events <ArrowUpRight size={15} /></a>
                </div>
                <p className="tech-intro">For the people building what comes next.</p>
                <div className="technology-grid">
                    {technologyEvents.map((event, index) => <EventCard key={event.id} {...event} compact number={String(index + 1).padStart(2, '0')} onSelect={() => onSelectEvent(event)} />)}
                </div>
            </div>
        </section>
    )
}

export default TechnologyEventsSection