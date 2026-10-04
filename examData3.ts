import { ExamModule } from './types';

export const EXAM_3: ExamModule = {
  id: 'exam-3',
  titleEs: 'Modalidades oracionales — 1º ESO',
  titleHy: 'Նախադասությունների տեսակները — 7-րդ դասարան (1º ESO)',
  badge: 'Examen 3',
  level: '1º ESO / 7º clase (nivel oficial)',
  descriptionEs: 'Examen de rigor para 1º ESO en España: identificación, selección precisa, preguntas complejas, clasificación abierta, transformación y análisis de texto con justificación.',
  descriptionHy: 'Իսպանիայի 7-րդ դասարանի (1º ESO) իրական քննական թեստ՝ ճանաչում, ընտրություն, բաց դասակարգում, ձևափոխում և տեքստային վերլուծություն հիմնավորումներով։',
  totalQuestions: 37,
  sections: [
    {
      id: 'ex3-sec1',
      titleEs: 'Parte 1. Identifica la modalidad',
      titleHy: 'Մաս 1. Որոշի՛ր նախադասության տեսակը (1–8)',
      questions: [
        {
          id: 'ex3-q1',
          number: 1,
          type: 'choice',
          promptEs: 'Los alumnos de primero tienen Educación Física los martes.',
          promptHy: 'Առաջին դասարանի աշակերտները երեքշաբթի օրերին ֆիզկուլտուրա ունեն։',
          options: [
            { key: 'a', textEs: 'Dubitativa' },
            { key: 'b', textEs: 'Enunciativa' },
            { key: 'c', textEs: 'Exhortativa' },
            { key: 'd', textEs: 'Desiderativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Enunciativa',
          correctAnswerHy: 'b) Enunciativa — պատմողական',
          explanationEs: 'Informa sobre el horario escolar de manera objetiva.',
          explanationHy: 'Հաղորդում է տեղեկություն դասացուցակի մասին։'
        },
        {
          id: 'ex3-q2',
          number: 2,
          type: 'choice',
          promptEs: '¿Por qué no has traído el cuaderno?',
          promptHy: 'Ինչո՞ւ չես բերել տետրը։',
          options: [
            { key: 'a', textEs: 'Interrogativa' },
            { key: 'b', textEs: 'Exclamativa' },
            { key: 'c', textEs: 'Enunciativa' },
            { key: 'd', textEs: 'Dubitativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Interrogativa',
          correctAnswerHy: 'a) Interrogativa — հարցական',
          explanationEs: 'Plantea una pregunta causal con «por qué».',
          explanationHy: 'Պատճառահարց է տալիս «por qué»-ով։'
        },
        {
          id: 'ex3-q3',
          number: 3,
          type: 'choice',
          promptEs: '¡Qué difícil ha sido el ejercicio!',
          promptHy: 'Ի՜նչ դժվար էր վարժությունը։',
          options: [
            { key: 'a', textEs: 'Exhortativa' },
            { key: 'b', textEs: 'Desiderativa' },
            { key: 'c', textEs: 'Exclamativa' },
            { key: 'd', textEs: 'Interrogativa' }
          ],
          correctKey: 'c',
          correctAnswerEs: 'c) Exclamativa',
          correctAnswerHy: 'c) Exclamativa — բացականչական',
          explanationEs: 'Pondera intensamente la dificultad del ejercicio.',
          explanationHy: 'Շեշտում է վարժության դժվարությունը բացականչական նշաններով։'
        },
        {
          id: 'ex3-q4',
          number: 4,
          type: 'choice',
          promptEs: 'Entregad los trabajos antes del viernes.',
          promptHy: 'Հանձնե՛ք աշխատանքները մինչև ուրբաթ։',
          options: [
            { key: 'a', textEs: 'Dubitativa' },
            { key: 'b', textEs: 'Exhortativa' },
            { key: 'c', textEs: 'Enunciativa' },
            { key: 'd', textEs: 'Desiderativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Exhortativa',
          correctAnswerHy: 'b) Exhortativa — հրամայական/հորդորական',
          explanationEs: 'El profesor da una instrucción en imperativo («entregad»).',
          explanationHy: '«Entregad»-ը հրամայական է՝ աշխատանքները հանձնելու հրաման։'
        },
        {
          id: 'ex3-q5',
          number: 5,
          type: 'choice',
          promptEs: 'Ojalá suspendan el entrenamiento por la lluvia.',
          promptHy: 'Երանի անձրևի պատճառով մարզումը չեղարկեն։',
          options: [
            { key: 'a', textEs: 'Dubitativa' },
            { key: 'b', textEs: 'Desiderativa' },
            { key: 'c', textEs: 'Interrogativa' },
            { key: 'd', textEs: 'Enunciativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Desiderativa',
          correctAnswerHy: 'b) Desiderativa — ցանկական',
          explanationEs: '«Ojalá» encabeza una manifestación de deseo.',
          explanationHy: '«Ojalá»-ն արտահայտում է ցանկություն։'
        },
        {
          id: 'ex3-q6',
          number: 6,
          type: 'choice',
          promptEs: 'Quizá mañana venga un profesor nuevo.',
          promptHy: 'Գուցե վաղը նոր ուսուցիչ գա։',
          options: [
            { key: 'a', textEs: 'Exclamativa' },
            { key: 'b', textEs: 'Exhortativa' },
            { key: 'c', textEs: 'Dubitativa' },
            { key: 'd', textEs: 'Desiderativa' }
          ],
          correctKey: 'c',
          correctAnswerEs: 'c) Dubitativa',
          correctAnswerHy: 'c) Dubitativa — կասկածական',
          explanationEs: '«Quizá» transmite incertidumbre.',
          explanationHy: '«Quizá» բառը կասկած և հավանականություն է մատնանշում։'
        },
        {
          id: 'ex3-q7',
          number: 7,
          type: 'choice',
          promptEs: 'Hoy no hay clase de Ciencias.',
          promptHy: 'Այսօր բնագիտության դաս չկա։',
          options: [
            { key: 'a', textEs: 'Enunciativa negativa' },
            { key: 'b', textEs: 'Exhortativa negativa' },
            { key: 'c', textEs: 'Dubitativa' },
            { key: 'd', textEs: 'Desiderativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Enunciativa negativa',
          correctAnswerHy: 'a) Enunciativa negativa — ժխտական պատմողական',
          explanationEs: 'Expresa una información objetiva negativa.',
          explanationHy: 'Հաղորդում է տեղեկություն ժխտական ձևով։'
        },
        {
          id: 'ex3-q8',
          number: 8,
          type: 'choice',
          promptEs: '¡No corráis por las escaleras!',
          promptHy: 'Աստիճաններով մի՛ վազեք։',
          noteEs: '⚠️ Aunque tiene ¡ !, la intención principal es dar una orden/prohibición.',
          noteHy: '⚠️ Թեև կան ¡ !, հիմնական նպատակը հրաման տալն է։',
          options: [
            { key: 'a', textEs: 'Exclamativa' },
            { key: 'b', textEs: 'Exhortativa' },
            { key: 'c', textEs: 'Interrogativa' },
            { key: 'd', textEs: 'Dubitativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Exhortativa',
          correctAnswerHy: 'b) Exhortativa — հրամայական/արգելք',
          explanationEs: 'Prohíbe una conducta peligrosa.',
          explanationHy: 'Արգելում է վազել աստիճաններով։'
        }
      ]
    },
    {
      id: 'ex3-sec2',
      titleEs: 'Parte 2. Elige la oración que corresponde',
      titleHy: 'Մաս 2. Ընտրի՛ր ճիշտ նախադասությունը (9–13)',
      questions: [
        {
          id: 'ex3-q9',
          number: 9,
          type: 'choice',
          promptEs: '¿Cuál es una oración dubitativa?',
          promptHy: 'Ո՞րն է կասկածական նախադասություն։',
          options: [
            { key: 'a', textEs: 'Mañana hay partido.' },
            { key: 'b', textEs: '¿Hay partido mañana?' },
            { key: 'c', textEs: 'Quizá haya partido mañana.' },
            { key: 'd', textEs: 'Ojalá haya partido mañana.' }
          ],
          correctKey: 'c',
          correctAnswerEs: 'c) Quizá haya partido mañana.',
          correctAnswerHy: 'c) Quizá haya partido mañana. (Գուցե վաղը խաղ լինի։)',
          explanationEs: '«Quizá» marca la duda o probabilidad.',
          explanationHy: '«Quizá»-ն ցույց է տալիս կասկածը։'
        },
        {
          id: 'ex3-q10',
          number: 10,
          type: 'choice',
          promptEs: '¿Cuál es desiderativa?',
          promptHy: 'Ո՞րն է ցանկական։',
          options: [
            { key: 'a', textEs: 'Espero que podamos aprobar.' },
            { key: 'b', textEs: 'Probablemente aprobemos.' },
            { key: 'c', textEs: '¿Aprobaremos?' },
            { key: 'd', textEs: 'Hemos aprobado.' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Espero que podamos aprobar.',
          correctAnswerHy: 'a) Espero que podamos aprobar. (Հուսով եմ՝ կկարողանանք հանձնել։)',
          explanationEs: '«Espero que» expresa deseo.',
          explanationHy: '«Espero que» արտահայտում է ցանկություն։'
        },
        {
          id: 'ex3-q11',
          number: 11,
          type: 'choice',
          promptEs: '¿Cuál es exhortativa?',
          promptHy: 'Ո՞րն է հորդորական/հրամայական։',
          options: [
            { key: 'a', textEs: 'No tengo el libro.' },
            { key: 'b', textEs: '¿Tienes el libro?' },
            { key: 'c', textEs: 'Trae el libro mañana.' },
            { key: 'd', textEs: 'Quizá traiga el libro.' }
          ],
          correctKey: 'c',
          correctAnswerEs: 'c) Trae el libro mañana.',
          correctAnswerHy: 'c) Trae el libro mañana. (Բե՛ր գիրքը վաղը։)',
          explanationEs: '«Trae» es imperativo (mandato).',
          explanationHy: '«Trae»-ն հրամայական է (բե՛ր)։'
        },
        {
          id: 'ex3-q12',
          number: 12,
          type: 'choice',
          promptEs: '¿Cuál es interrogativa?',
          promptHy: 'Ո՞րն է հարցական։',
          options: [
            { key: 'a', textEs: 'Cuánto me gusta esta asignatura.' },
            { key: 'b', textEs: '¿Cuándo empieza el examen?' },
            { key: 'c', textEs: 'Empieza el examen.' },
            { key: 'd', textEs: 'Tal vez empiece el examen.' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) ¿Cuándo empieza el examen?',
          correctAnswerHy: 'b) ¿Cuándo empieza el examen? (Ե՞րբ է սկսվում քննությունը։)',
          explanationEs: 'Formula una pregunta directa con signos ¿ ?.',
          explanationHy: 'Ուղիղ հարցական նախադասություն ¿ ? նշաններով։'
        },
        {
          id: 'ex3-q13',
          number: 13,
          type: 'choice',
          promptEs: '¿Cuál es enunciativa negativa?',
          promptHy: 'Ո՞րն է ժխտական պատմողական։',
          options: [
            { key: 'a', textEs: 'No hemos terminado el tema.' },
            { key: 'b', textEs: 'No terminéis el tema.' },
            { key: 'c', textEs: '¿No habéis terminado?' },
            { key: 'd', textEs: '¡No puede ser!' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) No hemos terminado el tema.',
          correctAnswerHy: 'a) No hemos terminado el tema. (Մենք չենք ավարտել թեման։)',
          explanationEs: 'Comunica objetivamente un hecho negado.',
          explanationHy: 'Հաղորդում է փաստը ժխտական ձևով։'
        }
      ]
    },
    {
      id: 'ex3-sec3',
      titleEs: 'Parte 3. Preguntas un poco más difíciles',
      titleHy: 'Մաս 3. Մի փոքր ավելի դժվար հարցեր (14–18)',
      questions: [
        {
          id: 'ex3-q14',
          number: 14,
          type: 'choice',
          promptEs: 'A lo mejor el examen es más corto de lo que pensamos.',
          promptHy: 'Հնարավոր է՝ քննությունն ավելի կարճ լինի, քան կարծում ենք։',
          questionEs: '¿Qué modalidad predomina?',
          questionHy: 'Ո՞ր տեսակն է գերակշռում։',
          options: [
            { key: 'a', textEs: 'Enunciativa' },
            { key: 'b', textEs: 'Dubitativa' },
            { key: 'c', textEs: 'Desiderativa' },
            { key: 'd', textEs: 'Exhortativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Dubitativa',
          correctAnswerHy: 'b) Dubitativa — կասկածական',
          explanationEs: '«A lo mejor» introduce posibilidad o duda.',
          explanationHy: '«A lo mejor»-ը նշանակում է «հնարավոր է, գուցե»։'
        },
        {
          id: 'ex3-q15',
          number: 15,
          type: 'choice',
          promptEs: 'Que tengas suerte mañana.',
          promptHy: 'Թող վաղը հաջողություն ունենաս։',
          options: [
            { key: 'a', textEs: 'Interrogativa' },
            { key: 'b', textEs: 'Exhortativa' },
            { key: 'c', textEs: 'Desiderativa' },
            { key: 'd', textEs: 'Dubitativa' }
          ],
          correctKey: 'c',
          correctAnswerEs: 'c) Desiderativa',
          correctAnswerHy: 'c) Desiderativa — ցանկական',
          explanationEs: 'Estructura «Que + subjuntivo» para desear algo bueno.',
          explanationHy: '«Que + subjuntivo» կառուցվածքով բարեմաղթանք/ցանկություն։'
        },
        {
          id: 'ex3-q16',
          number: 16,
          type: 'choice',
          promptEs: '¿Podéis guardar silencio, por favor?',
          promptHy: 'Կարո՞ղ եք լռություն պահպանել, խնդրում եմ։',
          questionEs: 'Por su forma gramatical, es:',
          questionHy: 'Քերականական ձևով ո՞ր տեսակն է։',
          options: [
            { key: 'a', textEs: 'Interrogativa' },
            { key: 'b', textEs: 'Exclamativa' },
            { key: 'c', textEs: 'Dubitativa' },
            { key: 'd', textEs: 'Desiderativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Interrogativa',
          correctAnswerHy: 'a) Interrogativa — հարցական (քերականական ձևով)',
          explanationEs: 'Tiene estructura formal de interrogación con ¿ ?.',
          explanationHy: 'Քերականորեն ունի հարցական նախադասության ձև։'
        },
        {
          id: 'ex3-q17',
          number: 17,
          type: 'choice',
          promptEs: '¡Ojalá ganemos el partido!',
          promptHy: 'Երանի հաղթենք խաղը։',
          questionEs: 'Aunque tiene signos de exclamación, ¿qué modalidad predomina?',
          questionHy: 'Թեև կան բացականչական նշաններ, հիմնականում ո՞ր տեսակն է։',
          options: [
            { key: 'a', textEs: 'Exclamativa' },
            { key: 'b', textEs: 'Desiderativa' },
            { key: 'c', textEs: 'Dubitativa' },
            { key: 'd', textEs: 'Enunciativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Desiderativa',
          correctAnswerHy: 'b) Desiderativa — ցանկական',
          explanationEs: 'La intención comunicativa primaria es expresar un deseo («ojalá»).',
          explanationHy: 'Հիմնական նպատակն է ցանկություն հայտնելը։'
        },
        {
          id: 'ex3-q18',
          number: 18,
          type: 'choice',
          promptEs: 'Probablemente los alumnos terminen antes.',
          promptHy: 'Հավանաբար աշակերտները շուտ կավարտեն։',
          questionEs: '¿Qué palabra nos ayuda especialmente a reconocerla?',
          questionHy: 'Ո՞ր բառն է հատկապես օգնում որոշել նախադասության տեսակը։',
          options: [
            { key: 'a', textEs: 'alumnos' },
            { key: 'b', textEs: 'antes' },
            { key: 'c', textEs: 'probablemente' },
            { key: 'd', textEs: 'terminen' }
          ],
          correctKey: 'c',
          correctAnswerEs: 'c) probablemente',
          correctAnswerHy: 'c) probablemente (հավանաբար)',
          explanationEs: '«Probablemente» es el adverbio que indica modalidad dubitativa.',
          explanationHy: '«Probablemente» մակբայն է մատնանշում կասկածական տեսակը։'
        }
      ]
    },
    {
      id: 'ex3-sec4',
      titleEs: 'Parte 4. Clasifica sin opciones',
      titleHy: 'Մաս 4. Դասակարգի՛ր առանց տարբերակների (19–24)',
      descriptionEs: 'Escribe: enunciativa, interrogativa, exclamativa, exhortativa, desiderativa o dubitativa.',
      descriptionHy: 'Գրի՛ր՝ enunciativa, interrogativa, exclamativa, exhortativa, desiderativa կամ dubitativa։',
      questions: [
        {
          id: 'ex3-q19',
          number: 19,
          type: 'fill_or_classify',
          promptEs: 'Tal vez no podamos ir a la excursión.',
          promptHy: 'Գուցե չկարողանանք գնալ էքսկուրսիայի։',
          correctKey: 'Dubitativa',
          correctAnswerEs: 'Dubitativa',
          correctAnswerHy: 'Dubitativa (Կասկածական)',
          explanationEs: '«Tal vez» denota posibilidad o duda.',
          explanationHy: '«Tal vez» (գուցե) արտահայտում է կասկած։'
        },
        {
          id: 'ex3-q20',
          number: 20,
          type: 'fill_or_classify',
          promptEs: '¡Cuánta gente hay en el patio!',
          promptHy: 'Ինչքա՜ն մարդ կա բակում։',
          correctKey: 'Exclamativa',
          correctAnswerEs: 'Exclamativa',
          correctAnswerHy: 'Exclamativa (Բացականչական)',
          explanationEs: 'Comunica asombro ante la multitud escolar.',
          explanationHy: 'Զարմանք է արտահայտում բակի բազմության վերաբերյալ։'
        },
        {
          id: 'ex3-q21',
          number: 21,
          type: 'fill_or_classify',
          promptEs: 'No olvidéis escribir vuestro nombre.',
          promptHy: 'Մի՛ մոռացեք գրել ձեր անունը։',
          correctKey: 'Exhortativa',
          correctAnswerEs: 'Exhortativa',
          correctAnswerHy: 'Exhortativa (Հորդորական / հրամայական)',
          explanationEs: 'Es una instrucción o advertencia del profesor.',
          explanationHy: 'Ուսուցչի հորդորն ու հանձնարարականն է։'
        },
        {
          id: 'ex3-q22',
          number: 22,
          type: 'fill_or_classify',
          promptEs: 'El próximo lunes empieza el nuevo trimestre.',
          promptHy: 'Հաջորդ երկուշաբթի սկսվում է նոր եռամսյակը։',
          correctKey: 'Enunciativa',
          correctAnswerEs: 'Enunciativa',
          correctAnswerHy: 'Enunciativa (Պատմողական)',
          explanationEs: 'Transmite una información verídica y objetiva.',
          explanationHy: 'Հաղորդում է օբյեկտիվ տեղեկություն։'
        },
        {
          id: 'ex3-q23',
          number: 23,
          type: 'fill_or_classify',
          promptEs: '¿Habéis entendido la explicación?',
          promptHy: 'Հասկացե՞լ եք բացատրությունը։',
          correctKey: 'Interrogativa',
          correctAnswerEs: 'Interrogativa',
          correctAnswerHy: 'Interrogativa (Հարցական)',
          explanationEs: 'Comprueba la comprensión mediante una pregunta directa.',
          explanationHy: 'Ուղիղ հարց հասկանալու մասին։'
        },
        {
          id: 'ex3-q24',
          number: 24,
          type: 'fill_or_classify',
          promptEs: 'Ojalá no haya muchos deberes.',
          promptHy: 'Երանի շատ տնային աշխատանք չլինի։',
          correctKey: 'Desiderativa',
          correctAnswerEs: 'Desiderativa',
          correctAnswerHy: 'Desiderativa (Ցանկական)',
          explanationEs: '«Ojalá» manifiesta el deseo de los alumnos.',
          explanationHy: '«Ojalá» (երանի) բառն արտահայտում է ցանկություն։'
        }
      ]
    },
    {
      id: 'ex3-sec5',
      titleEs: 'Parte 5. Transforma la oración',
      titleHy: 'Մաս 5. Փոխի՛ր նախադասության տեսակը (25–29)',
      questions: [
        {
          id: 'ex3-q25',
          number: 25,
          type: 'transform',
          promptEs: 'Marta ha terminado el trabajo.',
          promptHy: 'Մարտան ավարտել է աշխատանքը։',
          conversionInstructionEs: 'Enunciativa → Interrogativa',
          conversionInstructionHy: 'Դարձրո՛ւ հարցական։',
          correctKey: '¿Marta ha terminado el trabajo?',
          correctAnswerEs: '¿Marta ha terminado el trabajo?',
          correctAnswerHy: '¿Marta ha terminado el trabajo? (Մարտան ավարտե՞լ է աշխատանքը։)',
          explanationEs: 'Añade los signos ¿ y ? a la oración.',
          explanationHy: 'Ավելացվում են հարցական նշանները ¿ ?։'
        },
        {
          id: 'ex3-q26',
          number: 26,
          type: 'transform',
          promptEs: 'Pedro viene mañana.',
          promptHy: 'Պեդրոն գալիս է վաղը։',
          conversionInstructionEs: 'Enunciativa → Dubitativa',
          conversionInstructionHy: 'Դարձրո՛ւ կասկածական։',
          correctKey: 'Quizá / Tal vez Pedro venga mañana.',
          correctAnswerEs: 'Quizá / Tal vez Pedro venga mañana.',
          correctAnswerHy: 'Quizá / Tal vez Pedro venga mañana. (Գուցե Պեդրոն վաղը գա։)',
          explanationEs: 'Añade «quizá» o «tal vez» y usa el subjuntivo «venga».',
          explanationHy: 'Ավելացվում է «quizá» կամ «tal vez» և բայը դրվում է subjuntivo-ում։'
        },
        {
          id: 'ex3-q27',
          number: 27,
          type: 'transform',
          promptEs: 'Nuestro equipo gana el partido.',
          promptHy: 'Մեր թիմը հաղթում է խաղը։',
          conversionInstructionEs: 'Enunciativa → Desiderativa',
          conversionInstructionHy: 'Դարձրո՛ւ ցանկական։',
          correctKey: 'Ojalá nuestro equipo gane el partido.',
          correctAnswerEs: 'Ojalá nuestro equipo gane el partido.',
          correctAnswerHy: 'Ojalá nuestro equipo gane el partido. (Երանի մեր թիմը հաղթի խաղը։)',
          explanationEs: 'Introduce «Ojalá» y el subjuntivo «gane».',
          explanationHy: 'Դրվում է «Ojalá»-ն և բայը դառնում է subjuntivo՝ «gane»։'
        },
        {
          id: 'ex3-q28',
          number: 28,
          type: 'transform',
          promptEs: 'El paisaje es muy bonito.',
          promptHy: 'Բնապատկերը շատ գեղեցիկ է։',
          conversionInstructionEs: 'Enunciativa → Exclamativa',
          conversionInstructionHy: 'Դարձրո՛ւ բացականչական։',
          correctKey: '¡Qué bonito es el paisaje!',
          correctAnswerEs: '¡Qué bonito es el paisaje!',
          correctAnswerHy: '¡Qué bonito es el paisaje! (Ի՜նչ գեղեցիկ է բնապատկերը։)',
          explanationEs: 'Forma exclamativa con «¡Qué bonito...!».',
          explanationHy: 'Բացականչական ձև՝ «¡Qué bonito...!»։'
        },
        {
          id: 'ex3-q29',
          number: 29,
          type: 'transform',
          promptEs: 'Tú escuchas al profesor.',
          promptHy: 'Դու լսում ես ուսուցչին։',
          conversionInstructionEs: 'Enunciativa → Exhortativa',
          conversionInstructionHy: 'Դարձրո՛ւ հորդորական/հրամայական։',
          correctKey: 'Escucha al profesor.',
          correctAnswerEs: 'Escucha al profesor.',
          correctAnswerHy: 'Escucha al profesor. (Լսի՛ր ուսուցչին։)',
          explanationEs: 'Pasa al imperativo «Escucha».',
          explanationHy: 'Բայը դրվում է հրամայական եղանակով՝ «Escucha»։'
        }
      ]
    },
    {
      id: 'ex3-sec6',
      titleEs: 'Parte 6. Texto tipo examen de 1º ESO',
      titleHy: 'Մաս 6. Տեքստ՝ 7-րդ դասարանի քննության ձևաչափով (30–37)',
      storyTitleEs: 'Texto de examen (1º ESO)',
      storyTitleHy: 'Քննական տեքստ (1º ESO)',
      storyEs: `El viernes, antes de la última clase, Sergio pregunta:
—¿Tenemos que entregar hoy el trabajo de Lengua?

La profesora responde:
—No. La fecha de entrega es el próximo lunes. Pero terminadlo durante el fin de semana y revisad bien la ortografía.

Sergio sonríe:
—¡Qué alivio! Todavía me falta una parte.

Carla comenta:
—Quizá yo lo termine esta tarde.

Pablo responde:
—Ojalá podamos sacar todos una buena nota.`,
      storyHy: `Ուրբաթ օրը՝ վերջին դասից առաջ, Սերխիոն հարցնում է․
— Այսօր պե՞տք է հանձնենք լեզվի աշխատանքը։

Ուսուցչուհին պատասխանում է․
— Ոչ։ Հանձնման օրը հաջորդ երկուշաբթին է։ Բայց ավարտե՛ք այն հանգստյան օրերին և լավ ստուգե՛ք ուղղագրությունը։

Սերխիոն ժպտում է․
— Ի՜նչ թեթևություն։ Ինձ դեռ մի մասը մնացել է։

Կառլան ասում է․
— Գուցե այսօր կեսօրից հետո ավարտեմ։

Պաբլոն պատասխանում է․
— Երանի բոլորս լավ գնահատական ստանանք։`,
      questions: [
        {
          id: 'ex3-q30',
          number: 30,
          type: 'text_question',
          promptEs: 'Busca una oración interrogativa en el texto.',
          promptHy: 'Գտի՛ր հարցական նախադասությունը։',
          correctKey: '¿Tenemos que entregar hoy el trabajo de Lengua?',
          correctAnswerEs: 'Interrogativa: «¿Tenemos que entregar hoy el trabajo de Lengua?»',
          correctAnswerHy: 'Հարցական՝ «¿Tenemos que entregar hoy el trabajo de Lengua?» (Այսօր պե՞տք է հանձնենք լեզվի աշխատանքը։)',
          explanationEs: 'Pregunta formulada por Sergio.',
          explanationHy: 'Սերխիոյի տված հարցն է։'
        },
        {
          id: 'ex3-q31',
          number: 31,
          type: 'text_question',
          promptEs: 'Busca una oración enunciativa en el texto.',
          promptHy: 'Գտի՛ր պատմողական նախադասությունը։',
          correctKey: 'La fecha de entrega es el próximo lunes.',
          correctAnswerEs: 'Enunciativa: «La fecha de entrega es el próximo lunes.» (o «Todavía me falta una parte.»)',
          correctAnswerHy: 'Պատմողական՝ «La fecha de entrega es el próximo lunes.» (Հանձնման օրը հաջորդ երկուշաբթին է։)',
          explanationEs: 'Informa sobre la fecha de entrega oficial.',
          explanationHy: 'Տեղեկացնում է հանձնման օրվա մասին։'
        },
        {
          id: 'ex3-q32',
          number: 32,
          type: 'text_question',
          promptEs: 'Busca una oración exhortativa en el texto.',
          promptHy: 'Գտի՛ր հորդորական նախադասությունը։',
          correctKey: 'Terminadlo durante el fin de semana y revisad bien la ortografía.',
          correctAnswerEs: 'Exhortativa: «Terminadlo durante el fin de semana y revisad bien la ortografía.»',
          correctAnswerHy: 'Հորդորական՝ «Terminadlo durante el fin de semana y revisad bien la ortografía.» (Ավարտե՛ք այն հանգստյան օրերին և լավ ստուգե՛ք ուղղագրությունը։)',
          explanationEs: 'Mandatos con imperativo de vosotros («terminadlo», «revisad»).',
          explanationHy: 'Հրամայական եղանակով տրված հորդորներ։'
        },
        {
          id: 'ex3-q33',
          number: 33,
          type: 'text_question',
          promptEs: 'Busca una oración exclamativa en el texto.',
          promptHy: 'Գտի՛ր բացականչական նախադասությունը։',
          correctKey: '¡Qué alivio!',
          correctAnswerEs: 'Exclamativa: «¡Qué alivio!»',
          correctAnswerHy: 'Բացականչական՝ «¡Qué alivio!» (Ի՜նչ թեթևություն։)',
          explanationEs: 'Exclamación de alivio pronunciada por Sergio.',
          explanationHy: 'Սերխիոյի բացականչությունը։'
        },
        {
          id: 'ex3-q34',
          number: 34,
          type: 'text_question',
          promptEs: 'Busca una oración dubitativa en el texto.',
          promptHy: 'Գտի՛ր կասկածական նախադասությունը։',
          correctKey: 'Quizá yo lo termine esta tarde.',
          correctAnswerEs: 'Dubitativa: «Quizá yo lo termine esta tarde.»',
          correctAnswerHy: 'Կասկածական՝ «Quizá yo lo termine esta tarde.» (Գուցե այսօր կեսօրից հետո ավարտեմ։)',
          explanationEs: 'Comentario dudoso de Carla con «quizá».',
          explanationHy: 'Կառլայի կասկած արտահայտող նախադասությունը «quizá»-ով։'
        },
        {
          id: 'ex3-q35',
          number: 35,
          type: 'text_question',
          promptEs: 'Busca una oración desiderativa en el texto.',
          promptHy: 'Գտի՛ր ցանկական նախադասությունը։',
          correctKey: 'Ojalá podamos sacar todos una buena nota.',
          correctAnswerEs: 'Desiderativa: «Ojalá podamos sacar todos una buena nota.»',
          correctAnswerHy: 'Ցանկական՝ «Ojalá podamos sacar todos una buena nota.» (Երանի բոլորս լավ գնահատական ստանանք։)',
          explanationEs: 'Deseo compartido formulado por Pablo con «ojalá».',
          explanationHy: 'Պաբլոյի ցանկությունը բոլորի լավ գնահատականների մասին։'
        },
        {
          id: 'ex3-q36',
          number: 36,
          type: 'text_question',
          promptEs: '¿Por qué “Quizá yo lo termine esta tarde” es dubitativa?',
          promptHy: 'Ինչո՞ւ է այս նախադասությունը կասկածական։',
          correctKey: 'Es dubitativa porque “quizá” expresa posibilidad o duda.',
          correctAnswerEs: 'Es dubitativa porque “quizá” expresa posibilidad o duda.',
          correctAnswerHy: 'Կասկածական է, որովհետև «quizá» բառը արտահայտում է հավանականություն կամ կասկած։',
          explanationEs: 'El emisor no afirma con certeza, sino que plantea una hipótesis posible.',
          explanationHy: 'Խոսողը վստահ չէ, այլ արտահայտում է հավանական ենթադրություն։'
        },
        {
          id: 'ex3-q37',
          number: 37,
          type: 'text_question',
          promptEs: '¿Por qué “Ojalá podamos sacar todos una buena nota” es desiderativa?',
          promptHy: 'Ինչո՞ւ է այս նախադասությունը ցանկական։',
          correctKey: 'Es desiderativa porque “ojalá” expresa un deseo.',
          correctAnswerEs: 'Es desiderativa porque “ojalá” expresa un deseo.',
          correctAnswerHy: 'Ցանկական է, որովհետև «ojalá» բառը արտահայտում է ցանկություն։',
          explanationEs: '«Ojalá» es el marcador prototípico del deseo en español.',
          explanationHy: '«Ojalá»-ն իսպաներենում ցանկություն արտահայտելու հիմնական բառն է։'
        }
      ]
    }
  ]
};
