<%@page import="com.SupportS"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Support Service</title>
	<link rel="stylesheet" href="Views/css/bootstrap.min.css">
	<script src="Components/jquery-3.6.0.js"></script>
	<script src="Components/SupportS.js"></script>
</head>
<body>
<div class="container"><div class="row"><div class="col-6">
<h1>Support Service  Management V10.1</h1>
	<form id="formItem" name="formItem">
	Account Number:
		 <input id="accountnum" name="accountnum" type="text"class="form-control form-control-sm">
 	<br> 
    Consumer Name:
 		<input id="consumerName" name="consumerName" type="text"class="form-control form-control-sm">
	 <br>
	Address:
	 	<input id="complaintAdd" name="complaintAdd" type="text"class="form-control form-control-sm">
	 <br> 
	Phone Number:
	 	<input id="complaintPhone" name="complaintPhone" type="text"class="form-control form-control-sm">
	 <br>
	 Email Address:
	 	<input id="complaintEmail" name="complaintEmail" type="text"class="form-control form-control-sm">
	 Add your Complaint:
	 	<input id="complaintMessage" name="complaintMessage" type="text"class="form-control form-control-sm">
	 <br> 
	 <input id="btnSave" name="btnSave" type="button" value="Save"class="btn btn-primary">
	 <input type="hidden" id="hidComplaintIDSave" name="hidComplaintIDSave" value="">
	</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divSupportSGrid">
 <%
 	 SupportS SupportObj = new SupportS();
	 out.print(SupportObj.readComplaints());
 %>
</div>
</div> </div> </div>
</body>
</html>