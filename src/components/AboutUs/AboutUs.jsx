import starImg from "../../assets/star.png";
import ratingImg from "../../assets/rating.svg";
import map from "../../assets/map.svg";

const cardInfo = [
  {
    id: 1,
    author: "Devin J Dupuy",
    desc: `“I had around 1,000 photos for my eCommerce site. As I was looking for the best retouching service provider, I stumbled upon Clipping Path Graphics. They offered me the best price and a reasonable deadline. I didn’t find any single issue with the project. Wishing them all the best in their future endeavors!”`,
    img: ratingImg,
  },
  {
    id: 2,
    author: "Craig T Sigala",
    desc: `“Photo retouching is tricky and requires an extensive amount of work. I tried to fix some of my wedding photos and had to quit. The designers at Clipping Path Graphics promised me the best wedding photo retouching service, and they kept their words. Really happy with their service!”`,
    img: ratingImg,
  },
  {
    id: 1,
    author: "Clifton M Miller",
    desc: `“I run an online fashion store, and I needed fashion photo retouching services for my website. I tried Clipping Path Graphics’ service for the first time and was impressed with their professionalism. I gave them a tight deadline, but they delivered the photos on time, maintaining quality. I highly recommend their service!”`,
    img: ratingImg,
  },
];
const AboutUs = () => {
  return (
    <div className="bg-slate-100 py-20">
      <div
        className="container mx-auto lg:w-[80%]"
        style={{ backgroundImage: `url(${map})` }}
      >
        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-[24px] font-bold lg:text-[40px]">
              What Our Clients Have to Say About Us
            </h1>
            <p className="text-[#4f5864]">
              At Clipping Path Graphics, we take feedback very seriously and
              constantly work on areas to improve. See what our clients have
              said about our service.
            </p>
          </div>

          <div className="mx-auto w-max flex items-center gap-5 flex-col sm:flex-row">
            <img src={starImg} alt="star image" />
            <p className="text-[#00b67a] text-lg hover:text-[#ff8a00] font-bold">
              <span>TrustScore 4.8 |</span> Review
            </p>
          </div>

          {/* card------------  */}
          <div>
            <div className="grid gap-4 lg:grid-cols-3 px-3 md:gap-7">
              {cardInfo?.map((card) => (
                <div
                  key={card.id}
                  className="bg-white pl-7 py-8 pr-1 rounded-tr-[30px] rounded-bl-[30px] space-y-4 md:space-y-6 "
                >
                  <img src={card.img} alt="rating" />
                  <p className="text-[#4f5864] md:text-[20px]">{card.desc}</p>
                  <h3 className="text-xl font-semibold text-[#091d33] ">
                    {card.author}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
