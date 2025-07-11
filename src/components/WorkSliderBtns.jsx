'use client'
import {useSwiper} from "swiper/react"
import {PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'

const WorkSliderBtns = ({containerStyles, btnStyles, iconsStyles, children}) => {
    const swiper = useSwiper()
  return (
    <div className={containerStyles}>
        <button className={`${btnStyles} rounded-xl`}>
            <PiCaretLeftBold className={iconsStyles} onClick={() => swiper.slidePrev()}/>
        </button>
        {children}
        <button className={`${btnStyles} rounded-xl`}>
            <PiCaretRightBold className={iconsStyles} onClick={() => swiper.slideNext()}/>
        </button>
    </div>
  )
}

export default WorkSliderBtns