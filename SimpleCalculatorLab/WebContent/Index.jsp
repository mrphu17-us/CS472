<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>My Simple Calculator</title>
<style>
input[type=number] {
	padding: 5px;
	font-size: 16px;
	width: 150px;
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
</style>
</head>
<body>
	<div>
		<form action="/SimpleCalculatorLab/Calculate" method="POST">
			<p>
				<input type="number" name="txt_num1" id="txt_num1" value="${txt_num1}" required /> 
				+ 
				<input type="number" name="txt_num2" id="txt_num2" value="${txt_num2}" required /> 
				= 
				<input type="number" disabled name="txt_result_1" id="txt_result_1" value="${txt_result1}" />
			</p>
			<p>
				<input type="number" name="txt_num3" id="txt_num3" value="${txt_num3}" required />
				 * 
				<input type="number" name="txt_num4" id="txt_num4" value="${txt_num4}" required />
				 = 
				<input type="number" disabled name="txt_result_2" id="txt_result_2" value="${txt_result2}" />
			</p>
			<p>
				<input type="submit" value="Submit" />
				<input type="submit" class="clear" name="btn_clear" value="Clear" />
			</p>
		</form>
	</div>
</body>
</html>