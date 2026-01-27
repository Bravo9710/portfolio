import Image from "next/image";
import profilePic from "../../assets/profile-pictue@2x.png";
import LightRays from "../layout/LightRays";

export default function IntroSection() {
  return (
    <section
      id="home"
      className="section relative w-full scroll-mt-16 overflow-hidden sm:!overflow-visible md:h-[calc(100vh-83px)]"
    >
      <div className="mx-auto flex h-full flex-col justify-center xl:container">
        <div className="light-rays absolute top-0 left-0 hidden h-[calc(100vh-83px)] w-full !overflow-visible bg-transparent md:block">
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
        <div className="relative mx-auto mt-[30px] max-w-[1160px] items-center justify-between md:mt-[70px] md:grid md:grid-cols-3">
          <div className="md:-mt-20">
            <span className="text-primary block pb-3 text-3xl font-bold uppercase">
              Hello I&apos;m
            </span>
            <h1 className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-clip-text text-4xl text-transparent sm:text-6xl md:w-[385px] md:to-gray-600 lg:text-8xl">
              Vencislav <br className="hidden md:block" /> Venkov
            </h1>
          </div>
          <div className="relative flex justify-center">
            <div className="relative z-10 max-md:-mt-6 max-sm:mt-5">
              <Image
                src={profilePic}
                alt="Profile picture"
                width={350}
                height={600}
                className="relative drop-shadow-[0_35px_100px_rgba(0,0,0,0.5)] max-md:w-[250px] lg:ml-[45px]"
                priority
              />
              <div className="pointer-events-none absolute -bottom-10 left-1/2 z-20 h-[300px] w-[580px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#080808]/70 to-black/100 blur-xl" />
              <div className="pointer-events-none absolute -top-1 left-1/2 z-20 -ml-5 h-[50px] w-[100px] -translate-x-1/2 bg-gradient-to-t from-transparent to-black/50 blur-xl" />
            </div>
            <h2 className="role-subtitle bottom-[5px] max-md:hidden lg:bottom-[30px]">
              Front-end Dev
            </h2>
            <h3 className="role-title md:text-nowrap">Front-end Dev</h3>
          </div>
          <div className="mt-15 md:-mt-20 md:ml-auto md:max-w-[280px]">
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
