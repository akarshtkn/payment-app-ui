import { stats } from "../constants"
import styles from "../styles/style"

const Stats = () => {
  return (
    <section id="stats" className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row m-3`}>
          <h1 className="font-poppins font-semibold text-white xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">
            {stat.value}
          </h1>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats