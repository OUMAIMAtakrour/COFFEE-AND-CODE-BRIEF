import { View, StyleSheet, ScrollView, Image } from "react-native"
import { Text, IconButton, Button, useTheme } from "react-native-paper"
import Animated, { FadeInUp } from "react-native-reanimated"

export default function CourseDetailScreen({ navigation, route }) {
  const theme = useTheme()
  const course = route.params?.course || {}

  if (!course.id) {
    return (
      <View style={[styles.container, styles.errorContainer, { backgroundColor: theme.colors.background }]}>
        <Text style={[styles.errorText, { color: theme.colors.error }]}>Course not found</Text>
        <Button mode="contained" onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
          Go Back
        </Button>
      </View>
    )
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={() => navigation.goBack()}
          style={[styles.backButton, { backgroundColor: theme.colors.surface }]}
        />
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Course details</Text>
        <IconButton
          icon="heart"
          size={24}
          iconColor={theme.colors.primary}
          style={[styles.heartButton, { backgroundColor: theme.colors.surface }]}
        />
      </View>

      <Animated.View entering={FadeInUp} style={styles.content}>
        <Image source={{ uri: course.image || "https://picsum.photos/seed/fallback/300" }} style={styles.courseImage} />

        <View style={[styles.courseInfo, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.courseTitle, { color: theme.colors.text }]}>{course.title || "Untitled Course"}</Text>
          <Text style={[styles.courseLevel, { color: theme.colors.placeholder }]}>
            {course.level || "No level specified"}
          </Text>

          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>About course:</Text>
          <Text style={[styles.description, { color: theme.colors.placeholder }]}>
            {course.description || "No description available"}
          </Text>

          <View style={styles.teacherSection}>
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Teacher:</Text>
            <View style={styles.teacherInfo}>
              <Image
                source={{ uri: course.teacher?.image || "https://picsum.photos/seed/teacher/100" }}
                style={styles.teacherImage}
              />
              <View style={styles.teacherDetails}>
                <Text style={[styles.teacherName, { color: theme.colors.text }]}>
                  {course.teacher?.name || "Unknown Teacher"}
                </Text>
                <Text style={[styles.teacherSubject, { color: theme.colors.placeholder }]}>
                  {course.teacher?.subject || "Subject not specified"}
                </Text>
              </View>
              <View style={[styles.progressCircle, { backgroundColor: theme.colors.background }]}>
                <Text style={[styles.progressText, { color: theme.colors.primary }]}>{course.progress ?? 0}%</Text>
              </View>
            </View>
          </View>

          <Button
            mode="contained"
            onPress={() => console.log("Start course")}
            style={[styles.startButton, { backgroundColor: theme.colors.primary }]}
          >
            Start Course
          </Button>
        </View>
      </Animated.View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  backButton: {
    elevation: 2,
  },
  heartButton: {
    elevation: 2,
  },
  content: {
    flex: 1,
  },
  courseImage: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
  },
  courseInfo: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -32,
    padding: 24,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
  },
  courseLevel: {
    fontSize: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 24,
  },
  teacherSection: {
    marginBottom: 24,
  },
  teacherInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  teacherImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  teacherDetails: {
    flex: 1,
    marginLeft: 12,
  },
  teacherName: {
    fontSize: 16,
    fontWeight: "600",
  },
  teacherSubject: {
    fontSize: 14,
  },
  progressCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  progressText: {
    fontSize: 14,
    fontWeight: "600",
  },
  startButton: {
    borderRadius: 20,
    marginTop: 24,
  },
})

