import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react'

function EventCard({ title, description, date, location, category, speaker, image, position = 0, onSelect, compact = false, number }) {
    if (compact) {
        return (
            <article className="tech-card">
                <button className="tech-image-button" type="button" onClick={onSelect} aria-label={`View ${title}`}>
                    <img src={image} alt="" />
                    <span className="tech-number">{number}</span>
                    <span className="tech-arrow"><ArrowUpRight size={17} /></span>
                </button>
                <div className="tech-card-copy">
                    <span className="event-category">{category}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="tech-meta"><span><CalendarDays size={13} />{date}</span><span><MapPin size={13} />{location}</span></div>
                    <button className="tech-details" type="button" onClick={onSelect}>Event details <ArrowUpRight size={13} /></button>
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
        <article className={`carousel-card ${position === 0 ? 'is-active' : ''}`} style={style} aria-hidden={distance > 1}>
            <button className="carousel-card-button" type="button" onClick={onSelect} tabIndex={position === 0 ? 0 : -1} aria-label={position === 0 ? `View details for ${title}` : `Show ${title}`}>
                <img src={image} alt="" />
                <span className="carousel-card-shade" />
                <span className="carousel-card-top"><span>{category}</span><span>EVENT NO. {String(number || `0${(distance % 6) + 1}`)}</span></span>
                <span className="carousel-card-bottom">
                    <span className="carousel-card-date"><CalendarDays size={13} />{date}</span>
                    <strong>{title}</strong>
                    <span className="carousel-card-meta"><span><MapPin size={13} />{location}</span><span>WITH {speaker.toUpperCase()}</span></span>
                    <span className="carousel-card-action">Explore event <ArrowUpRight size={15} /></span>
                </span>
            </button>
        </article>
    )
}

export default EventCard