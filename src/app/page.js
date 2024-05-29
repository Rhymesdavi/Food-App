import Header from "@/components/layout/Header"
import Hero from "@/components/layout/Hero"
import HomeMenu from "@/components/layout/HomeMenu.js"
import SectionHeaders from "@/components/layout/SectionHeaders"

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders 
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="max-w-2xl mx-auto mt-8 text-gray-500 flex flex-col gap-4">
          <p>
            <b>QuickEats</b> believes that great food should always be within reach. Our mission is to simplify your dining experience, bringing delicious meals from your favorite restaurants straight to your doorstep. With a diverse selection of cuisines and flavors, we cater to every taste bud, ensuring that there is something for everyone. Whether you are craving comfort food, exotic flavors, or healthy options, <b>QuickEats</b> has you covered.
          </p>
          <p>
            Our journey began with a simple idea: to make ordering food as easy as a few taps on your phone. We've partnered with the best restaurants in town to offer you a wide range of options, all available for delivery or pickup. Our user-friendly app makes ordering a breeze, allowing you to customize your meal, track your order in real-time, and enjoy contactless delivery. With <b>QuickEats</b>, you can indulge in your favorite foods without any hassle.
          </p>
          <p>
            Join the <b>QuickEats</b> family today and experience the convenience of delicious meals delivered right to your doorstep. Whether you are dining solo, with family, or hosting a gathering, QuickEats is your go-to for quality food and exceptional service. Say goodbye to long lines and busy kitchens - with <b>QuickEats</b>, good food is just a click away.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders 
          subHeader={"Dont hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:">
            +189123321465
          </a>
        </div>
      </section> 
    </>
  )
}
