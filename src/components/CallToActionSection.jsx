import { ArrowUpRight } from 'lucide-react'

function CallToActionSection() {
    return (
        <section className="cta-section" id="contact">
            <div className="page-width cta-inner">
                <p className="eyebrow">Your next story starts here</p>
                <h2>Ready to show up<br />for <em>something good?</em></h2>
                <a className="button button-copper" href="#events">Explore all events <ArrowUpRight size={16} /></a>
                <span className="cta-decoration" aria-hidden="true">E.</span>
            </div>
        </section>
    )
}

export default CallToActionSection