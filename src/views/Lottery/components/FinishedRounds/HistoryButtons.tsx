import React from 'react'
import styled from 'styled-components'
import { Link, useRouteMatch } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const StyledNav = styled.div`
  margin-bottom: 40px;
`

function HistoryButtons({ activeIndex = 0 }) {
    const { t } = useTranslation()
    const { url, isExact } = useRouteMatch()

    return (
        <StyledNav>
            <ButtonMenu activeIndex={isExact ? activeIndex : 1} scale="sm" variant="primary">
                <ButtonMenuItem id="allhistory-nav-link" to={`${url}`} as={Link}>
                    {t('All History')}
                </ButtonMenuItem>
                <ButtonMenuItem id="myhistory-nav-link" to={`${url}/history`} as={Link}>
                    {t('My History')}
                </ButtonMenuItem>
            </ButtonMenu>
        </StyledNav>
    )
}

export default HistoryButtons
