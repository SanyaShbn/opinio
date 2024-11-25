import React, { useEffect, useState } from 'react';
import { Box, Center, Text, View } from 'native-base';
import { BarChart, PieChart, LineChart } from 'react-native-chart-kit';
import { Dimensions, ScrollView } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const PollsCreationStatistics = ({ pollId }) => {
  const [pollData, setPollData] = useState({});

  useEffect(() => {
    // Замена на получение данных с сервера
    const fetchData = async () => {
      // Статические данные для диаграмм
      const data = {
        1: 5,
        2: 10,
        3: 8,
        4: 15,
        5: 3,
      };
      setPollData(data);
    };
    fetchData();
  }, [pollId]);

  const totalResponses = Object.values(pollData).reduce((sum, count) => sum + count, 0);

  const barChartData = {
    labels: Object.keys(pollData),
    datasets: [
      {
        data: Object.values(pollData),
      },
    ],
  };

  const pieChartData = Object.keys(pollData).map((key) => {
    const percentage = ((pollData[key] / totalResponses) * 100).toFixed(0); // Округляем до целых чисел
    return {
      name: `${percentage}% Вопрос ${key}`,
      count: pollData[key],
      color: ["#FF6384", "#36A2EB", "#FFCE56", "#66BB6A", "#FF7043"][key % 5],
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    };
  });

  const lineChartData = {
    labels: Object.keys(pollData),
    datasets: [
      {
        data: Object.values(pollData),
        color: (opacity = 1) => `rgba(105, 88, 216, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <ScrollView>
      <Center mt={5}>
        <Text fontSize="lg" bold mb={2}>Статистика по текущему опросу</Text>
      </Center>
      <Box>
        <Center>
          <Text style={{ fontFamily: "Roboto", fontSize: 16, fontWeight: "500", lineHeight: 24, textAlign: "center" }}>
            Соотношение ответов на предложенные вопросы
          </Text>
          <BarChart
            data={barChartData}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#6958D8',
              backgroundGradientFrom: '#F2F0FB',
              backgroundGradientTo: '#6FC8BA',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            fromZero
            showBarTops={true}
            animate
          />
        </Center>
      </Box>
      <Box>
        <Center>
          <PieChart
            data={pieChartData}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#6958D8',
              backgroundGradientFrom: '#F2F0FB',
              backgroundGradientTo: '#6FC8BA',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            accessor="count"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
            animate
          />
        </Center>
      </Box>
      <Box>
        <Center>
          <LineChart
            data={lineChartData}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundColor: '#6958D8',
              backgroundGradientFrom: '#F2F0FB',
              backgroundGradientTo: '#6FC8BA',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            fromZero
            animate
          />
        </Center>
      </Box>
    </ScrollView>
  );
};

export default PollsCreationStatistics;