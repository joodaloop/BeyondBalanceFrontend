import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// Removed unused Input and Label imports

const PersonalityQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Start with first question
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "How have you been feeling emotionally over the past two weeks?",
      options: [
        { value: "calm", label: "Mostly calm and content", weight: 1 },
        { value: "mixed", label: "A mix of highs and lows", weight: 2 },
        { value: "overwhelmed", label: "Often overwhelmed or anxious", weight: 4 },
        { value: "numb", label: "Numb or disconnected", weight: 5 },
        { value: "unsure", label: "Unsure, I haven't really thought about it", weight: 3 },
      ],
    },
    {
      question: "What area of your life feels most challenging right now? (Pick 1)",
      options: [
        { value: "none", label: "None / I feel balanced", weight: 1 },
        { value: "relationships", label: "Relationships", weight: 3 },
        { value: "emotions", label: "Managing emotions", weight: 4 },
        { value: "work", label: "Work or academics", weight: 3 },
        { value: "selfesteem", label: "Self-esteem or confidence", weight: 5 },
        { value: "direction", label: "Decision-making or life direction", weight: 4 },
      ],
    },
    {
      question: "How well do you understand your emotional needs?",
      options: [
        { value: "well", label: "I understand them well and can express them", weight: 1 },
        { value: "exploring", label: "I'm beginning to notice and explore them", weight: 2 },
        { value: "struggle", label: "I often struggle to identify or communicate them", weight: 4 },
        { value: "havent", label: "I haven't thought much about them", weight: 5 },
      ],
    },
    {
      question: "How do you usually cope when you're feeling low or stressed?",
      options: [
        { value: "talk", label: "I talk to someone I trust", weight: 1 },
        { value: "reflect", label: "I journal, draw, or reflect", weight: 2 },
        { value: "distract", label: "I distract myself with tasks or social media", weight: 3 },
        { value: "shutdown", label: "I shut down or avoid", weight: 5 },
        { value: "notsure", label: "I'm not sure", weight: 4 },
      ],
    },
    {
      question: "Do you ever feel like your mind is too full or constantly racing?",
      options: [
        { value: "rarely", label: "Rarely", weight: 1 },
        { value: "occasionally", label: "Occasionally", weight: 2 },
        { value: "often", label: "Yes, often", weight: 4 },
        { value: "never", label: "Never", weight: 1 },
      ],
    },
    {
      question: "What kind of support are you currently seeking?",
      options: [
        { value: "tools", label: "Tools to manage stress and emotions", weight: 3 },
        { value: "explore", label: "Space to explore myself better", weight: 4 },
        { value: "anxiety", label: "Support with anxiety, overthinking, or burnout", weight: 5 },
        { value: "communication", label: "Help with relationships or communication", weight: 3 },
        { value: "unsure", label: "Not sure, but I know I need something", weight: 4 },
      ],
    },
    {
      question: "How comfortable are you with asking for help when you need it?",
      options: [
        { value: "very", label: "Very comfortable", weight: 1 },
        { value: "try", label: "I try, but it's hard sometimes", weight: 2 },
        { value: "rarely", label: "I rarely do", weight: 4 },
        { value: "dontknow", label: "I don't know how", weight: 5 },
      ],
    },
    {
      question: "What helps you feel most connected to yourself?",
      options: [
        { value: "alone", label: "Time alone / in nature", weight: 1 },
        { value: "creative", label: "Creative expression", weight: 2 },
        { value: "talking", label: "Talking to someone who listens", weight: 1 },
        { value: "movement", label: "Physical movement or mindfulness", weight: 1 },
        { value: "figuring", label: "I'm still figuring it out", weight: 4 },
      ],
    },
    {
      question: "Have you engaged in any kind of mental wellness activity before?",
      options: [
        { value: "helped", label: "Yes, and it helped", weight: 1 },
        { value: "noshift", label: "Yes, but I didn't feel a big shift", weight: 3 },
        { value: "opentotryi", label: "No, but I'm open to trying", weight: 4 },
        { value: "hesitant", label: "No, and I feel hesitant", weight: 5 },
      ],
    },
    {
      question:
        "When you think about the next few months, which feels most true for you right now?",
      options: [
        { value: "maintain", label: "I want to maintain my current balance and joy", weight: 1 },
        { value: "handle", label: "I want to better handle my emotional ups and downs", weight: 2 },
        { value: "relief", label: "I need relief from stress, anxiety, or burnout", weight: 4 },
        {
          value: "connected",
          label: "I want to feel more connected and present in my life",
          weight: 5,
        },
        { value: "clarity", label: "I want clarity and confidence about my direction", weight: 3 },
      ],
    },
  ];

  const [multiSelectAnswers, setMultiSelectAnswers] = useState<string[][]>([]);

  const personalityTypes = {
    groundedGlow: {
      title: "🌿 The Grounded Glow",
      score: "10-17",
      theme: "The Grounded Glow",
      validation:
        "You've built a steady foundation for yourself, even when life throws challenges your way. Your ability to hold balance and keep moving forward is a quiet but powerful strength.",
      support:
        'It\'s okay to want more than just "okay." We can help you deepen your peace, nurture your self-care, and keep that inner light shining.',
      closingLine:
        "Take a screenshot of your result and send it to us on support@beyondbalance.org.in and get in touch with us with the contact form, we'll guide your journey ahead.",
    },
    wavyWanderer: {
      title: "🌤 The Wavy Wanderer",
      score: "18-25",
      theme: "The Wavy Wanderer",
      validation:
        "Your recent days have felt like a mix of sunshine and storms, and you've been doing your best to ride the highs and lows. That takes resilience, even if it feels messy sometimes.",
      support:
        "You don't have to navigate these tides alone. We can help you turn those emotional waves into a rhythm that feels steadier, softer, and more in your control.",
      closingLine:
        "Take a screenshot of your result and send it to us on support@beyondbalance.org.in and we'll guide your journey ahead.",
    },
    braveOverloaded: {
      title: "🌊 The Brave but Overloaded",
      score: "26-33",
      theme: "The Brave but Overloaded",
      validation:
        "You've been carrying a lot lately — mentally, emotionally, or both. It's not weakness to feel tired from it; it's human. And it's brave to admit when it's too much.",
      support:
        "You deserve relief, not just endurance. We can help you lighten the mental load, calm the racing thoughts, and create breathing room again.",
      closingLine:
        "Take a screenshot of your result and send it to us on support@beyondbalance.org.in and we'll guide your journey ahead.",
    },
    quietlyDisconnected: {
      title: "🌌 The Quietly Disconnected",
      score: "34-41",
      theme: "The Quietly Disconnected",
      validation:
        "It's been harder lately to feel fully present — with yourself, with others, or even with your own emotions. That can feel lonely, and it's okay to admit you're not sure why.",
      support:
        "We can help you gently reconnect — not by forcing change, but by guiding you toward small steps that make life feel warmer, fuller, and more yours again.",
      closingLine:
        "Take a screenshot of your result and send it to us on support@beyondbalance.org.in and we'll guide your journey ahead.",
    },
    seekerTransition: {
      title: "🧭 The Seeker in Transition",
      score: "42-48",
      theme: "The Seeker in Transition",
      validation:
        "You're in a chapter of searching — for clarity, confidence, and a direction that feels true to you. Not having all the answers right now doesn't mean you're lost.",
      support:
        "We can help you uncover what you need most, so you can step forward with trust in yourself and excitement for what's ahead.",
      closingLine:
        "Take a screenshot of your result and send it to us on support@beyondbalance.org.in and we'll guide your journey ahead.",
    },
  };

  const handleAnswer = (value: string, questionIndex?: number) => {
    const qIndex = questionIndex !== undefined ? questionIndex : currentQuestion;
    const newAnswers = [...answers];
    newAnswers[qIndex] = value;
    setAnswers(newAnswers);
  };

  const handlePersonalInfoChange = (field: string, value: string) => {
    // Removed - no longer collecting personal info
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const isCurrentQuestionAnswered = () => {
    return answers[currentQuestion];
  };

  const getRecommendation = () => {
    // Calculate total score based on weights
    let totalScore = 0;

    answers.forEach((answer, index) => {
      if (answer && questions[index]) {
        const selectedOption = questions[index].options.find((opt) => opt.value === answer);
        if (selectedOption) {
          totalScore += selectedOption.weight;
        }
      }
    });

    // Determine personality type based on score
    let personalityType;
    if (totalScore >= 10 && totalScore <= 17) {
      personalityType = personalityTypes.groundedGlow;
    } else if (totalScore >= 18 && totalScore <= 25) {
      personalityType = personalityTypes.wavyWanderer;
    } else if (totalScore >= 26 && totalScore <= 33) {
      personalityType = personalityTypes.braveOverloaded;
    } else if (totalScore >= 34 && totalScore <= 41) {
      personalityType = personalityTypes.quietlyDisconnected;
    } else if (totalScore >= 42 && totalScore <= 48) {
      personalityType = personalityTypes.seekerTransition;
    } else {
      // Fallback for edge cases (scores below 10 or above 48)
      if (totalScore < 10) {
        personalityType = personalityTypes.groundedGlow;
      } else {
        personalityType = personalityTypes.seekerTransition;
      }
    }

    return {
      ...personalityType,
      totalScore,
    };
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <section className="relative py-24 pt-32 md:pt-36 px-6 overflow-hidden">
      {/* Artistic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-mint/5 via-background to-sage/10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground">
            YOUR MENTAL
            <span className="block font-bold text-primary italic transform rotate-1">
              WELLNESS CHECK-IN
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            A short reflection to help you understand where you are and where you want to go.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="backdrop-blur-sm bg-card/60 border-primary/20 shadow-2xl">
            <CardHeader className="text-center">
              {!showResult ? (
                <>
                  <CardTitle className="text-2xl font-light text-foreground">
                    Question {currentQuestion + 1} of {questions.length}
                  </CardTitle>
                  <div className="w-full bg-muted/30 rounded-full h-2 mt-4">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </>
              ) : (
                <CardTitle className="text-2xl font-light text-foreground">
                  Your Personalized Recommendations
                </CardTitle>
              )}
            </CardHeader>
            <CardContent className="space-y-6">
              {!showResult ? (
                <>
                  <h3 className="text-xl font-medium text-foreground mb-6">
                    {questions[currentQuestion].question}
                  </h3>
                  <RadioGroup
                    value={answers[currentQuestion] || ""}
                    onValueChange={handleAnswer}
                    className="space-y-4"
                  >
                    {questions[currentQuestion].options.map((option, index) => (
                      <motion.div
                        key={option.value}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-4 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
                        onClick={() => handleAnswer(option.value)}
                      >
                        <RadioGroupItem value={option.value} />
                        <label className="flex-1 cursor-pointer text-muted-foreground">
                          {option.label}
                        </label>
                      </motion.div>
                    ))}
                  </RadioGroup>
                  <Button
                    onClick={nextQuestion}
                    disabled={!isCurrentQuestionAnswered()}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-light"
                  >
                    {currentQuestion === questions.length - 1
                      ? "Get My Recommendations"
                      : "Next Question"}
                  </Button>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center space-y-6"
                >
                  <div className="p-6 bg-primary/10 rounded-xl">
                    <div className="mb-6 text-center">
                      <h3 className="text-3xl font-bold text-primary mb-2">
                        {getRecommendation().title}
                      </h3>
                    </div>

                    <div className="space-y-6 text-left">
                      <div className="bg-white/50 p-4 rounded-lg">
                        <p className="text-foreground leading-relaxed font-medium">
                          {getRecommendation().validation}
                        </p>
                      </div>

                      <div className="bg-white/50 p-4 rounded-lg">
                        <p className="text-foreground leading-relaxed">
                          {getRecommendation().support}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground italic">
                      {getRecommendation().closingLine}
                    </p>
                  </div>
                  <Button
                    onClick={resetQuiz}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Take Check-In Again
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalityQuiz;
