import clientImg from "../../assets/client.webp";

const OurClient = () => {
  return (
    <div className="py-16 px-2 container mx-auto lg:w-[80%]">
      <div className="grid gap-5 lg:grid-cols-2">
        <img src={clientImg} alt="client image" />

        <div>
          <h1 className="text-[24px] font-bold mb-2 sm:text-[40px]">
            Avail A Free Service by Becoming Our Client
          </h1>
          <p className="text-[16px] text-[#4f5864] mb-8">
            By becoming our client, you’re availing of free digital photo
            enhancement services to assess our work. See if our{" "}
            <span className="text-[#0075ff] hover:text-[#ff8a00] transition font-semibold">
              free trial
            </span>{" "}
            meets your requirements, and then place the order. We’re always
            available to provide a top-notch service meeting your needs.
          </p>

          <h1 className="text-[24px] font-bold mb-2">
            Get an Instant Quote for Photo Editing and Retouching Services
          </h1>
          <p className="text-[16px] text-[#4f5864] mb-5">
            So, What Are You Waiting For? Get an{" "}
            <span className="text-[#0075ff] hover:text-[#ff8a00] transition font-semibold">
              instant quote
            </span>{" "}
            by calling our phone number or contacting us via live chat right
            now! Our team of 300+ photo editors is always ready to provide you
            the best photo enhancement services. If you want to try our photo
            retouching manipulation service online, use our free trial to see if
            you like it.
          </p>
          <button className="w-[200px] h-[45px] bg-[#ffa800] text-white text-xl font-semibold rounded-full sm:w-[242px] sm:h-[70px]">
            Instant Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
