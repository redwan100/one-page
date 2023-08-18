import { useState } from "react";
import img1 from "../../assets/1.webp";
import img2 from "../../assets/2.webp";
import img3 from "../../assets/3.webp";
import img4 from "../../assets/4.webp";
import img5 from "../../assets/5.webp";
import img6 from "../../assets/6.webp";
import img7 from "../../assets/7.webp";
import img8 from "../../assets/8.webp";
const portfolioInfo = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
  {
    id: 7,
    img: img7,
  },
  {
    id: 8,
    img: img8,
  },
];
const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState({});

  const handleModal = (item = {}) => {
    setModalImg(item);
    setShowModal(true);
  };

  return (
    <div className="bg-slate-100 py-24">
      <div className="container mx-auto lg:w-[80%] relative space-y-12 px-4">
        <div className="flex justify-between flex-col md:flex-row">
          <h1 className="text-[24px] font-bold text-[#091d33] lg:text-[40px]">
            Some of our portfolio
          </h1>
          <button className="w-[152px] h-[45px] border border-[#ff8a00] hover:bg-[#ff8a00] hover:text-white rounded-full lg:h-[55px] transition">
            See All Work
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-4 justify-center">
          {portfolioInfo?.map((item) => (
            <div
              key={item.id}
              className="w-full cursor-pointer"
              onClick={() => handleModal(item.img)}
            >
              <img
                src={item.img}
                alt=""
                className="w-full rounded-tr-[30px] rounded-bl-[30px]"
              />
            </div>
          ))}
        </div>
      </div>
      {/* ------------MODAL--------- */}
      {showModal && (
        <div className="fixed w-full min-h-screen top-0 left-0 bg-[#000000c8] grid place-content-center">
          <div className="relative">
            <span
              className="absolute -top-10 right-0 text-white font-bold text-3xl cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              x
            </span>
            <img src={modalImg} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
