import { motion } from 'framer-motion';

export default function Hands(props: {}) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.075 }}
      className="flex w-full flex-col gap-4 pt-16"
    >
      <p>
        My hands bring code to life. They&apos;ve built apps, solved problems,
        and turned ideas into reality, one keystroke at a time.
      </p>
      <h2 className="text-2xl text-[#bc5090]">Experience</h2>
      <ul className="grid gap-4">
        <li>
          <div className="mb-1">
            <div className="flex flex-row justify-between">
              <h3 className="text-lg font-semibold">Estonian Defence Forces</h3>
              <p>July 2024 - June 2025</p>
            </div>
            <p>
              <span className="text-[#bc5090]">Soldier</span> &{' '}
              <span className="text-[#bc5090]">IT Specialist</span>
            </p>
          </div>
          <div>
            <p>
              I&apos;m currently undergoing basic soldier&apos;s training.
              Afterwards, I&apos;ll join the Cyber Command&apos;s development
              team to improve the systems used by the Estonian Defence Forces.
            </p>
            {/* <Link
              className="group text-[#bc5090] hover:underline"
              href="/projects/cybercommand"
            >
              Read more
              <ArrowRight className="inline h-4 place-self-center group-hover:h-5" />
            </Link> */}
          </div>
        </li>
        <li>
          <div className="mb-1">
            <div className="line-clamp-1 flex flex-row justify-between">
              <h3 className="text-lg font-semibold">
                Edinburgh Estonian Society
              </h3>
              <p>Oct 2021 - May 2024</p>
            </div>
            <p>
              <span className="text-[#bc5090]">Society Committee Member</span>{' '}
              (President, Secretary)
            </p>
          </div>

          <div>
            <p>
              Helped organise events and manage society&apos;s day-to-day
              functioning.
            </p>
          </div>
        </li>
        <li>
          <div className="mb-1">
            <div className="flex flex-row justify-between">
              <h3 className="text-lg font-semibold">Trimsense</h3>
              <p>Nov 2021 - Aug 2023</p>
            </div>
            <p className="text-[#bc5090]">Software Engineer</p>
          </div>
          <div>
            <p>
              At Trimsense I focused on designing and implementing web and
              mobile apps to help measure and analyse sail shape and improve
              sailing efficiency.
            </p>
            {/* <Link
              className="group text-[#bc5090] hover:underline"
              href="/projects/trimsense"
            >
              Read more
              <ArrowRight className="inline h-4 place-self-center group-hover:h-5" />
            </Link> */}
          </div>
        </li>
      </ul>
    </motion.section>
  );
}
