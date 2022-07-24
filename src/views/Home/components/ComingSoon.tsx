import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Image } from '@pancakeswap/uikit'
import styled from 'styled-components'


const SlideImg = styled(Image)`
    width: 100px;
    height: 200px;
    ${({ theme }) => theme.mediaQueries.xs} {
        height: 10px;
        width: 200px;
    }

    ${({ theme }) => theme.mediaQueries.md} {
        height: 100px;
        width: 200px;
    }

`
const ComingSoon = () => {

    return (
        <Carousel 
        autoPlay
        interval={3000}
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        width='50'        
        >
            <div>
                <SlideImg src="/images/adverts/pools-coming-soon.svg" width={300} height={150} alt='Pools coming soon'/>
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <SlideImg src="/images/adverts/farms-coming-soon.svg" width={300} height={150} alt='Farms coming soon'/>
                {/* <p className="legend">Legend 1</p> */}
            </div>
            {/* <div>
                <Image src="assets/3.jpeg" width={800} height={400} alt='photo3' />
                <p className="legend">Legend 3</p>
            </div> */}
        </Carousel>
    )
}

export default ComingSoon