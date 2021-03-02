package miu.cs472;

import javax.servlet.http.HttpSession;

public class Quiz {
	private static String[] questions = { "3, 1, 4, 1, 5", "1, 1, 2, 3, 5", "1, 4, 9, 16, 25 ", "2, 3, 5, 7, 11",
			"1, 2, 4, 8, 16" };
	private static int[] answers = { 9, 8, 36, 13, 32 };
	private static String[] hints = { "PI", "Fibonacci", "Power", "Prime", "No hint" };
	private int score = 0;
	private int currentQuestion = -1;
	private int retryCount = 0;

	public Quiz() {
		score = 0;
		currentQuestion = -1;
	}

	public void increaseScore() {
		if (retryCount == 1) {
			score += 10;
		}
		if (retryCount == 2) {
			score += 5;
		}
		if (retryCount == 3) {
			score += 2;
		}
	}

	public void descreaseScore() {
		score--;
		if (score < 0)
			score = 0;
	}

	public int getScore() {
		return score;
	}

	public int getTotalQuiz() {
		return questions.length;
	}

	public int getCurrentQuestionPosition() {
		return currentQuestion;
	}

	public String getNextQuestion() {
		// only when answer is correct
		if (retryCount == 0) {
			currentQuestion++;
		}
		if (currentQuestion > getTotalQuiz() - 1)
			return "No more question found";
		return questions[currentQuestion];
	}

	public boolean hasNextQuestion() {
		return currentQuestion < getTotalQuiz();
	}

	public int getAnswer(int questionNum) {
		return answers[questionNum];
	}

	public String getHint(int questionNum) {
		if (questionNum >= hints.length)
			return "";
		return hints[questionNum];
	}

	public static Quiz loadQuizData(HttpSession session) {
		Quiz quiz = (Quiz) session.getAttribute("quiz");
		if (quiz == null) {
			quiz = new Quiz();
			session.setAttribute("quiz", quiz);
		}
		session.setAttribute("question", quiz.getNextQuestion());
		session.setAttribute("hint", quiz.getHint(quiz.getCurrentQuestionPosition()));
		session.setAttribute("currentQuestionPos", quiz.getCurrentQuestionPosition());
		session.setAttribute("score", quiz.getScore());
		session.setAttribute("grade", quiz.getGrade());
		session.setAttribute("retryCount", quiz.getRetryCount());
		return quiz;
	}

	public int getRetryCount() {
		return retryCount;
	}

	public String getGrade() {
		if (score >= 45 && score <= 50) {
			return "A";
		}
		if (score >= 35 && score <= 44) {
			return "B";
		}
		if (score >= 25 && score <= 34) {
			return "C";
		}
		return "NC";
	}

	public boolean answerQuestion(int answer, int question) {
		retryCount++;
		if (answer == getAnswer(question)) {
			increaseScore();
			retryCount = 0;
			return true;
		}
		if (retryCount >= 3) {
			retryCount = 0;
		}
		return false;
	}
}
