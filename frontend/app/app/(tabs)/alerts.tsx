import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Bell, TriangleAlert as AlertTriangle, Info, CircleCheck as CheckCircle2, Settings } from 'lucide-react-native';

const alerts = [
  {
    id: 1,
    type: 'update',
    title: 'Issue Update',
    message: 'Your pothole report on Main Street has been assigned to a repair crew.',
    time: '5 minutes ago',
    icon: Info,
    color: '#4285F4',
  },
  {
    id: 2,
    type: 'resolved',
    title: 'Issue Resolved',
    message: 'The broken street light on Oak Street has been fixed.',
    time: '2 hours ago',
    icon: CheckCircle2,
    color: '#10B981',
  },
  {
    id: 3,
    type: 'urgent',
    title: 'Urgent Notice',
    message: 'Water main break reported in your area. Temporary service disruption expected.',
    time: '1 day ago',
    icon: AlertTriangle,
    color: '#EF4444',
  },
];

export default function AlertsScreen() {
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsPress = () => {
    setShowSettings(true);
    // You can implement alert settings modal here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Alerts</Text>
        <Text style={styles.headerSubtitle}>Stay updated on civic issues</Text>
        <TouchableOpacity 
          style={styles.settingsButton}
          onPress={handleSettingsPress}
        >
          <Settings color="#6B7280" size={20} />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {alerts.map((alert) => (
          <TouchableOpacity key={alert.id} style={styles.alertCard} activeOpacity={0.7}>
            <View style={styles.alertContent}>
              <View style={[styles.iconContainer, { backgroundColor: `${alert.color}20` }]}>
                <alert.icon color={alert.color} size={20} />
              </View>
              <View style={styles.alertText}>
                <Text style={styles.alertTitle}>{alert.title}</Text>
                <Text style={styles.alertMessage}>{alert.message}</Text>
                <Text style={styles.alertTime}>{alert.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        
        <View style={styles.emptyState}>
          <Bell color="#D1D5DB" size={48} />
          <Text style={styles.emptyTitle}>You're all caught up!</Text>
          <Text style={styles.emptyMessage}>
            We'll notify you when there are updates on your reports or issues in your area.
          </Text>
        </View>
      </ScrollView>
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
  settingsButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  alertCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  alertContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  alertText: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  alertMessage: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    marginBottom: 8,
  },
  alertTime: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6B7280',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyMessage: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 20,
  },
});