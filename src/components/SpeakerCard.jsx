import { ArrowUpRight, AtSign, Globe } from 'lucide-react'

function SpeakerCard({ speaker }) {
    return (
        <article className="speaker-card">
            <div className="speaker-photo">
                <img src={speaker.image} alt={speaker.name} />
                <span className="speaker-photo-index">EVENTLY VOICE — 001</span>
                <span className="speaker-photo-mark">E<span>.</span></span>
            </div>
            <div className="speaker-card-info">
                <div>
                    <p className="eyebrow eyebrow-dark">Featured speaker</p>
                    <h3>{speaker.name}</h3>
                    <span className="speaker-role">{speaker.role}</span>
                </div>
                <p className="speaker-bio">{speaker.bio}</p>
                <div className="speaker-card-bottom">
                    <span>SHARING IDEAS AT EVENTLY</span>
                    <div className="speaker-socials">
                        <a href={speaker.linkedin} aria-label={`${speaker.name} on LinkedIn`} target="_blank" rel="noreferrer"><Globe size={16} /></a>
                        <a href={speaker.instagram} aria-label={`${speaker.name} on Instagram`} target="_blank" rel="noreferrer"><AtSign size={16} /></a>
                        <a href="mailto:hello@evently.community" aria-label="Contact this speaker"><ArrowUpRight size={16} /></a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default SpeakerCard