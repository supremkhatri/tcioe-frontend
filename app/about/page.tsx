import { AnimatedSection } from "@/components/animated-section"
import AboutUs from "@/components/sections/about_us"
import Aboutphoto from "@/components/sections/aboutFeaturedphoto"



export default function AboutPage() {
  const items = [
    {
      src: "/data/ukg_doece.webp", // Replace with your image path
      alt: "Epigraphy of inauguration",
      caption: "Epigraphy of inauguration of Thapathali campus",
    },
    {
      src: "/data/ukg_doece.jpeg", // Replace with your image path
      alt: "Inauguration walk",
      caption:  
        "Inauguration by Late King Mahendra B.B. Shah and German Chancellor Dr. Heinrich Lubke",
    },
  ];
  
  return (
    <AnimatedSection className="py-20 px-4 text-center">
      <AboutUs/>
      <Aboutphoto items={items}/>
    </AnimatedSection>
  )
}
