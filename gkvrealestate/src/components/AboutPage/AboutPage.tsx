/**
 * @author Gregory Vincent
 * @date 3/6/24
 */
import "./AboutPage.css";
import {useRef, useEffect, useState, MutableRefObject} from "react"
const AboutPage = () => {
    const observedPoint: MutableRefObject<HTMLHeadingElement | null> = useRef<HTMLHeadingElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      // we only want one observer on first render of the about page
        const observer = new IntersectionObserver((entries) => {
            const scrollPoint = entries[0];
            setVisible(scrollPoint.isIntersecting);
        }, {
            root: null,
            rootMargin: "10px"
        })
        observer.observe(observedPoint.current as Element);
        // cleanup the observer to protect against memory leaks
        return () => observer.unobserve(observedPoint.current as Element);
    }, [])
    const sharedStyles =`fade ${visible ? 'fade-in' : 'fade-out'}`
  return (
    <div className="flex flex-col mt-8 md:mt-0 w-10/12 mx-auto text-white pt-2 px-3 pb-11 md:pb-32 lg:">
      <div className="border-b-2 mb-6">
      <h1 className={`text-3xl md:text-5xl mb-2 lg:mb-4 ${sharedStyles}`} ref={observedPoint}>
          Behind GKVRealEstate
        </h1>
        <p className={`text-2xl mb-8 md:text-3xl lg:text-4xl ${sharedStyles}`}>
          GKVRealEstate is the collective effort of two highly educated people
          looking to build long-term wealth for their family far into the future.
        </p>
      </div>
      {/**Text block about the website creator and Real Estate. Bottom right quadrant of the page */}
      <div>
        <h1 className={`text-3xl md:text-5xl mb-2 lg:mb-4 ${sharedStyles}`} ref={observedPoint}>
          What's most Important
        </h1>
        <p className={`text-2xl md:text-3xl lg:text-4xl ${sharedStyles}`}> 
          {" "}
          Real Estate Investing can serve as a way to secure yourself and family
          financially. However, it is not solely about collecting passive income. 
          At the end of the day, people's livelihoods are tied to your decisions, which is why it is
          more important to form honest and amicable relationships with tenants,
          so that both parties are satisfied.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;