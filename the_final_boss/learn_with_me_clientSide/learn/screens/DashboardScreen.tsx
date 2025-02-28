import { View, StyleSheet, ScrollView } from "react-native"
import { Text, Card, Button, useTheme } from "react-native-paper"
import Animated, { FadeInUp } from "react-native-reanimated"

export default function DashboardScreen({ navigation }) {
  const theme = useTheme()

  const courses = [
    { id: 1, title: "English for Travelers", progress: 45, image: "https://picsum.photos/seed/1/300" },
    { id: 2, title: "Business English", progress: 30, image: "https://picsum.photos/seed/2/300" },
    { id: 3, title: "English for Science", progress: 60, image: "https://picsum.photos/seed/3/300" },
  ]

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.colors.primary }]}>Dashboard</Text>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Upgrade")}
          style={[styles.upgradeButton, { backgroundColor: theme.colors.primary }]}
        >
          Upgrade
        </Button>
      </View>

      <Animated.View entering={FadeInUp.delay(200)} style={styles.statsContainer}>
        <Card style={[styles.statsCard, { backgroundColor: theme.colors.surface }]}>
          <Card.Content>
            <Text style={[styles.statsTitle, { color: theme.colors.text }]}>Your Progress</Text>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: theme.colors.primary }]}>3</Text>
                <Text style={[styles.statLabel, { color: theme.colors.placeholder }]}>Courses</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: theme.colors.primary }]}>12</Text>
                <Text style={[styles.statLabel, { color: theme.colors.placeholder }]}>Hours</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: theme.colors.primary }]}>45%</Text>
                <Text style={[styles.statLabel, { color: theme.colors.placeholder }]}>Avg. Progress</Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </Animated.View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Your Courses</Text>
        {courses.map((course, index) => (
          <Animated.View key={course.id} entering={FadeInUp.delay(300 + index * 100)}>
            <Card
              style={[styles.courseCard, { backgroundColor: theme.colors.surface }]}
              onPress={() => navigation.navigate("CourseDetail", { course })}
            >
              <Card.Cover source={{ uri: course.image }} style={styles.courseImage} />
              <Card.Content style={styles.courseContent}>
                <Text style={[styles.courseTitle, { color: theme.colors.text }]}>{course.title}</Text>
                <View style={styles.progressContainer}>
                  <View style={[styles.progressBar, { backgroundColor: theme.colors.background }]}>
                    <View
                      style={[
                        styles.progressFill,
                        { width: `${course.progress}%`, backgroundColor: theme.colors.primary },
                      ]}
                    />
                  </View>
                  <Text style={[styles.progressText, { color: theme.colors.placeholder }]}>{course.progress}%</Text>
                </View>
              </Card.Content>
            </Card>
          </Animated.View>
        ))}
      </View>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate("Courses")}
        style={[styles.viewAllButton, { borderColor: theme.colors.primary }]}
        labelStyle={{ color: theme.colors.primary }}
      >
        View All Courses
      </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
  },
  upgradeButton: {
    borderRadius: 20,
  },
  statsContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  statsCard: {
    borderRadius: 20,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "700",
  },
  statLabel: {
    fontSize: 14,
    marginTop: 4,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
  },
  courseCard: {
    marginBottom: 16,
    borderRadius: 20,
    overflow: "hidden",
  },
  courseImage: {
    height: 120,
  },
  courseContent: {
    paddingVertical: 16,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressBar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    marginRight: 8,
  },
  progressFill: {
    height: "100%",
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
  },
  viewAllButton: {
    marginHorizontal: 24,
    marginBottom: 24,
    borderRadius: 20,
  },
})

