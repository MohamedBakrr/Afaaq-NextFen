import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'

function HeroSection() {
    return (
        <section className="hero" id="home">
            <div className="hero-backdrop" />
            <div className="hero-grain" />
            <div className="hero-content page-width">
                <div className="hero-copy">
                    <p className="eyebrow"><span className="eyebrow-line" /> A place for ideas to happen</p>
                    <h1>Discover events<br />that move you <em>forward.</em></h1>
                    <p className="hero-description">Good things happen when curious people get together. Find your people, learn something new, and leave with a little more momentum.</p>
                    <div className="hero-actions">
                        <a className="button button-copper" href="#events">Explore events <ArrowUpRight size={16} /></a>
                        <a className="button button-ghost" href="#speakers">Become a speaker <ArrowRight size={16} /></a>
                    </div>
                </div>
                <div className="hero-bottomline">
                    <span>CAIRO · EVERYWHERE</span>
                    <a href="#categories">SCROLL TO EXPLORE <ArrowDown size={13} /></a>
                    <span>EST. 2026</span>
                </div>
            </div>
            <div className="hero-index"><span>01</span><i /> 06</div>
        </section>
    )
}

export default HeroSection