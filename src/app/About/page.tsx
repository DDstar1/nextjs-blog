"use client";

import { IoMdAddCircleOutline } from "react-icons/io";
import Image from "next/image";
import { FiMinusCircle } from "react-icons/fi";
import AccordionItem from "@/components/Accordion/AccordionItem";
import getFaqs from "@/api_requests/get_faqs";
import me1 from "../../../public/img/me1.jpg";
import cyber from "../../../public/img/cybersecurity.jpg";
import webdev from "../../../public/img/webdev.jpg";
import mobile from "../../../public/img/mobiledev.jpg";
import mql5 from "../../../public/img/mql5.jpg";

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

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
          feugiat ante. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. Integer tempus felis ac massa
          feugiat vestibulum. Ut scelerisque quam non metus tincidunt, eu
          lobortis nisi tincidunt. Mauris in risus et elit dictum suscipit.
          Fusce maximus nisi sed libero ultrices scelerisque. Sed ultricies
          tellus eu justo fringilla, nec ultricies tortor rhoncus. Mauris eget
          justo sed libero gravida feugiat ac vitae felis. Nam vel risus eget mi
          consequat volutpat. Quisque gravida magna nec purus vestibulum, sit
          amet aliquam mi tempor. Aliquam erat volutpat. Nulla facilisi.
          Suspendisse ut tristique est. Sed lobortis libero eu ante varius
          malesuada. Vivamus sodales, quam non sagittis vestibulum, nulla leo
          dapibus nisi, non eleifend dui nulla vel tortor. Ut dignissim dui vel
          mauris tempor, sed ultricies felis sodales. Vestibulum fermentum
          lectus at libero vehicul
        </p>
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
            tincidunt. Mauris in risus et elit dictum suscipit. Fusce maximus
            nisi sed libero ultrices scelerisque. Sed ultricies tellus eu justo
            fringilla, nec ultricies tortor rhoncus. Mauris eget justo sed
            libero gravida feugiat ac vitae felis. Nam vel risus eget mi
            consequat volutpat. Quisque gravida magna nec purus vestibulum, sit
            amet aliquam mes, quam non sagittis vestibulum, nulla leo dapibus
            nisi, non eleifend dui nulla vel tortor. Ut dignissim dui
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
            tincidunt. Mauris in risus et elit dictum suscipit. Fusce maximus
            nisi sed libero ultrices scelerisque. Sed ultricies tellus eu justo
            fringilla, nec ultricies tortor rhoncus. Mauris eget justo sed
            libero gravida feugiat ac vitae felis. Nam vel risus eget mi
            consequat volutpat. Quisque gravida magna nec purus vestibulum, sit
            amet aliquam mes, quam non sagittis vestibulum, nulla leo dapibus
            nisi, non eleifend dui nulla vel tortor. Ut dignissim dui
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
            tincidunt. Mauris in risus et elit dictum suscipit. Fusce maximus
            nisi sed libero ultrices scelerisque. Sed ultricies tellus eu justo
            fringilla, nec ultricies tortor rhoncus. Mauris eget justo sed
            libero gravida feugiat ac vitae felis. Nam vel risus eget mi
            consequat volutpat. Quisque gravida magna nec purus vestibulum, sit
            amet aliquam mes, quam non sagittis vestibulum, nulla leo dapibus
            nisi, non eleifend dui nulla vel tortor. Ut dignissim dui
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
            tincidunt. Mauris in risus et elit dictum suscipit. Fusce maximus
            nisi sed libero ultrices scelerisque. Sed ultricies tellus eu justo
            fringilla, nec ultricies tortor rhoncus. Mauris eget justo sed
            libero gravida feugiat ac vitae felis. Nam vel risus eget mi
            consequat volutpat. Quisque gravida magna nec purus vestibulum, sit
            amet aliquam mes, quam non sagittis vestibulum, nulla leo dapibus
            nisi, non eleifend dui nulla vel tortor. Ut dignissim dui
          </figcaption>
        </figure>{" "}
      </div>

      <div className="flex justify-center flex-col text-center">
        <h1 className="text-2xl font-bold ">Frequently Asked Questions</h1>
        <p>
          In this FAQ section you can find all the information about our
          services
        </p>
        <AccordionItem faqs={faqs} />
      </div>
    </div>
  );
}
