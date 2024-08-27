import React, { useState } from "react";
import HexagonGraph from "./HexagonGraph";
import * as S from "../styles/CommonStyles";

const weeklyContent = [
  {
    week: 1,
    title: "HTML, CSS, Bootstrap",
    content: [
      "HTML, CSS 기초 이해하고 추억앨범 만들기",
      "웹 브라우저 작동 원리에 대해 배우기",
      "HTML과 CSS를 이해하고 사용하기",
      "웹을 쉽게 꾸밀 수 있는 부트스트랩 활용",
    ],
  },
  {
    week: 2,
    title: "Bootstrap, Javascript",
    content: [
      "JavaScript 공부하고 웹사이트 제작해보기",
      "JavaScript 문법에 대해 배우기",
      "JQuery를 활용하여 HTML 조작하기",
      "자바스크립트를 통해 웹을 움직이게 만들기",
      "요청해서 받아온 데이터를 브라우저에 붙여 보여주기",
    ],
  },
  {
    week: 3,
    title: "JQuery, fetch",
    content: [
      "JQuery를 적용해 실습 결과물에 데이터 처리 추가하기",
      "서버와 클라이언트 개념 이해하기",
      "Fetch로 서버 API를 주고 받아보기",
      "JQuery와 Fetch를 이용해 요청을 브라우저에 보여주기",
      "라이브러리를 활용하여 데이터 가져오기",
    ],
  },
  {
    week: 4,
    title: "firebase project 1",
    content: [
      "DB 개념 학습하고 웹��이트에 데이터 넣기",
      "파이어베이스 이해하기",
      "파이어스토어에 데이터를 넣고 가져오기",
      "Firestore Database를 통해 데이터베이스에 데이터 넣고 가져오기",
      "Javascript, Firestore Database, Firebase 활용하기",
    ],
  },
  {
    week: 5,
    title: "firebase project 2, Github, Python",
    content: [
      "내가 만든 웹 사이트 배포하기",
      "Github 배우기",
      "Github pages를 이용하여 배포 진행하기",
      "파이썬 기초 맛보기 (If, For문 & 스크래핑)",
    ],
  },
];

function WebDevelopment() {
  const [openWeeks, setOpenWeeks] = useState({});

  const toggleWeek = (week) => {
    setOpenWeeks((prev) => ({ ...prev, [week]: !prev[week] }));
  };

  return (
    <S.Container>
      <S.Title>[왕초보] 코딩이 처음이어도 쉽게 배우는 웹개발 A to Z</S.Title>

      <S.Section>
        <S.SectionTitle>과목 요약</S.SectionTitle>
        <S.Content>
          <S.SubTitle>강의 한 줄 설명</S.SubTitle>
          <S.List>
            <S.ListItem>웹 개발의 기본 구조를 배울 수 있는 강의</S.ListItem>
            <S.ListItem>
              코딩 경험이 없는데 첫 시작을 해보고 싶은 분들을 위한 입문 강의
            </S.ListItem>
            <S.ListItem>학습량: 주 2시간 (실습포함)</S.ListItem>
            <S.ListItem>총 강의 수: 52</S.ListItem>
            <S.ListItem>총 플레이 타임: 총 4시간 33분</S.ListItem>
            <S.ListItem>난이도: 왕초보 가능</S.ListItem>
          </S.List>
        </S.Content>
      </S.Section>

      <S.Section>
        <S.SectionTitle>세일즈</S.SectionTitle>
        <S.Content>
          <S.SubTitle>추천 고객</S.SubTitle>
          <S.List>
            <S.ListItem>
              코딩을 배워본 적 없거나 기초부터 시작하는 고객
            </S.ListItem>
            <S.ListItem>웹사이트 만들고 싶은 고객</S.ListItem>
          </S.List>
          <S.SubTitle>선수과목</S.SubTitle>
          <S.List>
            <S.ListItem>없음</S.ListItem>
          </S.List>
          <S.SubTitle>누적 수강생</S.SubTitle>
          <S.List>
            <S.ListItem>640명 (올해)</S.ListItem>
            <S.ListItem>1326명 (총합)</S.ListItem>
          </S.List>
          <S.SubTitle>밸런스표</S.SubTitle>
          <HexagonGraph
            data={[
              { label: "의사결정", value: 1 },
              { label: "업무효율", value: 2 },
              { label: "문제해결", value: 4 },
              { label: "부수입창출", value: 5 },
              { label: "아이디어실현", value: 5 },
              { label: "리서치능력", value: 1 },
            ]}
          />
        </S.Content>
      </S.Section>

      <S.Section>
        <S.SectionTitle>커리큘럼</S.SectionTitle>
        <S.Content>
          <S.SubTitle>사용 프로그램</S.SubTitle>
          <S.List>
            <S.ListItem>github</S.ListItem>
            <S.ListItem>firebase</S.ListItem>
            <S.ListItem>vscode</S.ListItem>
          </S.List>
          <S.SubTitle>구현하는 기능</S.SubTitle>
          <S.List>
            <S.ListItem>
              이론:
              <ul>
                <li>JQuery</li>
                <li>Fetch</li>
                <li>웹사이트 배포</li>
                <li>Javascript 기초문법</li>
                <li>부트스트랩</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </S.ListItem>
            <S.ListItem>
              실제 구현 기능:
              <ul>
                <li>
                  HTML이랑 CSS로 로그인 페이지 구현하기 (프론트 뼈대 구현)
                </li>
                <li>페이지에 구글 폰트와 부트스트랩 적용하기</li>
                <li>Javascript로 alert 띄우기</li>
                <li>Javascript로 HTML 조작하기</li>
                <li>JQuery와 Fetch를 이용해 브라우저에 요청하기</li>
                <li>라이브러리 활용하여 데이터를 가져오기</li>
                <li>firebase에 데이터를 넣고 가져오기</li>
                <li>Github pages를 이용하여 배포하기</li>
              </ul>
            </S.ListItem>
          </S.List>
          <S.SubTitle>주차별 상세</S.SubTitle>
          {weeklyContent.map(({ week, title, content }) => (
            <div key={week}>
              <S.WeekToggle
                onClick={() => toggleWeek(week)}
                isOpen={openWeeks[week]}
              >
                {week}주차: {title}
              </S.WeekToggle>
              {openWeeks[week] && (
                <S.List>
                  {content.map((item, index) => (
                    <S.ListItem key={index}>{item}</S.ListItem>
                  ))}
                </S.List>
              )}
            </div>
          ))}
          <S.SubTitle>결과물</S.SubTitle>
          <S.List>
            <S.ListItem>
              웹사이트(포토앨범, 넷플릭스, MBTI 테스트, 냉장고 파먹기 등)
            </S.ListItem>
          </S.List>
          <S.SubTitle>로드맵</S.SubTitle>
          <S.List>
            <S.ListItem>
              가장 기초 강의 수강하신 것이라, 이후 관심있는 분야 수강하시도록
              안내
            </S.ListItem>
            <S.ListItem>웹개발자가 되고 싶다면? 내배캠</S.ListItem>
          </S.List>
        </S.Content>
      </S.Section>
    </S.Container>
  );
}

export default WebDevelopment;
