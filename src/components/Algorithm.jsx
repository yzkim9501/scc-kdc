import React, { useState } from "react";
import HexagonGraph from "./HexagonGraph";
import * as S from "../styles/CommonStyles";

// 색상 변형 추가
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
    title: "파이썬 기초 및 알고리즘 기초 이론",
    content: [
      "파이썬 기초 학습",
      "파이썬 패키지 사용해보기",
      "알고리즘 기초 살펴보기",
      "시공간 복잡도",
    ],
  },
  {
    week: 2,
    title: "연결 리스트, 스택, 큐, 해시테이블, 힙 직접 구현 및 연관 문제 풀이",
    content: [
      "연결리스트 구현 및 문제 풀이",
      "스택 큐 구현 및 문제풀이",
      "팰린드롬 연결리스트 문제 풀이",
      "스택 구현",
      " 구현 및 문제풀이",
      "해시테이블",
      "해시함수",
      "충돌",
      "테이블 구현",
      "트리",
      "완전 이진 트리",
      "최대 힙 - 삽입",
      "삽입 알고리즘",
      "삽입 시간 복잡도",
      "최대 힙 삽입 구현",
      "최대 힙 - 추출",
      "추출 알고리즘",
      "추출 시간 복잡도",
      "최대 힙 구현",
    ],
  },
  {
    week: 3,
    title: "그래프 학습 및 탐색 위한 DFS, BFS, 알고리즘 및 이진 탐색 학습",
    content: [
      "그래프",
      "DFS 개념  구현, 문제",
      "BFS 개념 및 구현, 문제",
      "백트레킹",
      "이진 탐색",
    ],
  },
  {
    week: 4,
    title:
      "정렬 알고리즘 (버블, 선택, 삽입, 퀵, 합병, 힙의 알고리즘 이해 및 구현 방법 학습)",
    content: [
      "버블 정렬",
      "선택 정렬",
      "삽입 정렬",
      "퀵 정렬, 시간 복잡도",
      "합병 정렬",
      "merge 구현 및 mergesort 구현",
      "시간복잡도",
      "힙 정렬",
      "최소 힙 - 삽입 시간 복잡도",
      "최소 힙 - 추출 시간 복잡도",
      "힙정렬 구현",
    ],
  },
  {
    week: 5,
    title:
      "고급 알고리즘 풀이 (다익스트라 알고리즘 풀이 및 복잡한 문제 해결 위한 동적 계획법 학습)",
    content: [
      "다익스트라 알고리즘",
      "다익스트라 구현 및 문제 풀이",
      "[문제 풀이]네트워크 딜레이 타임",
      "동적 계획법 학습 및 문제 풀이",
      "피보나치 수열",
      "일반 계산",
      "DP",
      "[문제 풀이] 극장 좌석 자리 구하기",
    ],
  },
];

function Algorithm() {
  const [openWeeks, setOpenWeeks] = useState({});

  const toggleWeek = (week) => {
    setOpenWeeks((prev) => ({ ...prev, [week]: !prev[week] }));
  };

  return (
    <S.Container>
      <S.Title>실무에 바로 쓰이는 알고리즘 by Python</S.Title>

      <S.Section>
        <S.SectionTitle>과목 요약</S.SectionTitle>
        <S.Content>
          <S.SubTitle>강의 한 줄 설명</S.SubTitle>
          <S.List>
            <S.ListItem>
              학습량: 총 5주, 6시간 플레이 타임 (주 약 1시간 30분씩 5주 수강)
            </S.ListItem>
            <S.ListItem>총 강의 수: 42개</S.ListItem>
            <S.ListItem>총 플레이 타임: 6시간</S.ListItem>
            <S.ListItem>
              난이도: 상 (Python을 활용해서 반복문, 조건문을 다뤄본 적 있는
              취준생 / 개발자)
            </S.ListItem>
          </S.List>
        </S.Content>
      </S.Section>

      <S.Section>
        <S.SectionTitle>세일즈</S.SectionTitle>
        <S.Content>
          <S.SubTitle>추천 고객</S.SubTitle>
          <S.List>
            <S.ListItem>파이썬 실력을 레벨업하고 싶은 사람</S.ListItem>
            <S.ListItem>코딩테스트를 대비하고 싶은 사람</S.ListItem>
            <S.ListItem>빠르게 기술 면접을 대비하고 싶은 사람</S.ListItem>
          </S.List>
          <S.SubTitle>선수과목</S.SubTitle>
          <S.List>
            <S.ListItem>왕초보 불가</S.ListItem>
            <S.ListItem>선수 목 없음</S.ListItem>
            <S.ListItem>
              단 대학교 2학년 전공 과목 수준 (컴공과 기준) 이기 때문에, 파이썬
              경험이 없다면 비추천
            </S.ListItem>
          </S.List>
          <S.SubTitle>누적 수강생</S.SubTitle>
          <S.List>
            <S.ListItem>총 36명 (국비 26명, 온라인 10명)</S.ListItem>
          </S.List>
          <S.SubTitle>밸런스표</S.SubTitle>
          <HexagonGraph
            data={[
              { label: "의사결정", value: 4 },
              { label: "업무효율", value: 3 },
              { label: "문제해결", value: 5 },
              { label: "부수입창출", value: 2 },
              { label: "아디어실현", value: 3 },
              { label: "리서치능력", value: 4 },
            ]}
          />
        </S.Content>
      </S.Section>

      <S.Section>
        <S.SectionTitle>커리큘럼</S.SectionTitle>
        <S.Content>
          <S.SubTitle>사용 프로그램 (유료 프로그램 사용 X)</S.SubTitle>
          <S.List>
            <S.ListItem>Python (3.12.4 최신 버전)</S.ListItem>
            <S.ListItem>Pycharm (Community 버전)</S.ListItem>
            <S.ListItem>Python Package (request 패키지)</S.ListItem>
          </S.List>
          <S.SubTitle>실습 환경</S.SubTitle>
          <S.SubTitle>구현하 기능</S.SubTitle>
          <S.List>
            <S.ListItem>
              이론: 시간 복잡도, 공간 복잡도, 점근 표기법 등 알고리즘 이론
            </S.ListItem>
            <S.ListItem>
              실제 구현 기능: 정렬, 탐색, 동적 프로그래밍, 다익스트라 (파이썬
              사용)
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
              자료 구조: 연결리스트, 스택, 큐, 해시테이블, 힙 직접 구현
            </S.ListItem>
            <S.ListItem>
              알고리즘 개념 2개: 정렬 알고리즘 (버블, 선택, 삽입, 퀵, 합병, 힙),
              고급 알고리즘 (다익스트라, 동적 계획법)
            </S.ListItem>
          </S.List>
          <S.SubTitle>로드맵</S.SubTitle>
          <S.List>
            <S.ListItem>항해 리부트</S.ListItem>
            <S.ListItem>내일배움캠프, 항해99</S.ListItem>
          </S.List>
        </S.Content>
      </S.Section>
    </S.Container>
  );
}

export default Algorithm;
