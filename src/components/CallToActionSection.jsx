import { ArrowUpRight } from 'lucide-react'

function CallToActionSection() {
    return (
        <section className="relative overflow-hidden bg-[#15343c] py-[98px] pb-[106px] text-white max-[640px]:py-[75px] max-[640px]:pb-20" id="contact">
            <div className="relative z-[1] mx-auto w-[min(1180px,calc(100%-80px))] max-[900px]:w-[min(calc(100%-48px),720px)] max-[640px]:w-[calc(100%-40px)]">
                <p className="mb-[21px] flex items-center gap-2.5 text-[9px] font-bold uppercase tracking-[1.8px] text-copper-light max-[640px]:text-[8px] max-[640px]:tracking-[1.5px]">Your next story starts here</p>
                <h2 className="m-0 font-serif text-[clamp(46px,6vw,75px)] font-medium leading-[1.06] tracking-[-2px] max-[640px]:text-[clamp(43px,11vw,61px)] max-[640px]:tracking-[-1px]">Ready to show up<br />for <em className="font-medium text-sky">something good?</em></h2>
                <a className="mt-[31px] inline-flex min-h-12 items-center justify-center gap-5 border border-copper bg-copper px-[21px] text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:border-[#9f7052] hover:bg-[#9f7052] max-[640px]:min-h-[45px] max-[640px]:gap-3 max-[640px]:px-[14px] max-[640px]:text-[10px]" href="#events">Explore all events <ArrowUpRight size={16} /></a>
                <span className="pointer-events-none absolute -right-2 -top-20 font-serif text-[clamp(180px,29vw,380px)] font-medium leading-none tracking-[-20px] text-sky/[.07] max-[640px]:-right-5 max-[640px]:top-0 max-[640px]:text-[190px] max-[640px]:tracking-[-12px]" aria-hidden="true">E.</span>
            </div>
        </section>
    )
}

export default CallToActionSection