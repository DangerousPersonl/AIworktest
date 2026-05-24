import React from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import styles from './index.module.scss';
import { mockStudyRecords } from '@/data/mockData';

const RecordPage: React.FC = () => {
  // 计算统计数据
  const totalStudies = mockStudyRecords.length;
  const totalQuestions = mockStudyRecords.reduce((sum, r) => sum + r.totalQuestions, 0);
  const avgScore = totalStudies > 0 
    ? Math.round(mockStudyRecords.reduce((sum, r) => sum + r.score, 0) / totalStudies) 
    : 0;
  
  return (
    <ScrollView className={styles.container} scrollY>
      <View className={styles.header}>
        <Text className={styles.title}>📖 学习记录</Text>
        <Text className={styles.subtitle}>查看你的学习历程</Text>
      </View>
      
      <View className={styles.statsCard}>
        <Text className={styles.statsTitle}>📊 数据概览</Text>
        <View className={styles.statsGrid}>
          <View className={styles.statItem}>
            <Text className={styles.statValue}>{totalStudies}</Text>
            <Text className={styles.statLabel}>学习次数</Text>
          </View>
          <View className={styles.statItem}>
            <Text className={styles.statValue}>{totalQuestions}</Text>
            <Text className={styles.statLabel}>答题总数</Text>
          </View>
          <View className={styles.statItem}>
            <Text className={styles.statValue}>{avgScore}%</Text>
            <Text className={styles.statLabel}>平均得分</Text>
          </View>
        </View>
      </View>
      
      <Text className={styles.sectionTitle}>📝 历史记录</Text>
      
      {mockStudyRecords.length === 0 ? (
        <View className={styles.emptyState}>
          <Text className={styles.emptyIcon}>📭</Text>
          <Text className={styles.emptyText}>暂无学习记录</Text>
        </View>
      ) : (
        <View className={styles.recordList}>
          {mockStudyRecords.map((record) => (
            <View key={record.id} className={styles.recordItem}>
              <View className={styles.recordHeader}>
                <Text className={styles.recordTopic}>{record.topic}</Text>
                <Text className={styles.recordScore}>{record.score}分</Text>
              </View>
              <View className={styles.recordInfo}>
                <View className={styles.infoItem}>
                  <Text>📅</Text>
                  <Text>{record.date}</Text>
                </View>
                <View className={styles.infoItem}>
                  <Text>📝</Text>
                  <Text>{record.totalQuestions}题</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default RecordPage;
