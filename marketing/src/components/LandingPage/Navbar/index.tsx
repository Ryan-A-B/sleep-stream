import React from 'react'
import { Link } from 'gatsby'

const ActiveButtonProps = {
    'aria-expanded': true,
}

const InactiveButtonProps = {
    'aria-expanded': false,
}

const getButtonProps = (isActive: boolean) => {
    return isActive ? ActiveButtonProps : InactiveButtonProps
}

const CollapseClassName = 'collapse navbar-collapse'
const ActiveCollapseClassName = `${CollapseClassName} show`

const getCollapseClassName = (isActive: boolean) => {
    return isActive ? ActiveCollapseClassName : CollapseClassName
}

const LandingPageNavbar: React.FunctionComponent = () => {
    const [show, setShow] = React.useState<boolean>(false)
    const toggleShow = React.useCallback(
        () => setShow(!show),
        [show, setShow]
    )

    const navRef = React.useRef<HTMLDivElement>(null)

    React.useLayoutEffect(() => {
        const nav = navRef.current
        if (nav === null) return
        const hide = (event: MouseEvent) => {
            if (event.target === null) return
            const target = event.target as Node
            if (nav.contains(target)) return
            setShow(false)
        }
        window.addEventListener('click', hide)
        return () => window.removeEventListener('click', hide)
    }, [show, setShow])

    const onNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setShow(false)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" ref={navRef}>
            <div className="container">
                <Link className="navbar-brand" to="/">BeddyBytes</Link>
                <button
                    type="button"
                    className="navbar-toggler"
                    aria-controls="navbar-collapse"
                    aria-label="Toggle navigation"
                    onClick={toggleShow}
                    {...getButtonProps(show)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={getCollapseClassName(show)} id="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="#main" className="nav-link" onClick={onNavLinkClick}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#demo" className="nav-link" onClick={onNavLinkClick}>
                                Demo
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#pricing" className="nav-link" onClick={onNavLinkClick}>
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#faq" className="nav-link" onClick={onNavLinkClick}>
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default LandingPageNavbar