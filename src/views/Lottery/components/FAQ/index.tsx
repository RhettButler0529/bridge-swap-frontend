import React from 'react'
import { Heading, Text, Flex } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'


const FaqContainer = styled(Flex)`
    border-radius: 20px;
    background: linear-gradient(248.11deg, #14146E 25.22%, #2626BE 122.1%);
    padding: 20px;
    justify-content: center;
    align-items: center;    

    ${({ theme }) => theme.mediaQueries.xs} {
        justify-content: space-between;
        padding: 20px;
    }

    ${({ theme }) => theme.mediaQueries.sm} {
        padding: 20px 80px;
    }
`
const Wordings = styled.div`
    max-width: 200px;
    
    ${({ theme }) => theme.mediaQueries.xs} {
        max-width: 300px;
    }

    ${({ theme }) => theme.mediaQueries.sm} {
        max-width: 400px;
    }
`
const DocsLink = styled.a`

`
const FaqImg = styled.img`
    display: none;
    
    ${({ theme }) => theme.mediaQueries.xs} {
        display: inline;
        height: 80px;
    }

    ${({ theme }) => theme.mediaQueries.sm} {
        height: 150px;
    }
`

const Faq = () => {
    const { t } = useTranslation()
    return (
        <FaqContainer>
            <Wordings>
                <Heading color='text'>{t("Got questions?")}</Heading>
                <Text mb='20px' fontSize='14px' color='text'>{t("Go over our detailed explanation in the docs section.")}</Text>
                <DocsLink href='https://bridgeswap-exchange-1.gitbook.io/bridgeswap/core-products/lottery' target='_blank' rel='noreferrer noopener'>
                    <Text fontSize='14px' color='text'>
                        {t('Go to docs')}
                        &#x2192;
                    </Text>
                </DocsLink>
            </Wordings>
            <FaqImg src='/images/faq-image.svg' alt='faq' />
            
        </FaqContainer>
    )
}

export default Faq
