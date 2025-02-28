import { View, StyleSheet, FlatList } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { Title, Card, Paragraph, Avatar, useTheme } from "react-native-paper"
// import { LinearGradient } from "expo-linear-gradient"

const dummyCourses = [
  {
    id: 1,
    title: "Artificial Intelligence Fundamentals",
    instructor: "Dr. Elara Nova",
    image: "https://picsum.photos/seed/1/100",
  },
  {
    id: 2,
    title: "Quantum Algorithms",
    instructor: "Prof. Qubit Entangler",
    image: "https://picsum.photos/seed/2/100",
  },
  {
    id: 3,
    title: "Advanced Cybersecurity Techniques",
    instructor: "Cmdr. Firewall Shield",
    image: "https://picsum.photos/seed/3/100",
  },
]

const CourseListScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { category } = route.params
  const theme = useTheme()

  const renderCourseItem = ({ item }) => (
    <Card style={styles.courseItem} onPress={() => navigation.navigate("CourseDetails", { course: item })}>
      <LinearGradient
        colors={["#00ffff", "#ff00ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Card.Content style={styles.cardContent}>
          <Avatar.Image size={60} source={{ uri: item.image }} />
          <View style={styles.courseInfo}>
            <Title style={styles.courseTitle}>{item.title}</Title>
            <Paragraph style={styles.courseInstructor}>{item.instructor}</Paragraph>
          </View>
        </Card.Content>
      </LinearGradient>
    </Card>
  )

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Title style={[styles.categoryTitle, { color: theme.colors.primary }]}>{category}</Title>
      <FlatList data={dummyCourses} renderItem={renderCourseItem} keyExtractor={(item) => item.id.toString()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  courseItem: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  gradient: {
    padding: 2,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  courseInfo: {
    marginLeft: 15,
    flex: 1,
  },
  courseTitle: {
    color: "#ffffff",
    fontSize: 18,
  },
  courseInstructor: {
    color: "#cccccc",
  },
})

export default CourseListScreen

