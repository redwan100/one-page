import model from "../../assets/model-retouch.webp";
import listIcon from "../../assets/list-icon.svg";

const featureInfo = [
  {
    name: "Clipping Path Service",
    logo: listIcon,
  },
  {
    name: "Product Shadow Service",
    logo: listIcon,
  },
  {
    name: "Color Correction and Modification",
    logo: listIcon,
  },
  {
    name: "Realistic and Natural Shadow",
    logo: listIcon,
  },
  {
    name: "Drop Shadow",
    logo: listIcon,
  },
  {
    name: "Reflection Shadow",
    logo: listIcon,
  },
  {
    name: "Smooth Anchoring",
    logo: listIcon,
  },
  {
    name: "Ghost Mannequin",
    logo: listIcon,
  },
];
const Features = () => {
  return (
    <div className="py-20 bg-[#1e2b52] text-white px-5 ">
      <div className="w-[330px] container sm:w-[80%] mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="">
          <h1 className="text-[27px] font-bold sm:text-[28px] md:text-[29px] lg:text-[40px] mb-4">
            Our Special Features
          </h1>
          <p className="text-[16px] mb-10">
            At Clipping Path Graphics, we go beyond our service to offer the
            most cost-effective and professional photo touch-up service. Our
            adjustments include:
          </p>
          <button className="w-[200px] h-[70px] bg-[#0075ff] rounded-full text-[18px] font-bold text-white">
            Get started
          </button>
        </div>

        <div>
          {featureInfo?.map((feature) => (
            <p key={feature.name} className="flex items-center gap-3 mb-4">
              <img src={feature.logo} alt="" />
              <span className="text-[18px] block">{feature.name}</span>
            </p>
          ))}
        </div>

        <img
          src={model}
          alt="model image"
          className="rounded-tr-[30px] rounded-bl-[30px] w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Features;
