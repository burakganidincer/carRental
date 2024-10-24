import { RefObject } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
type Props = {
  // useRef ile referansı alınan bir elementin tipini tanımlarken RefObject kullanıyoruz
  catalogRef: RefObject<HTMLDivElement>;
};

const Hero = ({ catalogRef }: Props) => {
  // katalog alanına süreklemek için
  const handleClick = () => {
    catalogRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="hero">
      <div className="pt-36 padding-x flex-1 max-h-[920px]">
        <h1 className="hero__title">Özgürlüğü Yaşa, Yola Çık</h1>

        <p className="hero__subtitle">
          Unutulmaz bir yolculuğa adım atmaya hazır mısın? Araç kiralama
          deneyimini Altın Seçenekler ile bir üst seviyeye taşı ve her anı özel
          yaşa!
        </p>

        <Button
          title="Arabaları Keşfet"
          designs="mt-10"
          handleClick={handleClick}
        />
      </div>

      <div className="flex justify-center">
        {/* animasyon */}
        <motion.img
          initial={{
            translateX: 200,
            scale: 0.7,
          }}
          animate={{
            translateX: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          src="/hero.png"
          alt="bmw"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
