import { useState } from "react"
import { View, StyleSheet, ScrollView } from "react-native"
import { Text, List, Card, Button, ProgressBar } from "react-native-paper"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function CourseContentScreen() {
  const [currentStep, setCurrentStep] = useState(0)
  const totalSteps = 5

  const sections = [
    { title: "Introduction", completed: true },
    { title: "Variables", completed: true },
    { title: "Data Types", completed: false },
    { title: "Numbers", completed: false },
    { title: "Casting", completed: false },
  ]

  const handleNextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <View style={styles.container}>
      <ProgressBar progress={(currentStep + 1) / totalSteps} color="#2196F3" style={styles.progressBar} />
      <ScrollView>
        <Text style={styles.courseTitle}>Python Basics</Text>

        <Card style={styles.outputCard}>
          <Card.Content>
            <Text style={styles.codeText}>{'class Hi():\n    print("Hi")\n    print("Hi")'}</Text>
          </Card.Content>
        </Card>

        <View style={styles.content}>
          {sections.map((section, index) => (
            <List.Item
              key={index}
              title={`${index + 1}. ${section.title}`}
              left={(props) => (
                <MaterialCommunityIcons
                  name={section.completed ? "check-circle" : "circle-outline"}
                  size={24}
                  color={section.completed ? "#4CAF50" : "#9E9E9E"}
                />
              )}
              style={styles.listItem}
            />
          ))}
        </View>

        <View style={styles.examSection}>
          <Text style={styles.examTitle}>Exam - Step {currentStep + 1}</Text>
          <Text style={styles.examQuestion}>
            {`Question for step ${currentStep + 1}: What is the output of the code above?`}
          </Text>
          <Button
            mode="contained"
            onPress={handleNextStep}
            style={styles.nextButton}
            disabled={currentStep === totalSteps - 1}
          >
            {currentStep === totalSteps - 1 ? "Finish" : "Next Step"}
          </Button>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#E0E0E0",
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
  },
  outputCard: {
    margin: 20,
    backgroundColor: "#1E1E1E",
  },
  codeText: {
    color: "#FFFFFF",
    fontFamily: "monospace",
  },
  content: {
    padding: 20,
  },
  listItem: {
    paddingVertical: 8,
  },
  examSection: {
    padding: 20,
    backgroundColor: "#F5F5F5",
    margin: 20,
    borderRadius: 10,
  },
  examTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  examQuestion: {
    fontSize: 16,
    marginBottom: 20,
  },
  nextButton: {
    marginTop: 20,
  },
})

