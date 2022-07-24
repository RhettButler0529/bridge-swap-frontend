import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  // const tvl = data ? data.tvl.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null
  const tvl = 0

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading color="text" scale="md" mb="24px">
          {t('Total Value Locked (TVL)')}
        </Heading>
        {data ? (
          <>
            <Heading color="text" scale="md">{`$${tvl}`}</Heading>
            <Text color="text">{t('Across all farms and pools')}</Text>
          </>
        ) : (
          <Skeleton height={66} />
        )}
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
