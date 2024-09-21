import coco_luna from '@public/animals/coco_luna_1.jpg';
import trumm2 from '@public/animals/trumm_2.jpg';
import zara3 from '@public/animals/zara_3.jpg';
import { Heart } from 'lucide-react';
import Image from 'next/image';

export default function Love(props: {}) {
  return (
    <section className="flex w-full flex-col gap-4">
      <p>
        I <Heart className="animate inline h-5 animate-pulse fill-[#ff6361]" />{' '}
        animals!
      </p>
      <p>Here are my dog and cats:</p>
      <div className="grid grid-cols-2 gap-4">
        <Image
          src={zara3}
          alt="Zara looking into your eyes"
          loading="lazy"
          placeholder="blur"
        />
        <Image
          src={coco_luna}
          alt="Coco & Luna posing"
          loading="lazy"
          placeholder="blur"
        />
        <Image
          src={trumm2}
          alt="Trumm relaxing"
          className="col-span-2"
          loading="lazy"
          placeholder="blur"
        />
      </div>
    </section>
  );
}
