import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { FileText, Calendar, MapPin, Clock, Plus } from 'lucide-react-native';
import ReportIssueModal from '../../components/ReportIssueModal';

const reportItems = [
  {
    id: 1,
    title: 'Pothole on Main Street',
    status: 'In Progress',
    date: '2 days ago',
    location: 'Main St & 2nd Ave',
    priority: 'High',
  },
  {
    id: 2,
    title: 'Broken Street Light',
    status: 'Resolved',
    date: '1 week ago',
    location: 'Oak Street',
    priority: 'Medium',
  },
  {
    id: 3,
    title: 'Graffiti Removal Needed',
    status: 'Pending',
    date: '3 days ago',
    location: 'Community Center',
    priority: 'Low',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'In Progress': return '#F59E0B';
    case 'Resolved': return '#10B981';
    case 'Pending': return '#9CA3AF';
    default: return '#6B7280';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High': return '#EF4444';
    case 'Medium': return '#F59E0B';
    case 'Low': return '#10B981';
    default: return '#6B7280';
  }
};

export default function ReportsScreen() {
  const [showReportModal, setShowReportModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Reports</Text>
        <Text style={styles.headerSubtitle}>Track your submitted issues</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setShowReportModal(true)}
        >
          <Plus color="#4285F4" size={20} />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {reportItems.map((item) => (
          <TouchableOpacity key={item.id} style={styles.reportCard} activeOpacity={0.7}>
            <View style={styles.reportHeader}>
              <Text style={styles.reportTitle}>{item.title}</Text>
              <View style={[styles.statusBadge, { backgroundColor: `${getStatusColor(item.status)}20` }]}>
                <Text style={[styles.statusText, { color: getStatusColor(item.status) }]}>
                  {item.status}
                </Text>
              </View>
            </View>
            
            <View style={styles.reportDetails}>
              <View style={styles.detailRow}>
                <Calendar color="#6B7280" size={14} />
                <Text style={styles.detailText}>{item.date}</Text>
              </View>
              <View style={styles.detailRow}>
                <MapPin color="#6B7280" size={14} />
                <Text style={styles.detailText}>{item.location}</Text>
              </View>
              <View style={styles.detailRow}>
                <View style={[styles.priorityDot, { backgroundColor: getPriorityColor(item.priority) }]} />
                <Text style={styles.detailText}>{item.priority} Priority</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <ReportIssueModal
        visible={showReportModal}
        onClose={() => setShowReportModal(false)}
        selectedCategory={null}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
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
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    flex: 1,
  },
  addButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  reportCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  reportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  reportTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginRight: 12,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  reportDetails: {
    gap: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#6B7280',
  },
  priorityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});