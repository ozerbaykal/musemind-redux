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
        <SectionTitle title="Project Statistics" />

        <View style={{marginBottom: 10}}>
          <VictoryPie
            innerRadius={80}
            padAngle={2}
            data={[
              {x: 'In Review', y: 35},
              {x: 'In Progress', y: 40},
              {x: 'Completed', y: 55},
              {x: 'On Hold', y: 55},
            ]}
            theme={VictoryTheme.clean}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Dashboard;
