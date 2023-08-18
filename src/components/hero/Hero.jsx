import heroImg from "../../assets/hero.webp";
const Hero = () => {
  return (
    <div className="bg-slate-100 py-[5rem]">
      <div className="grid items-center lg:grid-cols-2 gap-[4rem]  p-7 container mx-auto lg:w-[80%] ">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold sm:text-5xl">
            High-End Photo Retouching Service Tailored for You
          </h1>
          <p className="text-gray-700">
            Are you looking for the best online photo retouching service at an
            affordable price? Our professional retouching service can quickly
            transform poor photos into professional-looking ones.
          </p>
          <p className="text-gray-700">
            Clipping Path Graphics is ready to take care of all your photo
            retouching needs to let you focus on expanding your business and
            leave the rest to us.
          </p>

          <button className="bg-[#0075ff] text-white h-[55px] w-[190px] font-bold text-center text-xl rounded-full hover:bg-[#4292ee] transition">
            Get started
          </button>
        </div>

        <div className="justify-self-center relative">
          <img src={heroImg} alt="hero image" />

          <div
            className="h-[123px] w-[160px] p-[15px] sm:h-[170px] sm:w-[160px] sm:py-[39px] sm:px-[15px] bg-white
           rounded-tr-[2rem] rounded-bl-[2rem] shadow-lg absolute -left-5 -bottom-[6rem] sm:-left-14 sm:-bottom-7 "
          >
            <p className="">Starting at</p>
            <p className="text-center text-[#FF8A00] text-4xl font-bold">
              85 c
            </p>
            <p className="text-right text-slate-400">Per Image</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
