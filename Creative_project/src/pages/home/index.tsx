import React, { useState, useEffect } from 'react';
import { View, Text, Input, Button, ScrollView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import styles from './index.module.scss';
import { quickTopics, mockStudyRecords } from '@/data/mockData';
import { useQuizStore } from '@/store/useQuizStore';

const HomePage: React.FC = () => {
  const [inputTopic, setInputTopic] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const { setTopic, setQuestions, resetQuiz } = useQuizStore();
  
  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    setInputTopic(topic);
  };
  
  const handleStart = () => {
    const topic = selectedTopic || inputTopic;
    if (!topic.trim()) {
      Taro.showToast({
        title: '请输入学习主题',
        icon: 'none'
      });
      return;
    }
    
    // 重置并设置新的问答
    resetQuiz();
    setTopic(topic);
    
    Taro.showToast({
      title: '开始学习！',
      icon: 'success'
    });
    
    // 跳转到答题页
    setTimeout(() => {
      Taro.switchTab({
        url: '/pages/quiz/index'
      });
    }, 500);
  };
  
  // 计算统计数据
  const totalStudies = mockStudyRecords.length;
  const totalQuestions = mockStudyRecords.reduce((sum, r) => sum + r.totalQuestions, 0);
  const avgScore = totalStudies > 0 
    ? Math.round(mockStudyRecords.reduce((sum, r) => sum + r.score, 0) / totalStudies) 
    : 0;
  
  return (
    <ScrollView className={styles.container} scrollY>
      <View className={styles.header}>
        <Text className={styles.title}>🎓 学习助手</Text>
        <Text className={styles.subtitle}>AI引导式学习，轻松掌握知识</Text>
      </View>
      
      <View className={styles.inputSection}>
        <View className={styles.inputCard}>
          <Text className={styles.inputLabel}>设置学习主题</Text>
          <Input
            className={styles.input}
            placeholder="例如：JavaScript、数学、英语..."
            value={inputTopic}
            onInput={(e) => {
              setInputTopic(e.detail.value);
              setSelectedTopic('');
            }}
          />
          <Button
            className={classnames(styles.startButton, {
              [styles.disabled]: !(inputTopic.trim() || selectedTopic)
            })}
            onClick={handleStart}
            disabled={!(inputTopic.trim() || selectedTopic)}
          >
            🚀 开始学习
          </Button>
        </View>
      </View>
      
      <View className={styles.quickTopicsSection}>
        <Text className={styles.sectionTitle}>✨ 快速选择主题</Text>
        <View className={styles.topicsGrid}>
          {quickTopics.map((topic) => (
            <Button
              key={topic}
              className={classnames(styles.topicItem, {
                [styles.active]: selectedTopic === topic
              })}
              onClick={() => handleTopicSelect(topic)}
            >
              {topic}
            </Button>
          ))}
        </View>
      </View>
      
      <View className={styles.statsSection}>
        <View className={styles.statsCard}>
          <Text className={styles.statsTitle}>📊 学习统计</Text>
          <View className={styles.statsContent}>
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
      </View>
    </ScrollView>
  );
};

export default HomePage;
