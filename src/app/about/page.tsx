import Image from "next/image";
import AccordionItem from "@/components/Accordion/AccordionItem";
import getFaqs from "@/api_requests/get_faqs";
import me1 from "../../../public/img/me1.jpg";
import cyber from "../../../public/img/cybersecurity.jpg";
import webdev from "../../../public/img/webdev.jpg";
import mobile from "../../../public/img/mobiledev.jpg";
import mql5 from "../../../public/img/mql5.jpg";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function about() {
  const faqs = await getFaqs();

  return (
    <div>
      <div className="mb-8 p-2">
        <Image
          className="[shape-outside:circle()] rounded-full float-left mr-5"
          alt="Mountains"
          width={200}
          height={200}
          src={me1}
          style={{}}
        />

        <div>
          <h2>Welcome to DTech!</h2>
          <p>
            At DTech, I'm passionate about showcasing the endless possibilities
            of technology and inspiring others to explore its fascinating world
            – I'm on a mission to make coding and automation not just
            accessible, but downright enjoyable. cause at the end, with
            technology, individuals can turn their wildest ideas into reality
            with lightning speed.
          </p>
          <p>
            As a web developer, mobile app developer, and fervent advocate for
            automation in trading bots and cybersecurity, I'm on a relentless
            quest to master these domains and share my insights with the world.
            DTech serves as my canvas, my laboratory, and my playground for
            experimentation, where every line of code is a step closer to
            unlocking a brighter, more streamlined future.
          </p>
          <p>
            In today's fast-paced world, where time is of the essence and
            simplicity is key, I believe that technology offers boundless
            opportunities to simplify our lives and amplify our passions. That's
            why DTech isn't just a blog – it's a beacon of inspiration for those
            who seek to harness the power of automation and coding to create a
            life they love.
          </p>
          <p>
            Join me at DTech as we dive headfirst into the exhilarating world of
            technology, where learning, growing, and building are not just
            tasks, but exhilarating adventures. Together, let's embrace the
            boundless opportunities of technology, simplify our lives, and pave
            the way for a future where pursuing our passions is not just a
            dream, but a way of life.
          </p>
          <p>
            Welcome to DTech – where coding is a joy, automation is a breeze,
            ideas take flight and innovation knows no bounds.
          </p>
        </div>
      </div>

      <div className="flex justify-around flex-wrap">
        <figure className="aboutFigure">
          <div className="aboutFigureDivImage">
            <Image
              className="aboutFigureImage"
              fill
              alt="Mountains"
              src={cyber}
              style={{}}
            />
          </div>

          <figcaption className="aboutFigureCaption">
            Curious about hackers and their methods? Here, I specialize in
            demystifying cyber threats and equipping you with practical tools
            and strategies to protect yourself online. From understanding
            hacking techniques to fortifying your digital defenses, join me on a
            journey to a safer, more secure digital world. I firmly believe that
            knowledge is power, and your safety is paramount.
          </figcaption>
        </figure>{" "}
        <figure className="aboutFigure">
          <div className="aboutFigureDivImage">
            <Image
              className="aboutFigureImage"
              fill
              alt="Mountains"
              src={webdev}
              style={{}}
            />
          </div>

          <figcaption className="aboutFigureCaption">
            Here, I'll be crafting awesome websites with Python and JavaScript
            using tools like Django, Next.js, React, and Tailwind CSS. But I'm
            not stopping there! I'm always learning and exploring new
            technologies to bring even more magic to the web. Join me as I dive
            into the world of web development and beyond. From mastering new
            languages to experimenting with cutting-edge frameworks, I'll be
            using APIs for backend and frontend projects, creating smooth
            communication and transitions between everything.
          </figcaption>
        </figure>{" "}
        <figure className="aboutFigure">
          <div className="aboutFigureDivImage">
            <Image
              className="aboutFigureImage"
              fill
              alt="Mountains"
              src={mobile}
              style={{}}
            />
          </div>

          <figcaption className="aboutFigureCaption">
            In a world where mobile apps dominate the tech space, having skills
            and knowledge in app development is a sharp edge in staying ahead.
            here you are going to be given the edge by showing you what it takes
            to succeed in this dynamic field. Join us as we explore the exciting
            world of mobile app development, using tech stacks like React
            Native, Flutter, and more.
          </figcaption>
        </figure>{" "}
        <figure className="aboutFigure">
          <div className="aboutFigureDivImage">
            <Image
              className="aboutFigureImage"
              fill
              alt="Mountains"
              src={mql5}
              style={{}}
            />
          </div>

          <figcaption className="aboutFigureCaption">
            Imagine harnessing the power of AI to automate forex, crypto and
            betting and transforming it from guesswork to goldmines. I really
            I'm fascinated by the potential of automated trading using data
            analysis, Python,mql5,pinescript and AI. One of my goals is to
            revolutionize the trading landscape by making it more accessible and
            profitable for everyone.
          </figcaption>
        </figure>{" "}
      </div>
      {faqs ? (
        <div className="flex justify-center flex-col text-center">
          <h1 className="text-2xl font-bold ">Frequently Asked Questions</h1>
          <p>
            In this FAQ section you can find all the information about our
            services
          </p>

          <AccordionItem faqs={faqs} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
