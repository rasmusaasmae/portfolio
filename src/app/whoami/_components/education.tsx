import reaalkool from '@public/reaalkool.jpg';
import uoe from '@public/uoe.jpg';
import Image from 'next/image';

export default function Education(props: {}) {
  return (
    <section className="flex w-full flex-col gap-4">
      <p>
        My brain is the brains behind this operation. It has carried me through
        thick and thin, and I am grateful for it.
      </p>
      <h2 className="text-xl text-[#ffa600] sm:text-2xl">Education</h2>
      <ul className="grid gap-2">
        <li className="flex flex-col gap-2 rounded-lg border border-gray-800 p-2">
          <div className="flex flex-row gap-4">
            <Image
              src={uoe}
              alt="University of Edinburgh logo"
              placeholder="blur"
              className="h-20 w-20 rounded-lg"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold sm:text-lg">
                University of Edinburgh
              </h3>
              <p>2020 - 2024</p>
            </div>
          </div>
          <p>Bachelor of Science in Computer Science</p>
          <p>Classification: First Class</p>
        </li>
        <li className="flex flex-col gap-2 rounded-lg border border-gray-800 p-2">
          <div className="flex flex-row gap-4">
            <Image
              src={reaalkool}
              alt="Reaalkool logo"
              placeholder="blur"
              className="h-20 w-20 rounded-lg"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold sm:text-lg">Reaalkool</h3>
              <p>2017 - 2020</p>
            </div>
          </div>
          <p>
            Secondary education with a focus on mathematics, natural science and
            computer programming
          </p>
          <p>
            Graduated with a <span className="text-[#ffa600]">gold</span> medal
          </p>
        </li>
      </ul>
    </section>
  );
}
