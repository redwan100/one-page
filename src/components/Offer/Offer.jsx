import listIcon from "../../assets/list-icon.svg";
import Price from "./Price/Price";
const offerInfo = [
  {
    name: "Beauty Retouching Services",
    logo: listIcon,
  },
  {
    name: "Face Retouching and Skin Retouching",
    logo: listIcon,
  },
  {
    name: "Clipping Path Image Editing Service for Amazon",
    logo: listIcon,
  },
  {
    name: "Vector Tracing",
    logo: listIcon,
  },
  {
    name: "Jewelry Photo Retouching Services",
    logo: listIcon,
  },
  {
    name: "Product Photo Retouching Services",
    logo: listIcon,
  },
  {
    name: "Headshot Retouching Services",
    logo: listIcon,
  },
  {
    name: "Photo Adjustments and Editing",
    logo: listIcon,
  },
  {
    name: "Online Retailers’ Clipping Path Service",
    logo: listIcon,
  },
  {
    name: "Real Estate Photo Retouching Service",
    logo: listIcon,
  },
  {
    name: "Professional Wedding Portrait Photo Retouching",
    logo: listIcon,
  },
  {
    name: "Ecommerce Photo Retouching",
    logo: listIcon,
  },
];

const Offer = () => {
  return (
    <div className="py-20 px-3 bg-gray-100">
      <div className="container mx-auto lg:w-[80%]">
        <div className="text-center space-x-3 max-w-[550px] lg:max-w-[600px] mx-auto mb-10">
          <h1 className="text-[27px] text-[#091d33] font-bold lg:text-[40px]">
            We Offer More Than Just Photo Retouching
          </h1>
          <p className="text-[#4f5864] lg:text-[18px]">
            We offer the most cost-effective and professional photo retouching
            services catering to your needs!!
          </p>
        </div>

        <div className="grid justify-between md:grid-cols-2 w-full">
          {offerInfo?.map((offer) => (
            <p key={offer.name} className="flex items-center gap-3 mb-5">
              <img src={offer.logo} alt="" />
              <span className="text-[18px] md:text-[20px]">{offer.name}</span>
            </p>
          ))}
        </div>

        <Price />
      </div>
    </div>
  );
};

export default Offer;
