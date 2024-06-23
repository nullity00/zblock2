import {
  m1video,
  m1guestLectures,
  m1discussion,
  m1notes,
  m1exercises,
  m1report,
} from "../Data/zblock2";
import {
  m2discussion,
  m2guestLectures,
  m2video,
  m2notes,
  m2report,
} from "../Data/zblock2";
import { Discussion, VideoSection, Report, Quiz, Notes } from "../utils";
import Lottie from "lottie-react";
import logo from "./logo.json";

function ZBlock2Modules() {
  return (
    <>
      <div className="grid grid-cols-5 sm:flex sm:flex-col gap-20">
        <div className="col-span-2">
          <div className="lg:py-4 lg:my-8 md:my-12">
            <h1 className="lg:leading-normal lg:text-7xl md:text-4xl sm:text-4xl font-bold lg:mb-10">
              zBlock2: <br /> ZK Auditing, Evolved!
            </h1>
          </div>
          <div className="lg:hidden">
            <Lottie animationData={logo} className="md:hidden lg:hidden" />
          </div>
        </div>
        <div className="col-span-3 sm:hidden">
          <Lottie animationData={logo} className="sm:hidden h-[30rem]" />
          {/* <img src="./zblock1.svg" className="h-[30rem]"></img> */}
        </div>
      </div>
      <div className="mr-32">
        <h1
          className="text-5xl font-bold text-center mt-40 mb-20"
          id="module-1"
        >
          In a nutshell,
        </h1>
        <div className="grid grid-cols-5">
          <div className="col-span-2">
            <img src="./cross.svg" className="h-[24rem]" />
          </div>
          <div className="col-span-3">
            <p className="text-gray-600 text-justify">
              From Jan 2024 to May 2024, we held our second zero-knowledge
              auditing fellowship centered around the PSE-Halo2 development
              framework and the KZG commitment scheme. Participants engaged in
              hands-on exercises, sync and async discussions, and technical
              sessions by devs, auditors, and distinguished guests.
              <br />
              <br />
              The focus of the audit in this cohort was the Summa Protocol
              developed at the{" "}
              <a
                href="https://pse.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-bold hover:underline duration-700"
              >
                Privacy & Scaling Explorations
              </a>{" "}
              group of the EF. The{" "}
              <a
                href="https://summa.gitbook.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-bold hover:underline duration-700"
              >
                Summa Protocol
              </a>{" "}
              is a blockchain-based solution for providing proof of solvency for
              financial entities, ensuring they have sufficient assets to cover
              their liabilities. It leverages cryptographic techniques with the
              aim to verify solvency transparently and securely, and without
              revealing sensitive personal financial data.
              <br />
              <br />
              This audit took 120 days to complete, covering two versions of the
              Summa protocol. During the cohort, fellows also developed new
              Halo2 tooling and enhanced the usability of existing tools by
              improving the documentation and code for projects like
              Polyexen-demo and Halo2-analyzer. At the end of the audit,
              exceptional fellows were awarded for their outstanding
              contributions and performance throughout the cohort.
            </p>
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
            <h1 className="text-2xl font-bold">Guest Lectures</h1>
            <VideoSection videoData={m1guestLectures} />
          </div>
          <div className="col-span-1">
            <h1 id="discussion1" className="text-2xl font-bold mb-4">
              Discussion
            </h1>
            <div className="flex flex-row gap-4 p-4 items-center rounded-2xl bg-[#E8FFF8]">
              <Discussion chat={m1discussion} />
            </div>
            <h1 className="text-2xl font-bold my-4">Supplimentary Materials</h1>
            <div className="flex flex-col gap-6 p-4 items-left rounded-2xl bg-[#E8FFF8]">
              {m1notes.map((exercise) => {
                return <Notes notes={exercise} />;
              })}
            </div>
            <h1 className="text-2xl font-bold my-4">Exercises</h1>
            <div className="flex flex-col gap-6 p-4 items-left rounded-2xl bg-[#E8FFF8]">
              {m1exercises.map((exercise) => {
                return <Quiz quiz={exercise} />;
              })}
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
            <h1 className="text-2xl font-bold my-4">Supplimentary Materials</h1>
            <div className="flex flex-col gap-6 p-4 items-left rounded-2xl bg-[#E8FFF8]">
              {m2notes.map((exercise) => {
                return <Notes notes={exercise} />;
              })}
            </div>
          </div>
          <div className="col-span-1">
            <h1 className="text-2xl font-bold">Guest Lectures</h1>
            <VideoSection videoData={m2guestLectures} />
            <h1 id="discussion1" className="text-2xl font-bold mb-4">
              Discussion
            </h1>
            <div className="flex flex-row gap-4 p-4 items-center rounded-2xl bg-[#E8FFF8]">
              <Discussion chat={m2discussion} />
            </div>

            <h1 className="text-2xl font-bold my-4">Audit Reports</h1>
            <div className="flex flex-row gap-4 p-4 items-center rounded-2xl bg-[#E8FFF8]">
              <Report report={m2report} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ZBlock2Modules;
