import { FC, ReactNode } from 'react'
import { Layout as AntdLayout, Row } from 'antd'

import styled from 'styled-components'

const { Content } = AntdLayout

const StyledLayout = styled(AntdLayout)`
  min-height: 100vh;
  background-color: #f6f4eb;
`

const StyledContent = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 40px;
`

type LayoutPropsType = {
  children: ReactNode
}

export const Layout: FC<LayoutPropsType> = ({ children }) => (
  <StyledLayout>
    <StyledContent>
      <Row justify="center" align="middle" gutter={[20, 20]}>
        {children}
      </Row>
    </StyledContent>
  </StyledLayout>
)
