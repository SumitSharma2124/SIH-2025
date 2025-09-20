import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { FileText, Calendar, MapPin, Clock, Plus } from 'lucide-react-native';
import ReportIssueModal from '../../components/ReportIssueModal';

// ...removed static reportItems array...
// Report type for fetched reports
type Report = {
  _id: string;
  title: string;
  status: string;
  createdAt: string;
  location?: { coordinates: [number, number] };
  priority?: string;
  category?: string;
  description?: string;
};

const getStatusColor = (status: string) => {
  switch (status?.toLowerCase()) {
    case 'in-progress': return '#F59E0B';
    case 'resolved': return '#10B981';
    case 'pending': return '#9CA3AF';
    case 'acknowledged': return '#6366F1';
    case 'submitted': return '#6B7280';
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
         {/* ...existing code for dynamic reports rendering... */}
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
    // ...existing styles...
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