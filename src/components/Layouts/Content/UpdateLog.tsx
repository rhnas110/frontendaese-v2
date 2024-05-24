import { updateLog } from "../../../constants/updateLog";
import { Motion, MotionInView } from "../../Elements/Motion";

export const UpdateLog = () => {
  return (
    <section className="flex flex-col px-2 py-32 lg:px-4 gap-y-8">
      <Motion
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
      >
        <h1 className="text-4xl font-bold text-gray-300">Update Log</h1>
        <hr className="h-px my-4 border-0 opacity-75 bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />
        <p>Keep track of all the updates and changes made to frontendaese.</p>
      </Motion>

      {updateLog.map((update, index) => (
        <MotionInView
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.7 },
          }}
          once
        >
          <div className="p-4 transition duration-300 border rounded-lg shadow-lg border-zinc-700 bg-zinc-800 hover:scale-[1.01]">
            <h2 className="text-2xl font-bold text-yellow_vs">
              {update.version}
            </h2>
            <p className="my-2 text-gray-300">{update.description}</p>
            {update.details && (
              <ul className="pl-5 space-y-1 text-gray-400 list-disc">
                {update.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        </MotionInView>
      ))}
    </section>
  );
};
