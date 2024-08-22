import React from "react";
import styled from "styled-components";

const CourseWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const CourseTitle = styled.h1`
  color: #333;
  font-size: 2.5em;
`;

const CourseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const CourseDescription = styled.p`
  margin-bottom: 20px;
`;

const CourseContent = styled.div`
  margin-top: 20px;
`;

const CourseContentTitle = styled.h2`
  margin-bottom: 10px;
`;

const CourseContentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CourseContentItem = styled.li`
  margin-bottom: 10px;
`;

function CourseDetail({ course }) {
  return (
    <CourseWrapper>
      <CourseTitle>{course.title}</CourseTitle>
      <CourseDescription>{course.description}</CourseDescription>
      <CourseInfo>
        <span>난이도: {course.difficulty}</span>
        <span>기간: {course.duration}</span>
      </CourseInfo>
      <CourseContent>
        <CourseContentTitle>커리큘럼</CourseContentTitle>
        <CourseContentList>
          {course.curriculum.map((item, index) => (
            <CourseContentItem key={index}>{item}</CourseContentItem>
          ))}
        </CourseContentList>
      </CourseContent>
    </CourseWrapper>
  );
}

export default CourseDetail;
