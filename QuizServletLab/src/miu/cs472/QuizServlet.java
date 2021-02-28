package miu.cs472;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class QuizServlet
 */
@WebServlet("/QuizServlet")
public class QuizServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public QuizServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		Quiz quiz = (Quiz)session.getAttribute("quiz");
		if (quiz == null) {
			quiz = new Quiz();
			session.setAttribute("quiz", quiz);
		}
		session.setAttribute("question", quiz.getNextQuestion());
		session.setAttribute("currentQuestionPos", quiz.getCurrentQuestionPosition());
		session.setAttribute("score", quiz.getScore());
		if (quiz.hasNextQuestion()) { 
			response.sendRedirect("Quiz.jsp");
		} else {
			session.setAttribute("totalQuiz", quiz.getTotalQuiz());
			response.sendRedirect("Result.jsp");
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		
		if (session != null 
				&& request.getParameter("btn_clear") != null 
				&& request.getParameter("btn_clear").equals("Clear")) {
			session.invalidate();
		} else {
			Quiz quiz = (Quiz)session.getAttribute("quiz");
			if (quiz.hasNextQuestion()) {
				int answer = Integer.valueOf(request.getParameter("txt_answer"));
				int question = Integer.valueOf(request.getParameter("txt_question"));
				if (answer == quiz.getAnswer(question)) {
					quiz.increaseScore();
				} 
			}
		}
		doGet(request, response);
	}

}
