import Image from "next/image";
import Welcome from "../components/Welcome";

export default function Art() {
    return (
    <>
      <section id="banner-illustration">
        <div id="artwork" className="sm:hidden lg:block">
          <Image 
            src={"./artwork.svg"}
            width={"0"}
            height={"0"}
            className="w-full"
            alt="my ugly artwork"
          />
        </div>
      </section>
      <Welcome />
    </>
    )
}