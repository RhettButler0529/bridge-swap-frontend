import React from 'react'
import styled from 'styled-components'
import { Link as ReactLink } from 'react-router-dom'
import { Heading, Text, BaseLayout, Button, Card, Flex, Grid, Link } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
// import FarmStakingCard from 'views/Home/components/FarmStakingCard'
// import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
// import EarnAPRCard from 'views/Home/components/EarnAPRCard'
// import EarnAssetCard from 'views/Home/components/EarnAssetCard'
// import WinCard from 'views/Home/components/WinCard'
import partners from 'config/constants/partners'
import ComingSoon from './components/ComingSoon'

const Hero = styled.div`
  align-items: center;
  border-radius: 20px;
  background-image: linear-gradient(245.94deg, rgba(8, 8, 56, 0.2) -63.8%, rgba(17, 17, 139, 0.2) 73.44%);
  backdrop-filter: blur(20px);
  background-repeat: no-repeat;
  background-position: top center;
  max-width: 98%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding: 0px 30px;
  padding-top: 16px;
  text-align: center;
  
  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    max-width: 90%;
    padding: 0px 120px;
    padding-top: 116px;
    height: 265px;
    padding-top: 0;
  }
`

// const Cards = styled(BaseLayout)`
//   align-items: stretch;
//   justify-content: stretch;
//   margin-bottom: 24px;
//   grid-gap: 24px;

//   & > div {
//     grid-column: span 6;
//     width: 100%;
//   }

//   ${({ theme }) => theme.mediaQueries.sm} {
//     & > div {
//       grid-column: span 8;
//     }
//   }

//   ${({ theme }) => theme.mediaQueries.lg} {
//     margin-bottom: 32px;
//     grid-gap: 32px;

//     & > div {
//       grid-column: span 6;
//     }
//   }
// `

// const CTACards = styled(BaseLayout)`
//   align-items: start;
//   margin-bottom: 24px;
//   grid-gap: 24px;

//   & > div {
//     grid-column: span 6;
//   }

//   ${({ theme }) => theme.mediaQueries.sm} {
//     & > div {
//       grid-column: span 8;
//     }
//   }

//   ${({ theme }) => theme.mediaQueries.lg} {
//     margin-bottom: 32px;
//     grid-gap: 32px;

//     & > div {
//       grid-column: span 4;
//     }
//   }
// `
// const AdsCards = styled(BaseLayout)`
//   align-items: stretch;
//   margin-bottom: 24px;
//   grid-gap: 24px;

//   & > div {
//     grid-column: span 6;
//   }

//   ${({ theme }) => theme.mediaQueries.sm} {
//     & > div {
//       grid-column: span 8;
//     }
//   }

//   ${({ theme }) => theme.mediaQueries.lg} {
//     margin-left: 50px;
//     margin-bottom: 32px;
//     grid-gap: 32px;

//     & > div {
//       grid-column: span 4;
//     }
//   }
// `

const BridgeBoard = styled.div`
  align-items: center;
  box-shadow: 3px 7px 5px 7px #121254;
  border-radius: 20px;
  background: #09092B;
  max-width: 98%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding: 10px 30px;
  text-align: center;
  
  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: 90%;
    padding: 20px 40px;
  }
`
const FeatBtn = styled(Button)`
  color: ${({ theme }) => theme.colors.bright};
  border-color: ${({ theme }) => theme.colors.bright};
  margin: 20px 0px;
`

const FeatsGrid = styled(BaseLayout)`
  width: 100%;
  align-items: start;
  & > div {
    grid-column: span 6;
  }
`

const PerformersFlex = styled(Flex)`
  width: 100%;
  padding: 12px;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    justify-content: flex-start;
    
  }
`

const Performer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  
`
const TopSymbol = styled(Flex)`
  align-items: center;
  justify-content: flex-start;
`
const TopAPR = styled(Flex)`
  margin-top: 12px;
`

const StatsValue = styled(Flex)`
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    
  }

