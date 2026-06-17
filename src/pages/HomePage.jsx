import HeroImage from "../assets/images/hero.svg";
import AboutImage from "../assets/images/about.svg";
import Project1 from "../assets/images/proyek-1.webp";
import Project2 from "../assets/images/proyek-2.webp";
import Project3 from "../assets/images/proyek-3.webp";
import Project4 from "../assets/images/proyek-4.webp";
import Project5 from "../assets/images/proyek-5.webp";

const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Belajar membuat website dengan{" "}
              <span className=" font-bold text-sky-400 underline">
                Tailwind CSS
              </span>
            </h1>
            <p className=" text-base/8 mb-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              obcaecati maxime nihil! Quos perferendis reprehenderit distinctio
              sunt eius mollitia rerum esse eaque sequi? Consectetur eligendi
              facilis eum minus enim fugit.
            </p>
            <a
              href="#"
              className=" bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full">
              Tentang Kami <i className="ri-eye-line ms-1"></i>{" "}
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="Hero Image"
              className=" md:w-full w-[400px] mx-auto md:m-0"
            />
          </div>
        </div>

        {/* About */}
        <div
          className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32"
          id="about">
          <div className="box md:order-1 order-2">
            <img
              src={AboutImage}
              alt="About Image"
              className=" md:w-full w-[400px] mx-auto md:m-0"
            />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Belajar membuat website dengan{" "}
              <span className=" font-bold text-sky-400 underline">
                Tailwind CSS
              </span>
            </h1>
            <p className=" text-base/loose">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              obcaecati maxime nihil! Quos perferendis reprehenderit distinctio
              sunt eius mollitia rerum esse eaque sequi? Consectetur eligendi
              facilis eum minus enim fugit.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="services pt-32" id="services">
          <h1 className=" text-center lg:text-5xl text-3xl font-medium mb-2">
            Services
          </h1>
          <p className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="services-box pt12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl text-white"></i>
              <h3 className=" text-xl font-bold text-white mt-6 mb-2">
                Services Name 1
              </h3>
              <p className=" text-white text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                cumque numquam quam, vero repellendus quae vel assumenda eum
                natus deserunt sit sapiente, eius quos alias nemo et autem
                possimus libero!
              </p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl text-white"></i>
              <h3 className=" text-xl font-bold text-white mt-6 mb-2">
                Services Name 2
              </h3>
              <p className=" text-white text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                cumque numquam quam, vero repellendus quae vel assumenda eum
                natus deserunt sit sapiente, eius quos alias nemo et autem
                possimus libero!
              </p>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <i className="ri-number-3 text-3xl text-white"></i>
              <h3 className=" text-xl font-bold text-white mt-6 mb-2">
                Services Name 3
              </h3>
              <p className=" text-white text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                cumque numquam quam, vero repellendus quae vel assumenda eum
                natus deserunt sit sapiente, eius quos alias nemo et autem
                possimus libero!
              </p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="project pt-32" id="projects">
          <h1 className=" text-center lg:text-5xl text-3xl font-medium mb-2">
            Projects
          </h1>
          <p className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="projects-box pt12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white shadow">
              <img
                src={Project1}
                alt="Project Image"
                className=" w-full h-[220px]"
              />
              <h3 className=" text-xl font-bold text-white mt-6 mb-2">
                Project Name 1
              </h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem natus, blanditiis culpa ducimus ad architecto!
              </p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img
                src={Project2}
                alt="Project Image"
                className=" w-full h-[220px]"
              />
              <h3 className=" text-xl font-bold mt-6 mb-2">Project Name 2</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem natus, blanditiis culpa ducimus ad architecto!
              </p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img
                src={Project3}
                alt="Project Image"
                className=" w-full h-[220px]"
              />
              <h3 className=" text-xl font-bold mt-6 mb-2">Project Name 3</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem natus, blanditiis culpa ducimus ad architecto!
              </p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img
                src={Project4}
                alt="Project Image"
                className=" w-full h-[220px]"
              />
              <h3 className=" text-xl font-bold mt-6 mb-2">Project Name 4</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem natus, blanditiis culpa ducimus ad architecto!
              </p>
            </div>
            <div className="box p-2 bg-white shadow">
              <img
                src={Project5}
                alt="Project Image"
                className=" w-full h-[220px]"
              />
              <h3 className=" text-xl font-bold mt-6 mb-2">Project Name 5</h3>
              <p className=" text-base/loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem natus, blanditiis culpa ducimus ad architecto!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
