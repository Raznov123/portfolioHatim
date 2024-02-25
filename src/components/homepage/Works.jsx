import DnD from "/src/assets/images/dnd1.webp";
import JumatikChatbox from "/src/assets/images/JumatikChatbox.webp";
import GoFit from "/src/assets/images/go-fit.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        <div className=" col-span-1 md:col-span-12">
          <Projects
            img={DnD}
            alt="IBGroup vietnam website mockup"
            name="DnD Brushelle"
            type="Web Design • Frontend Development"
            year="2024"
            tools="NextJS • MaterialUI • Figma"

          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            img={JumatikChatbox}
            alt="JumatikChatbox"
            name="Jumatik Chatbox"
            type="Frontend Development"
            year="2023"
            tools="ReactJS • JavaScript • ChakraUI"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            img={GoFit}
            alt="GoFit"
            name="GoFit"
            type="Web Design • Frontend Development"
            year="2023"
            tools="ReactJS • ChakraUI • Figma"
          />
        </div>
      </div>
    </section>
  );
}
