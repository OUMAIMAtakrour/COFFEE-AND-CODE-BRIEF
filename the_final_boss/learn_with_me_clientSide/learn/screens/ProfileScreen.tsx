import { View, StyleSheet, ScrollView, Image } from "react-native"
import { Text, Avatar, Button, useTheme } from "react-native-paper"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Animated, { FadeInUp } from "react-native-reanimated"

export default function ProfileScreen({ navigation }) {
  const theme = useTheme()

  const courses = [
    { 
      title: "Advanced Mathematics",
      grade: "A",
      score: 92,
      progress: 75,
      icon: "calculator",
      color: "#8B5CF6",
      nextAssignment: "Calculus Quiz" 
    },
    { 
      title: "Computer Science",
      grade: "A-",
      score: 88,
      progress: 60,
      icon: "laptop",
      color: "#8B5CF6",
      nextAssignment: "Algorithm Project"
    },
    { 
      title: "Physics",
      grade: "B+",
      score: 85,
      progress: 45,
      icon: "atom",
      color: "#8B5CF6",
      nextAssignment: "Lab Report"
    },
  ]

  const badges = [
    { 
      title: "Dean's List",
      description: "Top 10% of Class",
      icon: "school",
      color: "#8B5CF6"
    },
    { 
      title: "Perfect Attendance",
      description: "30 Days Streak",
      icon: "calendar-check",
      color: "#8B5CF6"
    },
    { 
      title: "Science Champion",
      description: "Physics Competition",
      icon: "trophy",
      color: "#8B5CF6"
    },
    { 
      title: "Top Contributor",
      description: "Study Group Leader",
      icon: "star",
      color: "#8B5CF6"
    },
  ]

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={24}
          color={theme.colors.text}
          onPress={() => navigation.goBack()}
        />
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Student Profile</Text>
      </View>

      <Animated.View entering={FadeInUp} style={styles.content}>
        <View style={styles.profileSection}>
          <Avatar.Image
            size={80}
            source={{
              uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rMNHVsXvJdq5Qyg0Xq3KWQ5JcVZmCK.png",
            }}
          />
          <Text style={[styles.name, { color: theme.colors.primary }]}>Jacob Mitchell</Text>
          <Text style={[styles.role, { color: theme.colors.placeholder }]}>Senior Year • Computer Science</Text>
          
          <View style={[styles.statsContainer, { backgroundColor: theme.colors.surface }]}>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: theme.colors.text }]}>3.8</Text>
              <Text style={[styles.statLabel, { color: theme.colors.placeholder }]}>GPA</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: theme.colors.text }]}>92%</Text>
              <Text style={[styles.statLabel, { color: theme.colors.placeholder }]}>Attendance</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: theme.colors.text }]}>15</Text>
              <Text style={[styles.statLabel, { color: theme.colors.placeholder }]}>Credits</Text>
            </View>
          </View>
        </View>

        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Current Courses</Text>
        <View style={styles.courses}>
          {courses.map((course, index) => (
            <View 
              key={index} 
              style={[styles.courseItem, { backgroundColor: theme.colors.surface }]}
            >
              <View style={styles.courseHeader}>
                <View style={[styles.courseIcon, { backgroundColor: `${course.color}20` }]}>
                  <MaterialCommunityIcons name={course.icon} size={24} color={course.color} />
                </View>
                <View style={styles.courseInfo}>
                  <Text style={[styles.courseTitle, { color: theme.colors.text }]}>{course.title}</Text>
                  <Text style={[styles.courseGrade, { color: theme.colors.primary }]}>
                    {course.grade} • {course.score}%
                  </Text>
                </View>
              </View>
              <Text style={[styles.nextAssignment, { color: theme.colors.placeholder }]}>
                Next: {course.nextAssignment}
              </Text>
              <View style={[styles.progressBar, { backgroundColor: theme.colors.background }]}>
                <View 
                  style={[styles.progressFill, { 
                    width: `${course.progress}%`,
                    backgroundColor: course.color
                  }]} 
                />
              </View>
            </View>
          ))}
        </View>

        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Earned Badges</Text>
        <View style={styles.badgesGrid}>
          {badges.map((badge, index) => (
            <View 
              key={index} 
              style={[styles.badgeItem, { backgroundColor: theme.colors.surface }]}
            >
              <View style={[styles.badgeIcon, { backgroundColor: `${badge.color}20` }]}>
                <MaterialCommunityIcons name={badge.icon} size={24} color={badge.color} />
              </View>
              <Text style={[styles.badgeTitle, { color: theme.colors.text }]}>{badge.title}</Text>
              <Text style={[styles.badgeDescription, { color: theme.colors.placeholder }]}>
                {badge.description}
              </Text>
            </View>
          ))}
        </View>

        <Button
          mode="contained"
          onPress={() => navigation.navigate('Courses')}
          style={[styles.viewAllButton, { backgroundColor: theme.colors.primary }]}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          View All Courses
        </Button>
      </Animated.View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 16,
  },
  content: {
    padding: 24,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 32,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 16,
    marginBottom: 8,
  },
  role: {
    fontSize: 16,
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: "row",
    borderRadius: 30,
    padding: 16,
    width: "100%",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
  },
  statDivider: {
    width: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
  },
  courses: {
    marginBottom: 32,
  },
  courseItem: {
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
  },
  courseHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  courseIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  courseGrade: {
    fontSize: 14,
    fontWeight: "600",
  },
  nextAssignment: {
    fontSize: 14,
    marginBottom: 12,
  },
  progressBar: {
    height: 6,
    borderRadius: 3,
  },
  progressFill: {
    height: "100%",
    borderRadius: 3,
  },
  badgesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  badgeItem: {
    width: "48%",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  badgeIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  badgeTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    textAlign: "center",
  },
  badgeDescription: {
    fontSize: 12,
    textAlign: "center",
  },
  viewAllButton: {
    borderRadius: 30,
  },
  buttonContent: {
    height: 56,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: "600",
  },
})