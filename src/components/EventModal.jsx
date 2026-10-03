import { ArrowUpRight, CalendarDays, MapPin, X } from 'lucide-react'

function EventModal({ event, onClose }) {
    if (!event) return null

    return (
        <div className="modal-backdrop" role="presentation" onClick={onClose}>
            <section className="event-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(clickEvent) => clickEvent.stopPropagation()}>
                <button className="modal-close" type="button" aria-label="Close event details" onClick={onClose}><X size={19} /></button>
                <img src={event.image} alt="" />
                <div className="modal-copy">
                    <span className="event-category">{event.category}</span>
                    <h2 id="modal-title">{event.title}</h2>
                    <p>{event.description}</p>
                    <div className="modal-meta">
                        <span><CalendarDays size={15} />{event.date}<small>{event.time}</small></span>
                        <span><MapPin size={15} />{event.location}<small>With {event.speaker}</small></span>
                    </div>
                    <a className="button button-copper modal-register" href="mailto:hello@evently.community?subject=Evently%20registration" onClick={onClose}>Save your spot <ArrowUpRight size={15} /></a>
                </div>
            </section>
        </div>
    )
}

export default EventModal