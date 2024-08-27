import React, { useState } from "react";
import HexagonGraph from "./HexagonGraph";
import * as S from "../styles/CommonStyles";

const weeklyContent = [
  {
    week: 1,
    title: "데이터 마케팅 프로세스 이해하기",
    content: [
      "데이터 마케팅 개념",
      "데이터 마케팅 실행 프로세스",
      "데이터 마케팅 실습 및 솔루션 파악",
    ],
  },
  {
    week: 2,
    title: "GA4 활용하기",
    content: [
      "구글 애널리틱스 기본 개념 이해",
      "경로별 성과, 페이지, 상품 분석",
      "고객 특성 분석 등",
    ],
  },
  {
    week: 3,
    title: "루커 스튜디오로 시각화 대시보드 만들기",
    content: [
      "구글 애널리틱스 연결한 기본 대시보드 제작",
      "세일즈 데이터 연결한 분석 보고서 제작",
      "유저 데이터를 활용한 판매 현황 분석",
      "최종 완성된 시각화 대시보드 공유",
    ],
  },
  {
    week: 4,
    title: "내가 원하는 데이터를 뽑아서 사용하기",
    content: [
      "구글 클라우드 플랫폼 빅쿼리 접속",
      "웨어하우스 (데이터 저장소) 만들기",
      "루커 스튜디오와 연결해 데이터 시각화하기",
      "SQL 익히기 및 SQL 활용한 데이터 추출",
    ],
  },
];

function DataMarketing() {
  const [openWeeks, setOpenWeeks] = useState({});

  const toggleWeek = (week) => {
    setOpenWeeks((prev) => ({ ...prev, [week]: !prev[week] }));
  };

  return (
    <S.Container>
      <S.Title>GA4와 SQL로 데이터마케팅 한번에 끝내기</S.Title>

      <S.Section>
        <S.SectionTitle>과목 요약</S.SectionTitle>
        <S.Content>
          <S.SubTitle>강의 한 줄 설명</S.SubTitle>
          <S.List>
            <S.ListItem>
              데이터 분석을 통한 마케팅 (고객 니즈) 방법 찾기
            </S.ListItem>
            <S.ListItem>
              학습량: 주 1회 1시간 30분 수강시 → 4주 완강 가능
            </S.ListItem>
            <S.ListItem>총 강의 수: 4주차, 28강</S.ListItem>
            <S.ListItem>총 플레이 타임: 약 4시간 30분</S.ListItem>
            <S.ListItem>난이도: 하 (왕초보 수강 가능)</S.ListItem>
          </S.List>
        </S.Content>
      </S.Section>

      <S.Section>
        <S.SectionTitle>세일즈</S.SectionTitle>
        <S.Content>
          <S.SubTitle>추천 고객</S.SubTitle>
          <S.List>
            <S.ListItem>
              고객의 니즈를 추상적 OR 감으로 파악하는 것이 아닌, 정확한 데이터로
              확인하고 싶은 사람
            </S.ListItem>
            <S.ListItem>현직 마케터</S.ListItem>
            <S.ListItem>
              데이터분석을 통해 시각화 (대시보드 제작) or 가설 검증을 하고 싶은
              사람
            </S.ListItem>
            <S.ListItem>GA4 활용법을 배우고 싶은 사람</S.ListItem>
          </S.List>
          <S.SubTitle>선수과목</S.SubTitle>
          <S.List>
            <S.ListItem>없음</S.ListItem>
          </S.List>
          <S.SubTitle>누적 수강생</S.SubTitle>
          <S.List>
            <S.ListItem>68명</S.ListItem>
          </S.List>
          <S.SubTitle>밸런스표</S.SubTitle>
          <HexagonGraph
            data={[
              { label: "의사결정", value: 5 },
              { label: "업무효율", value: 4 },
              { label: "문제해결", value: 4 },
              { label: "부수입창출", value: 2 },
              { label: "아이디어실현", value: 2 },
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
            <S.ListItem>GA4</S.ListItem>
            <S.ListItem>루커 스튜디오</S.ListItem>
          </S.List>
          <S.SubTitle>실습 환경</S.SubTitle>
          <S.List>
            <S.ListItem>구글 애널리틱스</S.ListItem>
            <S.ListItem>루커 스튜디오</S.ListItem>
          </S.List>
          <S.SubTitle>구현하는 기능</S.SubTitle>
          <S.List>
            <S.ListItem>
              이론:
              <ul>
                <li>구글 애널리틱스 활용법</li>
                <li>루커 스튜디오 활용법</li>
                <li>빅쿼리 활용법</li>
                <li>SQL 활용 및 데이터 추출법</li>
              </ul>
            </S.ListItem>
            <S.ListItem>
              실제 구현 기능:
              <ul>
                <li>GA4로 상황별 필요한 데이터 확인</li>
                <li>데이터 보고서 제작 및 시각화</li>
                <li>SQL로 다양한 데이터 확인 및 추출</li>
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
            <S.ListItem>
              시각화 된 데이터 대시보드 3개 (구글 애널리틱스 & 루커 스튜디오
              활용)
            </S.ListItem>
            <S.ListItem>나만의 저장소 (웨어 하우스)</S.ListItem>
            <S.ListItem>
              빅쿼리에 저장된 데이터 SQL 활용 → 가공 및 추출
            </S.ListItem>
          </S.List>
          <S.SubTitle>로드맵</S.SubTitle>
          <S.List>
            <S.ListItem>
              SQL 학습 더 하고 싶다면 → 엑셀보다 쉽고 빠른 SQL 강의
            </S.ListItem>
            <S.ListItem>
              자격증이 따고 싶다면 → SQLD / ADsP 격파르타 자격증 + 빅데이터 분석
              기사 자격증
            </S.ListItem>
          </S.List>
        </S.Content>
      </S.Section>
    </S.Container>
  );
}

export default DataMarketing;
