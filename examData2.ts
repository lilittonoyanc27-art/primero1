import { ExamModule } from './types';

export const EXAM_2: ExamModule = {
  id: 'exam-2',
  titleEs: 'Modalidades oracionales — Práctica de examen',
  titleHy: 'Նախադասությունների տեսակներ — Քննության վարժություններ (50 առաջադրանք)',
  badge: 'Examen 2',
  level: '7º clase / 1º ESO',
  descriptionEs: '50 ejercicios variados: opción múltiple, intrusos, situaciones de examen, verdadero/falso, transformación de oraciones y texto de comprensión.',
  descriptionHy: '50 բազմազան վարժություն՝ ընտրովի հարցեր, ավելորդի որոնում, իրավիճակներ, ճիշտ/սխալ, տեսակի ձևափոխում և տեքստային առաջադրանք։',
  totalQuestions: 50,
  sections: [
    {
      id: 'ex2-sec1',
      titleEs: 'Parte 1 — Elige la modalidad correcta',
      titleHy: 'Մաս 1 — Ընտրի՛ր ճիշտ տեսակը (1–10)',
      questions: [
        {
          id: 'ex2-q1',
          number: 1,
          type: 'choice',
          promptEs: 'Esta tarde no tenemos entrenamiento.',
          promptHy: 'Այսօր կեսօրից հետո մարզում չունենք։',
          options: [
            { key: 'a', textEs: 'Exclamativa' },
            { key: 'b', textEs: 'Enunciativa negativa' },
            { key: 'c', textEs: 'Dubitativa' },
            { key: 'd', textEs: 'Desiderativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Enunciativa negativa',
          correctAnswerHy: 'b) Enunciativa negativa — ժխտական պատմողական',
          explanationEs: 'Informa de la ausencia de entrenamiento con la negación «no».',
          explanationHy: 'Հաղորդում է տեղեկություն մարզում չլինելու մասին «no» ժխտմամբ։'
        },
        {
          id: 'ex2-q2',
          number: 2,
          type: 'choice',
          promptEs: '¿Quién ha dejado la mochila aquí?',
          promptHy: 'Ո՞վ է պայուսակն այստեղ թողել։',
          options: [
            { key: 'a', textEs: 'Interrogativa' },
            { key: 'b', textEs: 'Exhortativa' },
            { key: 'c', textEs: 'Enunciativa' },
            { key: 'd', textEs: 'Dubitativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Interrogativa',
          correctAnswerHy: 'a) Interrogativa — հարցական',
          explanationEs: 'Pregunta directa introducida por «quién».',
          explanationHy: 'Ուղիղ հարցական նախադասություն «quién» հարցական դերանվամբ։'
        },
        {
          id: 'ex2-q3',
          number: 3,
          type: 'choice',
          promptEs: '¡Qué partido tan emocionante!',
          promptHy: 'Ի՜նչ հետաքրքիր խաղ է։',
          options: [
            { key: 'a', textEs: 'Desiderativa' },
            { key: 'b', textEs: 'Dubitativa' },
            { key: 'c', textEs: 'Exclamativa' },
            { key: 'd', textEs: 'Interrogativa' }
          ],
          correctKey: 'c',
          correctAnswerEs: 'c) Exclamativa',
          correctAnswerHy: 'c) Exclamativa — բացականչական',
          explanationEs: 'Comunica emoción y entusiasmo con signos de exclamación.',
          explanationHy: 'Արտահայտում է հուզմունք և հիացմունք։'
        },
        {
          id: 'ex2-q4',
          number: 4,
          type: 'choice',
          promptEs: 'Termina el ejercicio antes de salir.',
          promptHy: 'Ավարտի՛ր վարժությունը դուրս գալուց առաջ։',
          options: [
            { key: 'a', textEs: 'Exhortativa' },
            { key: 'b', textEs: 'Enunciativa' },
            { key: 'c', textEs: 'Desiderativa' },
            { key: 'd', textEs: 'Exclamativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Exhortativa',
          correctAnswerHy: 'a) Exhortativa — հրամայական/հորդորական',
          explanationEs: '«Termina» es un mandato en imperativo.',
          explanationHy: '«Termina»-ն հրամայական ձև է՝ հրահանգ տալու համար։'
        },
        {
          id: 'ex2-q5',
          number: 5,
          type: 'choice',
          promptEs: 'Ojalá mañana no tengamos examen.',
          promptHy: 'Երանի վաղը քննություն չունենանք։',
          options: [
            { key: 'a', textEs: 'Dubitativa' },
            { key: 'b', textEs: 'Interrogativa' },
            { key: 'c', textEs: 'Desiderativa' },
            { key: 'd', textEs: 'Enunciativa' }
          ],
          correctKey: 'c',
          correctAnswerEs: 'c) Desiderativa',
          correctAnswerHy: 'c) Desiderativa — ցանկական',
          explanationEs: '«Ojalá» denota un ferviente deseo.',
          explanationHy: '«Ojalá» (երանի) բառն արտահայտում է ցանկություն։'
        },
        {
          id: 'ex2-q6',
          number: 6,
          type: 'choice',
          promptEs: 'Tal vez Carlos esté enfermo.',
          promptHy: 'Գուցե Կառլոսը հիվանդ է։',
          options: [
            { key: 'a', textEs: 'Dubitativa' },
            { key: 'b', textEs: 'Exclamativa' },
            { key: 'c', textEs: 'Desiderativa' },
            { key: 'd', textEs: 'Exhortativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Dubitativa',
          correctAnswerHy: 'a) Dubitativa — կասկածական',
          explanationEs: '«Tal vez» introduce duda o suposición.',
          explanationHy: '«Tal vez» (գուցե) արտահայտում է կասկած կամ ենթադրություն։'
        },
        {
          id: 'ex2-q7',
          number: 7,
          type: 'choice',
          promptEs: 'Mis abuelos viven en Valencia.',
          promptHy: 'Տատիկս և պապիկս ապրում են Վալենսիայում։',
          options: [
            { key: 'a', textEs: 'Enunciativa afirmativa' },
            { key: 'b', textEs: 'Interrogativa' },
            { key: 'c', textEs: 'Desiderativa' },
            { key: 'd', textEs: 'Exclamativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Enunciativa afirmativa',
          correctAnswerHy: 'a) Enunciativa afirmativa — հաստատական պատմողական',
          explanationEs: 'Expone un hecho afirmativo sobre la residencia familiar.',
          explanationHy: 'Հաղորդում է հաստատական փաստ ընտանիքի բնակության մասին։'
        },
        {
          id: 'ex2-q8',
          number: 8,
          type: 'choice',
          promptEs: '¡No toques eso!',
          promptHy: 'Դրան ձեռք մի՛ տուր։',
          noteEs: '⚠️ Aunque tiene signos de exclamación, la intención principal es dar una orden.',
          noteHy: '⚠️ Թեև կան բացականչական նշաններ, հիմնական նպատակը հրաման տալն է։',
          options: [
            { key: 'a', textEs: 'Exclamativa' },
            { key: 'b', textEs: 'Exhortativa' },
            { key: 'c', textEs: 'Dubitativa' },
            { key: 'd', textEs: 'Enunciativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Exhortativa',
          correctAnswerHy: 'b) Exhortativa — հրամայական',
          explanationEs: 'La finalidad es prohibir u ordenar no tocar algo; los signos añaden énfasis.',
          explanationHy: 'Նպատակն է արգելել/հրամայել, բացականչական նշանները միայն շեշտում են հրամանը։'
        },
        {
          id: 'ex2-q9',
          number: 9,
          type: 'choice',
          promptEs: 'Quizás lleguemos tarde.',
          promptHy: 'Գուցե մենք ուշ հասնենք։',
          options: [
            { key: 'a', textEs: 'Enunciativa' },
            { key: 'b', textEs: 'Dubitativa' },
            { key: 'c', textEs: 'Exhortativa' },
            { key: 'd', textEs: 'Desiderativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Dubitativa',
          correctAnswerHy: 'b) Dubitativa — կասկածական',
          explanationEs: '«Quizás» manifiesta inseguridad y probabilidad.',
          explanationHy: '«Quizás» բառը կասկած և հավանականություն է նշանակում։'
        },
        {
          id: 'ex2-q10',
          number: 10,
          type: 'choice',
          promptEs: 'Me encantaría viajar por toda España.',
          promptHy: 'Ես շատ կցանկանայի ճանապարհորդել ամբողջ Իսպանիայով։',
          options: [
            { key: 'a', textEs: 'Desiderativa' },
            { key: 'b', textEs: 'Interrogativa' },
            { key: 'c', textEs: 'Dubitativa' },
            { key: 'd', textEs: 'Exhortativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Desiderativa',
          correctAnswerHy: 'a) Desiderativa — ցանկական',
          explanationEs: '«Me encantaría» formula un anhelo o deseo.',
          explanationHy: '«Me encantaría» (շատ կցանկանայի) արտահայտում է ցանկություն։'
        }
      ]
    },
    {
      id: 'ex2-sec2',
      titleEs: 'Parte 2 — Un poco más difícil',
      titleHy: 'Մաս 2 — Մի փոքր ավելի դժվար (11–20)',
      questions: [
        {
          id: 'ex2-q11',
          number: 11,
          type: 'choice',
          promptEs: 'Probablemente el autobús llegará tarde.',
          promptHy: 'Հավանաբար ավտոբուսը ուշ կհասնի։',
          options: [
            { key: 'a', textEs: 'Dubitativa' },
            { key: 'b', textEs: 'Exclamativa' },
            { key: 'c', textEs: 'Exhortativa' },
            { key: 'd', textEs: 'Interrogativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Dubitativa',
          correctAnswerHy: 'a) Dubitativa — կասկածական',
          explanationEs: '«Probablemente» indica probabilidad, no certeza.',
          explanationHy: '«Probablemente» (հավանաբար) ցույց է տալիս հավանականություն։'
        },
        {
          id: 'ex2-q12',
          number: 12,
          type: 'choice',
          promptEs: 'No olvidéis entregar el trabajo mañana.',
          promptHy: 'Մի՛ մոռացեք վաղը հանձնել աշխատանքը։',
          options: [
            { key: 'a', textEs: 'Enunciativa negativa' },
            { key: 'b', textEs: 'Exhortativa' },
            { key: 'c', textEs: 'Dubitativa' },
            { key: 'd', textEs: 'Desiderativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Exhortativa',
          correctAnswerHy: 'b) Exhortativa — հորդորական/հրամայական',
          explanationEs: 'Es una instrucción o advertencia dada a los alumnos.',
          explanationHy: 'Հանձնարարական կամ հորդոր է աշակերտներին։'
        },
        {
          id: 'ex2-q13',
          number: 13,
          type: 'choice',
          promptEs: '¡Cuánto has crecido!',
          promptHy: 'Ինչքա՜ն ես մեծացել։',
          options: [
            { key: 'a', textEs: 'Interrogativa' },
            { key: 'b', textEs: 'Enunciativa' },
            { key: 'c', textEs: 'Exclamativa' },
            { key: 'd', textEs: 'Desiderativa' }
          ],
          correctKey: 'c',
          correctAnswerEs: 'c) Exclamativa',
          correctAnswerHy: 'c) Exclamativa — բացականչական',
          explanationEs: 'Admiración y sorpresa sobre el crecimiento.',
          explanationHy: 'Զարմանք և բացականչություն մեծանալու վերաբերյալ։'
        },
        {
          id: 'ex2-q14',
          number: 14,
          type: 'choice',
          promptEs: 'Puede que mañana haga frío.',
          promptHy: 'Հնարավոր է՝ վաղը ցուրտ լինի։',
          options: [
            { key: 'a', textEs: 'Desiderativa' },
            { key: 'b', textEs: 'Dubitativa' },
            { key: 'c', textEs: 'Exhortativa' },
            { key: 'd', textEs: 'Exclamativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Dubitativa',
          correctAnswerHy: 'b) Dubitativa — կասկածական',
          explanationEs: '«Puede que» expresa probabilidad con subjuntivo.',
          explanationHy: '«Puede que» (հնարավոր է) արտահայտում է հավանականություն։'
        },
        {
          id: 'ex2-q15',
          number: 15,
          type: 'choice',
          promptEs: 'Que tengas mucha suerte en el examen.',
          promptHy: 'Թող քննության ժամանակ շատ հաջողություն ունենաս։',
          options: [
            { key: 'a', textEs: 'Desiderativa' },
            { key: 'b', textEs: 'Dubitativa' },
            { key: 'c', textEs: 'Interrogativa' },
            { key: 'd', textEs: 'Enunciativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Desiderativa',
          correctAnswerHy: 'a) Desiderativa — ցանկական',
          explanationEs: 'La fórmula «Que + subjuntivo» transmite un buen deseo.',
          explanationHy: '«Que + subjuntivo» կառույցն արտահայտում է բարեմաղթանք/ցանկություն։'
        },
        {
          id: 'ex2-q16',
          number: 16,
          type: 'choice',
          promptEs: 'No hemos estudiado todavía este tema.',
          promptHy: 'Մենք դեռ չենք ուսումնասիրել այս թեման։',
          options: [
            { key: 'a', textEs: 'Enunciativa negativa' },
            { key: 'b', textEs: 'Exhortativa' },
            { key: 'c', textEs: 'Dubitativa' },
            { key: 'd', textEs: 'Interrogativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Enunciativa negativa',
          correctAnswerHy: 'a) Enunciativa negativa — ժխտական պատմողական',
          explanationEs: 'Declara la negación de una acción pasada.',
          explanationHy: 'Հաղորդում է փաստը ժխտական ձևով («չենք ուսումնասիրել»)։'
        },
        {
          id: 'ex2-q17',
          number: 17,
          type: 'choice',
          promptEs: '¿Cuándo empieza el recreo?',
          promptHy: 'Ե՞րբ է սկսվում դասամիջոցը։',
          options: [
            { key: 'a', textEs: 'Exclamativa' },
            { key: 'b', textEs: 'Interrogativa' },
            { key: 'c', textEs: 'Dubitativa' },
            { key: 'd', textEs: 'Enunciativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Interrogativa',
          correctAnswerHy: 'b) Interrogativa — հարցական',
          explanationEs: 'Pregunta directa con adverbio temporal «cuándo».',
          explanationHy: 'Ուղիղ հարց ժամանակային «cuándo» բառով։'
        },
        {
          id: 'ex2-q18',
          number: 18,
          type: 'choice',
          promptEs: 'Ven aquí un momento, por favor.',
          promptHy: 'Արի՛ այստեղ մի պահ, խնդրում եմ։',
          options: [
            { key: 'a', textEs: 'Desiderativa' },
            { key: 'b', textEs: 'Exhortativa' },
            { key: 'c', textEs: 'Enunciativa' },
            { key: 'd', textEs: 'Dubitativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Exhortativa',
          correctAnswerHy: 'b) Exhortativa — հրամայական/խնդրանք',
          explanationEs: 'Petición directa mediante el imperativo «ven».',
          explanationHy: 'Խնդրանք «ven» (արի՛) հրամայականով։'
        },
        {
          id: 'ex2-q19',
          number: 19,
          type: 'choice',
          promptEs: '¡Qué frío hace hoy!',
          promptHy: 'Ի՜նչ ցուրտ է այսօր։',
          options: [
            { key: 'a', textEs: 'Exclamativa' },
            { key: 'b', textEs: 'Desiderativa' },
            { key: 'c', textEs: 'Interrogativa' },
            { key: 'd', textEs: 'Dubitativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Exclamativa',
          correctAnswerHy: 'a) Exclamativa — բացականչական',
          explanationEs: 'Expresión exclamativa sobre la sensación térmica.',
          explanationHy: 'Բացականչություն ցրտի վերաբերյալ։'
        },
        {
          id: 'ex2-q20',
          number: 20,
          type: 'choice',
          promptEs: 'A lo mejor Pablo viene después.',
          promptHy: 'Հնարավոր է՝ Պաբլոն ավելի ուշ գա։',
          options: [
            { key: 'a', textEs: 'Exhortativa' },
            { key: 'b', textEs: 'Dubitativa' },
            { key: 'c', textEs: 'Desiderativa' },
            { key: 'd', textEs: 'Exclamativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Dubitativa',
          correctAnswerHy: 'b) Dubitativa — կասկածական',
          explanationEs: '«A lo mejor» es una locución dubitativa corriente en España.',
          explanationHy: '«A lo mejor» (հնարավոր է) արտահայտում է կասկած կամ հավանականություն։'
        }
      ]
    },
    {
      id: 'ex2-sec3',
      titleEs: 'Parte 3 — Encuentra la frase correcta',
      titleHy: 'Մաս 3 — Գտի՛ր ճիշտ նախադասությունը (21–25)',
      questions: [
        {
          id: 'ex2-q21',
          number: 21,
          type: 'choice',
          promptEs: '¿Cuál es desiderativa?',
          promptHy: 'Ո՞ր նախադասությունն է ցանկական։',
          options: [
            { key: 'a', textEs: 'No quiero ir.' },
            { key: 'b', textEs: '¿Quieres venir?' },
            { key: 'c', textEs: 'Ojalá podamos ir.' },
            { key: 'd', textEs: 'Quizás podamos ir.' }
          ],
          correctKey: 'c',
          correctAnswerEs: 'c) Ojalá podamos ir.',
          correctAnswerHy: 'c) Ojalá podamos ir. (Երանի կարողանանք գնալ։)',
          explanationEs: '«Ojalá podamos ir» expresa un deseo manifiesto.',
          explanationHy: '«Ojalá»-ով նախադասությունն է ցանկական։'
        },
        {
          id: 'ex2-q22',
          number: 22,
          type: 'choice',
          promptEs: '¿Cuál es dubitativa?',
          promptHy: 'Ո՞րն է կասկածական։',
          options: [
            { key: 'a', textEs: 'Ven conmigo.' },
            { key: 'b', textEs: 'Tal vez venga conmigo.' },
            { key: 'c', textEs: '¿Vienes conmigo?' },
            { key: 'd', textEs: '¡Ven conmigo!' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Tal vez venga conmigo.',
          correctAnswerHy: 'b) Tal vez venga conmigo. (Գուցե նա գա ինձ հետ։)',
          explanationEs: '«Tal vez» introduce la duda.',
          explanationHy: '«Tal vez»-ով նախադասությունը կասկածական է։'
        },
        {
          id: 'ex2-q23',
          number: 23,
          type: 'choice',
          promptEs: '¿Cuál es exhortativa?',
          promptHy: 'Ո՞րն է հրամայական / հորդորական։',
          options: [
            { key: 'a', textEs: 'No abras la ventana.' },
            { key: 'b', textEs: 'No he abierto la ventana.' },
            { key: 'c', textEs: '¿Has abierto la ventana?' },
            { key: 'd', textEs: 'Quizás abra la ventana.' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) No abras la ventana.',
          correctAnswerHy: 'a) No abras la ventana. (Մի՛ բացիր պատուհանը։)',
          explanationEs: '«No abras» es una orden negativa dirigida al interlocutor.',
          explanationHy: '«No abras»-ը արգելող հրաման է։'
        },
        {
          id: 'ex2-q24',
          number: 24,
          type: 'choice',
          promptEs: '¿Cuál es enunciativa afirmativa?',
          promptHy: 'Ո՞րն է հաստատական պատմողական։',
          options: [
            { key: 'a', textEs: '¿Pedro juega al fútbol?' },
            { key: 'b', textEs: 'Pedro no juega al fútbol.' },
            { key: 'c', textEs: 'Pedro juega al fútbol.' },
            { key: 'd', textEs: '¡Qué bien juega Pedro!' }
          ],
          correctKey: 'c',
          correctAnswerEs: 'c) Pedro juega al fútbol.',
          correctAnswerHy: 'c) Pedro juega al fútbol. (Պեդրոն ֆուտբոլ է խաղում։)',
          explanationEs: 'Afirma un hecho objetivo sin negación ni signos expresivos.',
          explanationHy: 'Հաստատում է փաստ առանց ժխտման կամ հարցի։'
        },
        {
          id: 'ex2-q25',
          number: 25,
          type: 'choice',
          promptEs: '¿Cuál es exclamativa?',
          promptHy: 'Ո՞րն է բացականչական։',
          options: [
            { key: 'a', textEs: 'Quizás sea difícil.' },
            { key: 'b', textEs: 'Es difícil.' },
            { key: 'c', textEs: '¿Es difícil?' },
            { key: 'd', textEs: '¡Qué difícil es!' }
          ],
          correctKey: 'd',
          correctAnswerEs: 'd) ¡Qué difícil es!',
          correctAnswerHy: 'd) ¡Qué difícil es! (Ի՜նչ դժվար է։)',
          explanationEs: 'Tiene signos de admiración y pondera con «¡Qué...!».',
          explanationHy: 'Բացականչական նշաններով է և արտահայտում է հուզական գնահատական։'
        }
      ]
    },
    {
      id: 'ex2-sec4',
      titleEs: 'Parte 4 — Encuentra el intruso',
      titleHy: 'Մաս 4 — Գտի՛ր ավելորդը (26–30)',
      questions: [
        {
          id: 'ex2-q26',
          number: 26,
          type: 'choice',
          promptEs: 'Tres son desiderativas. Una no.',
          promptHy: 'Երեքը ցանկական են, մեկը՝ ոչ։',
          options: [
            { key: 'a', textEs: 'Ojalá apruebe el examen.' },
            { key: 'b', textEs: 'Espero que todo salga bien.' },
            { key: 'c', textEs: 'Me gustaría viajar a Sevilla.' },
            { key: 'd', textEs: 'Quizás viaje a Sevilla.' }
          ],
          correctKey: 'd',
          correctAnswerEs: 'd) Quizás viaje a Sevilla.',
          correctAnswerHy: 'd) Quizás viaje a Sevilla. (դա կասկածական է, ոչ թե ցանկական)',
          explanationEs: '«Quizás» es dubitativa; las otras tres expresan deseo.',
          explanationHy: '«Quizás»-ով նախադասությունը կասկածական է, մյուս երեքը՝ ցանկական։'
        },
        {
          id: 'ex2-q27',
          number: 27,
          type: 'choice',
          promptEs: 'Tres son dubitativas. Una no.',
          promptHy: 'Երեքը կասկած են արտահայտում, մեկը՝ ոչ։',
          options: [
            { key: 'a', textEs: 'Tal vez venga.' },
            { key: 'b', textEs: 'Quizás esté en casa.' },
            { key: 'c', textEs: 'Probablemente llegue pronto.' },
            { key: 'd', textEs: 'Ojalá llegue pronto.' }
          ],
          correctKey: 'd',
          correctAnswerEs: 'd) Ojalá llegue pronto.',
          correctAnswerHy: 'd) Ojalá llegue pronto. (ցանկական է, ոչ թե կասկածական)',
          explanationEs: '«Ojalá» es desiderativa; las demás son dubitativas.',
          explanationHy: '«Ojalá»-ն արտահայտում է ցանկություն, իսկ մյուսները՝ կասկած։'
        },
        {
          id: 'ex2-q28',
          number: 28,
          type: 'choice',
          promptEs: 'Tres son exhortativas. Una no.',
          promptHy: 'Երեքը հրամայական են, մեկը՝ ոչ։',
          options: [
            { key: 'a', textEs: 'Haz los deberes.' },
            { key: 'b', textEs: 'No habléis.' },
            { key: 'c', textEs: 'Escuchad atentamente.' },
            { key: 'd', textEs: 'Tal vez estudie esta tarde.' }
          ],
          correctKey: 'd',
          correctAnswerEs: 'd) Tal vez estudie esta tarde.',
          correctAnswerHy: 'd) Tal vez estudie esta tarde. (կասկածական է, ոչ թե հրամայական)',
          explanationEs: 'Las opciones a, b y c dan órdenes; d expresa duda con «tal vez».',
          explanationHy: 'a, b և c-ն հրամաններ են, իսկ d-ն՝ կասկած։'
        },
        {
          id: 'ex2-q29',
          number: 29,
          type: 'choice',
          promptEs: 'Tres son interrogativas. Una no.',
          promptHy: 'Երեքը հարցական են, մեկը՝ ոչ։',
          options: [
            { key: 'a', textEs: '¿Dónde vives?' },
            { key: 'b', textEs: '¿Cuántos años tienes?' },
            { key: 'c', textEs: '¿Has terminado?' },
            { key: 'd', textEs: '¡Qué lejos vives!' }
          ],
          correctKey: 'd',
          correctAnswerEs: 'd) ¡Qué lejos vives!',
          correctAnswerHy: 'd) ¡Qué lejos vives! (բացականչական է, ոչ թե հարցական)',
          explanationEs: 'Es una oración exclamativa.',
          explanationHy: 'Սա բացականչական նախադասություն է։'
        },
        {
          id: 'ex2-q30',
          number: 30,
          type: 'choice',
          promptEs: 'Tres son enunciativas. Una no.',
          promptHy: 'Երեքը պատմողական են, մեկը՝ ոչ։',
          options: [
            { key: 'a', textEs: 'Ana estudia en Madrid.' },
            { key: 'b', textEs: 'Hoy no tenemos clase.' },
            { key: 'c', textEs: 'El tren sale a las ocho.' },
            { key: 'd', textEs: 'Ojalá salga el tren a tiempo.' }
          ],
          correctKey: 'd',
          correctAnswerEs: 'd) Ojalá salga el tren a tiempo.',
          correctAnswerHy: 'd) Ojalá salga el tren a tiempo. (ցանկական է, ոչ թե պատմողական)',
          explanationEs: '«Ojalá» hace que la frase sea desiderativa.',
          explanationHy: '«Ojalá»-ն նախադասությունը դարձնում է ցանկական։'
        }
      ]
    },
    {
      id: 'ex2-sec5',
      titleEs: 'Parte 5 — Situaciones de examen',
      titleHy: 'Մաս 5 — Քննության իրավիճակներ (31–35)',
      questions: [
        {
          id: 'ex2-q31',
          number: 31,
          type: 'choice',
          promptEs: 'El profesor dice: “Guardad los móviles y empezad el examen.”',
          promptHy: 'Ուսուցիչն ասում է․ «Հավաքե՛ք հեռախոսները և սկսե՛ք քննությունը»։',
          questionEs: '¿Qué modalidad predomina?',
          questionHy: 'Ո՞ր տեսակն է գերակշռում։',
          options: [
            { key: 'a', textEs: 'Exhortativa' },
            { key: 'b', textEs: 'Enunciativa' },
            { key: 'c', textEs: 'Dubitativa' },
            { key: 'd', textEs: 'Desiderativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Exhortativa',
          correctAnswerHy: 'a) Exhortativa — հրամայական',
          explanationEs: 'Da dos órdenes directas en imperativo («guardad», «empezad»).',
          explanationHy: 'Երկու ուղիղ հրաման է տալիս հրամայական եղանակով։'
        },
        {
          id: 'ex2-q32',
          number: 32,
          type: 'choice',
          promptEs: 'Un alumno dice: “Ojalá me toque una pregunta fácil.”',
          promptHy: 'Աշակերտն ասում է․ «Երանի ինձ հեշտ հարց ընկնի»։',
          options: [
            { key: 'a', textEs: 'Dubitativa' },
            { key: 'b', textEs: 'Desiderativa' },
            { key: 'c', textEs: 'Exclamativa' },
            { key: 'd', textEs: 'Interrogativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Desiderativa',
          correctAnswerHy: 'b) Desiderativa — ցանկական',
          explanationEs: 'Manifiesta un anhelo con «ojalá».',
          explanationHy: 'Արտահայտում է ցանկություն «ojalá» (երանի) բառով։'
        },
        {
          id: 'ex2-q33',
          number: 33,
          type: 'choice',
          promptEs: 'La profesora dice: “Probablemente terminemos antes de las doce.”',
          promptHy: 'Ուսուցչուհին ասում է․ «Հավանաբար ժամը տասներկուսից շուտ կավարտենք»։',
          options: [
            { key: 'a', textEs: 'Enunciativa' },
            { key: 'b', textEs: 'Exhortativa' },
            { key: 'c', textEs: 'Dubitativa' },
            { key: 'd', textEs: 'Desiderativa' }
          ],
          correctKey: 'c',
          correctAnswerEs: 'c) Dubitativa',
          correctAnswerHy: 'c) Dubitativa — կասկածական',
          explanationEs: '«Probablemente» indica hipótesis temporal.',
          explanationHy: '«Probablemente» (հավանաբար) ժամանակային հավանականություն է ցույց տալիս։'
        },
        {
          id: 'ex2-q34',
          number: 34,
          type: 'choice',
          promptEs: 'El alumno pregunta: “¿Cuánto tiempo tenemos?”',
          promptHy: 'Աշակերտը հարցնում է․ «Որքա՞ն ժամանակ ունենք»։',
          options: [
            { key: 'a', textEs: 'Interrogativa' },
            { key: 'b', textEs: 'Dubitativa' },
            { key: 'c', textEs: 'Exclamativa' },
            { key: 'd', textEs: 'Desiderativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Interrogativa',
          correctAnswerHy: 'a) Interrogativa — հարցական',
          explanationEs: 'Pregunta directa sobre la duración restante.',
          explanationHy: 'Ուղիղ հարց մնացած ժամանակի մասին։'
        },
        {
          id: 'ex2-q35',
          number: 35,
          type: 'choice',
          promptEs: 'Después del examen alguien grita: “¡Ha sido facilísimo!”',
          promptHy: 'Քննությունից հետո մեկը բացականչում է․ «Շա՜տ հեշտ էր»։',
          options: [
            { key: 'a', textEs: 'Exhortativa' },
            { key: 'b', textEs: 'Exclamativa' },
            { key: 'c', textEs: 'Dubitativa' },
            { key: 'd', textEs: 'Interrogativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Exclamativa',
          correctAnswerHy: 'b) Exclamativa — բացականչական',
          explanationEs: 'Expresión espontánea y apasionada de alivio.',
          explanationHy: 'Հուզական և բացականչական արձագանք։'
        }
      ]
    },
    {
      id: 'ex2-sec6',
      titleEs: 'Parte 6 — Verdadero o falso',
      titleHy: 'Մաս 6 — Ճի՞շտ, թե՞ սխալ (36–40)',
      questions: [
        {
          id: 'ex2-q36',
          number: 36,
          type: 'true_false',
          promptEs: 'Una oración desiderativa expresa un deseo.',
          promptHy: 'Ցանկական նախադասությունն արտահայտում է ցանկություն։',
          options: [
            { key: 'true', textEs: 'Verdadero', textHy: 'Ճիշտ' },
            { key: 'false', textEs: 'Falso', textHy: 'Սխալ' }
          ],
          correctKey: 'true',
          correctAnswerEs: 'Verdadero',
          correctAnswerHy: 'Ճիշտ (Verdadero)',
          explanationEs: 'Correcto: la función principal de la modalidad desiderativa es comunicar anhelos o deseos.',
          explanationHy: 'Ճիշտ է․ ցանկական նախադասության հիմնական դերն է արտահայտել ցանկություն։'
        },
        {
          id: 'ex2-q37',
          number: 37,
          type: 'true_false',
          promptEs: '“Quizás venga Ana” es una oración exhortativa.',
          promptHy: '«Գուցե Անան գա» նախադասությունը հորդորական է։',
          options: [
            { key: 'true', textEs: 'Verdadero', textHy: 'Ճիշտ' },
            { key: 'false', textEs: 'Falso', textHy: 'Սխալ' }
          ],
          correctKey: 'false',
          correctAnswerEs: 'Falso. Es dubitativa.',
          correctAnswerHy: 'Սխալ (Falso)։ Սա կասկածական (Dubitativa) նախադասություն է։',
          explanationEs: 'Falso: «Quizás» expresa duda o probabilidad, por lo que es dubitativa.',
          explanationHy: 'Սխալ է․ «Quizás»-ն արտահայտում է կասկած, ուստի նախադասությունը կասկածական է։'
        },
        {
          id: 'ex2-q38',
          number: 38,
          type: 'true_false',
          promptEs: 'Una oración interrogativa sirve para formular una pregunta.',
          promptHy: 'Հարցական նախադասությունն օգտագործվում է հարց տալու համար։',
          options: [
            { key: 'true', textEs: 'Verdadero', textHy: 'Ճիշտ' },
            { key: 'false', textEs: 'Falso', textHy: 'Սխալ' }
          ],
          correctKey: 'true',
          correctAnswerEs: 'Verdadero',
          correctAnswerHy: 'Ճիշտ (Verdadero)',
          explanationEs: 'Correcto: la función interrogativa consiste en solicitar información al receptor.',
          explanationHy: 'Ճիշտ է․ հարցական նախադասությունը ծառայում է տեղեկություն հարցնելու համար։'
        },
        {
          id: 'ex2-q39',
          number: 39,
          type: 'true_false',
          promptEs: '“Cierra la puerta” es una oración desiderativa.',
          promptHy: '«Փակի՛ր դուռը» ցանկական նախադասություն է։',
          options: [
            { key: 'true', textEs: 'Verdadero', textHy: 'Ճիշտ' },
            { key: 'false', textEs: 'Falso', textHy: 'Սխալ' }
          ],
          correctKey: 'false',
          correctAnswerEs: 'Falso. Es exhortativa.',
          correctAnswerHy: 'Սխալ (Falso)։ Սա հրամայական (Exhortativa) նախադասություն է։',
          explanationEs: 'Falso: «Cierra» es un imperativo que da una orden directa (exhortativa).',
          explanationHy: 'Սխալ է․ «Cierra»-ն հրամայական է և հրաման է տալիս։'
        },
        {
          id: 'ex2-q40',
          number: 40,
          type: 'true_false',
          promptEs: '“No tengo hermanos” es una enunciativa negativa.',
          promptHy: '«Ես եղբայրներ կամ քույրեր չունեմ» ժխտական պատմողական նախադասություն է։',
          options: [
            { key: 'true', textEs: 'Verdadero', textHy: 'Ճիշտ' },
            { key: 'false', textEs: 'Falso', textHy: 'Սխալ' }
          ],
          correctKey: 'true',
          correctAnswerEs: 'Verdadero',
          correctAnswerHy: 'Ճիշտ (Verdadero)',
          explanationEs: 'Correcto: enuncia un hecho objetivo negándolo con «no».',
          explanationHy: 'Ճիշտ է․ հաղորդում է փաստ՝ ժխտելով «no»-ով։'
        }
      ]
    },
    {
      id: 'ex2-sec7',
      titleEs: 'Parte 7 — Cambia la modalidad',
      titleHy: 'Մաս 7 — Փոխի՛ր նախադասության տեսակը (41–45)',
      questions: [
        {
          id: 'ex2-q41',
          number: 41,
          type: 'transform',
          promptEs: 'Carlos viene mañana. (Enunciativa)',
          promptHy: 'Կառլոսը գալիս է վաղը։ (Պատմողական)',
          conversionInstructionEs: 'Conviértela en interrogativa.',
          conversionInstructionHy: 'Դարձրո՛ւ հարցական։',
          correctKey: '¿Carlos viene mañana?',
          correctAnswerEs: '¿Carlos viene mañana?',
          correctAnswerHy: '¿Carlos viene mañana? (Կառլոսը գալի՞ս է վաղը։)',
          explanationEs: 'Se añaden los signos ¿ ? de apertura y cierre.',
          explanationHy: 'Ավելացվում են հարցական նշանները ¿ ?։'
        },
        {
          id: 'ex2-q42',
          number: 42,
          type: 'transform',
          promptEs: 'Marta viene a la fiesta.',
          promptHy: 'Մարտան գալիս է երեկույթին։',
          conversionInstructionEs: 'Conviértela en dubitativa.',
          conversionInstructionHy: 'Դարձրո՛ւ կասկածական։',
          correctKey: 'Quizás / Tal vez Marta venga a la fiesta.',
          correctAnswerEs: 'Quizás / Tal vez Marta venga a la fiesta.',
          correctAnswerHy: 'Quizás / Tal vez Marta venga a la fiesta. (Գուցե Մարտան գա երեկույթին։)',
          explanationEs: 'Se añade «quizás» o «tal vez» y el verbo pasa habitualmente a subjuntivo («venga»).',
          explanationHy: 'Ավելացվում է «quizás» կամ «tal vez» և բայը դրվում է subjuntivo-ում («venga»)։'
        },
        {
          id: 'ex2-q43',
          number: 43,
          type: 'transform',
          promptEs: 'Tú estudias más.',
          promptHy: 'Դու ավելի շատ ես սովորում։',
          conversionInstructionEs: 'Conviértela en exhortativa.',
          conversionInstructionHy: 'Դարձրո՛ւ հորդորական/հրամայական։',
          correctKey: 'Estudia más.',
          correctAnswerEs: 'Estudia más.',
          correctAnswerHy: 'Estudia más. (Սովորի՛ր ավելի շատ։)',
          explanationEs: 'Se utiliza el imperativo afirmativo de segunda persona: «Estudia».',
          explanationHy: 'Օգտագործվում է 2-րդ դեմքի հրամայական եղանակը՝ «Estudia»։'
        },
        {
          id: 'ex2-q44',
          number: 44,
          type: 'transform',
          promptEs: 'España gana el partido.',
          promptHy: 'Իսպանիան հաղթում է խաղը։',
          conversionInstructionEs: 'Conviértela en desiderativa.',
          conversionInstructionHy: 'Դարձրո՛ւ ցանկական։',
          correctKey: 'Ojalá España gane el partido.',
          correctAnswerEs: 'Ojalá España gane el partido.',
          correctAnswerHy: 'Ojalá España gane el partido. (Երանի Իսպանիան հաղթի խաղը։)',
          explanationEs: 'Se antepone «Ojalá» y el verbo cambia a presente de subjuntivo («gane»).',
          explanationHy: 'Դրվում է «Ojalá»-ն և բայը դառնում է subjuntivo՝ «gane»։'
        },
        {
          id: 'ex2-q45',
          number: 45,
          type: 'transform',
          promptEs: 'El paisaje es bonito.',
          promptHy: 'Բնապատկերը գեղեցիկ է։',
          conversionInstructionEs: 'Conviértela en exclamativa.',
          conversionInstructionHy: 'Դարձրո՛ւ բացականչական։',
          correctKey: '¡Qué bonito es el paisaje!',
          correctAnswerEs: '¡Qué bonito es el paisaje!',
          correctAnswerHy: '¡Qué bonito es el paisaje! (Ի՜նչ գեղեցիկ է բնապատկերը։)',
          explanationEs: 'Se construye con «¡Qué + adjetivo + verbo + sujeto!».',
          explanationHy: 'Կառուցվում է «¡Qué + ածական + բայ + ենթակա!» ձևով։'
        }
      ]
    },
    {
      id: 'ex2-sec8',
      titleEs: 'Parte 8 — Mini examen con texto',
      titleHy: 'Մաս 8 — Փոքր քննություն տեքստով (46–50)',
      storyTitleEs: 'Texto de la conversación en clase',
      storyTitleHy: 'Դասարանի զրույցի տեքստը',
      storyEs: `Antes de empezar la clase, Pablo pregunta:
—¿Tenemos examen hoy?

La profesora responde:
—No, el examen es el viernes. Pero estudiad bien el tema para mañana.

Lucía dice:
—¡Qué alivio! Pensaba que era hoy.

Carlos añade:
—Quizás el viernes sea más difícil.

Lucía responde:
—Ojalá sea fácil.`,
      storyHy: `Դասը սկսելուց առաջ Պաբլոն հարցնում է․
— Այսօր քննությո՞ւն ունենք։

Ուսուցչուհին պատասխանում է․
— Ոչ, քննությունը ուրբաթ է։ Բայց վաղվա համար լավ սովորե՛ք թեման։

Լուսիան ասում է․
— Ի՜նչ թեթևություն։ Կարծում էի՝ այսօր է։

Կառլոսը ավելացնում է․
— Գուցե ուրբաթ օրը ավելի դժվար լինի։

Լուսիան պատասխանում է․
— Երանի հեշտ լինի։`,
      questions: [
        {
          id: 'ex2-q46',
          number: 46,
          type: 'text_question',
          promptEs: 'Busca una oración interrogativa en el texto.',
          promptHy: 'Գտի՛ր հարցական նախադասությունը տեքստում։',
          correctKey: '¿Tenemos examen hoy?',
          correctAnswerEs: 'Interrogativa: ¿Tenemos examen hoy?',
          correctAnswerHy: 'Հարցական՝ «¿Tenemos examen hoy?» (Այսօր քննությո՞ւն ունենք։)',
          explanationEs: 'Pablo pregunta directamente si tienen examen hoy.',
          explanationHy: 'Պաբլոն ուղիղ հարց է տալիս քննության մասին։'
        },
        {
          id: 'ex2-q47',
          number: 47,
          type: 'text_question',
          promptEs: 'Busca una oración enunciativa en el texto.',
          promptHy: 'Գտի՛ր պատմողական նախադասությունը տեքստում։',
          correctKey: 'El examen es el viernes.',
          correctAnswerEs: 'Enunciativa: El examen es el viernes. (o «Pensaba que era hoy.»)',
          correctAnswerHy: 'Պատմողական՝ «El examen es el viernes.» (Քննությունը ուրբաթ է։)',
          explanationEs: 'La profesora informa de la fecha del examen.',
          explanationHy: 'Ուսուցչուհին տեղեկացնում է քննության օրվա մասին։'
        },
        {
          id: 'ex2-q48',
          number: 48,
          type: 'text_question',
          promptEs: 'Busca una oración exhortativa en el texto.',
          promptHy: 'Գտի՛ր հորդորական նախադասությունը տեքստում։',
          correctKey: 'Estudiad bien el tema para mañana.',
          correctAnswerEs: 'Exhortativa: Estudiad bien el tema para mañana.',
          correctAnswerHy: 'Հորդորական՝ «Estudiad bien el tema para mañana.» (Լավ սովորե՛ք թեման։)',
          explanationEs: 'La profesora ordena o aconseja estudiar con imperativo («estudiad»).',
          explanationHy: 'Ուսուցչուհին խորհուրդ/հրաման է տալիս սովորելու մասին։'
        },
        {
          id: 'ex2-q49',
          number: 49,
          type: 'text_question',
          promptEs: 'Busca una oración exclamativa en el texto.',
          promptHy: 'Գտի՛ր բացականչական նախադասությունը տեքստում։',
          correctKey: '¡Qué alivio!',
          correctAnswerEs: 'Exclamativa: ¡Qué alivio!',
          correctAnswerHy: 'Բացականչական՝ «¡Qué alivio!» (Ի՜նչ թեթևություն։)',
          explanationEs: 'Lucía expresa gran alivio con signos de exclamación.',
          explanationHy: 'Լուսիան բացականչական նշաններով արտահայտում է թեթևացում։'
        },
        {
          id: 'ex2-q50',
          number: 50,
          type: 'text_question',
          promptEs: 'Busca una oración dubitativa y una desiderativa en el texto.',
          promptHy: 'Գտի՛ր մեկ կասկածական և մեկ ցանկական նախադասություն տեքստում։',
          correctKey: 'Dubitativa: Quizás el viernes sea más difícil. / Desiderativa: Ojalá sea fácil.',
          correctAnswerEs: 'Dubitativa: «Quizás el viernes sea más difícil.» | Desiderativa: «Ojalá sea fácil.»',
          correctAnswerHy: 'Կասկածական՝ «Quizás el viernes sea más difícil.» | Ցանկական՝ «Ojalá sea fácil.»',
          explanationEs: 'Carlos duda con «quizás» y Lucía desea con «ojalá».',
          explanationHy: 'Կառլոսը կասկածում է «quizás»-ով, իսկ Լուսիան ցանկանում է «ojalá»-ով։'
        }
      ]
    }
  ]
};
