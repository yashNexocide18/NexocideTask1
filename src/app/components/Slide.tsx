import Image from "next/image";

const companieslogo = [
  { Name: "Amazon", logo: "amzon1.svg" },
  { Name: "Dribble", logo: "dribble.png" },
  { Name: "HubSpot", logo: "hubspot.png" },
  { Name: "Notion", logo: "notion.png" },
  { Name: "Netflix", logo: "netflix.png" },
  { Name: "Zoom", logo: "zoom.png" },
];

export default function Slide() {
  return (
    <div className="relative w-[80vw] flex justify-center mt-28 mx-auto ">
      <ul className="flex gap-34 items-center w-[80vw]">
        {companieslogo.map((item) => (
          <li key={item.Name} className="w-24 h-auto">
            <Image
              src={`/${item.logo}`} // place logos in /public
              alt={item.Name}
              width={120}
              height={50}
              className="object-contain h-15 w-60 filter grayscale "
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
