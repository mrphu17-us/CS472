package miu.cs472;

public class Quiz {
	private static String[] questions = { "3, 1, 4, 1, 5", "1, 1, 2, 3, 5", "1, 4, 9, 16, 25", "2, 3, 5, 7, 11", "1, 2, 4, 8, 16" };
	private static int[] answers = { 9, 8, 36, 12, 32 };
	private int score;
	private int currentQuestion;

	public Quiz() {
		score = 0;
		currentQuestion = -1;
	}

	public void increaseScore() {
		score++;
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
		currentQuestion++;
		if (currentQuestion > getTotalQuiz() - 1) return "No more question found";
		return questions[currentQuestion];
	}
	
	public boolean hasNextQuestion () {
		return currentQuestion < getTotalQuiz();
	}

	public int getAnswer(int questionNum) {
		return answers[questionNum];
	}
}
