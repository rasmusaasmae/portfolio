import { motion } from 'framer-motion';

export default function Head(props: {}) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.075 }}
      className="flex w-full flex-col gap-4 pt-16"
    >
      <p>
        My brain is the brains behind this operation. It has carried me through
        thick and thin, and I am grateful for it.
      </p>
      <h2 className="text-2xl text-[#ffa600]">Education</h2>
      <ul className="grid gap-4">
        <li>
          <div className="flex flex-row justify-between">
            <h3 className="text-lg font-semibold">University of Edinburgh</h3>
            <p>2020-2024</p>
          </div>
          <p>Bachelor of Science in Computer Science</p>
          <p>Classification: First Class</p>
        </li>
        <li>
          <div className="flex flex-row justify-between">
            <h3 className="text-lg font-semibold">Tallinna Reaalkool</h3>
            <p>2017-2020</p>
          </div>
          <p>
            Secondary education{' '}
            <span className="text-gray-200">
              with a focus on mathematics, natural science and computer
              programming
            </span>
          </p>
          <p>
            Graduated with a <span className="text-[#ffa600]">gold</span> medal
          </p>
        </li>
      </ul>
    </motion.section>
  );
}
