import { getDictionary, i18n } from "@/dictionaries/getDictionary";
import { About } from "@/widgets/About";
import { Appointment } from "@/widgets/Appointment";
import { Benefits } from "@/widgets/Benefits";
import { ExperienceSlider } from "@/widgets/ExperienceSlider";
import { Hero } from "@/widgets/Hero";
import { News } from "@/widgets/News";
import { Services } from "@/widgets/Services";
import { Statistics } from "@/widgets/Statistics";
import { Team } from "@/widgets/Team";
import { Testimonial } from "@/widgets/Testimonial";
import { Timeline } from "@/widgets/Timeline";

export default async function Home({ params }) {
  // 1. Params bilan ishlash (Next.js 15+ moslashuvchanlik)
  let currentParams = params;
  if (typeof params.then === "function") {
    currentParams = await params;
  }

  let lang = currentParams.lang;

  // 2. Lang aniqlash mantiqi
  if (!lang && currentParams.value) {
    try {
      const parsedValue = JSON.parse(currentParams.value);
      lang = parsedValue.lang;
    } catch (e) {
      console.error("Language parsing error:", e);
    }
  }

  if (!lang) {
    lang = i18n.defaultLocale;
  }

  // 3. Dictionary-ni yuklash
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero dict={dict} lang={lang} />

      <About />
      <Benefits />
      <Timeline />
      <Statistics />
      <Appointment />
      <Services />
      <Testimonial />
      <Team/>
      <ExperienceSlider />
      <News/>
    </>
  );
}
