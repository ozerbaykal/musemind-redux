import {ScrollView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import SectionTitle from '../../components/ui/sectionTitle';
import TasksStatusCard from '../../components/dashboard/tasksStatusCard';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {VictoryPie, VictoryTheme} from 'victory-native';
import {statusType} from '../../utils/constants';
const Dashboard = () => {
  const {taskStatus, tasks} = useSelector(state => state.tasks);

  const countTaskStatus = status => {
    return tasks.filter(item => item?.status === status).length;
  };
  const calculateTaskStats = status => {
    const totalTask = tasks.length;
    const taskCount = tasks.filter(item => item?.status === status).length;
    const persantage = (100 * taskCount) / totalTask.toFixed(2);
    return persantage;
  };

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
            <TasksStatusCard
              key={item.id}
              item={item}
              value={countTaskStatus(item.status)}
            />
          ))}
        </View>
        <SectionTitle title="Project Statistics" />

        <View style={{marginBottom: 10}}>
          <VictoryPie
            innerRadius={80}
            padAngle={2}
            data={[
              {x: 'In Review', y: calculateTaskStats(statusType.INREVIEW)},
              {x: 'In Progress', y: calculateTaskStats(statusType.INPROGRESS)},
              {x: 'Completed', y: calculateTaskStats(statusType.COMPLATED)},
              {x: 'On Hold', y: calculateTaskStats(statusType.ONHOLD)},
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
