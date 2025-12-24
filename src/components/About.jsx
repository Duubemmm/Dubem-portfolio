import Dubem from "../assets/Dubem.jpg"

const About = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 px-8 py-16 md:flex-row">
      {/* Text Content */}
      <div className="flex flex-col space-y-6 md:w-1/2">
        <h1 className="text-4xl font-bold text-green-950 lg:text-6xl">
          hi, I'm Dubem <span className="block text-green-600 text-2xl lg:text-3xl">and i build for the web</span>
        </h1>
        
        <div className="space-y-4 text-lg text-gray-700">
          <h2 className="font-semibold text-green-900">
            a fun fact about me that no-one knows: 
            <span className="font-normal italic"> I started writing code with my phone</span>
          </h2>
          
          <p className="leading-relaxed">
            A frustrating experience but nevertheless it built the resilience i have now.
          </p>
          
          <p className="leading-relaxed">
            I really love the web because it is accessible to all. With your phone and mobile data, you can access the web. 
            Building websites that give users an <span className="font-bold text-green-700">optimal experience</span> is what i absolutely love doing.
          </p>
          
          <p>In my free time, i build a lot of web projects.</p>
          
          <button className="w-max rounded-full bg-green-600 px-6 py-2 text-white transition-hover hover:bg-green-700">
            Let's talk
          </button>
        </div>
      </div>

      {/* Image Container */}
      <div className="flex justify-center md:w-1/2">
        <div className="relative">
          {/* Decorative background element */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-green-200"></div>
          <img 
            src={Dubem} 
            alt="Dubem" 
            className="h-80 w-80 rounded-2xl object-cover shadow-xl lg:h-[450px] lg:w-[450px]"
          />
        </div>
      </div>
    </section>
  )
}

export default About;