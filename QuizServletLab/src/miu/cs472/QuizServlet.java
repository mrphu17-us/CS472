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
		Quiz quiz = Quiz.loadQuizData(request.getSession());
		if (quiz.hasNextQuestion()) { 
			response.sendRedirect("Quiz.jsp");
		} else {
			request.getSession().setAttribute("totalQuiz", quiz.getTotalQuiz());
			response.sendRedirect("Result.jsp");
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		if (session != null 
				&& request.getParameter("btn_clear") != null) {
			session.invalidate();
			System.out.print("================");
		} else {
			String age = request.getParameter("txt_age");
			if (age == null || age.equals("")) {
				session.setAttribute("ageError", "This field is required!");
			} else {
				int ageInt = Integer.valueOf(age);
				if (ageInt < 4 || ageInt > 100) {
					session.setAttribute("ageError", "Age range is 4 to 100");
				} else {
					session.removeAttribute("ageError");
					session.setAttribute("yourAge", age);
				}
			}
			
			Quiz quiz = (Quiz)session.getAttribute("quiz");
			if (quiz.hasNextQuestion()) {
				int answer = Integer.valueOf(request.getParameter("txt_answer"));
				int question = Integer.valueOf(request.getParameter("txt_question"));
				boolean result = quiz.answerQuestion(answer, question);
				session.removeAttribute("quizFail");
				if (result == false) {
					session.setAttribute("quizFail", true);
				}
			}
		}
		doGet(request, response);
	}

}
