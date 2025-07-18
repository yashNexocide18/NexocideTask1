
export default function Lpara({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="w-[80vw] max-w-[50vw] mx-auto mt-20">
      <h2 className="text-3xl font-semibold mb-6 text-black tracking-wide whitespace-pre-line w-[50vw]">{title}</h2>
      {paragraphs.map((para, idx) => (
       <li
          key={idx}
          className=" text-black text-[17px] leading-[1.8] tracking-widest whitespace-pre-line mb-6"
        >
          {para}
        </li>
      ))}
    </div>
  );
}
