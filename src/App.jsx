import Navbar from './components/Navbar';
import Hero from './components/About'
import Work from './components/Project'
import Footer from './components/Footer';
// import Contact from './components/Contact'

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero/>
            <Work />
            {/* <Contact /> */}
            <Footer />
        </div>
    );
}
export default App;