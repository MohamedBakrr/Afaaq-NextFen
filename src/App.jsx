import { useState } from 'react'
import AboutSection from './components/AboutSection.jsx'
import CallToActionSection from './components/CallToActionSection.jsx'
import CategoriesSection from './components/CategoriesSection.jsx'
import EventModal from './components/EventModal.jsx'
import EventsSection from './components/EventsSection.jsx'
import FeaturedSpeakerSection from './components/FeaturedSpeakerSection.jsx'
import Footer from './components/Footer.jsx'
import HeroSection from './components/HeroSection.jsx'
import Navbar from './components/Navbar.jsx'
import TechnologyEventsSection from './components/TechnologyEventsSection.jsx'
import { categories, events } from './data/events.js'
import { featuredSpeaker } from './data/speaker.js'
import './App.css'

function App() {
    const [activeCategory, setActiveCategory] = useState('All events')
    const [activeIndex, setActiveIndex] = useState(0)
    const [selectedEvent, setSelectedEvent] = useState(null)

    const visibleEvents = activeCategory === 'All events'
        ? events
        : events.filter((event) => event.category === activeCategory)

    const selectCategory = (category) => {
        setActiveCategory(category)
        setActiveIndex(0)
    }

    const moveCarousel = (direction) => {
        if (!visibleEvents.length) return
        setActiveIndex((current) => (current + direction + visibleEvents.length) % visibleEvents.length)
    }

    return (
        <main className="min-h-screen">
            <Navbar />
            <HeroSection />
            <CategoriesSection
                categories={categories}
                events={events}
                activeCategory={activeCategory}
                onSelectCategory={selectCategory}
            />
            <EventsSection
                events={visibleEvents}
                activeIndex={activeIndex}
                onMove={moveCarousel}
                onSetActiveIndex={setActiveIndex}
                onSelectEvent={setSelectedEvent}
            />
            <TechnologyEventsSection events={events} onSelectEvent={setSelectedEvent} />
            <FeaturedSpeakerSection speaker={featuredSpeaker} />
            <AboutSection />
            <CallToActionSection />
            <Footer />
            <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        </main>
    )
}

export default App