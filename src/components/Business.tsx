import Button from './Button'
import styles, { layout } from '../styles/style'
import { features } from '../constants'

const Business = () => {
  return (
    <section id="business" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden"/> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by building credit, 
          earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>

        <Button styles="mt-10"/>
      </div>
        
      <div className={`${layout.sectionImg} flex-col md:ml-40 ml-0`}>
        {features.map((feature) => (
          <div className={`flex flex-row items-center p-6 rounded-[20px] cursor-pointer feature-card`}>
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
              <img src={feature.icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
            </div>

            <div className={`flex flex-1 flex-col ml-3`}>
              <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                {feature.title}
              </h4>
              <p className={`${styles.paragraph} text-[16px] leading-[24px]`}>
                {feature.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Business