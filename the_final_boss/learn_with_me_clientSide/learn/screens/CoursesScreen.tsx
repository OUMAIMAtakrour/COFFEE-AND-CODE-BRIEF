import { View, StyleSheet, ScrollView, Image } from "react-native"
import { Text, Card, Button, useTheme } from "react-native-paper"
import Animated, { FadeInUp } from "react-native-reanimated"

const courses = [
  {
    id: 1,
    title: "English for Travelers",
    description: "Say bon voyage to language barriers with our English for Travelers course!",
    level: "B1 level",
    teacher: {
      name: "Thomas Wilson",
      image: "https://picsum.photos/seed/1/100",
      subject: "English Language",
    },
    progress: 45,
    image: "https://picsum.photos/seed/1/300",
  },
  {
    id: 2,
    title: "English for Science",
    description: "Master scientific terminology and academic writing in English",
    level: "C1 level",
    teacher: {
      name: "Sarah Johnson",
      image: "https://picsum.photos/seed/2/100",
      subject: "Scientific English",
    },
    progress: 30,
    image: "https://picsum.photos/seed/2/300",
  },
]

export default function CoursesScreen({ navigation }) {
  const theme = useTheme()

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.colors.primary }]}>All Courses</Text>
      </View>

      {courses.map((course, index) => (
        <Animated.View key={course.id} entering={FadeInUp.delay(200 + index * 100)}>
          <Card
            style={[styles.courseCard, { backgroundColor: theme.colors.surface }]}
            onPress={() => navigation.navigate("CourseDetail", { course })}
          >
            <Card.Cover source={{ uri: course.image }} style={styles.courseImage} />
            <Card.Content>
              <Text style={[styles.courseTitle, { color: theme.colors.text }]}>{course.title}</Text>
              <Text style={[styles.courseLevel, { color: theme.colors.placeholder }]}>{course.level}</Text>
              <Text style={[styles.courseDescription, { color: theme.colors.text }]} numberOfLines={2}>
                {course.description}
              </Text>

              <View style={styles.teacherSection}>
                <Image source={{ uri: course.teacher.image }} style={styles.teacherImage} />
                <View style={styles.teacherInfo}>
                  <Text style={[styles.teacherName, { color: theme.colors.text }]}>{course.teacher.name}</Text>
                  <Text style={[styles.teacherSubject, { color: theme.colors.placeholder }]}>
                    {course.teacher.subject}
                  </Text>
                </View>
              </View>

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
            <Card.Actions>
              <Button
                mode="contained"
                onPress={() => navigation.navigate("CourseDetail", { course })}
                style={[styles.viewButton, { backgroundColor: theme.colors.primary }]}
              >
                View Course
              </Button>
            </Card.Actions>
          </Card>
        </Animated.View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
  },
  courseCard: {
    marginHorizontal: 24,
    marginBottom: 24,
    borderRadius: 20,
    overflow: "hidden",
  },
  courseImage: {
    height: 160,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 4,
  },
  courseLevel: {
    fontSize: 14,
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  teacherSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  teacherImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  teacherInfo: {
    flex: 1,
  },
  teacherName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  teacherSubject: {
    fontSize: 14,
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
  viewButton: {
    borderRadius: 20,
    marginTop: 8,
  },
})

