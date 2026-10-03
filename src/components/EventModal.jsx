import { ArrowUpRight, CalendarDays, MapPin, X } from 'lucide-react'

function EventModal({ event, onClose }) {
    if (!event) return null

    return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-[#061419]/80 p-[22px] backdrop-blur-[5px] animate-[fade-in_.2s_ease_both]" role="presentation" onClick={onClose}>
            <section className="relative grid max-h-[min(620px,calc(100svh-44px))] w-[min(800px,100%)] grid-cols-[.9fr_1.1fr] overflow-auto bg-paper shadow-[0_30px_90px_rgba(0,0,0,.3)] animate-[rise-in_.3s_ease_both] max-[640px]:block max-[640px]:w-[min(440px,100%)]" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(clickEvent) => clickEvent.stopPropagation()}>
                <button className="absolute right-3 top-3 z-[2] grid h-9 w-9 place-items-center border border-ink/15 bg-paper" type="button" aria-label="Close event details" onClick={onClose}><X size={19} /></button>
                <img className="h-full min-h-[440px] w-full object-cover max-[640px]:block max-[640px]:h-[190px] max-[640px]:min-h-0" src={event.image} alt="" />
                <div className="p-[45px_38px] max-[640px]:px-[23px] max-[640px]:py-[25px]">
                    <span className="text-[8px] font-bold uppercase tracking-[1.3px] text-copper-light">{event.category}</span>
                    <h2 className="mb-3 mt-3 font-serif text-[32px] font-medium leading-[1.15] max-[640px]:text-[27px]" id="modal-title">{event.title}</h2>
                    <p className="text-xs leading-[1.8] text-[#667579]">{event.description}</p>
                    <div className="my-[25px] grid gap-[19px] border-y border-ink/15 py-5 [&>span]:grid [&>span]:grid-cols-[20px_1fr] [&>span]:items-center [&>span]:gap-x-2 [&>span]:gap-y-0.5 [&>span]:text-[11px] [&_svg]:row-span-2 [&_svg]:text-copper [&_small]:col-start-2 [&_small]:text-[9px] [&_small]:text-[#8a9491]">
                        <span><CalendarDays size={15} />{event.date}<small>{event.time}</small></span>
                        <span><MapPin size={15} />{event.location}<small>With {event.speaker}</small></span>
                    </div>
                    <a className="mt-1 inline-flex min-h-12 items-center justify-center gap-5 border border-copper bg-copper px-[21px] text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#9f7052] hover:bg-[#9f7052]" href="mailto:hello@evently.community?subject=Evently%20registration" onClick={onClose}>Save your spot <ArrowUpRight size={15} /></a>
                </div>
            </section>
        </div>
    )
}

export default EventModal