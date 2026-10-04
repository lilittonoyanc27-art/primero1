import { ExamModule, ModalityRule } from './types';

export const MODALITY_RULES: ModalityRule[] = [
  {
    nameEs: 'Enunciativa',
    nameHy: 'Պատմողական',
    icon: 'Info',
    color: 'emerald',
    functionEs: 'Informa sobre un hecho real o ficticio (afirmativa o negativa).',
    functionHy: 'Տեղեկություն է հաղորդում (հաստատական կամ ժխտական)։',
    keyWordsEs: 'no, nunca, jamás (en negativas)',
    keyWordsHy: 'չ-, ոչ, երբեք',
    exampleEs: 'Mañana iremos al museo con la clase.',
    exampleHy: 'Վաղը դասարանով գնալու ենք թանգարան։'
  },
  {
    nameEs: 'Interrogativa',
    nameHy: 'Հարցական',
    icon: 'HelpCircle',
    color: 'sky',
    functionEs: 'Formula una pregunta para obtener información.',
    functionHy: 'Հարց է տալիս տեղեկություն ստանալու համար։',
    keyWordsEs: '¿qué?, ¿quién?, ¿dónde?, ¿cuándo?, ¿por qué?',
    keyWordsHy: 'ի՞նչ, ո՞վ, որտե՞ղ, ե՞րբ, ինչո՞ւ',
    exampleEs: '¿Has terminado el ejercicio?',
    exampleHy: 'Ավարտե՞լ ես վարժությունը։'
  },
  {
    nameEs: 'Exclamativa',
    nameHy: 'Բացականչական',
    icon: 'AlertCircle',
    color: 'amber',
    functionEs: 'Expresa emoción intensa (sorpresa, alegría, enfado, dolor).',
    functionHy: 'Ուժեղ զգացմունք է արտահայտում (զարմանք, ուրախություն, բարկություն)։',
    keyWordsEs: '¡qué...!, ¡cómo...!, ¡cuánto...!',
    keyWordsHy: 'ի՜նչ, ինչպե՜ս, ինչքա՜ն',
    exampleEs: '¡Qué bonito es este lugar!',
    exampleHy: 'Ի՜նչ գեղեցիկ է այս վայրը։'
  },
  {
    nameEs: 'Exhortativa',
    nameHy: 'Հրամայական / Հորդորական',
    icon: 'Megaphone',
    color: 'rose',
    functionEs: 'Ordena, pide, ruega, prohibe o aconseja (imperativo o subjuntivo).',
    functionHy: 'Հրամայում, խնդրում կամ խորհուրդ է տալիս։',
    keyWordsEs: 'por favor, haz, no corras, abre',
    keyWordsHy: 'խնդրում եմ, արա՛, մի՛ վազիր, բա՛ց արա',
    exampleEs: 'Abre el libro por la página veinte.',
    exampleHy: 'Բացի՛ր գիրքը քսաներորդ էջում։'
  },
  {
    nameEs: 'Desiderativa',
    nameHy: 'Ցանկական',
    icon: 'Heart',
    color: 'violet',
    functionEs: 'Expresa un deseo o anhelo (suele usar subjuntivo).',
    functionHy: 'Ցանկություն կամ երազանք է արտահայտում։',
    keyWordsEs: 'ojalá, que tengas suerte, me gustaría, espero que',
    keyWordsHy: 'երանի, թող, կցանկանայի, հուսով եմ',
    exampleEs: 'Ojalá ganemos el partido.',
    exampleHy: 'Երանի հաղթենք խաղը։'
  },
  {
    nameEs: 'Dubitativa',
    nameHy: 'Կասկածական',
    icon: 'HelpCircle',
    color: 'indigo',
    functionEs: 'Expresa duda, incertidumbre o probabilidad.',
    functionHy: 'Կասկած կամ հավանականություն է արտահայտում։',
    keyWordsEs: 'quizás, tal vez, probablemente, a lo mejor, puede que',
    keyWordsHy: 'գուցե, հնարավոր է, հավանաբար',
    exampleEs: 'Quizás venga mañana.',
    exampleHy: 'Գուցե նա վաղը գա։'
  }
];

