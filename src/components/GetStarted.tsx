import { arrowUp } from "../assets"
import styles from "../styles/style"

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} bg-blue-gradient w-[140px] h-[140px] rounded-full cursor-pointer p-[2px]`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px] mr-2">
            <span className={`text-gradient`}>Get</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px]"/>
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className={`text-gradient`}>Started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted