/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  ALL_EXAMS,
  MODALITY_RULES,
  TOTAL_QUESTIONS_COUNT
} from './examData';
import { ExamModule, QuestionItem, ExamSection } from './types';
import {
  BookOpen,
  CheckCircle2,
  XCircle,
  Eye,
  EyeOff,
  Volume2,
  RotateCcw,
  Sparkles,
  Award,
  Search,
  Filter,
  Layers,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  FileText,
  Bookmark,
  Check,
  ZoomIn,
  ZoomOut,
  Type
} from 'lucide-react';

export default function App() {
  // Current active exam (default to Exam 1)
  const [activeExamId, setActiveExamId] = useState<string>('exam-1');
  // View mode: 'exam' | 'theory'
  const [viewTab, setViewTab] = useState<'exam' | 'theory'>('exam');
  // Selected user choices: { [questionId]: selectedKey }
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  // Explicitly revealed answers via the "Պատասխան / Ver respuesta" button: { [questionId]: boolean }
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});
  // Explicitly revealed translations by clicking on Spanish text: { [elementId]: boolean }
  const [revealedTranslations, setRevealedTranslations] = useState<Record<string, boolean>>({});
  // Global switch: reveal all translations or keep interactive click-to-reveal
  const [showAllTranslations, setShowAllTranslations] = useState<boolean>(false);
  // Filter by category or search term
  const [filterModality, setFilterModality] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  // Text input answers for transform/open questions
  const [textAnswers, setTextAnswers] = useState<Record<string, string>>({});
  // Font size scale level: 'normal' | 'large' | 'huge'
  const [fontScale, setFontScale] = useState<'normal' | 'large' | 'huge'>('large');

  // Active exam module
  const currentExam = useMemo(() => {
    return ALL_EXAMS.find((e) => e.id === activeExamId) || ALL_EXAMS[0];
  }, [activeExamId]);

  // Audio pronunciation function
  const speakSpanish = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'es-ES';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Toggle Armenian translation for a specific element key
  const toggleTranslation = (id: string) => {
    setRevealedTranslations((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Check if a specific translation should be visible
  const isTranslationVisible = (id: string) => {
    return showAllTranslations || !!revealedTranslations[id];
  };

  // Toggle answer reveal
  const toggleAnswer = (questionId: string) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  // Reveal all answers in the active exam
  const revealAllExamAnswers = () => {
    const newRevealed: Record<string, boolean> = { ...revealedAnswers };
    currentExam.sections.forEach((sec) => {
      sec.questions.forEach((q) => {
        newRevealed[q.id] = true;
      });
    });
    setRevealedAnswers(newRevealed);
  };

  // Hide all answers in the active exam
  const hideAllExamAnswers = () => {
    const newRevealed: Record<string, boolean> = { ...revealedAnswers };
    currentExam.sections.forEach((sec) => {
      sec.questions.forEach((q) => {
        newRevealed[q.id] = false;
      });
    });
    setRevealedAnswers(newRevealed);
  };

  // Reset exam progress
  const resetExam = () => {
    if (window.confirm('Ցանկանո՞ւմ եք մաքրել այս քննության բոլոր պատասխանները։')) {
      const qIds = new Set(
        currentExam.sections.flatMap((s) => s.questions.map((q) => q.id))
      );
      setUserAnswers((prev) => {
        const next = { ...prev };
        qIds.forEach((id) => delete next[id]);
        return next;
      });
      setRevealedAnswers((prev) => {
        const next = { ...prev };
        qIds.forEach((id) => delete next[id]);
        return next;
      });
      setTextAnswers((prev) => {
        const next = { ...prev };
        qIds.forEach((id) => delete next[id]);
        return next;
      });
    }
  };

  // Stats calculation
  const stats = useMemo(() => {
    let answered = 0;
    let correct = 0;
    currentExam.sections.forEach((sec) => {
      sec.questions.forEach((q) => {
        const userChoice = userAnswers[q.id];
        if (userChoice) {
          answered++;
          if (
            userChoice.toLowerCase().trim() === q.correctKey.toLowerCase().trim()
          ) {
            correct++;
          }
        }
      });
    });
    return {
      answered,
      correct,
      total: currentExam.totalQuestions,
      percentage: answered > 0 ? Math.round((correct / answered) * 100) : 0
    };
  }, [currentExam, userAnswers]);

  // Filter questions based on search query and modality
  const filteredSections = useMemo(() => {
    return currentExam.sections
      .map((sec) => {
        const filteredQ = sec.questions.filter((q) => {
          const matchQuery =
            !searchQuery ||
            q.promptEs.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.promptHy.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.correctAnswerEs.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.correctAnswerHy?.toLowerCase().includes(searchQuery.toLowerCase());

          const matchModality =
            filterModality === 'all' ||
            q.correctAnswerEs.toLowerCase().includes(filterModality.toLowerCase()) ||
            q.promptEs.toLowerCase().includes(filterModality.toLowerCase());

          return matchQuery && matchModality;
        });
        return {
          ...sec,
          questions: filteredQ
        };
      })
      .filter((sec) => sec.questions.length > 0);
  }, [currentExam, searchQuery, filterModality]);

  // Font size classes based on fontScale
  const fontSizes = {
    prompt:
      fontScale === 'huge'
        ? 'text-2xl sm:text-3xl'
        : fontScale === 'large'
        ? 'text-xl sm:text-2xl'
        : 'text-lg sm:text-xl',
    translation:
      fontScale === 'huge'
        ? 'text-base sm:text-lg'
        : fontScale === 'large'
        ? 'text-sm sm:text-base'
        : 'text-xs sm:text-sm',
    option:
      fontScale === 'huge'
        ? 'text-base sm:text-lg'
        : fontScale === 'large'
        ? 'text-sm sm:text-base'
        : 'text-xs sm:text-sm',
    answer:
      fontScale === 'huge'
        ? 'text-lg sm:text-xl'
        : fontScale === 'large'
        ? 'text-base sm:text-lg'
        : 'text-sm sm:text-base',
    instruction:
      fontScale === 'huge'
        ? 'text-base sm:text-lg'
        : fontScale === 'large'
        ? 'text-sm sm:text-base'
        : 'text-xs sm:text-sm'
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased flex flex-col">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* Title & Badge */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 flex items-center justify-center font-bold text-xl shadow-xs">
                🇪🇸
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Modalidades Oracionales
                  </h1>
                  <span className="text-xs px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-800 font-semibold border border-amber-200">
                    7º Clase / 1º ESO
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Նախադասությունների տեսակները (Իսպաներեն ↔ Հայերեն թարգմանություն)
                </p>
              </div>
            </div>

            {/* Quick Actions & Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Font Size Adjuster Control */}
              <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200">
                <span className="text-xs font-semibold text-slate-500 px-2 flex items-center gap-1">
                  <Type className="w-3.5 h-3.5 text-slate-600" />
                  <span>Տառաչափ՝</span>
                </span>
                <button
                  type="button"
                  onClick={() => setFontScale('normal')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    fontScale === 'normal'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Ստանդարտ տառաչափ"
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => setFontScale('large')}
                  className={`px-2.5 py-1 text-sm font-bold rounded-md transition-all cursor-pointer ${
                    fontScale === 'large'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Մեծացված տառաչափ (լռելյայն)"
                >
                  A+
                </button>
                <button
                  type="button"
                  onClick={() => setFontScale('huge')}
                  className={`px-2.5 py-1 text-base font-bold rounded-md transition-all cursor-pointer ${
                    fontScale === 'huge'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Առավելագույն խոշոր տառաչափ"
                >
                  A++
                </button>
              </div>

              <button
                onClick={() => setViewTab('exam')}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewTab === 'exam'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Քննություններ ({TOTAL_QUESTIONS_COUNT})</span>
              </button>

              <button
                onClick={() => setViewTab('theory')}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewTab === 'theory'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Հեշտ հիշելու համար (Կանոններ)</span>
              </button>

              {/* Translation Global Toggle */}
              <button
                onClick={() => setShowAllTranslations((prev) => !prev)}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold border transition-colors flex items-center gap-1.5 cursor-pointer ${
                  showAllTranslations
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
                title="Ցուցադրել կամ թաքցնել բոլոր հայերեն թարգմանությունները"
              >
                {showAllTranslations ? (
                  <>
                    <Eye className="w-4 h-4 text-emerald-600" />
                    <span>Բոլոր թարգմանությունները բաց են</span>
                  </>
                ) : (
                  <>
                    <EyeOff className="w-4 h-4 text-slate-400" />
                    <span>Թարգմանությունը՝ սեղմումով</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Exam Selector Tabs (When on Exam view) */}
          {viewTab === 'exam' && (
            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {ALL_EXAMS.map((exam) => {
                  const isActive = exam.id === activeExamId;
                  return (
                    <button
                      key={exam.id}
                      onClick={() => setActiveExamId(exam.id)}
                      className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? 'bg-slate-900 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="font-bold">{exam.badge}</span>
                      <span className="opacity-80 hidden md:inline">({exam.totalQuestions} հարց)</span>
                    </button>
                  );
                })}
              </div>

              {/* Score / Progress Bar */}
              <div className="flex items-center gap-3 text-xs sm:text-sm bg-slate-100 px-3.5 py-1.5 rounded-lg">
                <div className="flex items-center gap-1.5 text-slate-700">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>
                    Պատասխանված՝ <strong>{stats.answered}</strong> / {stats.total}
                  </span>
                </div>
                {stats.answered > 0 && (
                  <div className="border-l border-slate-300 pl-3 flex items-center gap-1.5">
                    <span className="text-emerald-700 font-bold">
                      {stats.correct} ճիշտ ({stats.percentage}%)
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6">
        {/* Banner with Instructions */}
        <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-amber-50 via-indigo-50 to-sky-50 border border-amber-200/60 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
              <Lightbulb className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>Ինտերակտիվ ուղեցույց</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-semibold">
                  {currentExam.level}
                </span>
              </h2>
              <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                • <strong>Սեղմե՛ք ցանկացած իսպաներեն նախադասության վրա</strong>՝ հայերեն թարգմանությունը բացելու համար։
                <br />
                • Ամեն առաջադրանք ունի առանձին <strong>«Պատասխան / Ver respuesta»</strong> կոճակ։
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={revealAllExamAnswers}
              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <Eye className="w-4 h-4 text-indigo-600" />
              <span>Բացել բոլոր պատասխանները</span>
            </button>
            <button
              onClick={hideAllExamAnswers}
              className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <EyeOff className="w-4 h-4 text-slate-500" />
              <span>Թաքցնել</span>
            </button>
            <button
              onClick={resetExam}
              className="px-3 py-1.5 rounded-lg bg-white border border-rose-200 text-rose-700 text-xs sm:text-sm font-medium hover:bg-rose-50 transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
              title="Մաքրել պատասխանները"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Մաքրել</span>
            </button>
          </div>
        </div>

        {/* VIEW TAB: THEORY / RULES (Para recordar — Հեշտ հիշելու համար) */}
        {viewTab === 'theory' ? (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-2xl">
                  📖
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Para recordar — Հեշտ հիշելու համար
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 mt-0.5">
                    Իսպաներեն նախադասությունների 6 հիմնական տեսակները և դրանց նշանները
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {MODALITY_RULES.map((rule) => {
                  const exampleKey = `rule-ex-${rule.nameEs}`;
                  const isExVisible = isTranslationVisible(exampleKey);
                  return (
                    <div
                      key={rule.nameEs}
                      className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-indigo-600 inline-block"></span>
                            <span>{rule.nameEs}</span>
                          </h3>
                          <span className="text-xs sm:text-sm px-2.5 py-1 rounded-md bg-slate-200 text-slate-800 font-semibold">
                            {rule.nameHy}
                          </span>
                        </div>

                        <div className="text-sm text-slate-700 mb-3 space-y-1">
                          <p className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-500">
                            Գործառույթը՝
                          </p>
                          <p className="font-medium">🇪🇸 {rule.functionEs}</p>
                          <p className="text-slate-600 font-medium">🇦🇲 {rule.functionHy}</p>
                        </div>

                        <div className="text-xs sm:text-sm bg-white p-3 rounded-xl border border-slate-200/90 mb-4 space-y-1">
                          <p className="font-bold text-slate-500 uppercase tracking-wider text-xs">
                            Բնորոշ բառեր / Palabras clave:
                          </p>
                          <p className="font-mono text-slate-800 font-semibold">
                            {rule.keyWordsEs}
                          </p>
                          <p className="text-slate-600 font-medium">
                            {rule.keyWordsHy}
                          </p>
                        </div>
                      </div>

                      {/* Clickable Example with translation */}
                      <div
                        onClick={() => toggleTranslation(exampleKey)}
                        className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 cursor-pointer hover:bg-amber-100/80 transition-all group"
                        title="Սեղմե՛ք թարգմանությունը տեսնելու համար"
                      >
                        <div className="flex items-center justify-between text-xs sm:text-sm text-amber-950 font-bold mb-1.5">
                          <span className="flex items-center gap-1.5">
                            <span>Օրինակ</span>
                            <span className="text-xs font-normal text-amber-800">(Սեղմի՛ր թարգմանության համար)</span>
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              speakSpanish(rule.exampleEs);
                            }}
                            className="text-amber-800 hover:text-amber-950 p-1 rounded-md hover:bg-amber-200/50"
                            title="Լսել իսպաներեն"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm sm:text-base text-slate-950 font-bold">
                          🇪🇸 {rule.exampleEs}
                        </p>
                        {isExVisible ? (
                          <p className="text-sm sm:text-base text-indigo-800 font-semibold mt-2 pt-2 border-t border-amber-200/70 animate-fadeIn">
                            🇦🇲 {rule.exampleHy}
                          </p>
                        ) : (
                          <p className="text-xs text-amber-800/90 font-medium italic mt-1">
                            👉 Կտտացրեք՝ հայերեն թարգմանությունը բացելու համար
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Back to Exam button */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setViewTab('exam')}
                  className="px-6 py-3 rounded-xl bg-indigo-600 text-white text-sm sm:text-base font-bold hover:bg-indigo-700 transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-5 h-5" />
                  <span>Անցնել քննության թեստերին</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* VIEW TAB: EXAMS & EXERCISES */
          <div className="space-y-8">
            {/* Search and Modality Filter Toolbar */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-3">
              {/* Search input */}
              <div className="relative w-full md:w-88">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Փնտրել նախադասություն կամ բառ..."
                  className="w-full pl-10 pr-3.5 py-2 text-sm sm:text-base rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-sm font-bold"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Modality Filter Buttons */}
              <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                <span className="text-xs sm:text-sm font-semibold text-slate-500 mr-1 flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" /> Տեսակը՝
                </span>
                {[
                  { key: 'all', label: 'Բոլորը' },
                  { key: 'Enunciativa', label: 'Enunciativa' },
                  { key: 'Interrogativa', label: 'Interrogativa' },
                  { key: 'Exclamativa', label: 'Exclamativa' },
                  { key: 'Exhortativa', label: 'Exhortativa' },
                  { key: 'Desiderativa', label: 'Desiderativa' },
                  { key: 'Dubitativa', label: 'Dubitativa' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setFilterModality(item.key)}
                    className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      filterModality === item.key
                        ? 'bg-slate-900 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Exam Header Description */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded-md bg-amber-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider">
                      {currentExam.badge}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {currentExam.titleEs}
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-indigo-700 mt-1">
                    {currentExam.titleHy}
                  </p>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 bg-slate-50 px-3.5 py-2 rounded-lg border border-slate-200 w-fit">
                  Ընդհանուր՝ <strong>{currentExam.totalQuestions} առաջադրանք</strong>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 mt-3 font-medium">
                {currentExam.descriptionEs}
              </p>
              <p className="text-sm sm:text-base text-slate-600 mt-1 font-medium">
                🇦🇲 {currentExam.descriptionHy}
              </p>
            </div>

            {/* SECTIONS & QUESTIONS */}
            {filteredSections.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 p-6">
                <Search className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                <p className="text-slate-700 text-base font-semibold">Համապատասխան հարցեր չգտնվեցին։</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setFilterModality('all');
                  }}
                  className="mt-3 px-4 py-2 text-sm text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 font-semibold"
                >
                  Մաքրել ֆիլտրերը
                </button>
              </div>
            ) : (
              filteredSections.map((section) => (
                <div
                  key={section.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden"
                >
                  {/* Section Title Bar */}
                  <div className="bg-slate-900 text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                        {section.titleEs}
                      </h3>
                      <p className="text-sm text-amber-300 font-semibold mt-0.5">
                        {section.titleHy}
                      </p>
                      {section.descriptionEs && (
                        <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                          {section.descriptionEs} ({section.descriptionHy})
                        </p>
                      )}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 w-fit shrink-0">
                      {section.questions.length} առաջադրանք
                    </span>
                  </div>

                  {/* Reading Story Text if this section has reading dialogue (e.g. Pablo, Lucía / Sergio, Carla) */}
                  {section.storyEs && (
                    <div className="p-6 bg-amber-50/50 border-b border-amber-200/70">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-amber-700" />
                          <h4 className="text-base sm:text-lg font-bold text-amber-950">
                            {section.storyTitleEs} — {section.storyTitleHy}
                          </h4>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleTranslation(`story-${section.id}`)}
                          className="text-xs sm:text-sm font-bold text-indigo-700 hover:text-indigo-900 bg-white px-3 py-1.5 rounded-lg border border-amber-200 shadow-2xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <Eye className="w-4 h-4" />
                          <span>
                            {isTranslationVisible(`story-${section.id}`)
                              ? 'Թաքցնել հայերեն տեքստը'
                              : 'Ցույց տալ հայերեն տեքստը'}
                          </span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Spanish Text (Clickable lines) */}
                        <div
                          onClick={() => toggleTranslation(`story-${section.id}`)}
                          className="bg-white p-5 rounded-xl border border-amber-200/80 text-sm sm:text-base text-slate-800 whitespace-pre-line leading-relaxed font-serif cursor-pointer hover:bg-amber-50/40 transition-colors shadow-2xs"
                          title="Սեղմե՛ք թարգմանությունը բացելու համար"
                        >
                          <div className="flex items-center justify-between text-xs sm:text-sm font-sans font-bold text-amber-800 pb-2 mb-2 border-b border-amber-100">
                            <span>🇪🇸 Texto original en español</span>
                            <span className="text-xs font-normal text-amber-600">
                              (Սեղմի՛ր տեքստի վրա)
                            </span>
                          </div>
                          {section.storyEs}
                        </div>

                        {/* Armenian Text */}
                        <div
                          className={`p-5 rounded-xl border leading-relaxed font-sans text-sm sm:text-base transition-all ${
                            isTranslationVisible(`story-${section.id}`)
                              ? 'bg-indigo-50/70 border-indigo-200 text-indigo-950 whitespace-pre-line'
                              : 'bg-slate-100/70 border-slate-200 text-slate-400 italic flex items-center justify-center cursor-pointer'
                          }`}
                          onClick={() => toggleTranslation(`story-${section.id}`)}
                        >
                          {isTranslationVisible(`story-${section.id}`) ? (
                            <>
                              <div className="text-xs sm:text-sm font-bold text-indigo-800 pb-2 mb-2 border-b border-indigo-200">
                                🇦🇲 Հայերեն թարգմանություն
                              </div>
                              {section.storyHy}
                            </>
                          ) : (
                            <p className="text-center text-xs sm:text-sm font-medium">
                              🇦🇲 Սեղմեք այստեղ կամ իսպաներեն տեքստի վրա՝ հայերեն թարգմանությունը կարդալու համար
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Question Cards List */}
                  <div className="p-4 sm:p-6 space-y-6">
                    {section.questions.map((question) => {
                      const isRevealed = !!revealedAnswers[question.id];
                      const promptTransVisible = isTranslationVisible(`prompt-${question.id}`);
                      const userChoice = userAnswers[question.id];
                      const isCorrect =
                        userChoice &&
                        userChoice.toLowerCase().trim() === question.correctKey.toLowerCase().trim();
                      const isAnswered = !!userChoice;

                      return (
                        <div
                          key={question.id}
                          id={question.id}
                          className={`rounded-xl border transition-all p-5 sm:p-6 ${
                            isRevealed
                              ? 'border-indigo-200 bg-indigo-50/20 shadow-xs'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          {/* Top Row: Question number, Audio & Translation quick action */}
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2.5">
                              <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-sm sm:text-base flex items-center justify-center shadow-2xs">
                                {question.number}
                              </span>
                              <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
                                {question.type === 'transform'
                                  ? 'Փոխակերպում'
                                  : question.type === 'true_false'
                                  ? 'Ճիշտ / Սխալ'
                                  : question.type === 'text_question'
                                  ? 'Տեքստային առաջադրանք'
                                  : question.type === 'fill_or_classify'
                                  ? 'Դասակարգում'
                                  : 'Ընտրովի հարց'}
                              </span>
                            </div>

                            {/* Secondary actions: Listen Spanish audio & toggle translation */}
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => speakSpanish(question.promptEs)}
                                className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                                title="Լսել իսպաներեն արտասանությունը"
                              >
                                <Volume2 className="w-5 h-5" />
                              </button>

                              <button
                                type="button"
                                onClick={() => toggleTranslation(`prompt-${question.id}`)}
                                className={`text-xs sm:text-sm px-3 py-1.5 rounded-lg border font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                                  promptTransVisible
                                    ? 'bg-amber-100 text-amber-900 border-amber-300'
                                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                                }`}
                                title="Սեղմե՛ք հայերեն թարգմանության համար"
                              >
                                {promptTransVisible ? (
                                  <>
                                    <Eye className="w-4 h-4 text-amber-700" />
                                    <span>Թարգմ. բացված է</span>
                                  </>
                                ) : (
                                  <>
                                    <EyeOff className="w-4 h-4 text-slate-400" />
                                    <span>🇦🇲 Թարգմանել</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>

                          {/* SPANISH PROMPT (CLICKABLE FOR ARMENIAN TRANSLATION) */}
                          <div
                            onClick={() => toggleTranslation(`prompt-${question.id}`)}
                            className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/90 cursor-pointer hover:bg-amber-50/50 hover:border-amber-300 transition-all group mb-4"
                            title="Սեղմե՛ք այստեղ՝ հայերեն թարգմանությունը տեսնելու համար"
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                                <span>🇪🇸 Իսպաներեն նախադասություն</span>
                                <span className="text-xs text-amber-700 font-normal group-hover:underline">
                                  (Սեղմի՛ր թարգմանության համար)
                                </span>
                              </span>
                            </div>

                            <p className={`${fontSizes.prompt} font-bold text-slate-900 leading-snug tracking-tight`}>
                              {question.promptEs}
                            </p>

                            {/* Secondary question text if any */}
                            {question.questionEs && (
                              <p className={`${fontSizes.instruction} font-semibold text-slate-700 mt-1.5 italic`}>
                                {question.questionEs}
                              </p>
                            )}

                            {/* ARMENIAN TRANSLATION (REVEALED ON CLICK) */}
                            {promptTransVisible ? (
                              <div className={`mt-3 pt-2.5 border-t border-amber-200/70 text-indigo-900 ${fontSizes.translation} font-semibold animate-fadeIn`}>
                                <span className="font-bold text-indigo-700">🇦🇲 Հայերեն՝ </span>
                                <span>{question.promptHy}</span>
                                {question.questionHy && (
                                  <span className="block font-bold text-indigo-800 mt-1">
                                    {question.questionHy}
                                  </span>
                                )}
                              </div>
                            ) : (
                              <div className="mt-2 text-xs sm:text-sm text-amber-800/90 font-medium italic flex items-center gap-1.5">
                                <span>👆 Կտտացրեք նախադասության վրա՝ հայերեն թարգմանությունը տեսնելու համար</span>
                              </div>
                            )}
                          </div>

                          {/* Extra Notes if any (e.g. Warning about exclamation marks) */}
                          {question.noteEs && (
                            <div className="mb-4 px-4 py-2.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-900 font-medium">
                              <p className="font-bold">{question.noteEs}</p>
                              {promptTransVisible && question.noteHy && (
                                <p className="text-amber-800 mt-1 font-semibold">{question.noteHy}</p>
                              )}
                            </div>
                          )}

                          {/* Transformation instructions */}
                          {question.conversionInstructionEs && (
                            <div className="mb-4 p-3 rounded-xl bg-indigo-50/60 border border-indigo-100 text-sm sm:text-base text-indigo-900">
                              <span className="font-bold">
                                ➡️ {question.conversionInstructionEs}
                              </span>
                              {promptTransVisible && question.conversionInstructionHy && (
                                <span className="block text-indigo-700 mt-1 font-semibold">
                                  🇦🇲 {question.conversionInstructionHy}
                                </span>
                              )}
                            </div>
                          )}

                          {/* INTERACTIVE QUESTION INPUTS (CHOICE / TRUE-FALSE / TRANSFORM / TEXT) */}
                          {question.options && question.options.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                              {question.options.map((opt) => {
                                const isSelected = userChoice === opt.key;
                                const isThisCorrect =
                                  opt.key.toLowerCase().trim() ===
                                  question.correctKey.toLowerCase().trim();
                                const optTransKey = `opt-${question.id}-${opt.key}`;
                                const isOptTransVisible = isTranslationVisible(optTransKey);

                                let optClasses =
                                  'border-slate-200 bg-white hover:bg-slate-50 text-slate-800';
                                if (isRevealed) {
                                  if (isThisCorrect) {
                                    optClasses =
                                      'border-emerald-500 bg-emerald-50/90 text-emerald-950 font-bold ring-2 ring-emerald-500/20';
                                  } else if (isSelected) {
                                    optClasses =
                                      'border-rose-400 bg-rose-50 text-rose-950 ring-1 ring-rose-300';
                                  } else {
                                    optClasses = 'border-slate-200 bg-slate-50/60 text-slate-400 opacity-70';
                                  }
                                } else if (isSelected) {
                                  optClasses =
                                    'border-indigo-600 bg-indigo-50 text-indigo-950 font-bold shadow-2xs';
                                }

                                return (
                                  <div
                                    key={opt.key}
                                    onClick={() => {
                                      setUserAnswers((prev) => ({
                                        ...prev,
                                        [question.id]: opt.key
                                      }));
                                    }}
                                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${optClasses}`}
                                  >
                                    <div className="flex items-start justify-between gap-2.5">
                                      <div className="flex items-center gap-2.5">
                                        <span
                                          className={`w-7 h-7 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 ${
                                            isSelected
                                              ? 'bg-indigo-600 text-white'
                                              : 'bg-slate-200 text-slate-700'
                                          }`}
                                        >
                                          {opt.key}
                                        </span>
                                        <span className={`${fontSizes.option} font-semibold`}>
                                          {opt.textEs}
                                        </span>
                                      </div>

                                      {/* Click translation icon for option */}
                                      {opt.textHy && (
                                        <button
                                          type="button"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            toggleTranslation(optTransKey);
                                          }}
                                          className="text-xs text-slate-400 hover:text-slate-700 px-1.5 py-0.5 rounded-md hover:bg-slate-200/50"
                                          title="Թարգմանել տարբերակը"
                                        >
                                          {isOptTransVisible ? '🇦🇲' : '🇪🇸'}
                                        </button>
                                      )}
                                    </div>

                                    {/* Option Armenian Translation */}
                                    {(promptTransVisible || isOptTransVisible) && opt.textHy && (
                                      <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1.5 pl-9">
                                        🇦🇲 {opt.textHy}
                                      </p>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          ) : (
                            /* Open input / text answer */
                            <div className="mb-5">
                              <div className="flex items-center gap-2.5">
                                <input
                                  type="text"
                                  placeholder={
                                    question.type === 'transform'
                                      ? 'Գրե՛ք փոխակերպված նախադասությունը...'
                                      : question.type === 'fill_or_classify'
                                      ? 'Գրե՛ք տեսակը (օր.՝ Dubitativa, Enunciativa...)'
                                      : 'Գրե՛ք պատասխանը...'
                                  }
                                  value={textAnswers[question.id] || ''}
                                  onChange={(e) => {
                                    setTextAnswers((prev) => ({
                                      ...prev,
                                      [question.id]: e.target.value
                                    }));
                                  }}
                                  className="w-full text-sm sm:text-base p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-medium"
                                />
                                {textAnswers[question.id] && (
                                  <button
                                    onClick={() => {
                                      setTextAnswers((prev) => {
                                        const next = { ...prev };
                                        delete next[question.id];
                                        return next;
                                      });
                                    }}
                                    className="text-xs sm:text-sm text-slate-500 hover:text-slate-700 px-3 py-2 font-medium"
                                  >
                                    Մաքրել
                                  </button>
                                )}
                              </div>
                            </div>
                          )}

                          {/* DEDICATED SEPARATE ANSWER BUTTON (Կոճակ Պատասխան / Ver Respuesta) */}
                          <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-slate-100">
                            <button
                              type="button"
                              onClick={() => toggleAnswer(question.id)}
                              className={`px-5 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
                                isRevealed
                                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                  : 'bg-slate-900 text-white hover:bg-slate-800'
                              }`}
                            >
                              <Lightbulb className="w-5 h-5 text-amber-300" />
                              <span>
                                {isRevealed
                                  ? 'Թաքցնել պատասխանը'
                                  : 'Պատասխան / Ver respuesta'}
                              </span>
                            </button>

                            {/* Status Pill if user selected an answer */}
                            {isAnswered && (
                              <div className="text-sm flex items-center gap-2">
                                {isCorrect ? (
                                  <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    <span>Ճիշտ է (¡Correcto!)</span>
                                  </span>
                                ) : (
                                  <span className="text-rose-700 font-bold flex items-center gap-1.5">
                                    <XCircle className="w-5 h-5 text-rose-500" />
                                    <span>Սխալ է</span>
                                  </span>
                                )}
                              </div>
                            )}
                          </div>

                          {/* REVEALED ANSWER PANEL (WHEN "Պատասխան / Ver respuesta" IS CLICKED) */}
                          {isRevealed && (
                            <div className="mt-4 p-5 rounded-xl bg-slate-900 text-white animate-fadeIn">
                              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-800">
                                <div className="flex items-center gap-2">
                                  <Check className="w-5 h-5 text-emerald-400" />
                                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400">
                                    Ճիշտ պատասխան / Respuesta correcta:
                                  </span>
                                </div>
                                <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-mono font-bold">
                                  #{question.number}
                                </span>
                              </div>

                              {/* Spanish Answer */}
                              <p className={`${fontSizes.answer} font-bold text-white tracking-tight leading-snug`}>
                                🇪🇸 {question.correctAnswerEs}
                              </p>

                              {/* Armenian Translation of Answer */}
                              {question.correctAnswerHy && (
                                <p className="text-sm sm:text-base font-bold text-amber-300 mt-1.5 leading-snug">
                                  🇦🇲 {question.correctAnswerHy}
                                </p>
                              )}

                              {/* Explanations */}
                              {(question.explanationEs || question.explanationHy) && (
                                <div className="mt-3.5 pt-3 border-t border-slate-800/80 text-xs sm:text-sm space-y-1.5 text-slate-300 leading-relaxed font-medium">
                                  {question.explanationEs && (
                                    <p>
                                      <strong className="text-slate-400">Պարզաբանում (ES): </strong>
                                      {question.explanationEs}
                                    </p>
                                  )}
                                  {question.explanationHy && (
                                    <p className="text-slate-200">
                                      <strong className="text-amber-400">Բացատրություն (ՀԱՅ): </strong>
                                      {question.explanationHy}
                                    </p>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 bg-white border-t border-slate-200 py-6 text-center text-xs sm:text-sm text-slate-500 font-medium">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            Modalidades oracionales — 7º clase / 1º ESO (Իսպաներեն ↔ Հայերեն քննական ձեռնարկ)
          </p>
          <div className="flex items-center gap-4 text-slate-600 font-semibold">
            <span>Ընդհանուր 117 առաջադրանք</span>
            <span>•</span>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-indigo-600 hover:underline cursor-pointer"
            >
              Դեպի վերև ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
