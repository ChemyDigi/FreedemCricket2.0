"use client";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import coach from "../../public/images/coach.jpg";

interface Trainer {
  name: string;
  role: string;
  imageSrc: StaticImageData;
  slug: string;
}

const trainers: Trainer[] = [
  {
    name: "Hiran Gunawardhana",
    role: "Founder / Head Coach",
    imageSrc: coach,
    slug: "hiran",
  },
  {
    name: "Himasha Kumarage",
    role: "Ladies Head Coach ",
    imageSrc: coach,
    slug: "himasha",
  },
  {
    name: "Prajeev Jansze",
    role: "Coach",
    imageSrc: coach,
    slug: "prajeev",
  },
  {
    name: "W. A. Gihan Lakshitha De Silva",
    role: "Assistant Coach / Throwdown Specialist",
    imageSrc: coach,
    slug: "prajeev",
  },
  {
    name: "Anuhas Dasanayaka",
    role: "Coach",
    imageSrc: coach,
    slug: "anuhas",
  },
];

const Trainers = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/profile");
  };

  const handleCardClick = (slug: string) => {
    router.push(`/profile/${slug}`);
  };

  return (
    <section className="py-30 px-4 sm:px-8 md:px-14 lg:px-20 xl:px-32 bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
        <div className="flex flex-col">
          <span className="text-sm md:text-base text-secondary mb-2 font-normal">
            Trainers
          </span>
          <h2 className="text-2xl md:text-5xl leading-[1.1] text-main font-semibold">
            Meet Our <br /> Expert Trainers
          </h2>
        </div>
        <button
          onClick={handleButtonClick}
          className="mt-4 sm:mt-0 border-2 border-(--color-secondary) text-(--color-secondary) 
             bg-transparent px-6 py-3 rounded-full text-sm sm:text-base font-medium 
             transition-all duration-300 hover:bg-(--color-secondary) hover:text-white"
        >
          Meet the Coaches
        </button>
      </div>

      {/* Trainer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {trainers.map((trainer, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
            onClick={() => handleCardClick(trainer.slug)}
            className="cursor-pointer flex flex-col items-center text-center group"
          >
            <div
              className="w-full h-96 md:h-136 relative rounded-lg overflow-hidden bg-gray-200 
                         shadow-md group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] 
                         transition-all duration-500 ease-out"
            >
              <Image
                src={trainer.imageSrc}
                alt={trainer.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="mt-4 font-semibold text-main group-hover:text-(--color-secondary) transition-colors duration-300">
              {trainer.name}
            </h3>
            <p className="text-black">{trainer.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
