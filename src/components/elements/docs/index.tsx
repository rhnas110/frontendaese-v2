import { MotionInView } from "../Motion";

export function DocsHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <MotionInView
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
    >
      <h1 className="text-4xl font-bold text-gray-300">{title}</h1>
      <hr className="h-px my-4 border-0 opacity-75 bg-gradient-to-r from-transparent via-neutral-500 to-transparent" />
      <p>{description}</p>
    </MotionInView>
  );
}

export function DocsContent({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <MotionInView
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.7 } }}
      once
    >
      <h2 className="text-2xl font-bold text-gray-300">{title}</h2>
      <hr className="h-px mt-2 mb-4 border-0 rounded opacity-75 bg-gradient-to-r from-neutral-500 via-transparent to-transparent" />
      {children}
    </MotionInView>
  );
}
