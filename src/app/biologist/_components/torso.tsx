import coco_luna from '@public/animals/coco_luna_1.jpg';
import trumm2 from '@public/animals/trumm_2.jpg';
import zara3 from '@public/animals/zara_3.jpg';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Image from 'next/image';

export default function Torso(props: {}) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.075 }}
      className="flex w-full flex-col gap-4 pt-16"
    >
      <p>
        I <Heart className="animate inline h-5 animate-pulse fill-[#ff6361]" />{' '}
        animals!
      </p>
      <p>Here are my dog and cats:</p>
      <div className="grid grid-cols-2 gap-4">
        <Image src={zara3} alt="Zara looking into your eyes" loading="lazy" />
        <Image src={coco_luna} alt="Coco & Luna posing" loading="lazy" />
        <Image
          src={trumm2}
          alt="Trumm relaxing"
          className="col-span-2"
          loading="lazy"
        />
      </div>
    </motion.section>
  );
}
