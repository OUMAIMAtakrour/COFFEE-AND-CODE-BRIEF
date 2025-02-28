import { View, StyleSheet, ScrollView, Dimensions } from "react-native"
import { Text, useTheme, Surface } from "react-native-paper"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Animated, { FadeInUp } from "react-native-reanimated"

const { width } = Dimensions.get("window")

const ProgressCircle = ({ progress, size = 120, color = "#8B5CF6" }) => (
  <View style={[styles.progressCircle, { width: size, height: size }]}>
    <View style={styles.progressInner}>
      <Text style={[styles.progressText, { color }]}>{progress}</Text>
    </View>
  </View>
)

export default function ProgressScreen() {
  const theme = useTheme()

  const stats = [
    { label: "Lessons", value: "48", icon: "book-open-variant" },
    { label: "Hours", value: "12", icon: "clock-outline" },
    { label: "Points", value: "2.4k", icon: "star" },
  ]

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Animated.View entering={FadeInUp.delay(200)}>
        <Surface style={styles.headerCard}>
          <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Hello, Jacob</Text>
          <Text style={[styles.headerSubtitle, { color: theme.colors.placeholder }]}>Track your learning progress</Text>
        </Surface>
      </Animated.View>

      <View style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <Animated.View key={stat.label} entering={FadeInUp.delay(300 + index * 100)} style={styles.statCard}>
            <Surface style={[styles.statContent, { backgroundColor: theme.colors.surface }]}>
              <MaterialCommunityIcons name={stat.icon} size={24} color={theme.colors.primary} />
              <Text style={[styles.statValue, { color: theme.colors.text }]}>{stat.value}</Text>
              <Text style={[styles.statLabel, { color: theme.colors.placeholder }]}>{stat.label}</Text>
            </Surface>
          </Animated.View>
        ))}
      </View>

      <Animated.View entering={FadeInUp.delay(600)} style={styles.progressSection}>
        <Surface style={[styles.progressCard, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Monthly Progress</Text>
          <View style={styles.progressGrid}>
            <View style={styles.progressItem}>
              <ProgressCircle progress="78%" />
              <Text style={[styles.monthLabel, { color: theme.colors.placeholder }]}>June</Text>
            </View>
            <View style={styles.progressItem}>
              <ProgressCircle progress="43%" color="#F97316" />
              <Text style={[styles.monthLabel, { color: theme.colors.placeholder }]}>July</Text>
            </View>
            <View style={styles.progressItem}>
              <ProgressCircle progress="91%" color="#10B981" />
              <Text style={[styles.monthLabel, { color: theme.colors.placeholder }]}>August</Text>
            </View>
          </View>
        </Surface>
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(700)}>
        <Surface style={[styles.achievementsCard, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Recent Achievements</Text>
          <View style={styles.achievementsList}>
            {["trophy", "medal", "star-circle"].map((icon, index) => (
              <View key={index} style={styles.achievementItem}>
                <MaterialCommunityIcons name={icon} size={32} color={theme.colors.accent} />
              </View>
            ))}
          </View>
        </Surface>
      </Animated.View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerCard: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: 16,
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  statCard: {
    width: (width - 60) / 3,
  },
  statContent: {
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    elevation: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  statLabel: {
    fontSize: 12,
    marginTop: 5,
  },
  progressSection: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  progressCard: {
    padding: 20,
    borderRadius: 20,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  progressGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressItem: {
    alignItems: "center",
  },
  progressCircle: {
    borderWidth: 8,
    borderColor: "#E5E7EB",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  progressInner: {
    justifyContent: "center",
    alignItems: "center",
  },
  progressText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  monthLabel: {
    marginTop: 10,
    fontSize: 14,
  },
  achievementsCard: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    elevation: 4,
  },
  achievementsList: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  achievementItem: {
    width: 60,
    height: 60,
    backgroundColor: "#FEF3C7",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
})

