import LightRays from "../layout/LightRays";
import Image from "next/image";
import profilePic from "../../assets/profile-pictue@2x.png";

export default function IntroSection() {
  return (
    <section className="section w-full h-[calc(100vh-61px)]">
      <div className="xl:container mx-auto h-full relative flex flex-col justify-center">
        <div className="w-full h-[600px] absolute top-0 left-0 bg-transparent">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={0.5}
            lightSpread={0.4}
            rayLength={0.8}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.5}
            distortion={0}
            className="custom-rays"
            pulsating={true}
            fadeDistance={1}
            saturation={1}
          />
        </div>
        <div className="relative grid grid-cols-3 justify-between items-center mt-[70px]">
          <h1 className="text-8xl w-[385px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-600 bg-clip-text text-transparent">
            Ventsislav <br /> Venkov
          </h1>
          <div className="relative flex justify-center ">
            <div className="relative z-10">
              <Image
                src={profilePic}
                alt="Profile picture"
                width={350}
                height={600}
                className="relative ml-[45px] drop-shadow-[0_35px_100px_rgba(0,0,0,0.5)]"
                priority
              />
              <div className="absolute z-20 left-1/2 -translate-x-1/2 -bottom-10 w-[580px] h-[300px] blur-xl bg-gradient-to-b from-transparent via-[#080808]/70 to-black/100 pointer-events-none" />
              <div className="absolute z-20 left-1/2 -ml-5 -translate-x-1/2 -top-1 w-[100px] h-[50px] blur-xl bg-gradient-to-t from-transparent  to-black/50 pointer-events-none" />
            </div>
            <h2 className="role-subtitle">Front-end Dev</h2>
            <h3 className="role-title">Front-end Dev</h3>
          </div>
          <p className="text-subtle max-w-[300px] flex-1 text-justify justify-self-end ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus vel
            at tempore eligendi fugiat impedit alias quisquam quidem, officia
            explicabo deleniti consectetur, officiis suscipit asperiores
            numquam, sit repudiandae. Voluptate, expedita.
          </p>
        </div>
      </div>
    </section>
  );
}
