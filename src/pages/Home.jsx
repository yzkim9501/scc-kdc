import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  text-align: center;
  padding: 50px 0;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const Title = styled.h1`
  color: #e8344e;
  font-size: 2.5rem;
  margin-bottom: 30px;
`;

const CourseList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const CourseCard = styled(Link)`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-decoration: none;
  color: #333;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const CourseTitle = styled.h2`
  color: #e8344e;
  font-size: 1.5rem;
  margin-bottom: 10px;
  transition: color 0.3s ease, font-weight 0.3s ease;
`;

const CourseDescription = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  ${CourseCard}:hover & {
    color: #c1292e;
    font-weight: bold;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Title>스파르타코딩클럽 KDC 강의 브로셔</Title>
      <CourseList>
        <CourseCard to="/algorithm">
          <CourseTitle>실무에 바로 쓰이는 알고리즘 by Python</CourseTitle>
          <CourseDescription>
            파이썬을 사용하여 실무에서 활용 가능한 알고리즘을 배워보세요.
          </CourseDescription>
        </CourseCard>
        <CourseCard to="/nocode-ai-app">
          <CourseTitle>노코드로 수익형 AI 앱만들기</CourseTitle>
          <CourseDescription>
            코딩 없이 AI 앱을 만들어 배포하고 수익화까지 해보세요.
          </CourseDescription>
        </CourseCard>
      </CourseList>
    </HomeContainer>
  );
}

export default Home;
