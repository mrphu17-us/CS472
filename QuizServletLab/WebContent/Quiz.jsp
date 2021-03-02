<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Quiz Servlet</title>
<style>
input {
	padding: 5px;
	font-size: 16px;
}

input[type=submit] {
	padding: 5px;
	font-size: 16px;
	width: 100px;
}

.clear {
	padding: 5px;
	font-size: 16px;
	width: 100px;
}

.score {
	color: green;
	font-weight: bold;
	font-size: 20px;
}

.container {
	border: solid gray 1px;
	padding: 10px;
	width: 500px;
	margin: auto;
}

.red {
	color: red;
	font-weight: bold;
}
</style>
</head>
<body>
	<div class="container">
		<h1>The Number Quiz</h1>
		<p>
			Your current score is: <span class="score">${score}</span>.
		</p>
		<p>Attempt: ${retryCount}/3</p>
		<p>Guess the next number in the sequence.</p>
		<form action="/QuizServletLab/QuizServlet" method="POST">
			<p>
				Your age: <input name="txt_age" id="txt_age" type="text"
					value="${yourAge}"> <span class="red">
					<%
					if (session.getAttribute("ageError") != null) {
						String ageError = String.valueOf(session.getAttribute("ageError"));
						out.print(ageError);
					}
					%>
				</span>
			</p>
			<p>${question},
				<span class="red">?</span>
			</p>
			<p>
				<input name="txt_question" id="txt_question" type="hidden"
					value="${currentQuestionPos}">
			</p>
			<p>
				Your answer: <input name="txt_answer" id="txt_answer" type="number" maxlength="2"
					required />
			</p>
			<p>
				<input type="submit" value="Next" />
			<p class="red">
				<%
				if (session.getAttribute("quizFail") != null) {
					out.print("Your last anser was not correct! Please try again");
				}
				%>
			</p>
			<br /> <input type="button" class="clear" name="btn_hint"
				value="Hint" onclick="javascript:alert('${hint}');" />
		</form>
	</div>
</body>
</html>