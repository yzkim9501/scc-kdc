import React, { useState } from "react";
import HexagonGraph from "./HexagonGraph";
import * as S from "../styles/CommonStyles";

const weeklyContent = [
  {
    week: 1,
    title: "클라이언트 >> 앱 화면을 그려내는 것",
    content: [
      "Flutterflow 이해하고 훑어보기",
      "위젯 이해하고 만들기",
      "Column과 Row 알아보고 실습하기",
      "컨테이너 이해하고 실습하기",
      "스택 이해하고 실습하기",
    ],
  },
  {
    week: 2,
    title: "서버 >> 데이터 & 클라이언트/서버 간 상호작용",
    content: [
      "FAB와 Drawer 이해하기",
      "서버 세팅 및 로그인/회원가입 레이아웃 만들기",
      "나만의 데이터 만들기",
      "문서 실습하기",
    ],
  },
  {
    week: 3,
    title: "Flutterflow 심화",
    content: [
      "Flutterflow에서 특히 많이 쓰이는 조건문 이해하기",
      "앱 제작 필수요소인 애니메이션 배우기",
      "중복을 줄이기 위한 변수(Parameter)배우기",
      "오버 플로우나 플렉서블, 컨포넌트 등 심화 레이아웃 다루기",
    ],
  },
  {
    week: 4,
    title: "ChatGPT와 Flutterflow의 연동법",
    content: [
      "API와 JSON의 개념",
      "ChatGPT API 연동 방법",
      "state variables (변수)",
    ],
  },
  {
    week: 5,
    title: "수익화 및 배포",
    content: [
      "수익화를 위한 광고 설정",
      "웹 배포와 앱스토어, 구글 플레이의 배포",
      "구글 로그인, 애플 로그인을 구현",
    ],
  },
];

function NoCodeAIApp() {
  const [openWeeks, setOpenWeeks] = useState({});

  const toggleWeek = (week) => {
    setOpenWeeks((prev) => ({ ...prev, [week]: !prev[week] }));
  };

  return (
    <S.Container>
      <S.Title>노코드로 수익형 AI 앱만들기</S.Title>

      <S.Section>
        <S.SectionTitle>과목 요약</S.SectionTitle>
        <S.Content>
          <S.SubTitle>강의 한 줄 설명</S.SubTitle>
          <S.List>
            <S.ListItem>
              코드(코딩)없이 AI 앱을 만들어서 배포하여 수익화까지 해볼 수 있는
              강의
            </S.ListItem>
            <S.ListItem>학습량: 주 2시간</S.ListItem>
            <S.ListItem>총 강의 수: 35개</S.ListItem>
            <S.ListItem>총 플레이 타임: 7시간 3분</S.ListItem>
            <S.ListItem>
              난이도: 하 (코딩을 배워본 적이 없어도 수강 가능)
            </S.ListItem>
          </S.List>
          <S.SubTitle>Flutterflow란?</S.SubTitle>
          <S.List>
            <S.ListItem>
              FlutterFlow는 코딩을 잘 모르더라도 모바일 앱을 쉽게 만들 수 있게
              도와주는 도구예요!
            </S.ListItem>
            <S.ListItem>
              마치 레고 블록을 조립하듯이 다양한 기능을 화면에 드래그 앤
              드롭(끌어서 놓기)하면서 앱을 쉽게 만들 수 있어요!
            </S.ListItem>
          </S.List>
        </S.Content>
      </S.Section>

      <S.Section>
        <S.SectionTitle>세일즈</S.SectionTitle>
        <S.Content>
          <S.SubTitle>추천 고객</S.SubTitle>
          <S.List>
            <S.ListItem>
              코딩 학습 없이 빠르게 AI서비스 앱을 만들어 보고 싶은 분
            </S.ListItem>
            <S.ListItem>
              AI는 학습 시키는 과정이 필요한데, 처음부터 그 학습이 적용되어 있는
              상태로, 나에게 최적화된 GPT 같은 AI 서비스(앱)을 만들고 싶은 분들
            </S.ListItem>
          </S.List>
          <S.SubTitle>선수과목</S.SubTitle>
          <S.List>
            <S.ListItem>없음</S.ListItem>
          </S.List>
          <S.SubTitle>누적 수강생</S.SubTitle>
          <S.List>
            <S.ListItem>전체 기준: 56명</S.ListItem>
          </S.List>
          <S.SubTitle>밸런스표</S.SubTitle>
          <HexagonGraph
            data={[
              { label: "의사결정", value: 2 },
              { label: "업무효율", value: 1 },
              { label: "문제해결", value: 3 },
              { label: "수입창출", value: 5 },
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
            <S.ListItem>FlutterFlow</S.ListItem>
            <S.ListItem>ChatGPT 4o</S.ListItem>
          </S.List>
          <S.SubTitle>실습 환경</S.SubTitle>
          <S.List>
            <S.ListItem>FlutterFlow</S.ListItem>
            <S.ListItem>Firebase</S.ListItem>
            <S.ListItem>ChatGPT 4o</S.ListItem>
            <S.ListItem>Google AdMob (애드몹)</S.ListItem>
          </S.List>
          <S.SubTitle>구현하는 기능</S.SubTitle>
          <S.List>
            <S.ListItem>
              이론:
              <ul>
                <li>Flutter 기초</li>
                <li>Flutter를 통한 앱 레이아웃 제작</li>
                <li>AI 연동 익히기</li>
                <li>앱 배포</li>
              </ul>
            </S.ListItem>
            <S.ListItem>
              실제 구현 기능:
              <ul>
                <li>
                  Flutterflow 기본 사용 방법을 익히고 나만의 앱을 만드는 방법을
                  익히기
                </li>
                <li>Flutterflow에 서버와 ChatGPT API를 연동하기</li>
                <li>제작한 앱의 수익화 방법에 대해 배우고, 스토어에 배포</li>
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
                {week}주차
              </S.WeekToggle>
              {openWeeks[week] && (
                <S.List>
                  <S.ListItem>{title}</S.ListItem>
                  {content.map((item, index) => (
                    <S.ListItem key={index}>{item}</S.ListItem>
                  ))}
                </S.List>
              )}
            </div>
          ))}
          <S.SubTitle>결과물</S.SubTitle>
          <S.List>
            <S.ListItem>엑셀 수식 자동 생성 AI 앱 1개</S.ListItem>
          </S.List>
          <S.SubTitle>로드맵</S.SubTitle>
          <S.List>
            <S.ListItem>
              수익형이 하고싶으면 → 노코드로 웹사이트 만들기
            </S.ListItem>
            <S.ListItem>앱이 하고싶으면 → kotlin / 앱종</S.ListItem>
          </S.List>
        </S.Content>
      </S.Section>
    </S.Container>
  );
}

export default NoCodeAIApp;
