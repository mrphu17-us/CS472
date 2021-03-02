<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>Choose</title>
</head>
<body>
	<form method='post' action='ChooseServlet'>
		<p>Is JSP cool?</p>
		<%@ page import="miu.cs472.RadioState" %>
		<input type='radio' value='1' name='radioJSPCool' <% 
			RadioState rs = (RadioState) session.getAttribute("radioJSPCool");
			if (rs != null && rs.yesCheck == "yes") {
				out.print("checked");
			}
		%>><span>Yes</span><br />
		<input type='radio' value='0' name='radioJSPCool' <% 
				if (rs != null && rs.noCheck == "yes") {
					out.print("checked");
				}
		%>><span>No</span><br />
		<input type='submit' name='btnSubmit' value='Submit' />
		<p>Is JSF way cool?</p>
		<input type='radio' value='1' name='JSFwayCool' <% 
			RadioState rs2 = (RadioState) session.getAttribute("JSFwayCool");
			if (rs2 != null && rs2.yesCheck == "yes") {
				out.print("checked");
			}
		%>><span>Yes</span><br />
		<input type='radio' value='0' name='JSFwayCool' <% 
				if (rs2 != null && rs2.noCheck == "yes") {
					out.print("checked");
				}
		%>><span>No</span><br />
		<input type='submit' name='btnSubmit' value='Submit' />
		<p>Is the moon made of cheese?</p>
		<input type='radio' value='1' name='moonCheese' <% 
			RadioState rs3 = (RadioState) session.getAttribute("moonCheese");
			if (rs3 != null && rs3.yesCheck == "yes") {
				out.print("checked");
			}
		%>><span>Yes</span><br />
		<input type='radio' value='0' name='moonCheese' <% 
				if (rs3 != null && rs3.noCheck == "yes") {
					out.print("checked");
				}
		%>><span>No</span><br />
		<input type='submit' name='btnSubmit' value='Submit' />
	</form>
</body>
</html>