기술 및 개발 환경
[사용 기술]

Front-end :  React.js, Rechart, @mui/material-Snackbar, List, tailwindcss, react-icons

[실행방법]<br/>
npm install <br/>
npm start

🔗 개발 내용 상세

- common/GetData.js 데이터 전처리: 원본 데이터에는 동일 일자에 수많은 데이터가 들어있어,<br/>
사실상 이를 전부시각화 하는 것은 최근 한 달/한 주 데이터를 그래프화 하는데 부적합합니다.<br/>
따라서 지원자는 각 일자별 수입/지출데이터를 분리하여 각각 일자별 평균값을 사용하였습니다.<br/>
(예를 들어, 5월 30일 데이터에 있어서 수입이 50건이고 지출이 40건이라면,<br/>
수입 데이터 50건의 평균 및 지출 데이터 40건의 평균을 각각 도출해 사용하였습니다.)<br/>
또한, 주어진 과제에서는 최근 한 달/최근 한 주 그래프가 시각화 되어 있었으므로,<br/>
전체 데이터 시각화가 아니라 최근 데이터를 보여주는 것에 초점을 맞추어 구현하였습니다.<br/>
- common/Chart.js : mui 라이브러리를 사용하여 그래프를 시각화하였습니다.<br/>
- common/CustomList.js : mui 라이브러리를 사용하여 리스트를 구현하였습니다.<br/>
- common/Toast.js : mui 라이브러리를 사용하여 가장 최근 거래내역을 보여주는 알림을 <br/>구현하였습니다.<br/>
- common/CustomCursor.js : 커스텀 마우스 커서를 구현하였습니다.