`

const BridgeLottery = styled(Flex)`
  background-image: url(/images/decorations/bg-design.svg);
  background-repeat: no-repeat;
  background-position: top center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-radius: 12px;
  text-align: center;
  padding: 30px 0px;
  margin: 12px;
`

const StatsFigures = styled.div`
  width: 100%;
`
const Partners = styled(Grid)`
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px;
  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 18px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 21px;
  }

`
const Partner = styled.div`
  background: #18186B;
  height: 20px;
  width: 75px;
  border-radius: 5px;
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 25px;
    width: 82px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    height: 30px;
    width: 95px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    height: 38px;
    width: 100px;
  }
`

const LearnMoreBtn = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bright};
  padding: 12px 10px;
  border-radius: 9px;
  margin-top: 12px;
  margin-bottom: 12px;
`

const Home: React.FC = () => {
  const { t } = useTranslation()

  // Open exchange
  // const openDex = () => {
  //   window.open('https://dex.bridgeswap.app/#/swap','_blank')
  // }
  // Open add liquidity
  // const openAddLiquidity = () => {
  //   // 
  //   window.open('https://dex.bridgeswap.app/#/pool','_blank')
  // }

  return (
    <Page>
      <Hero>
        <Heading as="h1" scale="xl" mb="24px" color="blue">
          {t('TACO')}
        </Heading>
        <Text color="white">{t('Bridgeswap is bridging Defi on Web 3.0 from traditional finance in a decentralized manner to create a fair global economy that is sustainable, accessible, and community-driven DAO.')}</Text>
        {/* <Button variant="primary" style={{margin: "20px 0px"}}>Learn more</Button> */}
        <LearnMoreBtn href='https://bridgeswap-exchange-1.gitbook.io/bridgeswap/' target='_blank' rel='noreferrer noopener'>Learn more</LearnMoreBtn>
      
      </Hero>
      <div>
        {/* <AdsCards>
          <Image src="/images/adverts/pools-coming-soon.svg" alt="Pools coming soon" width={400} height={200} responsive/>
          <Image src="/images/adverts/farms-coming-soon.svg" alt="Farms coming soon" width={400} height={200} responsive/>
        </AdsCards> */}
        <ComingSoon />
        <BridgeBoard>
          <Heading as="h3" mb="24px" color="primary">
            {t('A suite of Features Powering BridgeSwap')}
          </Heading>
          <FeatsGrid>
            <Card p="15px">
              <Heading as="h5" mb="10px" color="text">
                {t('Trade')}
              </Heading>
              <Text small fontSize='12px' color="text">
                {t('Instantly swap crypto tokens: NO registration or account needed.')}
              </Text>
              <FeatBtn variant="secondary" scale="sm">
                <Link external href='https://dex.bridgeswap.app/#/swap' color='text'>Enter exchange</Link>
              </FeatBtn>
            </Card>

            <Card p="15px">
              <Heading as="h5" mb="10px" color="text">
                {t('Farms')}
              </Heading>
              <Text fontSize='12px' color="text">
                {t('Provide liqudity to earn yield.')}
              </Text>
              <FeatBtn variant="secondary" scale="sm">
                <Link href='https://dex.bridgeswap.app/#/pool' color='text'>Add liquidity</Link>
              </FeatBtn>
            </Card>

            <Card p="15px">
              <Heading as="h3" mb="12px" color="text">
                {t('Pools')}
              </Heading>
              <Text small fontSize='12px' color="text">
                {t('Stake tokens, earn passive inome with crypto.')}
              </Text>
              <FeatBtn variant="secondary" scale="sm">
                <ReactLink to='/pools' color='text'>Enter pools</ReactLink>
              </FeatBtn>
            </Card>

            <Card p="15px">
              <Heading as="h5" mb="10px" color="text">
                {t('Defi 2.0 Zap')}
              </Heading>
              <Text small fontSize='12px' color="text">
                {t('Swap LPs to receive discounted BRIS tokens.')}
              </Text>
              <FeatBtn variant="secondary" scale="sm">
                <ReactLink to='/defi' color='text'>Swap now</ReactLink>
              </FeatBtn>
            </Card>

            <Card p="15px">
              <Heading as="h5" mb="10px" color="text">
                {t('Lottery')}
              </Heading>
              <Text small fontSize='12px' color="text">
                {t('Provably fair, on-chain game. WIN BIG!!!')}
              </Text>
              <FeatBtn variant="secondary" scale="sm">
                <ReactLink to='/lottery'>Play now</ReactLink>
              </FeatBtn>
            </Card>

            <Card p="15px" style={{background: "linear-gradient(155.08deg, #FA00FF -35.34%, #17D2FB 134.08%)"}}>
              <Heading as="h5" mb="10px" color="text">
                {t('Referral Program')}
              </Heading>
              <Text small fontSize='12px' color="text">
                {t('Share your referral link, invite your fiend and earn 10% of their yields FOREVER!')}
              </Text>
              <Button variant="primary" scale="sm" style={{margin: "20px 0px"}}>Invite friends</Button>
            </Card>
            
          </FeatsGrid>
        </BridgeBoard>

        <BridgeBoard>
          <Heading as="h5" mb="10px" color="text">
            {t('Top performers')}
          </Heading>
          <FeatsGrid>
            <Card style={{width: "100%", border: "20x solid white"}}>
              <Heading as="h5" pt="12px" mb="10px" color="text">
                {t('Pools')}
              </Heading>
              <PerformersFlex>
                <Performer>
                  <TopSymbol>
                    <img width="40px" height="40px" src="/images/farms/ada-bnb.svg" alt="Pools coming soon" />
                    <Text ml="5px" small fontSize='12px' color="text">
                      {t('BNB')}
                    </Text>
                  </TopSymbol>
                  <TopAPR>
                    <Text mr="5px">
                      APR:
                    </Text>
                    <Text color="text">
                      171.7%
                    </Text>
                  </TopAPR>
                </Performer>
              </PerformersFlex>
            </Card>
            <Card style={{width: "100%", border: "20x solid white"}}>
              <Heading as="h5" pt="12px" mb="10px" color="text">
                {t('Farms')}
              </Heading>
              <PerformersFlex>
                <Performer>
                  <TopSymbol>
                    <img width="40px" height="40px" src="/images/farms/alice-bnb.svg" alt="Pools coming soon"/>
                    <Text ml="5px" small fontSize='12px' color="text">
                      {t('ADA-BNB')}
                    </Text>
                  </TopSymbol>
                  <TopAPR>
                    <Text mr="5px">
                      APR:
                    </Text>
                    <Text color="text">
                      171.7%
                    </Text>
                  </TopAPR>
                </Performer>
              </PerformersFlex>
            
            </Card> 
          </FeatsGrid>
          {/* <FarmStakingCard /> */}
          {/* <LotteryCard /> */}
        </BridgeBoard>
        {/* <CTACards>
          <EarnAPRCard />
          <EarnAssetCard />
          <WinCard />
        </CTACards> */}
        {/* <Cards>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards> */}

        <StatsValue>
          <BridgeLottery>
            <Text fontSize="12px" mb="15px" color="text">
              {t("The BridgeSwap Lottery")}
            </Text><Text fontWeight="700" mb="15px" fontSize="42px">
              {t("Win $300000")}
            </Text>
            <Text fontSize="12px" mb="22px" color="text">
              {t("in prizes")}
            </Text>
            <Button variant="primary" scale="sm" style={{margin: "10px auto", width: "200px"}}>Buy tickets</Button>
          </BridgeLottery>
          <StatsFigures>
            <CakeStats/>
            <TotalValueLockedCard />
          </StatsFigures>
        </StatsValue>

        <BridgeBoard style={{ marginTop: "20px" }}>
          <Heading as="h5" pt="12px" mb="30px" color="blue">
            {t('BridgeSwap Partners')}
          </Heading>
              <Partners>
                {
                  partners.map((partner) => <Partner>{partner.name}</Partner>)
                }
              </Partners>
        </BridgeBoard>
      </div>
    </Page>
  )
}

export default Home
