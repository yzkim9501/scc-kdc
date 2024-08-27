import styled from "styled-components";

export const colors = {
  primary: "#E8344E",
  secondary: "#F05365",
  tertiary: "#D62839",
  quaternary: "#FF6B6B",
  quinary: "#C1292E",
};

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f8f9fa;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${colors.primary};
  margin-bottom: 40px;
  text-align: center;
`;

export const Section = styled.section`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 40px;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${colors.secondary};
  margin-bottom: 20px;
  border-bottom: 2px solid ${colors.secondary};
  padding-bottom: 10px;
`;

export const Content = styled.div`
  font-size: 1rem;
  line-height: 1.6;
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 15px;
  padding-left: 20px;
  position: relative;

  &:before {
    content: "•";
    color: ${colors.tertiary};
    position: absolute;
    left: 0;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1.4rem;
  color: ${colors.quaternary};
  margin-top: 30px;
  margin-bottom: 15px;
`;

export const WeekToggle = styled.h4`
  font-size: 1.2rem;
  color: ${colors.quinary};
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  &:hover {
    color: ${colors.primary};
  }

  &:before {
    content: ${(props) => (props.isOpen ? '"▼"' : '"▶"')};
    margin-right: 10px;
    font-size: 0.8rem;
  }
`;

export const Image = styled.img`
  max-width: 50%;
  height: auto;
  margin-top: 20px;
  border-radius: 8px;
`;
