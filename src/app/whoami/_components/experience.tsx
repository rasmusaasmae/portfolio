import cybercommand from '@public/cybercommand.jpg';
import estsoc from '@public/estsoc.jpg';
import trimsense from '@public/trimsense.jpg';
import Image from 'next/image';

export default function Experience(props: {}) {
  return (
    <section className="flex flex-col gap-4">
      <p>
        My hands bring code to life. They&apos;ve built apps, solved problems,
        and turned ideas into reality, one keystroke at a time.
      </p>
      <h2 className="text-xl text-[#bc5090] sm:text-2xl">Experience</h2>
      <ul className="grid gap-3">
        <li className="flex flex-col gap-2 rounded-lg border border-gray-800 p-2">
          <div className="flex flex-row gap-4">
            <Image
              src={cybercommand}
              alt="Cyber Command"
              placeholder="blur"
              className="h-20 w-20 rounded-lg"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold sm:text-lg">
                Estonian Defence Forces
              </h3>
              <p>July 2024 - June 2025</p>
              <p>
                <span className="text-[#bc5090]">Soldier</span> &{' '}
                <span className="text-[#bc5090]">IT Specialist</span>
              </p>
            </div>
          </div>
          <p>
            After receiving basic soldier training I joined the Cyber
            Command&apos;s development team to improve the systems used by the
            Estonian Defence Forces.
          </p>
        </li>
        <li className="flex flex-col gap-2 rounded-lg border border-gray-800 p-2">
          <div className="flex flex-row gap-4">
            <Image
              src={trimsense}
              alt="Trimsense"
              placeholder="blur"
              className="h-20 w-20 rounded-lg"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold sm:text-lg">Trimsense</h3>
              <p>Nov 2021 - Aug 2023</p>
              <p className="text-[#bc5090]">Software Engineer</p>
            </div>
          </div>
          <p>
            At Trimsense I focused on designing and implementing web and mobile
            apps to help measure and analyse sail shape and improve sailing
            efficiency.
          </p>
        </li>
      </ul>
      <h2 className="text-xl text-[#bc5090] sm:text-2xl">
        Volunteer Experience
      </h2>
      <ul className="grid gap-2">
        <li className="flex flex-col gap-2 rounded-lg border border-gray-800 p-2">
          <div className="flex flex-row gap-4">
            <Image
              src={estsoc}
              alt="Edinburgh Estonian Society"
              placeholder="blur"
              className="h-20 w-20 rounded-lg"
            />
            <div className="flex flex-col">
              <h3 className="font-semibold sm:text-lg">
                Edinburgh Estonian Society
              </h3>
              <p>Oct 2021 - May 2024</p>
              <p>
                <span className="text-[#bc5090]">President</span>,{' '}
                <span className="text-[#bc5090]">Secretary</span>
              </p>
            </div>
          </div>
          <p>
            Helped organise events and manage society&apos;s day-to-day
            functioning.
          </p>
        </li>
      </ul>
    </section>
  );
}
