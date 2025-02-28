import React, { useState } from "react"
import { View, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from "react-native"
import { Text } from "react-native-paper"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"

const { width } = Dimensions.get('window')

export default function HomeScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Language", "Business", "Tech"]

  const learningPaths = [
    {
      id: "1",
      title: "Professional English",
      category: "Business",
      icon: "briefcase",
      progress: 65,
      color: ["#667eea", "#764ba2"],
      skills: ["Communication", "Vocabulary"],
      duration: "4 weeks"
    },
    {
      id: "2",
      title: "Advanced Writing",
      category: "Language",
      icon: "pencil",
      progress: 45,
      color: ["#00b4db", "#0083b0"],
      skills: ["Academic", "Research"],
      duration: "6 weeks"
    },
    {
      id: "3",
      title: "Software Development",
      category: "Tech",
      icon: "code-tags",
      progress: 30,
      color: ["#ff6b6b", "#ff9a9e"],
      skills: ["Coding", "Problem Solving"],
      duration: "12 weeks"
    }
  ]

  const allCourses = [
    {
      id: "4",
      title: "IELTS Preparation",
      category: "Language",
      instructor: "Sarah Johnson",
      price: 49.99,
      rating: 4.8,
      students: 1245,
      icon: "book-education"
    },
    {
      id: "5",
      title: "Data Science Basics",
      category: "Tech",
      instructor: "Michael Chen",
      price: 79.99,
      rating: 4.7,
      students: 923,
      icon: "chart-line"
    },
    {
      id: "6",
      title: "Business Communication",
      category: "Business",
      instructor: "Emily Rodriguez",
      price: 59.99,
      rating: 4.9,
      students: 1567,
      icon: "presentation"
    },
    {
      id: "7",
      title: "Creative Writing",
      category: "Language",
      instructor: "David Kim",
      price: 44.99,
      rating: 4.6,
      students: 678,
      icon: "fountain-pen"
    }
  ]

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <View>
          <Text style={styles.greeting}>Welcome Back,</Text>
          <Text style={styles.username}>Alex</Text>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <MaterialCommunityIcons name="bell-outline" size={24} color="#333" />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
      </View>
    </View>
  )

  const renderCategoryFilter = () => (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryContainer}
    >
      {categories.map((category) => (
        <TouchableOpacity 
          key={category}
          onPress={() => setActiveCategory(category)}
          style={[
            styles.categoryChip,
            activeCategory === category && styles.activeCategoryChip
          ]}
        >
          <Text style={[
            styles.categoryText,
            activeCategory === category && styles.activeCategoryText
          ]}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )

  const renderLearningPaths = () => (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>My Learning Paths</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.pathContainer}
      >
        {learningPaths
          .filter(path => 
            activeCategory === "All" || path.category === activeCategory
          )
          .map((path, index) => (
            <TouchableOpacity key={path.id} style={styles.pathCard}>
              <LinearGradient
                colors={path.color}
                style={styles.pathCardGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <View style={styles.pathCardContent}>
                  <View style={styles.pathHeader}>
                    <View style={styles.pathIconContainer}>
                      <MaterialCommunityIcons 
                        name={path.icon} 
                        size={24} 
                        color="white" 
                      />
                    </View>
                    <Text style={styles.pathDuration}>{path.duration}</Text>
                  </View>
                  
                  <Text style={styles.pathTitle}>{path.title}</Text>
                  
                  <View style={styles.pathSkills}>
                    {path.skills.map((skill) => (
                      <View key={skill} style={styles.skillBadge}>
                        <Text style={styles.skillText}>{skill}</Text>
                      </View>
                    ))}
                  </View>
                  
                  <View style={styles.progressContainer}>
                    <View 
                      style={[
                        styles.progressBar, 
                        { width: `${path.progress}%` }
                      ]} 
                    />
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  )

  const renderAllCourses = () => (
  <View style={styles.sectionContainer}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Available Courses</Text>
      <TouchableOpacity>
        <Text style={styles.seeAllText}>See All</Text>
      </TouchableOpacity>
    </View>
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.coursesContainer}
    >
      {allCourses
        .filter(course => 
          activeCategory === "All" || course.category === activeCategory
        )
        .map((course) => (
          <TouchableOpacity key={course.id} style={styles.courseCard}>
            <View style={styles.courseCardHeader}>
              <View style={styles.courseIconContainer}>
                <MaterialCommunityIcons 
                  name={course.icon} 
                  size={24} 
                  color="#6366F1" 
                />
              </View>
              <Text style={styles.coursePrice}>${course.price}</Text>
            </View>
            <Text style={styles.courseTitle} numberOfLines={2}>{course.title}</Text>
            <Text style={styles.courseInstructor}>{course.instructor}</Text>
            <View style={styles.courseStats}>
              <View style={styles.statGroup}>
                <View style={styles.statItem}>
                  <MaterialCommunityIcons name="star" size={16} color="#FFC107" />
                  <Text style={styles.statText}>{course.rating}</Text>
                </View>
                <View style={styles.statItem}>
                  <MaterialCommunityIcons name="account-group" size={16} color="#6B7280" />
                  <Text style={styles.statText}>{course.students}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
    </ScrollView>
  </View>
)

  const renderQuickActions = () => (
    <View style={styles.quickActionsContainer}>
      <View style={styles.quickActionsContent}>
        {[
          { icon: "book-open", title: "Courses", color: "#6366F1" },
          { icon: "certificate", title: "Certificates", color: "#10B981" },
          { icon: "account-group", title: "Mentors", color: "#F43F5E" }
        ].map((action) => (
          <TouchableOpacity key={action.title} style={styles.quickActionItem}>
            <View style={[styles.quickActionIconBg, { backgroundColor: `${action.color}20` }]}>
              <MaterialCommunityIcons 
                name={action.icon} 
                size={24} 
                color={action.color} 
              />
            </View>
            <Text style={styles.quickActionText}>{action.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )

  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {renderHeader()}
      {renderCategoryFilter()}
      {renderLearningPaths()}
      {renderAllCourses()}
      {renderQuickActions()}
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FA',
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2D3748',
  },
  seeAllText: {
    color: '#6366F1',
    fontSize: 14,
    fontWeight: '600',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 16,
    color: '#718096',
  },
  username: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2D3748',
  },
  notificationIcon: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF6B6B',
  },
  categoryContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  categoryChip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: '#E2E8F0',
  },
  activeCategoryChip: {
    backgroundColor: '#6366F1',
  },
  categoryText: {
    color: '#4A5568',
    fontWeight: '600',
  },
  activeCategoryText: {
    color: 'white',
  },
  pathContainer: {
    paddingHorizontal: 24,
  },
  pathCard: {
    width: width * 0.75,
    marginRight: 16,
    borderRadius: 24,
    overflow: 'hidden',
  },
  pathCardGradient: {
    padding: 24,
  },
  pathCardContent: {
    height: 250,
    justifyContent: 'space-between',
  },
  pathHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pathIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pathDuration: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  pathTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  pathSkills: {
    flexDirection: 'row',
  },
  skillBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    marginRight: 8,
  },
  skillText: {
    color: 'white',
    fontSize: 12,
  },
  progressContainer: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 3,
    marginTop: 16,
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 3,
  },
    coursesContainer: {
    paddingHorizontal: 24,
  },
  courseCard: {
    width: width * 0.65,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  courseCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  courseIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  courseDetails: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2D3748',
    marginBottom: 6,
  },
  courseInstructor: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 10,
  },
  courseStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  statText: {
    fontSize: 13,
    color: '#718096',
    marginLeft: 4,
  },
  coursePrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#6366F1',
    textAlign: 'right',
  },
  quickActionsContainer: {
    marginHorizontal: 24,
    backgroundColor: 'white',
    borderRadius: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  quickActionsContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
  },
  quickActionItem: {
    alignItems: 'center',
  },
  quickActionIconBg: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 12,
    color: '#4A5568',
  }
})