import React, { useState } from "react";
import HexagonGraph from "./HexagonGraph";
import * as S from "../styles/CommonStyles";

const colors = {
  primary: "#E8344E",
  secondary: "#F05365",
  tertiary: "#D62839",
  quaternary: "#FF6B6B",
  quinary: "#C1292E",
};

const weeklyContent = [
  {
    week: 1,
    title: "데이터 조회하기",
    content: [
      "SQL 데이터 조회 및 필요한 항목 뽑아서 사용하기",
      "조건에 맞게 데이터 필터링하기",
      "필터링을 할 때 유용한 표현 알아보기",
      "여러 개의 조건으로 필터링하기",
    ],
  },
  {
    week: 2,
    title: "데이터 계산하기",
    content: [
      "엑셀 대신 SQL로 한번에 계산하기",
      "GROUP BY로 범주별 연산 한 번에 끝내기",
      "결과를 정렬하여 업무에 바로 사용하기",
      "SQL 구조 마스터하기",
    ],
  },
  {
    week: 3,
    title: "데이터 가공하기",
    content: [
      "업무 필요한 문자 포맷이 다를 때, SQL로 가공하기",
      "조건에 따라 포맷을 다르게 변경해야할때 사용하는 함수 배우기",
      "[실습] 간단한 User Segmentation 해보기",
      "[실습] 조건문으로 서로 다른 식을 적용한 수수료 구해보기",
      "오류 발생 해결 방법",
    ],
  },
  {
    week: 4,
    title: "데이터 연결하기",
    content: [
      "포맷 변경과 조건문 복습하기",
      "여러번의 연산을 한 번의 SQL 문으로 수행하기",
      "[실습] User Segmentation 와 조건별 수수료를 Subquery 로 결합해보기",
      "[실습] 복잡한 연산을 Subquery 로 수행하기",
      "필요한 데이터가 서로 다른 테이블에 있을 때 조회하기",
    ],
  },
  {
    week: 5,
    title: "SQL로 업무시간 단축하기",
    content: [
      "조회한 데이터에 아무 값이 없을때 처리해주는 방법 배우기",
      "[실습] SQL로 Pivot Table 만들어보기",
      "업무 시작을 단축시켜 주는 마법의 문법 Window Function 배우기",
      "날짜 포맷과 조건까지 SQL로 한 번에 끝내기",
    ],
  },
];

function SQL() {
  const [openWeeks, setOpenWeeks] = useState({});

  const toggleWeek = (week) => {
    setOpenWeeks((prev) => ({ ...prev, [week]: !prev[week] }));
  };

  return (
    <S.Container>
      <S.Title>엑셀보다 쉽고 빠른 SQL</S.Title>

      <S.Section>
        <S.SectionTitle>과목 요약</S.SectionTitle>
        <S.Content>
          <S.SubTitle>강의 한 줄 설명</S.SubTitle>
          <S.List>
            <S.ListItem>
              쿼리 한줄로 필요한 데이터를 추출할 수 있는 SQL 교과서 강의
            </S.ListItem>
            <S.ListItem>학습량: 주 2시간 수강 기준</S.ListItem>
            <S.ListItem>총 강의 수: 5주(34강)</S.ListItem>
            <S.ListItem>총 플레이 타임: 총 5시간 34분</S.ListItem>
            <S.ListItem>난이도: 하(왕초보도 수강 가능)</S.ListItem>
          </S.List>
        </S.Content>
      </S.Section>

      <S.Section>
        <S.SectionTitle>세일즈</S.SectionTitle>
        <S.Content>
          <S.SubTitle>추천 고객</S.SubTitle>
          <S.List>
            <S.ListItem>데이터를 직접 추출하고 다뤄보고 싶은 직장인</S.ListItem>
          </S.List>
          <S.SubTitle>선수과목</S.SubTitle>
          <S.List>
            <S.ListItem>없음</S.ListItem>
          </S.List>
          <S.SubTitle>누적 수강생</S.SubTitle>
          <S.List>
            <S.ListItem>(2024년 기준) 90명</S.ListItem>
          </S.List>
          <S.SubTitle>밸런스표</S.SubTitle>
          <HexagonGraph
            data={[
              { label: "의사결정", value: 5 },
              { label: "업무효율", value: 5 },
              { label: "문제해결", value: 4 },
              { label: "아이디어실현", value: 2 },
              { label: "리서치능력", value: 1 },
              { label: "부수입창출", value: 0 },
            ]}
          />
        </S.Content>
      </S.Section>

      <S.Section>
        <S.SectionTitle>커리큘럼</S.SectionTitle>
        <S.Content>
          <S.SubTitle>사용 프로그램</S.SubTitle>
          <S.List>
            <S.ListItem>DBeaver, MySQL</S.ListItem>
          </S.List>
          <S.SubTitle>실습 환경</S.SubTitle>
          <S.List>
            <S.ListItem>DBeaver</S.ListItem>
          </S.List>
          <S.SubTitle>구현하는 기능</S.SubTitle>
          <S.List>
            <S.ListItem>
              이론:
              <S.List>
                <S.ListItem>특정 데이터만 가져오기</S.ListItem>
                <S.ListItem>데이터 테이블 연결하기</S.ListItem>
                <S.ListItem>다양한 조건을 걸어 데이터 가져오기</S.ListItem>
              </S.List>
            </S.ListItem>
            <S.ListItem>
              실제 구현 기능:
              <S.List>
                <S.ListItem>
                  SQL을 활용하여 데이터 추출 및 간단한 시각화까지 진행
                </S.ListItem>
              </S.List>
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
            <S.ListItem>데이터 추출 방법 및 실습 자료</S.ListItem>
          </S.List>
          <S.SubTitle>로드맵</S.SubTitle>
          <S.List>
            <S.ListItem>
              데이터 추출 후 분석하기 - 실무 ver.) SQL → 데이터분석 종합반
            </S.ListItem>
            <S.ListItem>
              데이터 추출 후 분석하기 - 실생활 ver.) SQL → AI 기반 투자 수익률
              분석 실습을 통한 데이터 분석 역량 키우기
            </S.ListItem>
            <S.ListItem>
              데이터 추출 후 시각화 대시보드 만들기) SQL → GA4와 SQL로 데이터
              마케팅 한번에 끝내기
            </S.ListItem>
            <S.ListItem>데이터 분석가를 꿈꾼다면 → 내배캠</S.ListItem>
          </S.List>
        </S.Content>
      </S.Section>
    </S.Container>
  );
}

export default SQL;
