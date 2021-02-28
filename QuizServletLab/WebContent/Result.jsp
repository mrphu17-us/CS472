<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Your Result</title>
<style>
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
		<p>
			Your current score is: <span class="score">${score}</span>
		</p>
		<p>
			You have completed the Number Quiz, with a score of <span
				class="score">${score}</span> out of <span class="score">${totalQuiz}</span>
		</p>
	</div>
</body>
</html>