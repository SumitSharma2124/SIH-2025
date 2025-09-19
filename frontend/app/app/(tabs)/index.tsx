import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { MapPin, Lightbulb, Trash2, Paintbrush, TrafficCone as Traffic, Droplets, Plus, CircleCheck as CheckCircle2, Clock, TriangleAlert as AlertTriangle } from 'lucide-react-native';
import ReportIssueModal from '../../components/ReportIssueModal';

const reportCategories = [
  { id: 1, title: 'Pothole', icon: MapPin, color: '#6366F1' },
  { id: 2, title: 'Street Light', icon: Lightbulb, color: '#F59E0B' },
  { id: 3, title: 'Trash/Sanitation', icon: Trash2, color: '#6B7280' },
  { id: 4, title: 'Graffiti', icon: Paintbrush, color: '#EF4444' },
  { id: 5, title: 'Traffic Signal', icon: Traffic, color: '#DC2626' },
  { id: 6, title: 'Water/Drainage', icon: Droplets, color: '#06B6D4' },
];

const statusItems = [
  { title: 'High Priority', color: '#EF4444' },
  { title: 'Resolved', color: '#10B981' },
  { title: 'In Progress', color: '#F59E0B' },
  { title: 'Pending', color: '#9CA3AF' },
];

export default function HomeScreen() {
  const [showReportModal, setShowReportModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<typeof reportCategories[0] | null>(null);

  const handleCategoryPress = (category: typeof reportCategories[0]) => {
    setSelectedCategory(category);
    setShowReportModal(true);
  };

  const handleReportNewIssue = () => {
    setSelectedCategory(null);
    setShowReportModal(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <CheckCircle2 color="#FFFFFF" size={24} />
            </View>
            <View style={styles.headerText}>
              <Text style={styles.appName}>CivicReport</Text>
              <Text style={styles.tagline}>Report. Track. Resolve.</Text>
            </View>
          </View>
        </View>

        {/* Quick Report Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Report</Text>
          <View style={styles.categoryGrid}>
            {reportCategories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryCard}
                activeOpacity={0.7}
                onPress={() => handleCategoryPress(category)}
              >
                <View style={[styles.categoryIcon, { backgroundColor: `${category.color}20` }]}>
                  <category.icon color={category.color} size={24} />
                </View>
                <Text style={styles.categoryTitle}>{category.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Report New Issue Button */}
        <TouchableOpacity 
          style={styles.reportButton} 
          activeOpacity={0.8}
          onPress={handleReportNewIssue}
        >
          <Plus color="#FFFFFF" size={20} />
          <Text style={styles.reportButtonText}>Report New Issue</Text>
        </TouchableOpacity>

        {/* Location Services */}
        <View style={styles.locationContainer}>
          <MapPin color="#10B981" size={16} />
          <Text style={styles.locationText}>Location services active</Text>
        </View>

        {/* Statistics */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <AlertTriangle color="#EF4444" size={20} />
            </View>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Active Issues</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <Clock color="#4285F4" size={20} />
            </View>
            <Text style={styles.statNumber}>2.4h</Text>
            <Text style={styles.statLabel}>Avg. Response</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIconContainer}>
              <CheckCircle2 color="#10B981" size={20} />
            </View>
            <Text style={styles.statNumber}>89%</Text>
            <Text style={styles.statLabel}>Resolved</Text>
          </View>
        </View>

        {/* Issue Status */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Issue Status</Text>
          <View style={styles.statusContainer}>
            {statusItems.map((status, index) => (
              <View key={index} style={styles.statusItem}>
                <View style={[styles.statusDot, { backgroundColor: status.color }]} />
                <Text style={styles.statusText}>{status.title}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.statusNote}>Tap any marker for details</Text>
        </View>
      </ScrollView>
      
      <ReportIssueModal
        visible={showReportModal}
        onClose={() => setShowReportModal(false)}
        selectedCategory={selectedCategory}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  appName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 2,
  },
  tagline: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 12,
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
  },
  reportButton: {
    backgroundColor: '#4285F4',
    marginHorizontal: 20,
    marginTop: 24,
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4285F4',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  reportButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    paddingVertical: 8,
  },
  locationText: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '500',
    marginLeft: 6,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 24,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  statIconContainer: {
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
    textAlign: 'center',
  },
  statusContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 12,
  },
  statusText: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  statusNote: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
});