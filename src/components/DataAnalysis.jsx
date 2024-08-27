import React, { useState } from "react";
import HexagonGraph from "./HexagonGraph";
import da1Image from "../assets/img/da-1.png";
import da2Image from "../assets/img/da-2.png";
import da3Image from "../assets/img/da-3.png";
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
    title: "엑셀로 데이터분석 맛보기",
    content: [
      "타이타닉 배의 탑승 요금과 생존률 사이의 상관관계",
      "엑셀로 데이터 전처리하기",
      "엑셀로 공백 제거하기",
      "XLMiner Analysis ToolPak으로 데이터 분석",
      "데이터 분석 싸이클 정리하기",
      "엑셀 분석의 한계 알아보기",
      "파이썬 라이브러리 알아보기",
    ],
  },
  {
    week: 2,
    title: "파이썬 데이터분석 입문하기",
    content: [
      "파이썬 문법 (변수, 기본 사칙연산, 리스트, 딕셔너리, 반복문)",
      "판다스(pandas)와 맷플롯립(matplotlib) 사용법",
      "Colab 접속하여 Colab으로 파일 관리하기",
      "상관계수의 의미, 상관계 구하기",
    ],
  },
  {
    week: 3,
    title: "데이터분석 집중 훈련하기",
    content: [
      "데이터분석으로 수강생의 학습 패턴 알아보기",
      "데이터 전처리: 함수 이용하여 날짜 형태로 데이터 변환하기",
      "matplotlib, numpy 사용 선언하고 그래프 그리기",
      "히트맵의 의미와 히트맵으로 요일별 접속 시간 나타내기",
      "pandas로 데이터 분석하고 matplotlib, numpy로 시각화하기",
      "folium로 지도로 데이터 표현하기",
      "반복문 사용법 알아보기",
      "최종 결론 내어 실무에서 보고하기",
    ],
  },
  {
    week: 4,
    title: "실전 데이터분석 - 01",
    content: [
      "가설을 세우고 검증하기",
      "pandas로 데이터 분석하기",
      "좋은 가설의 의미와 가설 세우기",
      "결측치 제거하기",
      "matplotlib, numpy로 그래프로 시각화하기",
      "그래프 디자인 변경하기",
      "최종 결론 내어 실무에서 보고하기",
    ],
  },
  {
    week: 5,
    title: "실전 데이터분석 - 02",
    content: [
      "데이터 분석 시작: 고객의 상품구매 여정 알아보기",
      "pandas, matplotlib 사용 선언하고 수강 데이터 가져오기",
      "적절한 타겟에게 상품 판매가 이뤄지는지 분석하기",
      "완주율 상승시키기 위한 가설 세우고 전처리, 분석, 시각화하기",
      "프로젝트 개선의 유효성 검증하기",
      "피벗 테이블 알아보기",
      "리텐션 테이블 알아보기",
      "더 적절한 데이터 검증 방법 알아보기: 코호트 차트",
      "최종 결론 내어 실무에서 보고하기",
    ],
  },
];

