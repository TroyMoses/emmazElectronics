import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeProducts from "@/components/layout/HomeProducts";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <HomeProducts />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md text-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Founded in 2019, Emmaz Electronics was born from a passion for putting the power of technology in everyone's hands. We believe electronics should enhance your life, not complicate it. That's why we focus on offering a user-friendly online experience with a curated selection of top brands and the latest innovations.
          </p>
          <p>Our team of tech enthusiasts is here to guide you every step of the way. Whether you're a seasoned gadget guru or just starting your tech journey, we offer detailed product descriptions, helpful buying guides, and responsive customer support. We want you to feel confident and excited about your purchase!</p>
          <p>Looking beyond the sale, we strive to be a valuable resource. We keep our blog updated with the latest tech trends, buying tips, and even troubleshooting guides. We're committed to building a community of tech-savvy individuals who can learn from each other and get the most out of their electronics.</p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+256775549730">
            +256775549730
          </a><br /><br />
          <a className="text-4xl underline text-gray-500" href="tel:+256743449290">
            +256743449290
          </a>
        </div>
      </section>
    </>
  )
}
