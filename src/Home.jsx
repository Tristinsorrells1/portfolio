
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  let typedText = () => {
    return  <Typewriter
            words={["Hi, I'm Tristin"]}
            loop={4}
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={4000}
          />
  }
  return (
    <section className="home">
      <div className="me-container">
        <div className="bio-container">
            {typedText()}
            <p className="bio">I’ve been in the health sciences space for 5 years, which instilled in me a deep understanding of the importance of accessibility and inclusivity in healthcare and other industries. This sparked my desire to develop technology that is accessible to all, and led me to enroll in the Front-End Engineering Program at the Turing School of Software and Design.</p>
        </div>
        <img className="selfie" src="/white-coat.jpeg" alt="Picture of Tristin"></img>
      </div>
    </section>
  )
}

export default Home;