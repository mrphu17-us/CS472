package miu.cs472;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class Calculator
 */
@WebServlet("/Calculate")
public class Calculator extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Calculator() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.sendRedirect("Index.jsp");
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
			Integer txt_mum1 = Integer.valueOf(request.getParameter("txt_num1"));
			Integer txt_mum2 = Integer.valueOf(request.getParameter("txt_num2"));
			Integer txt_mum3 = Integer.valueOf(request.getParameter("txt_num3"));
			Integer txt_mum4 = Integer.valueOf(request.getParameter("txt_num4"));
			session.setAttribute("txt_num1", String.valueOf(txt_mum1));
			session.setAttribute("txt_num2", String.valueOf(txt_mum2));
			session.setAttribute("txt_num3", String.valueOf(txt_mum3));
			session.setAttribute("txt_num4", String.valueOf(txt_mum4));
			session.setAttribute("txt_result1", String.valueOf(txt_mum1 + txt_mum2));
			session.setAttribute("txt_result2", String.valueOf(txt_mum3 * txt_mum4));
		}
		
		doGet(request, response);
	}

}
