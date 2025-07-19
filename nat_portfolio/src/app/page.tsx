import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full p-16 flex">
      <div>
        <main className="grid grid-flow-col grid-rows-3 gap-4 row-auto">
          <div className="grid grid-flow-col grid-rows-3 gap-4 ">
            <Image
              className="row-span-3"
              src={"/adrien-converse.jpg"}
              alt={"ill add a profile pic later"}
              width={400}
              height={750}
            />
            <h3 className="col-span-2">Nataliya Zhuromskaya</h3>
            <p className="col-span-1 row-span-2">
              Hi! I am a full stack software engineer from Omaha, Nebraska. I
              completed my B.S. in Computer Science from the University of
              Nebraska-Omaha in August 2021, and since then have been working
              full time as a full stack engineer working in React and .Net.
            </p>
          </div>

          <div className="grid grid-flow-row justify-items-center">
            <h3>Frameworks</h3>
            <p>
              <span>React</span>
              <span>.Net</span>
            </p>
          </div>
          <div className="grid grid-flow-row justify-items-center">
            <h3>Tools</h3>
            <p>
              <span>Github</span>
              <span>Webstorm</span>
              <span>Visual Studio</span>
              <span>Visual Studio Code</span>
              <span>Unity</span>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
