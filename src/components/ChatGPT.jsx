import React, { useState } from "react";
import HexagonGraph from "./HexagonGraph";
import gpt1Image from "../assets/img/gpt-1.png";
import gpt2Image from "../assets/img/gpt-2.png";
import * as S from "../styles/CommonStyles";
const weeklyContent = [
  {
    week: 1,
    title: "GPT 환경 설명, 프롬프트 엔지니어링 방법",
    content: [
      "오늘 배울 것",
      "ChatGPT란?",
      "ChatGPT 가입하기",
      "ChatGPT와 프롬프트 엔지니어링",
      "실습으로 배우는 프롬프트 엔지니어링",
      "내가 쓰는 ChatGPT만 답답한 이유",
      "1급 비밀 탑클래스 ChatGPT 사용법",
    ],
  },
  {
    week: 2,
    title: "GPT 4o 사용하는 기본 방법",
    content: [
      "이번에 배울 것",
      "ChatGPT 4o란",
      "GPT-4o 구독하기",
      "ChatGPT 기본 사용법",
      "GPT-4o로 최신 정보 활용하기",
      "GPT-4o로 첨부파일 활용하기",
      "GPT-4o로 이미지 생성하기",
      "ChatGPT 맞춤 설정 하기",
      "내 GPT로 나만의 인공지능 만들고 공유하기",
      "다른 사람이 만든 GPT 사용하기",
      "다양한 확장 프로그램 설치하기",
    ],
  },
  {
    week: 3,
    title: "본격적 활용 방법들 (For 직장인)",
    content: [
      "이번에 배울 것",
      "시말서 10초만에 작성하기",
      "보고서 10배 빨리 만들기",
      "PPT 10배 빨리 만들기",
      "비지니스 이메일 만들기",
      "기가 막힌 이벤트 기획하기",
      "엑셀 업무 자동화 하기",
      "클릭 한번으로 대시보드 만들기",
    ],
  },
  {
    week: 4,
    title: "GPT 활용방법 (for 일상생활)",
    content: [
      "이번에 배울 것",
      "영어 공부 시작하기",
      "ChatGPT를 영어 과외 선생님으로 만들기",
      "좋아하는 주제와 ChatGPT로 학습 자료 만들기",
      "소크라테스 프롬프트로 공부하기",
      "ChatGPT 앱으로 실시간 영어 대화하기",
      "ChatGPT로 나만의 패키지 여행 계획하기",
      "ChatGPT로 몸짱되기",
      "ChatGPT로 친근한 리뷰 및 블로그 글 작성해보기",
    ],
  },
  {
    week: 5,
    title: "GPT 활용한 데이터분석",
    content: [
      "이번에 배울 것",
      "데이터 살펴보기",
      "GPT야 데이터 깔끔하게 만들어라",
      "GPT야 알아서 해주렴",
      "ChatGPT로 유저 퍼널 분석하기",
      "ChatGPT로 전월세 분석하기",
      "ChatGPT로 고객 후기 데이터 분석하기",
    ],
  },
  {
    week: 6,
    title: "GPT로 이미지나 시안 등 생성해보기",
    content: [
      "이번에 배울것",
      "이미지 생성 무작정 시작하기",
      "꿀팁 대방출) 이미지를 그럴듯하게 만드는 프롬프트",
      "ChatGPT로 카페 디자인하기 - 로고와 웹 페이지 UI 만들기",
      "ChatGPT로 카페 디자인하기 - 소품과 인테리어 이미지 만들기",
      "내 입맛에 맞는 이미지 만드는 꿀팁!",
      "급하면 이것만! 프롬프트 북!",
    ],
  },
];
function ChatGPT() {
  const [openWeeks, setOpenWeeks] = useState({});

  const toggleWeek = (week) => {
    setOpenWeeks((prev) => ({ ...prev, [week]: !prev[week] }));
  };

  return (
    <S.Container>
      <S.Title>ChatGPT 300% 활용하기</S.Title>

      <S.Section>
        <S.SectionTitle>과목 요약</S.SectionTitle>
        <S.Content>
          <S.SubTitle>강의 한 줄 설명</S.SubTitle>
          <S.List>
            <S.ListItem>
              직장에서도 일상생활에서도 GPT를 활용하세요! 프롬프트
              엔지니어링부터 엑셀 업무자동화, 카페 이미지 시안 등 다양하게
              활용하는 ChatGPT 기초 강의입니다.
            </S.ListItem>
            <S.ListItem>총 강의 수: 6주차 49강</S.ListItem>
            <S.ListItem>총 플레이 타임: 5:32:36</S.ListItem>
            <S.ListItem>학습시간: 주 2시간 내외 권장</S.ListItem>
            <S.ListItem>난이도: 왕초보 (코딩 전혀 몰라도 가능)</S.ListItem>
          </S.List>
        </S.Content>
      </S.Section>

      <S.Section>
        <S.SectionTitle>세일즈</S.SectionTitle>
        <S.Content>
          <S.SubTitle>추천 고객</S.SubTitle>
          <S.List>
            <S.ListItem>
              가장 최신의 ChatGPT-4o 강의가 필요한 모든 분 (유료 결제 필수)
            </S.ListItem>
            <S.ListItem>
              개발지식이 아예 없지만, ChatGPT를 쉽게 배우고 싶은 왕초보
            </S.ListItem>
            <S.ListItem>
              ChatGPT를 사용해 업무 비효율을 개선하고 싶은 직장인
            </S.ListItem>
            <S.ListItem>
              일상 속에 단순한 업무를 GPT를 사용해 빠르게 처리하고 싶은 모든 분
            </S.ListItem>
          </S.List>
          <S.SubTitle>선수과목</S.SubTitle>
          <S.List>
            <S.ListItem>없음</S.ListItem>
          </S.List>
          <S.SubTitle>누적 수강생</S.SubTitle>
          <S.List>
            <S.ListItem>1712명</S.ListItem>
          </S.List>
          <S.SubTitle>밸런스표</S.SubTitle>
          <HexagonGraph
            data={[
              { label: "의사결정", value: 4 },
              { label: "업무효율", value: 5 },
              { label: "문제해결", value: 4 },
              { label: "부수입창출", value: 1 },
              { label: "아이디어실현", value: 4 },
              { label: "리서치능력", value: 5 },
            ]}
          />
        </S.Content>
      </S.Section>

      <S.Section>
        <S.SectionTitle>커리큘럼</S.SectionTitle>
        <S.Content>
          <S.SubTitle>사용 프로그램</S.SubTitle>
          <S.List>
            <S.ListItem>GPT-4o</S.ListItem>
            <S.ListItem>구글 스프레드 시트</S.ListItem>
            <S.ListItem>Gamma (PPT제작 프로그램, AI기반)</S.ListItem>
          </S.List>
          <S.SubTitle>실습 환경</S.SubTitle>
          <S.List>
            <S.ListItem>크롬</S.ListItem>
          </S.List>
          <S.SubTitle>구현하는 기능</S.SubTitle>
          <S.List>
            <S.ListItem>
              프롬프팅 엔지니어링 (프롬프트 잘 쓰는 법)
              <ul>
                <li>시말서, PPT, 보고서</li>
              </ul>
            </S.ListItem>
            <S.ListItem>매출 데이터 대시보드 생성</S.ListItem>
            <S.ListItem>로고, 일러스트 이미지 생성</S.ListItem>
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
            <S.ListItem>카페 로고 디자인</S.ListItem>
            <S.Image src={gpt1Image} alt="카페 로고 디자인" />
            <S.ListItem>데이터 분석한 리포트 생성</S.ListItem>
            <S.Image src={gpt2Image} alt="데이터 분석 리포트" />
          </S.List>
          <S.SubTitle>로드맵</S.SubTitle>
          <S.List>
            <S.ListItem>
              GPT를 활용하여 웹사이트 만들기 → [GPT]웹개발 종합반
            </S.ListItem>
            <S.ListItem>
              GPT를 활용하여 데이터 분석하기 → 데이터분석 종합반
            </S.ListItem>
            <S.ListItem>
              GPT를 활용하여 업무자동화 끝내기 → AI와 노코드로 업무자동화 끝내기
            </S.ListItem>
            <S.ListItem>
              AI에 관심을 가지게 되었다면? → AI가 처음이어도 생성형 AI (단, 해당
              학습 난이도 고려 필요 - 파이썬 할 수 있어야 함)
            </S.ListItem>
          </S.List>
        </S.Content>
      </S.Section>
    </S.Container>
  );
}

export default ChatGPT;
