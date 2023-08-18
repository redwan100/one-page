import workImg from "../../assets/work.png";
import icon from "../../assets/list-icon.svg";

const workInfo = [
  {
    id: "23",
    desc: "First, the assigned graphics designer isolates the object from the picture and makes it transferrable to a different background.",
    icon: icon,
  },
  {
    id: "2563",
    desc: "Then, the blurriness is fixed after adjusting the color and contrast.",
    icon: icon,
  },
  {
    id: "237",
    desc: "We use Clone Stamp Tool at this point to fix any torn portion, dust, or scratches.",
    icon: icon,
  },
  {
    id: "253",
    desc: "After that, we use the Healing Brush Tool for increasing smoothness and fixing any color defect.",
    icon: icon,
  },
  {
    id: "235",
    desc: "If needed, to fix the loss of quality due to editing, our expert designers will make further resizing and retouches to the image.",
    icon: icon,
  },
];
const Work = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="grid gap-10 justify-center px-3 lg:grid-cols-2 container mx-auto lg:w-[80%]">
        <div className="order-2 lg:order-1 mt-7 lg:mt-0">
          <div className="mb-8">
            <h1 className="text-[27px] font-bold text-[#091d33] lg:text-[40px] mb-2">
              How We Work?
            </h1>
            <p className="text-[#4f5864] lg:text-[18px]">
              Clipping Path Graphics believes in clarity and authentic service
              more than anything. For that reason, we share our work process
              with our clients to rely on our service.
            </p>
          </div>

          <div className="">
            {workInfo?.map((work) => (
              <div key={work.id} className="flex gap-4">
                <h3 className="text-[24px] flex gap-4">
                  <img src={work.icon} alt="" className="" />
                  {work.desc}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <img
          src={workImg}
          alt=""
          className="justify-self-center order-1 lg:order-2 w-[80%]"
        />
      </div>
    </div>
  );
};

export default Work;
