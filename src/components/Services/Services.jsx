import listIcon from "../../assets/list-icon.svg";
const serviceInfo = [
  {
    id: 11,
    title: "High-Quality Service and On-time Delivery",
    desc: "Our team of professional and expert designers is always at your service. They are passionate about their work and highly experienced. Although we only follow the manual editing process, Clipping Path Graphics can offer you the fastest service maintaining tight deadlines.",
    img: listIcon,
  },
  {
    id: 113,
    title: "No Automated Tool",
    desc: "Here at Clipping Path Graphics, we don’t use any automated tools for photo retouching. We rely on our expert designers and their experiences. Automated tools will surely provide you faster service, but manual editing is the best option for maintaining maximum quality. Our designers spend hours studying the pictures and make tailored decisions to make your images better.",
    img: listIcon,
  },
  {
    id: 131,
    title: "Realistic Natural Shadow",
    desc: "Adding shadow to a picture requires the understanding of light and measurement of the shadow. These are some of the characteristics that are secured by a professional. We provide the most natural shadow service, which helps your brand attract more attention.",
    img: listIcon,
  },
  {
    id: 311,
    title: "Highly Skilled and Experienced Designers",
    desc: "Clipping Path Graphics is equipped with a dedicated and passionate team of experienced designers. We value our employees and believe that they keep our company running. Our people love what they do, and they do it with care and love.",
    img: listIcon,
  },
  {
    id: 161,
    title: "Exact Pen Tool Pointing",
    desc: "In photo editing, the pen tool is the most powerful Photoshop tool. However, using this tool appropriately requires a high level of knowledge and skill. To isolate the object from the image, our skilled editors employ the accurate pen tool pointing method. The object you're preserving retains its clarity and quality while using this method",
    img: listIcon,
  },
  {
    id: 181,
    title: "Sharp Corner Edges with Hard Corner Cut Out",
    desc: "Only fixing the color and contrast isn't enough for a successful photo retouching. You must pay attention to every aspect of the image, including the edges. On a different background, if the corners aren't sharp enough, they won't look realistic. You must take care of the curves and hard corners, just as you must care for the sharp edges. It will aid in blending the photo with the new background. Product photo quality for eCommerce or any other business is heavily reliant on appropriate curvature. At Clipping Path Graphics, we care for our customers, and we act through our professional retouching service.",
    img: listIcon,
  },
];

const Services = () => {
  return (
    <div className="py-28 px-3 sm:px-8">
      <div className="container mx-auto lg:w-[80%]">
        <div className=" w-full flex gap-20 flex-col lg:flex-row mb-10">
          <h1 className="text-[26px] font-bold text-[#091d33] mb-3 max-w-[250px] lg:min-w-[350px] lg:text-[40px]">
            Why You Should Get Our Service
          </h1>
          <div className="">
            <p className="text-[#4f5864]">
              Here at Clipping Path Graphics, we provide professional and
              high-quality service at a moderate cost to meet the needs of our
              clients. We are proud of our professionalism and commitment that
              helped to build our reputation.
            </p>
            <p className="font-bold hover:text-[#ff8a00] transition underline">
              Our service is equipped with:
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceInfo?.map((service) => (
            <div
              key={service.id}
              className="bg-gray-200 p-[15px] rounded-tr-[30px] rounded-bl-[30px] border border-slate-200 lg:p-[30px]"
            >
              <h3 className="flex items-center gap-4 text-[17px] text-[#091d33] mb-3 font-bold md:text-[24px]">
                <img src={service.img} alt="" />
                <span>{service.title}</span>
              </h3>

              <p className="text-[#4f5864]">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
