package miu.cs472;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class DictServlet
 */
@WebServlet("/Entry/findAll")
public class DictServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private DbConnection dbcon;
	private Gson gson = new Gson();

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public DictServlet() {
		super();
	}

	public void init() throws ServletException {
		dbcon = new DbConnection("jdbc:mysql://localhost:3306/entries", "root", "root123456");
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		try {
			String keyWord = request.getParameter("keyword");
			List<Entry> entries = dbcon.listAll(keyWord, 10);
			String employeeJsonString = this.gson.toJson(entries);

			PrintWriter out = response.getWriter();
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			out.print(employeeJsonString);
			out.flush();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
