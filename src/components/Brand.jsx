function Brand({ footer = false }) {
    return (
        <a className={`brand ${footer ? 'brand-footer' : ''}`} href="#home" aria-label="Evently home">
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
            <span>evently<span className="brand-period">.</span></span>
        </a>
    )
}

export default Brand