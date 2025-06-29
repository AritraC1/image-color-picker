import ColorExtractor from "../components/ColorExtractor"
import Navbar from "../components/Navbar"

const HomePage: React.FC = () => {
    return(
        <>
        <Navbar />

        <div className="container">
            <ColorExtractor />
        </div>
        </>
    )
}

export default HomePage