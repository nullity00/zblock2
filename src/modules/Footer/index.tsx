function Icon({
  src,
  alt,
  href,
  width,
}: {
  src: string;
  alt: string;
  href: string;
  width: string;
}) {
  return (
    <a href={href} target="_blank">
      <img
        src={src}
        width={width}
        alt={alt}
        className="opacity-50 hover:opacity-90 duration-700"
      />
    </a>
  );
}

export default function Footer() {
  return (
    <div className="h-full flex flex-col bg-gray-100 justify-center p-16 items-center relative">
      <img src="/logo.svg" className="h-[5rem]" />
      <div className="text-md text-zinc-600 flex flex-row flex-wrap justify-center gap-6 my-10 z-20">
        <Icon
          src="twitter.png"
          alt="Twitter"
          href="https://twitter.com/yAcademyDAO"
          width="20"
        />
        <Icon
          src="github.png"
          alt="Github"
          href="https://github.com/yAcademy-Residents"
          width="25"
        />
        <Icon
          src="discord.png"
          alt="Discord"
          href="https://discord.gg/NVNzkuUEnn"
          width="25"
        />
        <Icon
          src="gitcoin.png"
          alt="Gitcoin"
          href="https://explorer.gitcoin.co/#/round/10/0x2871742b184633f8dc8546c6301cbc209945033e/0x2871742b184633f8dc8546c6301cbc209945033e-229"
          width="25"
        />
        <Icon
          src="snapshot.png"
          alt="Snapshot"
          href="https://snapshot.org/#/yacademy.eth"
          width="25"
        />
        <Icon
          src="youtube.png"
          alt="Youtube"
          href="https://www.youtube.com/@yAcademyDAO"
          width="25"
        />
      </div>
      <p className="text-sm text-zinc-500 text-center">
        Copyright © 2024 yAcademy. All rights reserved.
      </p>
    </div>
  );
}
