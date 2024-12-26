import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import SectionTitle from '../../components/ui/sectionTitle';
import TasksStatusCard from '../../components/dashboard/tasksStatusCard';

const Dashboard = () => {
  const {taskStatus} = useSelector(state => state.tasks);
  console.log(taskStatus);

  return (
    <ScrollView>
      <View></View>
      <SectionTitle title="Project Summary" />
      <View>
        {taskStatus?.map(item => (
          <TasksStatusCard key={item.id} item={item} />
        ))}
      </View>

      <SectionTitle title="Project Statistics" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Dashboard;
