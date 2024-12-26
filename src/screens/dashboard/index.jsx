import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import SectionTitle from '../../components/ui/sectionTitle';
import TasksStatusCard from '../../components/dashboard/tasksStatusCard';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {
  VictoryBar,
  VictoryChart,
  VictoryPie,
  VictoryTheme,
} from 'victory-native';
const Dashboard = () => {
  const {taskStatus} = useSelector(state => state.tasks);

  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <SectionTitle title="Project Summary" />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {taskStatus?.map(item => (
            <TasksStatusCard key={item.id} item={item} />
          ))}
        </View>
        <View>
          <VictoryPie
            innerRadius={40}
            padAngle={2}
            data={[
              {x: 'Cats', y: 35},
              {x: 'Dogs', y: 40},
              {x: 'Birds', y: 55},
              {x: 'rabbit', y: 55},
            ]}
            theme={VictoryTheme.clean}
          />
        </View>

        <SectionTitle title="Project Statistics" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Dashboard;
