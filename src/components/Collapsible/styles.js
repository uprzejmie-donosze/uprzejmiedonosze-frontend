import styled from 'styled-components';
import { colors } from '../../styles/variables';
import mediaMin, { breakpoints } from '../../styles/mediaQueries';

export const Collapsible = styled.article`
  border-radius: 5px;
  background: ${colors.white};

  & + & {
    margin-top: 1rem;
  }
`;

Collapsible.Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
  padding: 1rem;
  font-weight: 600;
  color: ${colors.text};
  cursor: pointer;
`;

Collapsible.Body = styled.main`
  height: 0;
  overflow: hidden;
  transition: height .2s cubic-bezier(0.23, 0.92, 0.55, 1.08);
`;

Collapsible.Content = styled.div`
  border-top: 1px solid ${colors.background};
  padding: 1rem;
`;

Collapsible.Button = styled.button`
  ${mediaMin(breakpoints.sm)} {
    margin-left: auto;
  }
`;

Collapsible.Actions = styled.div`
  padding: 1rem 0;
`;

Collapsible.Text = styled.p`
  margin: 0;
  padding: .5rem 1rem .5rem 0;
`;

Collapsible.Status = styled.span`
  padding: .3rem .6rem;
  font-size: .7rem;
  border: 1px solid;
  border-radius: 30px;
`;

Collapsible.StatusGray = styled(Collapsible.Status)`
  color: ${colors.silver};
  background: ${colors.silverLight};
  border-color: ${colors.silver};
`;

Collapsible.StatusGreen = styled(Collapsible.Status)`
  color: ${colors.green};
  background: ${colors.greenLight};
  border-color: ${colors.green};
`;

Collapsible.StatusYellow = styled(Collapsible.Status)`
  color: ${colors.yellow};
  background: ${colors.yellowLight};
  border-color: ${colors.yellow};
`;

Collapsible.StatusRed = styled(Collapsible.Status)`
  color: ${colors.error};
  background: ${colors.errorLight};
  border-color: ${colors.error};
`;

Collapsible.StatusBlue = styled(Collapsible.Status)`
  color: ${colors.blue};
  background: ${colors.blueLight};
  border-color: ${colors.blue};
`;
