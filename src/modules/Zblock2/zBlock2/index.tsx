import {
  m1video,
  m1guestLectures,
  m1discussion,
  m1report,
} from "../Data/zblock2";
import {
  m2discussion,
  m2guestLectures,
  m2video,
  m2report,
} from "../Data/zblock2";
import { Discussion, VideoSection, Report } from "../utils";

function ZBlock2Modules() {
  return (
    <>
      <div className="grid grid-cols-3 sm:flex sm:flex-col gap-20">
        {/* <div className="bg-green-100 p-10 rounded-lg shadow-md col-span-1">
          <h1 id="session1" className="text-2xl font-semibold mb-8">
            In a nutshell
          </h1>
          <a href="#module-1" className="text-gray-600 hover:underline">
            Module 1 : ZK in Context
          </a>
          <br />
          <a href="#module-2" className="text-gray-600 hover:underline">
            Module 2 : Rate Limiting Nullifier
          </a>
          <br />
          <a href="#module-3" className="text-gray-600 hover:underline">
            Module 3 : Spartan ECDSA
          </a>
          <br />
        </div> */}
        {/* Right Column */}

        <div className="col-span-2">
          <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-5xl md:text-3xl sm:text-3xl font-bold lg:mb-10">
            zBlock2
          </h1>
          <div className="lg:hidden">
            <img src="./zblock1.svg" className="h-[15rem]"></img>
          </div>
          <p className="text-gray-600 text-justify">
            From Jan 2024 to May 2024, we conducted our second Zero Knowledge
            Auditing cohort that kicked off with foundational concepts in
            complexity theory and Zero Knowledge Proofs (ZKPs) pivoting to Halo2
            framework. Participants engaged in hands-on exercises with Halo2, a
            tool for creating ZKP circuits, to deepen their understanding.
            <br /> <br /> The cohort's audit project was the Summa Protocol by
            the Privacy & Scaling Explorations team. Summa Protocol is a
            blockchain-based solution designed to provide Proof of Solvency for
            financial entities, ensuring they have sufficient assets to cover
            their liabilities. It leverages cryptographic techniques to verify
            solvency transparently and securely without revealing sensitive
            financial data. This audit took 120 days to complete, spanning over
            two Versions.
            <br />
            <br /> During the cohort, fellows also developed new Halo2 tooling
            and enhanced the usability of existing tools by improving the
            documentation and code for projects like Polyexen-demo and
            Halo2-analyzer. At the end of the audit, outstanding fellows were
            awarded for their exceptional contributions and performance
            throughout the cohort.
          </p>
        </div>
        <div className="col-span-1 sm:hidden">
          <img src="./zblock1.svg" className="h-[30rem]"></img>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center mt-40" id="module-1">
        Module 1
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-12 mt-12">
        <div className="col-span-1">
          <h1 id="session1" className="text-2xl font-bold">
            Sessions
          </h1>
          <VideoSection videoData={m1video} />
        </div>
        <div className="col-span-1">
          <h1 className="text-2xl font-bold">Guest Lectures</h1>
          <VideoSection videoData={m1guestLectures} />
          <h1 id="discussion1" className="text-2xl font-bold mb-4">
            Discussion
          </h1>
          <div className="flex flex-row gap-4 p-4 items-center rounded-2xl bg-[#E8FFF8]">
            <Discussion chat={m1discussion} />
          </div>
          <h1 className="text-2xl font-bold my-4">Audit Reports</h1>
          <div className="flex flex-row gap-4 p-4 items-center rounded-2xl bg-[#E8FFF8]">
            <Report report={m1report} />
          </div>
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center mt-40" id="module-2">
        Module 2
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-12 mt-12">
        <div className="col-span-1">
          <h1 className="text-2xl font-bold">Sessions</h1>
          <VideoSection videoData={m2video} />
          <h1 id="discussion1" className="text-2xl font-bold mb-4">
            Discussion
          </h1>
          <div className="flex flex-row gap-4 p-4 items-center rounded-2xl bg-[#E8FFF8]">
            <Discussion chat={m2discussion} />
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="text-2xl font-bold">Guest Lectures</h1>
          <VideoSection videoData={m2guestLectures} />

          <h1 className="text-2xl font-bold my-4">Audit Reports</h1>
          <div className="flex flex-row gap-4 p-4 items-center rounded-2xl bg-[#E8FFF8]">
            <Report report={m2report} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ZBlock2Modules;
