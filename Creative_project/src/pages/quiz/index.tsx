import React, { useState, useEffect } from 'react';
import { View, Text, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import classnames from 'classnames';
import styles from './index.module.scss';
import { useQuizStore } from '@/store/useQuizStore';
import { generateQuestions } from '@/data/mockData';

const QuizPage: React.FC = () => {
  const { 
    topic, 
    questions, 
    currentQuestion, 
    answers, 
    isFinished,
    setQuestions,
    selectAnswer,
    nextQuestion,
    resetQuiz
  } = useQuizStore();
  
  const [hasAnswered, setHasAnswered] = useState(false);
  
  // 初始化题目
  useEffect(() => {
    if (topic && questions.length === 0) {
      const generatedQuestions = generateQuestions(topic);
      setQuestions(generatedQuestions);
    }
  }, [topic, questions.length, setQuestions]);
  
  // 检查当前题目是否已作答
  useEffect(() => {
    setHasAnswered(typeof answers[currentQuestion] === 'number');
  }, [answers, currentQuestion]);
  
  const handleOptionSelect = (index: number) => {
    if (hasAnswered) return;
    selectAnswer(index);
    setHasAnswered(true);
  };
  
  const handleNext = () => {
    nextQuestion();
    setHasAnswered(false);
  };
  
  const handleRestart = () => {
    resetQuiz();
    Taro.switchTab({
      url: '/pages/home/index'
    });
  };
  
  const goHome = () => {
    Taro.switchTab({
      url: '/pages/home/index'
    });
  };
  
  // 空状态
  if (!topic) {
    return (
      <View className={styles.container}>
        <View className={styles.emptyState}>
          <Text className={styles.emptyIcon}>📝</Text>
          <Text className={styles.emptyText}>请先在首页设置学习主题</Text>
          <Button className={styles.goHomeButton} onClick={goHome}>
            去首页
          </Button>
        </View>
      </View>
    );
  }
  
  // 答题完成 - 显示结果
  if (isFinished && questions.length > 0) {
    const correctCount = answers.filter((answer, index) => 
      answer === questions[index].correctAnswer
    ).length;
    const score = Math.round((correctCount / questions.length) * 100);
    
    return (
      <View className={styles.container}>
        <View className={styles.resultCard}>
          <Text className={styles.resultIcon}>🎉</Text>
          <Text className={styles.scoreText}>{score}分</Text>
          <Text className={styles.scoreLabel}>答题完成！</Text>
          <View className={styles.resultStats}>
            <View className={styles.resultStatItem}>
              <Text className={styles.resultStatValue}>{questions.length}</Text>
              <Text className={styles.resultStatLabel}>总题数</Text>
            </View>
            <View className={styles.resultStatItem}>
              <Text className={styles.resultStatValue}>{correctCount}</Text>
              <Text className={styles.resultStatLabel}>答对</Text>
            </View>
            <View className={styles.resultStatItem}>
              <Text className={styles.resultStatValue}>{questions.length - correctCount}</Text>
              <Text className={styles.resultStatLabel}>答错</Text>
            </View>
          </View>
        </View>
        <Button className={styles.restartButton} onClick={handleRestart}>
          再来一次
        </Button>
      </View>
    );
  }
  
  // 答题中
  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const selectedAnswer = answers[currentQuestion];
  const isCorrect = hasAnswered && selectedAnswer === currentQ?.correctAnswer;
  
  return (
    <View className={styles.container}>
      <View className={styles.progressSection}>
        <View className={styles.progressBar}>
          <View 
            className={styles.progressFill} 
            style={{ width: `${progress}%` }} 
          />
        </View>
        <Text className={styles.progressText}>
          {currentQuestion + 1} / {questions.length}
        </Text>
      </View>
      
      <Text className={styles.topicBadge}>📚 {topic}</Text>
      
      <View className={styles.questionCard}>
        <Text className={styles.questionText}>{currentQ?.question}</Text>
      </View>
      
      <View className={styles.optionsList}>
        {currentQ?.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectOption = index === currentQ.correctAnswer;
          
          let optionClass = '';
          if (hasAnswered) {
            if (isCorrectOption) {
              optionClass = styles.correct;
            } else if (isSelected) {
              optionClass = styles.wrong;
            }
          } else if (isSelected) {
            optionClass = styles.selected;
          }
          
          return (
            <Button
              key={index}
              className={classnames(styles.optionItem, optionClass)}
              onClick={() => handleOptionSelect(index)}
            >
              <View className={styles.optionLabel}>
                {String.fromCharCode(65 + index)}
              </View>
              <Text className={styles.optionText}>{option}</Text>
            </Button>
          );
        })}
      </View>
      
      {hasAnswered && (
        <View className={styles.explanationCard}>
          <Text className={styles.explanationTitle}>
            {isCorrect ? '✅ 回答正确！' : '❌ 回答错误'}
          </Text>
          <Text className={styles.explanationText}>{currentQ?.explanation}</Text>
        </View>
      )}
      
      {hasAnswered && (
        <Button 
          className={styles.nextButton}
          onClick={handleNext}
        >
          {currentQuestion < questions.length - 1 ? '下一题' : '查看结果'}
        </Button>
      )}
    </View>
  );
};

export default QuizPage;