function DataAnalysis() {
  const [openWeeks, setOpenWeeks] = useState({});

  const toggleWeek = (week) => {
    setOpenWeeks((prev) => ({ ...prev, [week]: !prev[week] }));
  };

  return (
    <S.Container>
      <S.Title>마케터 기획자를 위한 실전 데이터 분석</S.Title>

      <S.Section>
        <S.SectionTitle>과목 요약</S.SectionTitle>
        <S.Content>
          <S.SubTitle>강의 한 줄 설명</S.SubTitle>
          <S.List>
            <S.ListItem>
              실제 사용하는 업무를 바탕으로 데이터분석의 기본기를 다집니다.
            </S.ListItem>
            <S.ListItem>
              학습량: 일주일에 2시간, 총 5주 (주말만 수하면, 하루 1시간으로 완강
              가능)
            </S.ListItem>
            <S.ListItem>총 강의 수: 38강</S.ListItem>
            <S.ListItem>총 플레이 타임: 5시간 16분 (5주 분량)</S.ListItem>
            <S.ListItem>난이도: 초급</S.ListItem>
          </S.List>
        </S.Content>
      </S.Section>

      <S.Section>
        <S.SectionTitle>세일즈</S.SectionTitle>
        <S.Content>
          <S.SubTitle>추천 고객</S.SubTitle>
          <S.List>
            <S.ListItem>
              숫자로 분석하고 시각화하고 싶은데 어떻게 시작할해야 할지 모르는 분
            </S.ListItem>
            <S.ListItem>
              근거와 가설이 탄탄한 의사결정을 하는 일잘러로 레벨업하고 싶으신 분
            </S.ListItem>
            <S.ListItem>
              회사내 직무 맞춤형으로 데이터 분석 스킬을 얻고싶으신 분
            </S.ListItem>
            <S.ListItem>
              취업에 필요한 데이터 역량과 실무 경험까지 한 번에 가져가고 싶으신
              분
            </S.ListItem>
          </S.List>
          <S.SubTitle>선수과목</S.SubTitle>
          <S.List>
            <S.ListItem>없음</S.ListItem>
          </S.List>
          <S.SubTitle>누적 수강생</S.SubTitle>
          <S.List>
            <S.ListItem>1109명</S.ListItem>
          </S.List>
          <S.SubTitle>밸런스표</S.SubTitle>
          <HexagonGraph
            data={[
              { label: "의사결정", value: 5 },
              { label: "업무효율", value: 5 },
              { label: "문제해결", value: 4 },
              { label: "부수입창출", value: 3 },
              { label: "아이디어실현", value: 1 },
              { label: "리서치능력", value: 4 },
            ]}
          />
        </S.Content>
      </S.Section>

      <S.Section>
        <S.SectionTitle>커리큘럼</S.SectionTitle>
        <S.Content>
          <S.SubTitle>사용 프로그램</S.SubTitle>
          <S.List>
            <S.ListItem>
              Google Spreadsheets, Python, Pandas, Matplotlib, Numpy, Folium,
              MarkerCluster
            </S.ListItem>
          </S.List>
          <S.SubTitle>실습 환경</S.SubTitle>
          <S.List>
            <S.ListItem>Google Colab, Google Spreadsheets</S.ListItem>
          </S.List>
          <S.SubTitle>구현하는 기능</S.SubTitle>
          <S.List>
            <S.ListItem>
              이론:
              <S.List>
                <S.ListItem>파이썬 문법</S.ListItem>
                <S.ListItem>상관계수</S.ListItem>
                <S.ListItem>히트맵</S.ListItem>
                <S.ListItem>코호트 차트</S.ListItem>
              </S.List>
            </S.ListItem>
            <S.ListItem>
              실제 구현 기능:
              <S.List>
                <S.ListItem>
                  Google Colab: 데이터 파일 관리하고 불러오기
                </S.ListItem>
                <S.ListItem>Pandas: 상관관계 분석</S.ListItem>
                <S.ListItem>Matplotlib: 그래프로 시각화</S.ListItem>
                <S.ListItem>numpy: 그래프로 시각화</S.ListItem>
                <S.ListItem>Google Spreadsheets</S.ListItem>
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
            <S.ListItem>Pandas를 이용한 데이터분석</S.ListItem>
            <S.Image src={da1Image} alt="Pandas 데이터분석 결과" />
            <S.ListItem>Matplotlib을 이용한 분석 결과 시각화</S.ListItem>
            <S.Image src={da2Image} alt="Matplotlib 시각화 결과" />
            <S.ListItem>matplotlib과 씨본으로 만든 그래프</S.ListItem>
            <S.Image src={da3Image} alt="matplotlib과 seaborn 그래프" />
          </S.List>
          <S.SubTitle>로드맵</S.SubTitle>
          <S.List>
            <S.ListItem>
              AI 기반 투자 수익률 분석 실습을 통한 데이터 분석 역량 키우기
              <S.List>
                <S.ListItem>
                  고객 니즈: 데이터분석을 심화하여 공부, 데이터분석으로 부수입
                  창출
                </S.ListItem>
              </S.List>
            </S.ListItem>
            <S.ListItem>
              GA4와 SQL로 데이터 마케팅 한번에 끝내기
              <S.List>
                <S.ListItem>데이터 대시보드를 만듦</S.ListItem>
                <S.ListItem>고객 니즈: 데이터 시각화로 업무에 적용</S.ListItem>
              </S.List>
            </S.ListItem>
          </S.List>
        </S.Content>
      </S.Section>
    </S.Container>
  );
}

export default DataAnalysis;
