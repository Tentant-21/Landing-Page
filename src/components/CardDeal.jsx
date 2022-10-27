import { card } from "../assets";
import styles from "../style";
import style, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" />
          in few easy steps.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquam accusamus velit temporibus similique dignissimos est libero sunt ipsam eos. Maxime vel, quas dignissimos nisi molestias voluptates architecto commodi libero optio dicta distinctio laboriosam dolorem.</p>

          <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>
      </div>

    </section>
  )


export default CardDeal