export default function Sport(props: {}) {
  return (
    <section className="flex flex-col gap-4">
      <p>
        I have a deep passion for sports and have explored a wide range of
        activities, from football and running to cycling, swimming, badminton,
        tennis, and more.
      </p>
      <div className="flex flex-col">
        <h2 className="text-lg text-[#756bbb] sm:text-xl">Running</h2>
        <table className="table-auto text-sm">
          <thead className="border-b border-gray-600">
            <tr>
              <th className="whitespace-nowrap border-e border-gray-600 px-2">
                Date
              </th>
              <th className="whitespace-nowrap border-e border-gray-600 px-2">
                Competition
              </th>
              <th className="whitespace-nowrap border-e border-gray-600 px-2">
                Distance
              </th>
              <th className="whitespace-nowrap px-2 py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-600">
              <td className="border-e border-gray-600 px-2 py-2">
                29th Aug 2024
              </td>
              <td className="border-e border-gray-600 px-2 py-2">
                KV MV sõjaväe viievõistluses
              </td>
              <td className="whitespace-nowrap border-e border-gray-600 px-2 py-2">
                7.6 km
              </td>
              <td className="whitespace-nowrap px-1">31:09</td>
            </tr>
            <tr className="border-b border-gray-600">
              <td className="border-e border-gray-600 px-2 py-2">
                26th Aug 2023
              </td>
              <td className="border-e border-gray-600 px-2 py-2">
                51. jooks ümber Ülemiste järve
              </td>
              <td className="whitespace-nowrap border-e border-gray-600 px-2 py-2">
                13.8 km
              </td>
              <td className="whitespace-nowrap px-1">1:00:29</td>
            </tr>
            <tr className="">
              <td className="border-e border-gray-600 px-2 py-2">
                8th July 2023
              </td>
              <td className="border-e border-gray-600 px-2 py-2">
                42. jooks ümber Pühajärve
              </td>
              <td className="whitespace-nowrap border-e border-gray-600 px-2 py-2">
                10.7 km
              </td>
              <td className="whitespace-nowrap px-1">48:18</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg text-[#756bbb] sm:text-xl">
          Military Pentathon
        </h2>
        <p>
          I represented Cyber Command in the Military Pentathlon, where I
          competed in a variety of challenging events. I finished 7th out of 73
          competitors, making it a memorable and rewarding experience.
        </p>
      </div>
    </section>
  );
}
