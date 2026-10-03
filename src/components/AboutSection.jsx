import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

function AboutSection() {
    return (
        <section className="about-section" id="about">
            <div className="page-width about-layout">
                <div className="about-image-wrap">
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85" alt="A warm, welcoming venue ready for a gathering" />
                    <span className="image-note">MAKE SOMETHING OF YOUR EVENING <ArrowDownRight size={15} /></span>
                </div>
                <div className="about-copy">
                    <p className="eyebrow eyebrow-dark">A little about us</p>
                    <h2 className="section-heading">What is<br /><em>Evently?</em></h2>
                    <p className="about-body">We believe a room full of curious people can change everything. Evently brings together the workshops, conversations, and unexpected connections that make ideas feel possible.</p>
                    <p className="about-body muted-copy">No awkward networking. No talking at you. Just thoughtful events, generous people, and a reason to get out of your usual orbit.</p>
                    <a className="text-link" href="#events">Find your next event <ArrowUpRight size={15} /></a>
                    <div className="about-stat"><strong>01<span>—</span></strong><span>GOOD PEOPLE<br />GOOD ENERGY</span></div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection