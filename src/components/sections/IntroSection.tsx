import LightRays from "../layout/LightRays";
import Image from "next/image";
import profilePic from "../../assets/profile-pictue@2x.png";

export default function IntroSection() {
  return (
    <section
      id="home"
      className="section relative h-[calc(100vh-83px)] w-full scroll-mt-16 !overflow-visible"
    >
      <div className="mx-auto flex h-full flex-col justify-center xl:container">
        <div className="light-rays absolute top-0 left-0 h-[calc(100vh-83px)] w-full !overflow-visible bg-transparent">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={0.5}
            lightSpread={0.4}
            rayLength={0.6}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={true}
            fadeDistance={0.7}
            saturation={1}
          />
        </div>
        <div className="relative mx-auto mt-[70px] grid max-w-[1160px] grid-cols-3 items-center justify-between">
          <div className="-mt-20">
            <span className="text-primary block pb-3 text-3xl font-bold uppercase">
              Hello I&apos;m
            </span>
            <h1 className="w-[385px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-600 bg-clip-text text-8xl text-transparent">
              Ventsislav <br /> Venkov
            </h1>
          </div>
          <div className="relative flex justify-center">
            <div className="relative z-10">
              <Image
                src={profilePic}
                alt="Profile picture"
                width={350}
                height={600}
                className="relative ml-[45px] drop-shadow-[0_35px_100px_rgba(0,0,0,0.5)]"
                priority
              />
              <div className="pointer-events-none absolute -bottom-10 left-1/2 z-20 h-[300px] w-[580px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#080808]/70 to-black/100 blur-xl" />
              <div className="pointer-events-none absolute -top-1 left-1/2 z-20 -ml-5 h-[50px] w-[100px] -translate-x-1/2 bg-gradient-to-t from-transparent to-black/50 blur-xl" />
            </div>
            <h2 className="role-subtitle">Front-end Dev</h2>
            <h3 className="role-title">Front-end Dev</h3>
          </div>
          <div className="-mt-20 ml-auto max-w-[280px]">
            <h3 className="mb-6 text-2xl font-bold">Who am I?</h3>
            <div className="text-primary flex flex-col gap-4">
              <p>
                A proactive Front-end Engineer who builds scalable applications
                with an ownership mindset—treating every project as my own.
              </p>

              <p className="border-secondary border-l-2 py-1 pl-4 font-medium text-[#a1a1a1] italic">
                &quot;Work as if you are working for yourself&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
