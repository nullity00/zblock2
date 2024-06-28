import {
  m1video,
  m1guestLectures,
  m1discussion,
  m1notes,
  m1exercises,
  m1report,
  m1bounties,
  m2bounties,
} from "../Data/zblock2";
import {
  m2discussion,
  m2guestLectures,
  m2video,
  m2notes,
  m2report,
} from "../Data/zblock2";
import { fellows, yacteam, summateam, guest } from "../Data/zblock2";
import {
  Discussion,
  VideoSection,
  Report,
  Quiz,
  Notes,
  Trophy,
} from "../utils";
import Lottie from "lottie-react";
import logo from "./logo.json";

function ZBlock2Modules() {
  return (
    <>
      <div className="grid grid-cols-5 sm:flex sm:flex-col gap-20">
        <div className="col-span-2">
          <div className="lg:py-4 lg:my-8 md:my-12">
            <h1 className="lg:leading-normal lg:text-7xl md:text-4xl sm:text-4xl sm:text-center sm:leading-normal font-bold lg:mb-10">
              zBlock2: <br /> ZK Auditing, Evolved!
            </h1>
          </div>
          {/* <div className="lg:hidden">
            <Lottie animationData={logo} className="md:hidden lg:hidden" />
          </div> */}
        </div>
        <div className="col-span-3 sm:hidden">
          <Lottie animationData={logo} className="sm:hidden h-[30rem]" />
          {/* <img src="./zblock1.svg" className="h-[30rem]"></img> */}
        </div>
      </div>
      <div className="lg:mr-32">
        <h1
          className="text-4xl  font-bold text-center mt-40 mb-20"
          id="module-1"
        >
          In a nutshell,
        </h1>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <img src="./cross.svg" className="h-[24rem]" />
          </div>
          <div className="lg:col-span-3">
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
            <p className="mt-4 font-semibold">
              See also :{" "}
              <a
                href="https://yacademy.dev/fellowships/zBlock1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline duration-700"
              >
                zBlock1
              </a>
            </p>
          </div>
        </div>
        <h1
          className="text-4xl  font-bold text-center mt-40 mb-20"
          id="module-1"
        >
          Participants
        </h1>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1 flex flex-col p-4 px-12 rounded-xl bg-[#E8FFF8]">
            <img src="./logo.svg" className="h-16 mb-2" />
            <ul className="list-disc text-zinc-700">
              {yacteam.map((member) => {
                return (
                  <li>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:underline duration-700"
                    >
                      {member.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:col-span-2 flex flex-col p-4 px-12 rounded-xl bg-[#E8FFF8]">
            <h4 className="text-xl py-4 text-center font-semibold mb-4">
              Fellows
            </h4>
            <div className="flex flex-row sm:flex-col justify-between">
              <ul className="list-disc text-zinc-700">
                {fellows.slice(0, 6).map((member) => {
                  return (
                    <li>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:underline duration-700"
                      >
                        {member.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <ul className="list-disc text-zinc-700">
                {fellows.slice(6, 12).map((member) => {
                  return (
                    <li>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:underline duration-700"
                      >
                        {member.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-1 flex flex-col p-6 px-12 rounded-xl bg-[#E8FFF8]">
            <img src="./summa.svg" className="h-10 mb-6" />
            <ul className="list-disc text-zinc-700">
              {summateam.map((member) => {
                return (
                  <li>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:underline duration-700"
                    >
                      {member.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:col-span-1 flex flex-col p-4 px-8 rounded-xl bg-[#E8FFF8]">
            <h4 className="text-xl py-4 text-center font-semibold">
              Guest Speakers
            </h4>
            <ul className="list-disc text-zinc-700">
              {guest.map((member) => {
                return (
                  <li>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:underline duration-700"
                    >
                      {member.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center text-zinc-800 text-center mt-12">
          <h4 className="text-xl font-semibold">Supported by </h4>
          <img src="./ef.svg" className="h-16 inline-block" />
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
            <div className="flex flex-row gap-4 p-4 items-center rounded-xl bg-[#E8FFF8]">
              <Discussion chat={m1discussion} />
            </div>
            <h1 className="text-2xl font-bold my-4">Supplementary Materials</h1>
            <div className="flex flex-col gap-6 p-4 items-left rounded-xl bg-[#E8FFF8]">
              {m1notes.map((exercise) => {
                return <Notes notes={exercise} />;
              })}
              {m1bounties.map((item) => {
                return <Trophy trophy={item} />;
              })}
            </div>
            {/* <div className="flex flex-col gap-6 p-4 items-left rounded-xl bg-[#E8FFF8]">
              
            </div> */}
            <h1 className="text-2xl font-bold my-4">Exercises</h1>
            <div className="flex flex-col gap-6 p-4 items-left rounded-xl bg-[#E8FFF8]">
              {m1exercises.map((exercise) => {
                return <Quiz quiz={exercise} />;
              })}
            </div>
            <h1 className="text-2xl font-bold my-4">Audit Reports</h1>
            <div className="flex flex-row gap-4 p-4 items-center rounded-xl bg-[#E8FFF8]">
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
            <h1 className="text-2xl font-bold my-4">Supplementary Materials</h1>
            <div className="flex flex-col gap-6 p-4 items-left rounded-xl bg-[#E8FFF8]">
              {m2notes.map((exercise) => {
                return <Notes notes={exercise} />;
              })}
              <Trophy trophy={m2bounties} />
            </div>
          </div>
          <div className="col-span-1">
            <h1 className="text-2xl font-bold">Guest Lectures</h1>
            <VideoSection videoData={m2guestLectures} />
            <h1 id="discussion1" className="text-2xl font-bold mb-4">
              Discussion
            </h1>
            <div className="flex flex-row gap-4 p-4 items-center rounded-xl bg-[#E8FFF8]">
              <Discussion chat={m2discussion} />
            </div>

            <h1 className="text-2xl font-bold my-4">Audit Reports</h1>
            <div className="flex flex-row gap-4 p-4 items-center rounded-xl bg-[#E8FFF8]">
              <Report report={m2report} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ZBlock2Modules;
