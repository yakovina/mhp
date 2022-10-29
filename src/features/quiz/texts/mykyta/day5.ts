import {QuestionList} from '../../types';
import Img from '../../img/scenes/page_06.jpg'

export const Day5: QuestionList = [{
    id: 101,
    img: Img,
    question: `Ви меломан, тому в салоні майже не слухаєте радіо. З великою любов'ю сформували чималий джазовий плейліст для роботи і регулярно його оновлюєте.`,
    answers: [
        {
            id: 1,
            text: 'Далі',
            next: 102,
        },
    ],
},
    {
        id: 102,
        question: `Кілька разів пасажири просили увімкнути радіо, бо хотіли послухати новини, проте щодо самої музики ви отримували лише компліменти.`,
        answers: [
            {
                id: 1,
                text: 'Далі',
                next: 103,
            },
        ],
    },
    {
        id: 103,
        question: `Цього разу вам трапився пасажир, який також попросив перемкнути на радіо. Ваші дії?`,
        answers: [
            {
                id: 1,
                text: 'Просто перемкну',
                next: 201,
            },{
                id: 2,
                text: 'Запитаю, чому',
                next: 104,
            },
        ],
    },
    {
        id: 201,
        question: `Пасажир зітхає з полегшенням. Каже, що подібну музику слухала його колишня. «Ну як можна таке слухати?»
Ваші дії?`,
        answers: [
            {
                id: 1,
                text: 'Нічого не відповідатиму',
                next: 202,
            },{
                id: 2,
                text: 'Скажу, що у його колишньої був відмінний смак',
                next: 203,
            },
        ],
    },
    {
        id: 202,
        question: `Їдете мовчки під звуки радіо до кінця шляху і чекаєте, доки це скінчиться.`,
        answers: [
            {
                id: 1,
                text: 'Далі',
                next: 204,
            },
        ],
    },
    {
        id: 204,
        question: `Ви приїхали! Пасажир пішов, а ви знову включили улюблену музику. Ви отримуєте 5 зірок – страждання під час поїздки все ж окупилися.`,
        rate: 5,
        answers: [
            {
                id: 1,
                text: 'Перейти до наступного дня',
                next: 0,
            },
        ],
    },
    {
        id: 203,
        question: `«Я вас чудово розумію», – й наступні 10 хвилин пасажир в усіх подробицях розповідає історію свого невдалого кохання. Працюватимете психологом?`,
        answers: [
            {
                id: 1,
                text: 'Так, ставитиму уточнюючі питання і жалітиму його',
                next: 205,
            },{
                id: 2,
                text: 'Ні, я на боці його дівчини',
                next: 206,
            },
        ],
    },
    {
        id: 205,
        question: `Ви отримуєте 5 зірок, схвальний відгук і 20 грн чайових.`,
        rate: 5,
        answers: [
            {
                id: 1,
                text: 'Перейти до наступного дня',
                next: 0,
            },
        ],
    },
    {
        id: 206,
        question: `Ви отримуєте 4 зірки і відгук про погану музику в салоні.`,
        rate: 4,
        answers: [
            {
                id: 1,
                text: 'Перейти до наступного дня',
                next: 0,
            },
        ],
    },
    {
        id: 104,
        question: `Пасажир зітхає з полегшенням. Каже, що подібну музику слухала його колишня. «Ну як можна таке слухати?»
Ваші дії?`,
        answers: [
            {
                id: 1,
                text: 'Скажу, що розумію, чому вони розійшлися і не перемикатиму',
                next: 207,
            },{
                id: 2,
                text: 'Увімкну радіо і скажу, що розумію його колишню',
                next: 105,
            },
            {
                id: 3,
                text: 'Відповім, що у його колишньої був відмінний смак і перемкну',
                next: 105,
            },
        ],
    },
    {
        id: 207,
        question: `«Гей, а ви хіба не повинні робити все, аби клієнт був задоволений?!». Що відповісте?`,
        answers: [
            {
                id: 1,
                text: 'Мовчки вимкну музику, але й радіо не вмикатиму',
                next: 208,
            },{
                id: 2,
                text: '«Моя машина – мої правила»',
                next: 208,
            },
        ],
    },
    {
        id: 208,
        question: `Далі їхатимете мовчки, а коли приїдете – пасажир грюкне дверима.`,
        answers: [
            {
                id: 1,
                text: 'Завершити поїздку',
                next: 209,
            },
        ],
    },
    {
        id: 209,
        question: `Ви отримуєте 3 зірки від пасажира і відгук, що в салоні грає жахлива музика. Але ваші принципи залишились непохитними.`,
        rate: 3,
        answers: [
            {
                id: 1,
                text: 'Перейти до наступного дня',
                next: 0,
            },
        ],
    },
    {
        id: 105,
        question: `«Я вас чудово розумію», – й наступні 10 хвилин пасажир в усіх подробицях розповідає історію свого невдалого кохання. Працюватимете психологом?`,
        answers: [
            {
                id: 1,
                text: 'Так, буду ставити уточнюючі питання і жаліти його',
                next: 106,
            },
            {
                id: 2,
                text: 'Ні, я на боці його дівчини ',
                next: 210,
            },
        ],
    },
    {
        id: 210,
        question: `Пасажир розуміє, що не зміг вразити вас своєю розповіддю, тому закривається в собі і їде мовчки до кінця шляху.`,
        answers: [
            {
                id: 1,
                text: 'Далі',
                next: 211,
            },
        ],
    },
    {
        id: 211,
        question: `Ви отримуєте 4 зірки і відгук про погану музику в салоні.`,
        rate: 4,
        answers: [
            {
                id: 1,
                text: 'Перейти до наступного дня',
                next: 0,
            },
        ],
    },
    {
        id: 106,
        question: `Ви доїхали, пасажир ледь стримує сльози вдячності за вашу доброту й участь. Ви прощаєтесь, як добрі друзі.`,
        answers: [
            {
                id: 1,
                text: 'Далі',
                next: 107,
            },
        ],
    },
    {
        id: 107,
        question: `Ви отримуєте 5 зірок, схвальний відгук і 20 грн чайових.`,
        rate:5,
        answers: [
            {
                id: 1,
                text: 'Перейти до наступного дня',
                next: 0,
            },
        ],
    },

];
