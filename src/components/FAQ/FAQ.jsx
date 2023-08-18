import { useState } from "react";
import faqImg from "../../assets/faq.svg";

const faqs = [
  {
    id: 473,
    ques: "How many retouched photos can you deliver per day?",
    ans: "We can deliver around 4,000 photos in general under our high-end photo retouching services. But, depending on the images and their quality, the amount may vary.",
  },
  {
    id: 528,
    ques: "Do you use automated tools for photo retouching?",
    ans: "Not at all! We use a high-quality pen for editing photos manually. Our team of photo editing specialists works tirelessly to make this happen with Photoshop retouching.",
  },
  {
    id: 644,
    ques: "Can I have a free service to check the quality of your work?",
    ans: "Yes, you can avail of a free service as a free trial.",
  },
  {
    id: 613,
    ques: "Do you provide any guarantee on protecting my data?",
    ans: "We provide 100% assurance on data security. Your information and pictures will be stored on our highly-secured private network, where we never allow access to anyone else.",
  },
  {
    id: 567,
    ques: "How many revisions can I get for a photo retouching?",
    ans: "We’re ready to make as many edits as you need to ensure you’re satisfied with the work.",
  },
];
const FAQ = () => {
  const [active, setActive] = useState(null);

  const handleFaq = (id) => {
    setActive(id === setActive ? null : id);
  };

  return (
    <div className="py-20 px-3 bg-gray-100">
      <div className="container mx-auto lg:w-[80%]">
        <div className="text-center max-w-[516px] mx-auto md:max-w-[930px]">
          <h1 className="text-[#091d33] text-[26px] font-bold mb-4 lg:text-[40px]">
            Frequently Asked Questions - FAQ
          </h1>
          <p className="text-[18px] text-[#4f5864]">
            Clipping Path Graphics ensures professional and top-notch Photo
            Retouching Service catering to our clients' needs. We take pride in
            our professionalism and utmost dedication.
          </p>
        </div>

        {/* ----------------------FAQ--------------------- */}
        <div className="lg:flex mt-8 gap-10">
          <img src={faqImg} alt="" className="lg:w-[40%] -mb-6" />

          <div className="mt-10 lg:mt-0">
            {faqs?.map((faq) => (
              <div
                key={faq.id}
                className={`mb-8 bg-white rounded-md p-4 group  overflow-hidden transition-all`}
              >
                <div className="flex justify-between">
                  <h1
                    className="text-[18px] font-bold lg:text-[20px] transition text-[#212529] group-hover:text-[#FFC500] cursor-pointer"
                    onClick={() => handleFaq(faq.id)}
                  >
                    {faq.ques}
                  </h1>
                  <span className="text-2xl font-bold cursor-pointer">
                    {active === faq.id ? "-" : "+"}
                  </span>
                </div>

                <div
                  className={`transition-all ${
                    faq.id === active ? "show" : "h-0 overflow-hidden "
                  }`}
                >
                  <p className="text-[#4f5864]">{faq.ans}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
