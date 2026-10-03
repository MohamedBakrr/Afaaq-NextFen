import { ArrowUpRight } from 'lucide-react'
import SpeakerCard from './SpeakerCard.jsx'

function FeaturedSpeakerSection({ speaker }) {
    return (
        <section className="speaker-section" id="speakers">
            <div className="page-width speaker-layout">
                <div className="speaker-intro">
                    <p className="eyebrow eyebrow-dark">The people behind the ideas</p>
                    <h2 className="section-heading">Good ideas have<br />good <em>company.</em></h2>
                    <p>Meet the thoughtful voices who make every Evently gathering worth showing up for.</p>
                    <a href="#contact" className="text-link">Meet our community <ArrowUpRight size={15} /></a>
                </div>
                <SpeakerCard speaker={speaker} />
            </div>
        </section>
    )
}

export default FeaturedSpeakerSection