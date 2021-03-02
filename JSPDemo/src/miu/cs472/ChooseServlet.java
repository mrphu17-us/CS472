package miu.cs472;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class ChooseServlet
 */
@WebServlet("/ChooseServlet")
public class ChooseServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
 
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RequestDispatcher dis = request.getRequestDispatcher("Choose.jsp");
		dis.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String choice = request.getParameter("radioJSPCool");
		HttpSession session = request.getSession();
		RadioState rs = new RadioState();
		if (choice != null) {
			if (choice.equals("1")) {
				rs.yesCheck = "yes";
				rs.noCheck = "no";
			} else {
				rs.yesCheck = "no";
				rs.noCheck = "yes";
			}
			session.setAttribute("radioJSPCool", rs);
		} else
			System.out.println("No choice made");
		
		String choice2 = request.getParameter("JSFwayCool");
		RadioState rs2 = new RadioState();
		if (choice2 != null) {
			if (choice2.equals("1")) {
				rs2.yesCheck = "yes";
				rs2.noCheck = "no";
			} else {
				rs2.yesCheck = "no";
				rs2.noCheck = "yes";
			}
			session.setAttribute("JSFwayCool", rs2);
		} else
			System.out.println("No choice made");
		
		String choice3 = request.getParameter("moonCheese");
		RadioState rs3 = new RadioState();
		if (choice3 != null) {
			if (choice3.equals("1")) {
				rs3.yesCheck = "yes";
				rs3.noCheck = "no";
			} else {
				rs3.yesCheck = "no";
				rs3.noCheck = "yes";
			}
			session.setAttribute("moonCheese", rs3);
		} else
			System.out.println("No choice made");
		RequestDispatcher dis = request.getRequestDispatcher("Choose.jsp");
		dis.forward(request, response);
	}

}
