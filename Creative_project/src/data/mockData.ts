import { Question, StudyRecord } from '@/types';

export const quickTopics = [
  'JavaScript',
  '数学知识',
  '英语单词',
  '历史常识',
  '科学探索',
  '地理知识'
];

export const generateQuestions = (topic: string): Question[] => {
  const baseQuestions: Record<string, Question[]> = {
    JavaScript: [
      {
        id: '1',
        question: 'JavaScript中，以下哪个不是原始数据类型？',
        options: ['String', 'Number', 'Array', 'Boolean'],
        correctAnswer: 2,
        explanation: 'Array是引用数据类型，不是原始数据类型。JavaScript的原始数据类型包括：String、Number、Boolean、Null、Undefined、Symbol、BigInt。'
      },
      {
        id: '2',
        question: 'const声明的变量有什么特点？',
        options: ['值不能改变', '引用不能改变', '既不能改变值也不能改变引用', '可以重新声明'],
        correctAnswer: 1,
        explanation: 'const声明的变量，其引用不能改变，但如果是对象，其属性值可以修改。'
      },
      {
        id: '3',
        question: '以下哪个方法用于数组遍历？',
        options: ['map()', 'toString()', 'slice()', 'concat()'],
        correctAnswer: 0,
        explanation: 'map()方法用于遍历数组并返回一个新数组。'
      },
      {
        id: '4',
        question: 'Promise的三种状态不包括？',
        options: ['pending', 'fulfilled', 'rejected', 'completed'],
        correctAnswer: 3,
        explanation: 'Promise有三种状态：pending（等待中）、fulfilled（已成功）、rejected（已失败）。'
      },
      {
        id: '5',
        question: 'ES6中箭头函数的this指向是？',
        options: ['函数自身', '全局对象', '外层作用域', 'undefined'],
        correctAnswer: 2,
        explanation: '箭头函数没有自己的this，它的this继承自外层作用域。'
      }
    ],
    数学知识: [
      {
        id: '1',
        question: '圆的周长公式是？',
        options: ['πr²', '2πr', 'πr', 'πd²'],
        correctAnswer: 1,
        explanation: '圆的周长公式是C=2πr或C=πd，其中r是半径，d是直径。'
      },
      {
        id: '2',
        question: '1+2+3+...+100等于多少？',
        options: ['5000', '5050', '5100', '4950'],
        correctAnswer: 1,
        explanation: '等差数列求和公式：(首项+末项)×项数÷2 = (1+100)×100÷2 = 5050。'
      },
      {
        id: '3',
        question: '直角三角形的斜边长度可以通过什么定理计算？',
        options: ['正弦定理', '余弦定理', '勾股定理', '面积公式'],
        correctAnswer: 2,
        explanation: '勾股定理：a² + b² = c²，其中c为斜边长度。'
      },
      {
        id: '4',
        question: 'π的值大约是多少？',
        options: ['3.1415', '3.1428', '3.1416', '3.1414'],
        correctAnswer: 0,
        explanation: 'π是圆周率，约等于3.1415926535...'
      },
      {
        id: '5',
        question: '2的10次方是多少？',
        options: ['64', '128', '256', '1024'],
        correctAnswer: 3,
        explanation: '2的10次方等于1024。'
      }
    ],
    英语单词: [
      {
        id: '1',
        question: '"Beautiful"的意思是？',
        options: ['丑陋的', '美丽的', '高大的', '矮小的'],
        correctAnswer: 1,
        explanation: 'Beautiful是形容词，意为"美丽的"。'
      },
      {
        id: '2',
        question: '"Quick"的同义词是？',
        options: ['Slow', 'Fast', 'Big', 'Small'],
        correctAnswer: 1,
        explanation: 'Quick意为"快速的"，同义词是Fast。'
      },
      {
        id: '3',
        question: '"Happiness"是什么词性？',
        options: ['形容词', '动词', '名词', '副词'],
        correctAnswer: 2,
        explanation: 'Happiness是名词，意为"幸福"。'
      },
      {
        id: '4',
        question: '"Go"的过去式是？',
        options: ['Goes', 'Gone', 'Went', 'Going'],
        correctAnswer: 2,
        explanation: 'Go的过去式是Went，过去分词是Gone。'
      },
      {
        id: '5',
        question: '"Knowledge"的意思是？',
        options: ['智慧', '知识', '力量', '勇气'],
        correctAnswer: 1,
        explanation: 'Knowledge是名词，意为"知识"。'
      }
    ]
  };

  const defaultQuestions: Question[] = [
    {
      id: '1',
      question: `关于"${topic}"，你觉得以下哪个是正确的？`,
      options: ['选项A', '选项B', '选项C', '选项D'],
      correctAnswer: 0,
      explanation: '这是一个示例问题，实际使用时AI会生成更合适的题目。'
    },
    {
      id: '2',
      question: `在${topic}领域，以下说法正确的是？`,
      options: ['说法A', '说法B', '说法C', '说法D'],
      correctAnswer: 1,
      explanation: '继续努力学习，你会掌握更多知识！'
    },
    {
      id: '3',
      question: `以下哪个不是${topic}的特点？`,
      options: ['特点A', '特点B', '特点C', '特点D'],
      correctAnswer: 2,
      explanation: '每个知识领域都有其独特之处。'
    }
  ];

  return baseQuestions[topic] || defaultQuestions;
};

export const mockStudyRecords: StudyRecord[] = [
  {
    id: '1',
    topic: 'JavaScript',
    date: '2024-01-15',
    score: 80,
    totalQuestions: 5,
    timeSpent: 180
  },
  {
    id: '2',
    topic: '数学知识',
    date: '2024-01-14',
    score: 100,
    totalQuestions: 5,
    timeSpent: 120
  },
  {
    id: '3',
    topic: '英语单词',
    date: '2024-01-13',
    score: 60,
    totalQuestions: 5,
    timeSpent: 240
  }
];
