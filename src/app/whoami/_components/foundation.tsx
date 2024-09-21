export default function Foundation(props: {}) {
  return (
    <section className="flex w-full flex-col gap-4">
      <p>
        Feet provide us the foundation to stand tall and walk the path we
        choose.
      </p>
      <h2 className="sm:text-xl">
        My{' '}
        <span className="text-xl text-[#1b7eac] sm:text-2xl">core values</span>{' '}
        include
      </h2>
      <ul className="ml-5 list-disc">
        <li>
          <span className="text-[#1b7eac]">Integrity</span> - staying true to my
          principles and being accountable for my actions.
        </li>
        <li>
          <span className="text-[#1b7eac]">Curiosity</span> - continuously
          seeking knowledge and being open to new ideas.
        </li>
        <li>
          <span className="text-[#1b7eac]">Perseverance</span> - overcoming
          challenges with resilience and determination.
        </li>
        <li>
          <span className="text-[#1b7eac]">Collaboration</span> - valuing
          teamwork and the power of collective effort.
        </li>
        <li>
          <span className="text-[#1b7eac]">Adaptability</span> - embracing
          change and being flexible in a dynamic world.
        </li>
      </ul>
    </section>
  );
}
