import priceImg from "../../../assets/price-img.png";
import logoIag from "../../../assets/list-icon.svg";
const Price = () => {
  return (
    <div className="py-10">
      <div className="bg-white rounded-md shadow-md py-24 pl-16 pr-[10rem] relative flex flex-col gap-10 justify-between lg:flex-row">
        <div className="relative flex gap-6 flex-col md:flex-row">
          <span className="hidden lg:block text-9xl absolute -top-10 -left-10 z-10 font-bold text-[#0075ff] opacity-10">
            $
          </span>
          <img className="z-20" src={priceImg} alt="price image" />
          <div className="max-w-[620px]">
            <h1 className="text-[28px] text-[#091d33] font-bold lg:text-[40px] mb-4">
              Our Pricing
            </h1>
            <p className="text-[#4f5864] lg:text-[18px]">
              Our creative retouching service comes with the best deals within
              an affordable price.{" "}
              <span className="text-[#0075ff] font-bold hover:text-[#FFC500] transition">
                See our pricing
              </span>{" "}
              to place an order!
            </p>
          </div>
        </div>

        <div className="relative z-10">
          <span className="hidden lg:block text-stroke text-[12rem] absolute  -right-20 -top-20 -z-10 font-bold text-[#0075ff] opacity-10">
            $
          </span>
          <img
            src={logoIag}
            alt=""
            className="hidden lg:block w-10 absolute -bottom-0 -right-6 -z-10 opacity-10"
          />
          <div
            className="h-[166px] w-[320px] py-[37px] px-[20px] lg:h-[170px] md:w-[160px] lg:py-[39px] lg:px-[15px] bg-white
           rounded-tr-[2rem] rounded-bl-[2rem] shadow-2xl z-40"
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

export default Price;
