import NavLogo from '../assets/logo.png'

const Navbar: React.FC = () => {
    return(
    <nav className="fixed top-0 left-0 w-full flex flex-wrap items-center justify-between shadow px-4 py-2">
            <div className="flex items-center">
            <img
                src={NavLogo}
                alt="LeetInsights Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 mr-2"
            />
            <p className="text-2xl sm:text-3xl font-bold text-black">Image Color Picker</p>
            </div>

        <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <a
            href="https://github.com/AritraC1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black text-xl sm:text-2xl"
            >
            <i className="fa-brands fa-github"></i>
            </a>
            <a
            href="https://x.com/Aritra_C1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black text-xl sm:text-2xl"
            >
            <i className="fa-brands fa-square-x-twitter"></i>
            </a>
        </div>
    </nav>
    )
}

export default Navbar