export const EXAM_1: ExamModule = {
  id: 'exam-1',
  titleEs: 'Modalidades oracionales — Examen',
  titleHy: 'Նախադասությունների տեսակները — Քննություն',
  badge: 'Examen 1',
  level: '7º clase / 1º ESO',
  descriptionEs: 'Examen completo de 30 preguntas con 5 secciones: identificación, reconocimiento, preguntas teóricas, el intruso y análisis reflexivo.',
  descriptionHy: '30 հարցից բաղկացած քննական թեստ 5 մասով՝ նույնականացում, ճանաչում, քննական հարցեր, ավելորդի որոնում և խորացված վերլուծություն։',
  totalQuestions: 30,
  sections: [
    {
      id: 'ex1-sec1',
      titleEs: 'Parte 1 — Preguntas básicas',
      titleHy: 'Մաս 1 — Հիմնական հարցեր (1–15)',
      questions: [
        {
          id: 'ex1-q1',
          number: 1,
          type: 'choice',
          promptEs: 'Mañana iremos al museo con la clase.',
          promptHy: 'Վաղը դասարանով գնալու ենք թանգարան։',
          questionEs: '¿Qué modalidad es?',
          questionHy: 'Ի՞նչ տեսակ է։',
          options: [
            { key: 'a', textEs: 'Interrogativa', textHy: 'հարցական' },
            { key: 'b', textEs: 'Enunciativa', textHy: 'պատմողական' },
            { key: 'c', textEs: 'Desiderativa', textHy: 'ցանկական' },
            { key: 'd', textEs: 'Exclamativa', textHy: 'բացականչական' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Enunciativa',
          correctAnswerHy: 'b) Enunciativa — պատմողական',
          explanationEs: 'Informa de una acción futura de forma objetiva.',
          explanationHy: 'Հաղորդում է փաստ/տեղեկություն ապագա գործողության մասին։'
        },
        {
          id: 'ex1-q2',
          number: 2,
          type: 'choice',
          promptEs: '¿Has terminado el ejercicio?',
          promptHy: 'Ավարտե՞լ ես վարժությունը։',
          options: [
            { key: 'a', textEs: 'Interrogativa', textHy: 'հարցական' },
            { key: 'b', textEs: 'Dubitativa', textHy: 'կասկածական' },
            { key: 'c', textEs: 'Exhortativa', textHy: 'հրամայական' },
            { key: 'd', textEs: 'Enunciativa', textHy: 'պատմողական' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Interrogativa',
          correctAnswerHy: 'a) Interrogativa — հարցական',
          explanationEs: 'Tiene signos de interrogación y formula una pregunta directa.',
          explanationHy: 'Պարունակում է հարցական նշաններ և ուղիղ հարց է տալիս։'
        },
        {
          id: 'ex1-q3',
          number: 3,
          type: 'choice',
          promptEs: '¡Qué bonito es este lugar!',
          promptHy: 'Ի՜նչ գեղեցիկ է այս վայրը։',
          options: [
            { key: 'a', textEs: 'Desiderativa', textHy: 'ցանկական' },
            { key: 'b', textEs: 'Exclamativa', textHy: 'բացականչական' },
            { key: 'c', textEs: 'Interrogativa', textHy: 'հարցական' },
            { key: 'd', textEs: 'Dubitativa', textHy: 'կասկածական' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Exclamativa',
          correctAnswerHy: 'b) Exclamativa — բացականչական',
          explanationEs: 'Expresa admiración y emoción viva con signos de exclamación.',
          explanationHy: 'Արտահայտում է հիացմունք և ուժեղ զգացմունք բացականչական նշաններով։'
        },
        {
          id: 'ex1-q4',
          number: 4,
          type: 'choice',
          promptEs: 'Abre el libro por la página veinte.',
          promptHy: 'Բացի՛ր գիրքը քսաներորդ էջում։',
          options: [
            { key: 'a', textEs: 'Enunciativa', textHy: 'պատմողական' },
            { key: 'b', textEs: 'Exhortativa', textHy: 'հրամայական' },
            { key: 'c', textEs: 'Desiderativa', textHy: 'ցանկական' },
            { key: 'd', textEs: 'Dubitativa', textHy: 'կասկածական' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Exhortativa',
          correctAnswerHy: 'b) Exhortativa — հրամայական',
          explanationEs: 'Usa el imperativo («abre») para dar una orden o instrucción.',
          explanationHy: 'Օգտագործում է հրամայական եղանակ («abre») կարգադրություն տալու համար։'
        },
        {
          id: 'ex1-q5',
          number: 5,
          type: 'choice',
          promptEs: 'Ojalá ganemos el partido.',
          promptHy: 'Երանի հաղթենք խաղը։',
          options: [
            { key: 'a', textEs: 'Exclamativa', textHy: 'բացականչական' },
            { key: 'b', textEs: 'Desiderativa', textHy: 'ցանկական' },
            { key: 'c', textEs: 'Enunciativa', textHy: 'պատմողական' },
            { key: 'd', textEs: 'Interrogativa', textHy: 'հարցական' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Desiderativa',
          correctAnswerHy: 'b) Desiderativa — ցանկական',
          explanationEs: 'La palabra «ojalá» indica un deseo explícito.',
          explanationHy: '«Ojalá» (երանի) բառը ցույց է տալիս բացահայտ ցանկություն։'
        },
        {
          id: 'ex1-q6',
          number: 6,
          type: 'choice',
          promptEs: 'Quizás venga mañana.',
          promptHy: 'Գուցե նա վաղը գա։',
          options: [
            { key: 'a', textEs: 'Dubitativa', textHy: 'կասկածական' },
            { key: 'b', textEs: 'Desiderativa', textHy: 'ցանկական' },
            { key: 'c', textEs: 'Exhortativa', textHy: 'հրամայական' },
            { key: 'd', textEs: 'Interrogativa', textHy: 'հարցական' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Dubitativa',
          correctAnswerHy: 'a) Dubitativa — կասկածական',
          explanationEs: 'El adverbio «quizás» introduce duda o posibilidad.',
          explanationHy: '«Quizás» (գուցե) մակբայը արտահայտում է կասկած կամ հավանականություն։'
        },
        {
          id: 'ex1-q7',
          number: 7,
          type: 'choice',
          promptEs: 'No tengo clase esta tarde.',
          promptHy: 'Այսօր կեսօրից հետո դաս չունեմ։',
          options: [
            { key: 'a', textEs: 'Enunciativa negativa', textHy: 'ժխտական պատմողական' },
            { key: 'b', textEs: 'Interrogativa', textHy: 'հարցական' },
            { key: 'c', textEs: 'Desiderativa', textHy: 'ցանկական' },
            { key: 'd', textEs: 'Exclamativa', textHy: 'բացականչական' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Enunciativa negativa',
          correctAnswerHy: 'a) Enunciativa negativa — ժխտական պատմողական',
          explanationEs: 'Informa negando un hecho con la partícula «no».',
          explanationHy: 'Հաղորդում է տեղեկություն՝ ժխտելով փաստը «no» մասնիկով։'
        },
        {
          id: 'ex1-q8',
          number: 8,
          type: 'choice',
          promptEs: 'Mi hermano juega al fútbol los sábados.',
          promptHy: 'Եղբայրս շաբաթ օրերին ֆուտբոլ է խաղում։',
          options: [
            { key: 'a', textEs: 'Exhortativa' },
            { key: 'b', textEs: 'Enunciativa afirmativa' },
            { key: 'c', textEs: 'Dubitativa' },
            { key: 'd', textEs: 'Interrogativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Enunciativa afirmativa',
          correctAnswerHy: 'b) Enunciativa afirmativa — հաստատական պատմողական',
          explanationEs: 'Afirma un hecho objetivo de manera clara.',
          explanationHy: 'Հաստատում է փաստը որպես իրողություն։'
        },
        {
          id: 'ex1-q9',
          number: 9,
          type: 'choice',
          promptEs: '¿Dónde está mi cuaderno?',
          promptHy: 'Որտե՞ղ է իմ տետրը։',
          options: [
            { key: 'a', textEs: 'Interrogativa directa', textHy: 'ուղիղ հարցական' },
            { key: 'b', textEs: 'Enunciativa', textHy: 'պատմողական' },
            { key: 'c', textEs: 'Desiderativa', textHy: 'ցանկական' },
            { key: 'd', textEs: 'Dubitativa', textHy: 'կասկածական' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Interrogativa directa',
          correctAnswerHy: 'a) Interrogativa directa — ուղիղ հարցական',
          explanationEs: 'Pregunta directa con pronombre interrogativo «dónde» y signos ¿ ?.',
          explanationHy: 'Ուղիղ հարց հարցական դերանվամբ («dónde») և հարցական նշաններով։'
        },
        {
          id: 'ex1-q10',
          number: 10,
          type: 'choice',
          promptEs: 'No sé dónde está mi cuaderno.',
          promptHy: 'Չգիտեմ՝ որտեղ է իմ տետրը։',
          options: [
            { key: 'a', textEs: 'Interrogativa directa' },
            { key: 'b', textEs: 'Enunciativa' },
            { key: 'c', textEs: 'Exclamativa' },
            { key: 'd', textEs: 'Exhortativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Enunciativa',
          correctAnswerHy: 'b) Enunciativa — պատմողական (պարունակում է անուղղակի հարց)',
          explanationEs: 'Aunque contiene una interrogativa indirecta, la oración principal enuncia: «No sé...».',
          explanationHy: 'Չնայած պարունակում է անուղղակի հարց, գլխավոր նախադասությունը պատմողական է («Չգիտեմ...»)։'
        },
        {
          id: 'ex1-q11',
          number: 11,
          type: 'choice',
          promptEs: '¡No puedo creerlo!',
          promptHy: 'Չեմ կարող հավատալ։',
          options: [
            { key: 'a', textEs: 'Exclamativa', textHy: 'բացականչական' },
            { key: 'b', textEs: 'Enunciativa', textHy: 'պատմողական' },
            { key: 'c', textEs: 'Interrogativa', textHy: 'հարցական' },
            { key: 'd', textEs: 'Exhortativa', textHy: 'հրամայական' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Exclamativa',
          correctAnswerHy: 'a) Exclamativa — բացականչական',
          explanationEs: 'Expresa asombro e incredulidad viva con signos de admiración.',
          explanationHy: 'Արտահայտում է զարմանք և ապշանք բացականչական նշաններով։'
        },
        {
          id: 'ex1-q12',
          number: 12,
          type: 'choice',
          promptEs: 'Por favor, no habléis durante el examen.',
          promptHy: 'Խնդրում եմ, քննության ընթացքում մի՛ խոսեք։',
          options: [
            { key: 'a', textEs: 'Dubitativa' },
            { key: 'b', textEs: 'Enunciativa' },
            { key: 'c', textEs: 'Exhortativa' },
            { key: 'd', textEs: 'Desiderativa' }
          ],
          correctKey: 'c',
          correctAnswerEs: 'c) Exhortativa',
          correctAnswerHy: 'c) Exhortativa — հորդորական/հրամայական',
          explanationEs: 'Pide o ruega una conducta («por favor, no habléis»).',
          explanationHy: 'Խնդրանք և հորդոր է պարունակում («խնդրում եմ, մի՛ խոսեք»)։'
        },
        {
          id: 'ex1-q13',
          number: 13,
          type: 'choice',
          promptEs: 'Tal vez el profesor llegue tarde.',
          promptHy: 'Հնարավոր է՝ ուսուցիչը ուշ գա։',
          options: [
            { key: 'a', textEs: 'Interrogativa' },
            { key: 'b', textEs: 'Dubitativa' },
            { key: 'c', textEs: 'Exclamativa' },
            { key: 'd', textEs: 'Exhortativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Dubitativa',
          correctAnswerHy: 'b) Dubitativa — կասկածական',
          explanationEs: '«Tal vez» expresa posibilidad o duda.',
          explanationHy: '«Tal vez» (հնարավոր է, գուցե) արտահայտում է կասկած կամ հավանականություն։'
        },
        {
          id: 'ex1-q14',
          number: 14,
          type: 'choice',
          promptEs: 'Me gustaría viajar a Madrid este verano.',
          promptHy: 'Ես կցանկանայի այս ամառ մեկնել Մադրիդ։',
          options: [
            { key: 'a', textEs: 'Desiderativa' },
            { key: 'b', textEs: 'Enunciativa negativa' },
            { key: 'c', textEs: 'Interrogativa' },
            { key: 'd', textEs: 'Exhortativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Desiderativa',
          correctAnswerHy: 'a) Desiderativa — ցանկական',
          explanationEs: '«Me gustaría» expresa un deseo del emisor.',
          explanationHy: '«Me gustaría» (կցանկանայի) արտահայտում է ցանկություն։'
        },
        {
          id: 'ex1-q15',
          number: 15,
          type: 'choice',
          promptEs: '¿Podrías ayudarme con este ejercicio?',
          promptHy: 'Կարո՞ղ ես ինձ օգնել այս վարժության հարցում։',
          noteEs: 'По форме это вопрос. — Ձևով սա հարց է։',
          options: [
            { key: 'a', textEs: 'Interrogativa' },
            { key: 'b', textEs: 'Exclamativa' },
            { key: 'c', textEs: 'Enunciativa' },
            { key: 'd', textEs: 'Dubitativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Interrogativa',
          correctAnswerHy: 'a) Interrogativa — հարցական (քերականական ձևով)',
          explanationEs: 'Por su forma gramatical es una oración interrogativa.',
          explanationHy: 'Իր քերականական կառուցվածքով սա հարցական նախադասություն է։'
        }
      ]
    },
    {
      id: 'ex1-sec2',
      titleEs: 'Parte 2 — Reconoce la modalidad',
      titleHy: 'Մաս 2 — Ճանաչի՛ր տեսակը (16–20)',
      questions: [
        {
          id: 'ex1-q16',
          number: 16,
          type: 'choice',
          promptEs: 'Probablemente mañana llueva.',
          promptHy: 'Հավանաբար վաղը անձրև գա։',
          options: [
            { key: 'a', textEs: 'Desiderativa' },
            { key: 'b', textEs: 'Dubitativa' },
            { key: 'c', textEs: 'Exhortativa' },
            { key: 'd', textEs: 'Exclamativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Dubitativa',
          correctAnswerHy: 'b) Dubitativa — կասկածական',
          explanationEs: '«Probablemente» indica probabilidad o duda.',
          explanationHy: '«Probablemente» (հավանաբար) արտահայտում է հավանականություն կամ կասկած։'
        },
        {
          id: 'ex1-q17',
          number: 17,
          type: 'choice',
          promptEs: '¡Cómo ha cambiado esta ciudad!',
          promptHy: 'Ինչքա՜ն է փոխվել այս քաղաքը։',
          options: [
            { key: 'a', textEs: 'Exclamativa' },
            { key: 'b', textEs: 'Interrogativa' },
            { key: 'c', textEs: 'Enunciativa' },
            { key: 'd', textEs: 'Dubitativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Exclamativa',
          correctAnswerHy: 'a) Exclamativa — բացականչական',
          explanationEs: 'Expresa emoción y sorpresa ante el cambio.',
          explanationHy: 'Արտահայտում է զարմանք քաղաքի փոփոխության վերաբերյալ։'
        },
        {
          id: 'ex1-q18',
          number: 18,
          type: 'choice',
          promptEs: 'Espero que todo salga bien.',
          promptHy: 'Հուսով եմ՝ ամեն ինչ լավ կանցնի։',
          options: [
            { key: 'a', textEs: 'Dubitativa' },
            { key: 'b', textEs: 'Desiderativa' },
            { key: 'c', textEs: 'Interrogativa' },
            { key: 'd', textEs: 'Exhortativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Desiderativa',
          correctAnswerHy: 'b) Desiderativa — ցանկական',
          explanationEs: '«Espero que» manifiesta un deseo positivo.',
          explanationHy: '«Espero que» (հուսով եմ, որ) արտահայտում է ցանկություն։'
        },
        {
          id: 'ex1-q19',
          number: 19,
          type: 'choice',
          promptEs: 'No olvides traer el cuaderno mañana.',
          promptHy: 'Մի՛ մոռացիր վաղը բերել տետրը։',
          options: [
            { key: 'a', textEs: 'Exclamativa' },
            { key: 'b', textEs: 'Enunciativa' },
            { key: 'c', textEs: 'Exhortativa' },
            { key: 'd', textEs: 'Dubitativa' }
          ],
          correctKey: 'c',
          correctAnswerEs: 'c) Exhortativa',
          correctAnswerHy: 'c) Exhortativa — հորդորական/հրամայական',
          explanationEs: 'Es una recomendación o mandato negativo («no olvides»).',
          explanationHy: 'Ժխտական հրամայական կամ հորդոր է («մի՛ մոռացիր»)։'
        },
        {
          id: 'ex1-q20',
          number: 20,
          type: 'choice',
          promptEs: 'Puede que Marta no venga hoy.',
          promptHy: 'Հնարավոր է՝ Մարտան այսօր չգա։',
          options: [
            { key: 'a', textEs: 'Dubitativa' },
            { key: 'b', textEs: 'Desiderativa' },
            { key: 'c', textEs: 'Interrogativa' },
            { key: 'd', textEs: 'Enunciativa afirmativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Dubitativa',
          correctAnswerHy: 'a) Dubitativa — կասկածական',
          explanationEs: '«Puede que» + subjuntivo introduce incertidumbre.',
          explanationHy: '«Puede que» (հնարավոր է) կասկած և հավանականություն է մատնանշում։'
        }
      ]
    },
    {
      id: 'ex1-sec3',
      titleEs: 'Parte 3 — Preguntas tipo examen',
      titleHy: 'Մաս 3 — Քննության տիպի հարցեր (21–25)',
      questions: [
        {
          id: 'ex1-q21',
          number: 21,
          type: 'choice',
          promptEs: '¿Qué expresa una oración enunciativa?',
          promptHy: 'Ի՞նչ է արտահայտում պատմողական նախադասությունը։',
          options: [
            { key: 'a', textEs: 'Una orden', textHy: 'հրաման' },
            { key: 'b', textEs: 'Una información', textHy: 'տեղեկություն' },
            { key: 'c', textEs: 'Un deseo', textHy: 'ցանկություն' },
            { key: 'd', textEs: 'Una duda', textHy: 'կասկած' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Una información',
          correctAnswerHy: 'b) Una información — տեղեկություն',
          explanationEs: 'Las oraciones enunciativas transmiten hechos o informaciones objetivas.',
          explanationHy: 'Պատմողական նախադասությունները հաղորդում են տեղեկություններ կամ փաստեր։'
        },
        {
          id: 'ex1-q22',
          number: 22,
          type: 'choice',
          promptEs: '¿Qué palabras suelen aparecer en las oraciones dubitativas?',
          promptHy: 'Ո՞ր բառերն են հաճախ հանդիպում կասկածական նախադասություններում։',
          options: [
            { key: 'a', textEs: 'quizás, tal vez, probablemente' },
            { key: 'b', textEs: 'ojalá, deseo' },
            { key: 'c', textEs: 'por favor, haz' },
            { key: 'd', textEs: 'qué, cuánto' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) quizás, tal vez, probablemente',
          correctAnswerHy: 'a) quizás, tal vez, probablemente',
          explanationEs: 'Son adverbios y locuciones de duda característicos.',
          explanationHy: 'Սրանք կասկածի և հավանականության հիմնական մակբայներն են։'
        },
        {
          id: 'ex1-q23',
          number: 23,
          type: 'choice',
          promptEs: '¿Qué palabra ayuda a reconocer muchas oraciones desiderativas?',
          promptHy: 'Ո՞ր բառն է հաճախ օգնում ճանաչել ցանկական նախադասությունը։',
          options: [
            { key: 'a', textEs: 'nunca' },
            { key: 'b', textEs: 'ojalá' },
            { key: 'c', textEs: 'quizás' },
            { key: 'd', textEs: 'dónde' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) ojalá',
          correctAnswerHy: 'b) ojalá (երանի)',
          explanationEs: '«Ojalá» es el marcador por excelencia del deseo.',
          explanationHy: '«Ojalá»-ն ցանկության ամենաբնորոշ ցուցիչն է։'
        },
        {
          id: 'ex1-q24',
          number: 24,
          type: 'choice',
          promptEs: '¿Cuál de estas frases es exhortativa?',
          promptHy: 'Ո՞ր նախադասությունն է հրամայական/հորդորական։',
          options: [
            { key: 'a', textEs: 'Quizás venga Juan.' },
            { key: 'b', textEs: '¡Qué calor hace!' },
            { key: 'c', textEs: 'Guarda silencio, por favor.' },
            { key: 'd', textEs: 'Ojalá llegue pronto.' }
          ],
          correctKey: 'c',
          correctAnswerEs: 'c) Guarda silencio, por favor.',
          correctAnswerHy: 'c) Guarda silencio, por favor.',
          explanationEs: 'Pide realizar una acción («guarda silencio») con cortesía («por favor»).',
          explanationHy: 'Խնդրում է լռություն պահպանել։'
        },
        {
          id: 'ex1-q25',
          number: 25,
          type: 'choice',
          promptEs: '¿Cuál es una oración dubitativa?',
          promptHy: 'Ո՞րն է կասկածական նախադասություն։',
          options: [
            { key: 'a', textEs: 'Tal vez tengamos examen mañana.' },
            { key: 'b', textEs: 'Tenemos examen mañana.' },
            { key: 'c', textEs: '¿Tenemos examen mañana?' },
            { key: 'd', textEs: '¡Tenemos examen mañana!' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Tal vez tengamos examen mañana.',
          correctAnswerHy: 'a) Tal vez tengamos examen mañana.',
          explanationEs: '«Tal vez» introduce duda sobre el examen.',
          explanationHy: '«Tal vez»-ը կասկած է մտցնում վաղվա քննության մասին։'
        }
      ]
    },
    {
      id: 'ex1-sec4',
      titleEs: 'Parte 4 — Encuentra el intruso',
      titleHy: 'Մաս 4 — Գտի՛ր ավելորդը (26–28)',
      questions: [
        {
          id: 'ex1-q26',
          number: 26,
          type: 'choice',
          promptEs: 'Tres frases son interrogativas y una no lo es.',
          promptHy: 'Երեք նախադասություն հարցական են, մեկը՝ ոչ։',
          options: [
            { key: 'a', textEs: '¿Qué hora es?' },
            { key: 'b', textEs: '¿Dónde vive Carlos?' },
            { key: 'c', textEs: '¿Has estudiado?' },
            { key: 'd', textEs: 'Quizás Carlos esté en casa.' }
          ],
          correctKey: 'd',
          correctAnswerEs: 'd) Quizás Carlos esté en casa.',
          correctAnswerHy: 'd) Quizás Carlos esté en casa. (կասկածական է, ոչ թե հարցական)',
          explanationEs: 'Las opciones a, b y c son interrogativas directas; d es dubitativa.',
          explanationHy: 'a, b և c տարբերակները հարցական են, իսկ d-ն՝ կասկածական։'
        },
        {
          id: 'ex1-q27',
          number: 27,
          type: 'choice',
          promptEs: 'Tres frases son exhortativas y una no lo es.',
          promptHy: 'Երեքը հրամայական են, մեկը՝ ոչ։',
          options: [
            { key: 'a', textEs: 'Siéntate aquí.' },
            { key: 'b', textEs: 'Escúchame, por favor.' },
            { key: 'c', textEs: 'No corras.' },
            { key: 'd', textEs: 'Ojalá vengas conmigo.' }
          ],
          correctKey: 'd',
          correctAnswerEs: 'd) Ojalá vengas conmigo.',
          correctAnswerHy: 'd) Ojalá vengas conmigo. (ցանկական է, ոչ թե հրամայական)',
          explanationEs: '«Ojalá vengas conmigo» es desiderativa (expresa deseo), no exhortativa.',
          explanationHy: '«Ojalá vengas conmigo»-ն ցանկական նախադասություն է։'
        },
        {
          id: 'ex1-q28',
          number: 28,
          type: 'choice',
          promptEs: 'Tres frases expresan duda y una no.',
          promptHy: 'Երեքը կասկած են արտահայտում, մեկը՝ ոչ։',
          options: [
            { key: 'a', textEs: 'Quizás llegue tarde.' },
            { key: 'b', textEs: 'Tal vez esté cansado.' },
            { key: 'c', textEs: 'Probablemente no venga.' },
            { key: 'd', textEs: '¡Estoy muy cansado!' }
          ],
          correctKey: 'd',
          correctAnswerEs: 'd) ¡Estoy muy cansado!',
          correctAnswerHy: 'd) ¡Estoy muy cansado! (բացականչական է, ոչ թե կասկածական)',
          explanationEs: 'Es una oración exclamativa con emoción intensa, mientras las otras tres son dubitativas.',
          explanationHy: 'Սա բացականչական նախադասություն է, իսկ մյուս երեքը կասկածական են։'
        }
      ]
    },
    {
      id: 'ex1-sec5',
      titleEs: 'Parte 5 — Piensa un poco más',
      titleHy: 'Մաս 5 — Մի փոքր ավելի դժվար (29–30)',
      questions: [
        {
          id: 'ex1-q29',
          number: 29,
          type: 'choice',
          promptEs: '¡Ojalá no llueva mañana!',
          promptHy: 'Երանի վաղը անձրև չգա։',
          questionEs: 'Aquí hay signos de exclamación, pero ¿qué modalidad predomina?',
          questionHy: 'Այստեղ կան բացականչական նշաններ, բայց ո՞ր տեսակն է գերակշռում։',
          options: [
            { key: 'a', textEs: 'Exclamativa' },
            { key: 'b', textEs: 'Desiderativa' },
            { key: 'c', textEs: 'Interrogativa' },
            { key: 'd', textEs: 'Enunciativa' }
          ],
          correctKey: 'b',
          correctAnswerEs: 'b) Desiderativa',
          correctAnswerHy: 'b) Desiderativa — ցանկական',
          explanationEs: 'La intención comunicativa fundamental es expresar un deseo («ojalá»).',
          explanationHy: 'Հիմնական հաղորդակցական նպատակը ցանկություն արտահայտելն է («ojalá»)։'
        },
        {
          id: 'ex1-q30',
          number: 30,
          type: 'choice',
          promptEs: '¿Puedes cerrar la ventana, por favor?',
          promptHy: 'Կարո՞ղ ես փակել պատուհանը, խնդրում եմ։',
          questionEs: 'Gramaticalmente tiene forma de pregunta. ¿Qué modalidad tiene por su forma?',
          questionHy: 'Քերականական ձևով սա ի՞նչ տեսակ է։',
          options: [
            { key: 'a', textEs: 'Interrogativa' },
            { key: 'b', textEs: 'Dubitativa' },
            { key: 'c', textEs: 'Desiderativa' },
            { key: 'd', textEs: 'Exclamativa' }
          ],
          correctKey: 'a',
          correctAnswerEs: 'a) Interrogativa',
          correctAnswerHy: 'a) Interrogativa — հարցական (քերականական ձևով)',
          explanationEs: 'Por su forma gramatical es interrogativa, aunque su intención sea una petición cortés.',
          explanationHy: 'Քերականական ձևով սա հարցական է, թեև նպատակը քաղաքավարի խնդրանքն է։'
        }
      ]
    }
  ]
};
