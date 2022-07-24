import React from 'react'

import { Heading, Text, Button, Image, Card } from '@pancakeswap/uikit'
import styled from 'styled-components'


interface FeatsProps {
    heading: string
    text: string
    btnText: string
    href: string
    bgColor?: string
}

const FeatBtn = styled(Button)`
  color: ${({ theme }) => theme.colors.bright};
  border-color: ${({ theme }) => theme.colors.bright};
  margin: 20px 0px;
`


const Feats: React.FC<FeatsProps> = ({ heading, text, btnText, href, bgColor }) => {
    const btnProps = {
        as: "a",
        variant: "secondary",
        scale: "sm",
        href
    }
    return (
        <Card p="15px">
            <Heading as="h5" mb="10px" color="text">
                {heading}
            </Heading>
            <Text small fontSize='12px' color="text">
                {text}
            </Text>
            {/* <FeatBtn
                {...btnProps}
            >
                <>
                {btnText}
                </>
            </FeatBtn> */}
        </Card>

    )
}

export default Feats
