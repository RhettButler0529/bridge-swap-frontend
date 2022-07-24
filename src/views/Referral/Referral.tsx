import React, { useState } from 'react'
import styled from 'styled-components'
import { Text, Button, Flex, useWalletModal } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import { useWeb3React } from '@web3-react/core'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import useAuth from 'hooks/useAuth'
import { useTotalReferrals, useTotalCommissions } from 'hooks/useReferral'
import HowToParticipate from './components/HowToParticipate'
import Faq from './components/FAQ'


const InviteFriends = styled.div`
  border-radius: 20px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: #0F0F71;
  background-image: url(/images/decorations/lottery-prize-bg.svg);
  background-position: right top;
  background-repeat: no-repeat;
  text-align: center;
  position: relative;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 5% 29% 9% 29%;
    margin-bottom: 15px;
  }
`

const Speaker = styled.div`
  // display: flex;
  // justify-content: space-between;
`

const SpeakerImg1 = styled.img`
  position: absolute;
  bottom: -24px;
  left: -15px;
  transform: scaleX(-1);
`

const SpeakerImg2 = styled.img`
  position: absolute;
  bottom: -24px;
  right: -15px;
`

const ReferralLink = styled.div`
    border-radius: 20px;
    background: linear-gradient(245.94deg, rgba(8, 8, 56, 0.2) -63.8%, rgba(17, 17, 139, 0.2) 73.44%);
    // text-align: center;
    margin-bottom: 10px;

    ${({ theme }) => theme.mediaQueries.sm} {
        padding: 40px;
    }
`

const ReferralPad = styled(Flex)`
    flex-direction: column;
    justify-content: stretch;
    // align-items: center;
    width: 100%;

    ${({ theme }) => theme.mediaQueries.sm} {
        flex-direction: row;
    }
`

const ReferralStatus = styled.div`
    background: linear-gradient(245.94deg, rgba(8, 8, 56, 0.2) -63.8%, rgba(17, 17, 139, 0.2) 73.44%);
    border-radius: 30px;
    flex: 0 0 100%;
    width: 100%;
    margin-right: 80px;
    display: grid;
    grid-template-columns: 80px auto;

    ${({ theme }) => theme.mediaQueries.sm} {
        margin-bottom: 0px;
        padding: 40px 30px;
        flex: 0 0 40%;
    }
`

const ReferralIcon = styled.div`
    border-radius: 50%;
    width: 55px;
    height: 55px;
    text-align: center;
    padding: 7px;
    background-color: black;
`

const Title = styled(Flex)`
    justify-content: center;
    flex-direction: column;
    // text-align: center;
    
    ${({ theme }) => theme.mediaQueries.sm} {
        // justify-content: space-between;
        flex-direction: row;
    }
`

const LinkPad = styled.div`
    background: #143771;
    border-radius: 7px;
    // flex: 0 0 100%;
    width: 100%;
    margin-right: 11px;
    margin-top: 10px;
    margin-bottom: 50px;
    height: 50px;

    ${({ theme }) => theme.mediaQueries.sm} {
        // margin-bottom: 0px;
        padding: 10px 0 10px 15px;
        flex: 0 0 40%;
    }
`

const ConnectWallet = styled.div`
    width: 100%;
    margin-right: 11px;
    margin-top: 10px;
    margin-bottom: 50px;
    height: 50px;

    ${({ theme }) => theme.mediaQueries.sm} {
        // margin-bottom: 0px;
        padding: 10px 0 10px 15px;
        flex: 0 0 40%;
    }
`

const Tooltip = styled.div<{ isTooltipDisplayed: boolean }>`
  visibility: ${({ isTooltipDisplayed }) => (isTooltipDisplayed ? "block" : "hidden")};
  bottom: -22px;
  right: 0;
  left: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.invertedContrast};
  border-radius: 16px;
  opacity: 0.7;
  padding-top: 6px;
`;

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


const Referral: React.FC = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);
  const referLink = `https://bridgeswap.app?ref=`

  const totalReferrals = useTotalReferrals()
  const totalCommissions = useTotalCommissions()


  return (
    <Page>
      <InviteFriends>
        <Title>
          <Text fontSize='35px' mb="-12px" color='text'>{t('Invite Your Friends.')}</Text>
        </Title>
        <Title>
          <Text fontSize='35px' mb="3px" color='text'>{t('Earn Cryptocurrency Together.')}</Text>
        </Title>
        <br />
        <Text fontSize='20px' color="white">{t('Share the referral link below to invite your friends and earn 10% of their earnings forever.')}</Text>
        <Speaker>
          <SpeakerImg1 src='/images/decorations/speakeropo.svg' alt="speaker" width="18%" height="18%" />
          <SpeakerImg2 src='/images/decorations/speakeropo.svg' alt="speaker" width="18%" height="18%" />
        </Speaker>
      </InviteFriends>
      <div>
        <ReferralLink>
          <ReferralPad>
            <ReferralStatus>
              <ReferralIcon>
                <img src="/images/Referral-icon.svg" alt="referralIcon" width="40px" height="40px"/>
              </ReferralIcon>
              <div>
                <Text mb="2px" color='textSubtle'>
                  {t("Total Referrals")}
                </Text>
                <Text fontSize='25px' mb="37px" color='white'>
                  {t(`${totalReferrals}`)}
                </Text>
              </div>
              <ReferralIcon>
                <img src="/images/pools/bris-bris.svg" alt="referralIcon" width="40px" height="40px"/>
              </ReferralIcon>
              <div>
                <Text mb="2px" color='textSubtle'>
                  {t("Total Commissions")}
                </Text>
                <Text fontSize='25px' mb="17px" color='white'>
                  {t(`${totalCommissions} BRIS`)}
                </Text>
              </div>
            </ReferralStatus>
            
            <div>
              <Text fontSize='25px' color='text'>My Referral link</Text>
              {!account ? (
                <ConnectWallet>
                  <Button className="connectButton" onClick={onPresentConnectModal}>
                    {t('Connect Wallet')}
                  </Button>
                </ConnectWallet>
              ) : (
                <LinkPad>
                  <Flex>
                    <Text fontSize='19px' color='white'>
                      {`${referLink}${account.slice(0, 4)}...${account.slice(-4)}`}
                    </Text>
                    <ContentCopyIcon style={{color: 'white', fontSize: '22px', margin: '4px 7px'}} onClick={() => {
                      if (navigator.clipboard) {
                        navigator.clipboard.writeText(`${referLink}${account}`);
                        setIsTooltipDisplayed(true);
                        setTimeout(() => {
                          setIsTooltipDisplayed(false);
                        }, 1000);
                      }
                    }} />
                    <Tooltip isTooltipDisplayed={isTooltipDisplayed} style={{ width: "70px", left: "-15px" }}>Copied</Tooltip>
                  </Flex>
                </LinkPad>
              )}
              <Button variant="primary" scale="md" style={{margin: "10px auto", width: "200px", borderRadius: "30px", backgroundColor: "#00A478"}}>Withdraw Earnings</Button>
            </div>
          </ReferralPad>
        </ReferralLink>
        <HowToParticipate />
        <Faq />
      </div>
    </Page>
  )
}

export default Referral
