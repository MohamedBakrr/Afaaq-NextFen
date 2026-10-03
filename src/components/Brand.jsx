function Brand({ footer = false }) {
    return (
        <a className={`group inline-flex items-center gap-2.5 font-sans font-semibold tracking-[-.8px] text-white transition duration-300 hover:-translate-y-0.5 hover:text-sky ${footer ? 'text-[21px]' : 'text-[23px]'}`} href="#home" aria-label="Evently home">
            <span className="inline-flex h-[23px] w-[22px] skew-x-[-22deg] items-end gap-0.5" aria-hidden="true">
                <span className="h-3 w-[5px] border border-copper-light transition-all duration-300 group-hover:h-[22px] group-hover:bg-copper-light" />
                <span className="h-[18px] w-[5px] border border-sky bg-sky transition-all duration-300 group-hover:h-[13px] group-hover:border-copper-light group-hover:bg-copper-light" />
                <span className="h-[23px] w-[5px] border border-copper-light transition-all duration-300 group-hover:h-[17px] group-hover:bg-copper-light" />
            </span>
            <span>evently<span className="text-copper-light">.</span></span>
        </a>
    )
}

export default Brand