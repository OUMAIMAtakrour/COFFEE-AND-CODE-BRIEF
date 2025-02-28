import { View, StyleSheet, ScrollView, Image } from "react-native"
import { Text, Button, useTheme } from "react-native-paper"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Animated, { FadeInUp } from "react-native-reanimated"

export default function UpgradeScreen({ navigation }) {
  const theme = useTheme()

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={24}
          color={theme.colors.text}
          onPress={() => navigation.goBack()}
        />
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Upgrade page</Text>
      </View>

      <Animated.View entering={FadeInUp} style={styles.content}>
        <Image
          source={{
            uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RFwI2xN3k5d1FEeePhAJGDuakzV9Lm.png",
          }}
          style={styles.illustration}
        />

        <Text style={[styles.title, { color: theme.colors.primary }]}>Do more!</Text>
        <Text style={[styles.subtitle, { color: theme.colors.placeholder }]}>
          Upgrade your plan and boost up your English level!
        </Text>

        <View style={[styles.planSelector, { backgroundColor: theme.colors.surface }]}>
          <View style={[styles.planOption, styles.activePlan, { backgroundColor: theme.colors.primary }]}>
            <Text style={[styles.planText, styles.activePlanText, { color: theme.colors.surface }]}>Free</Text>
          </View>
          <View style={styles.planOption}>
            <Text style={[styles.planText, { color: theme.colors.placeholder }]}>$249/year</Text>
          </View>
        </View>

        <View style={styles.features}>
          <View style={styles.featureItem}>
            <View style={[styles.featureIconContainer, { backgroundColor: theme.colors.background }]}>
              <MaterialCommunityIcons name="book-open-variant" size={24} color={theme.colors.primary} />
            </View>
            <View style={styles.featureContent}>
              <Text style={[styles.featureTitle, { color: theme.colors.text }]}>5 lessons a day</Text>
              <Text style={[styles.featureDescription, { color: theme.colors.placeholder }]}>
                Learn new words & collocations.
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={[styles.featureIconContainer, { backgroundColor: theme.colors.background }]}>
              <MaterialCommunityIcons name="clipboard-check" size={24} color={theme.colors.primary} />
            </View>
            <View style={styles.featureContent}>
              <Text style={[styles.featureTitle, { color: theme.colors.text }]}>5 free quizzes a day</Text>
              <Text style={[styles.featureDescription, { color: theme.colors.placeholder }]}>
                Stay on top of your language learning with daily quizzes included in the plan.
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={[styles.featureIconContainer, { backgroundColor: theme.colors.background }]}>
              <MaterialCommunityIcons name="chart-line" size={24} color={theme.colors.primary} />
            </View>
            <View style={styles.featureContent}>
              <Text style={[styles.featureTitle, { color: theme.colors.text }]}>Track your progress</Text>
              <Text style={[styles.featureDescription, { color: theme.colors.placeholder }]}>
                Receive updates on your success in learning English.
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={[styles.featureIconContainer, { backgroundColor: theme.colors.background }]}>
              <MaterialCommunityIcons name="wifi" size={24} color={theme.colors.primary} />
            </View>
            <View style={styles.featureContent}>
              <Text style={[styles.featureTitle, { color: theme.colors.text }]}>Online access</Text>
              <Text style={[styles.featureDescription, { color: theme.colors.placeholder }]}>
                Internet is required to receive access to lessons.
              </Text>
            </View>
          </View>
        </View>

        <Button
          mode="contained"
          onPress={() => {}}
          style={[styles.startButton, { backgroundColor: theme.colors.primary }]}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          Start free trial
        </Button>
        <Text style={[styles.upgradeText, { color: theme.colors.placeholder }]}>Upgrade any time</Text>
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
  illustration: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 24,
  },
  planSelector: {
    flexDirection: "row",
    borderRadius: 30,
    padding: 4,
    marginBottom: 32,
  },
  planOption: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 28,
  },
  activePlan: {
    backgroundColor: "#8B5CF6",
  },
  planText: {
    fontSize: 16,
    fontWeight: "600",
  },
  activePlanText: {
    color: "#FFFFFF",
  },
  features: {
    marginBottom: 32,
  },
  featureItem: {
    flexDirection: "row",
    marginBottom: 24,
  },
  featureIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  startButton: {
    borderRadius: 30,
    marginBottom: 16,
  },
  buttonContent: {
    height: 56,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: "600",
  },
  upgradeText: {
    fontSize: 14,
    textAlign: "center",
  },
})

