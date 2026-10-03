function CategoriesSection({ categories, events, activeCategory, onSelectCategory }) {
    return (
        <section className="categories-section" id="categories">
            <div className="page-width category-layout">
                <div>
                    <p className="eyebrow eyebrow-dark">Find your kind of thing</p>
                    <h2 className="category-heading">Curiosity has<br />many <em>forms.</em></h2>
                </div>
                <div className="category-list flex flex-wrap" aria-label="Filter events by category">
                    <button className={`category-pill ${activeCategory === 'All events' ? 'selected' : ''}`} onClick={() => onSelectCategory('All events')} type="button">
                        All events <span>{events.length.toString().padStart(2, '0')}</span>
                    </button>
                    {categories.map((category) => (
                        <button className={`category-pill ${activeCategory === category ? 'selected' : ''}`} key={category} onClick={() => onSelectCategory(category)} type="button">
                            {category}<span>{events.filter((event) => event.category === category).length.toString().padStart(2, '0')}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CategoriesSection