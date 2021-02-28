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
	color: red;
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
</style>
</head>
<body>
	<div class="container">
		<h1>The Number Quiz</h1>
		<p>Your current score is: <span class="score">${score}</span>.</p>
		<p>Guess the next number in the sequence.</p>
		<form action="/QuizServletLab/QuizServlet" method="POST">
			<p>${question}</p>
			<p>
				<input name="txt_question" id="txt_question" type="hidden" value="${currentQuestionPos}">
			</p>
			<p>
				Your answer: <input name="txt_answer" id="txt_answer" type="number" required/>
			</p>
			<p>
				<input type="submit" value="Submit" />
				<input type="submit" class="clear" name="btn_clear" value="Try Again" />
			</p>
		</form>
	</div>
</body>
</html>