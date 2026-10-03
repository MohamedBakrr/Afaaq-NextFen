import { ArrowUpRight, Check } from 'lucide-react'
import Brand from './Brand.jsx'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="page-width">
                <div className="footer-main">
                    <div className="footer-brand-block"><Brand footer /><p>Good people. Good ideas.<br />A reason to get together.</p></div>
                    <div className="footer-links"><span className="footer-label">EXPLORE</span><a href="#home">Home</a><a href="#events">Events</a><a href="#speakers">Speakers</a><a href="#about">About</a></div>
                    <div className="footer-links"><span className="footer-label">SAY HELLO</span><a href="mailto:hello@evently.community">hello@evently.community</a><a href="https://www.instagram.com/">Instagram <ArrowUpRight size={12} /></a><a href="https://www.linkedin.com/">LinkedIn <ArrowUpRight size={12} /></a></div>
                    <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUpRight size={18} /></a>
                </div>
                <div className="footer-bottom"><span>© 2026 EVENTLY. MADE FOR THE MOMENT.</span><span>CAIRO, EGYPT <i /> EVERYWHERE</span><span>BUILT AROUND GOOD COMPANY <Check size={12} /></span></div>
            </div>
        </footer>
    )
}

export default Footer