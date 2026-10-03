function CategoriesSection({ categories, events, activeCategory, onSelectCategory }) {
    return (
        <section className="bg-sky-pale py-[100px] pb-[105px] max-[640px]:py-[72px] max-[640px]:pb-[75px]" id="categories">
            <div className="mx-auto grid w-[min(1180px,calc(100%-80px))] grid-cols-[.8fr_1.2fr] items-center gap-20 max-[900px]:w-[min(calc(100%-48px),720px)] max-[900px]:gap-[35px] max-[640px]:w-[calc(100%-40px)] max-[640px]:grid-cols-1 max-[640px]:gap-7">
                <div>
                    <p className="mb-[22px] flex items-center gap-2.5 text-[9px] font-bold uppercase tracking-[1.8px] text-[#997252] max-[640px]:text-[8px] max-[640px]:tracking-[1.5px]">Find your kind of thing</p>
                    <h2 className="m-0 font-serif text-[clamp(34px,4vw,50px)] font-medium leading-[1.12] tracking-[-1px] max-[640px]:text-[37px]">Curiosity has<br />many <em className="font-medium text-copper">forms.</em></h2>
                </div>
                <div className="flex flex-wrap justify-start gap-2.5 max-[640px]:gap-2" aria-label="Filter events by category">
                    <button className={`inline-flex min-h-[47px] items-center gap-5 border px-4 text-[11px] transition-all duration-200 max-[640px]:min-h-[41px] max-[640px]:gap-3 max-[640px]:px-[11px] max-[640px]:text-[10px] ${activeCategory === 'All events' ? 'border-ink bg-ink text-white [&_span]:text-sky' : 'border-ink/20 bg-transparent hover:border-ink hover:bg-ink hover:text-white'}`} onClick={() => onSelectCategory('All events')} type="button">
                        All events <span className="text-[9px] text-[#8e9895]">{events.length.toString().padStart(2, '0')}</span>
                    </button>
                    {categories.map((category) => (
                        <button className={`inline-flex min-h-[47px] items-center gap-5 border px-4 text-[11px] transition-all duration-200 max-[640px]:min-h-[41px] max-[640px]:gap-3 max-[640px]:px-[11px] max-[640px]:text-[10px] ${activeCategory === category ? 'border-ink bg-ink text-white [&_span]:text-sky' : 'border-ink/20 bg-transparent hover:border-ink hover:bg-ink hover:text-white'}`} key={category} onClick={() => onSelectCategory(category)} type="button">
                            {category}<span className="text-[9px] text-[#8e9895]">{events.filter((event) => event.category === category).length.toString().padStart(2, '0')}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CategoriesSection