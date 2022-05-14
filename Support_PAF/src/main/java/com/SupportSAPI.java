package com;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/SupportSAPI")
public class SupportSAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	SupportS SupportObj = new SupportS();
  
    public SupportSAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//doGet(request, response);
	String output = SupportObj.insertComplaint(request.getParameter("accountNum"),
			    request.getParameter("complaintName"),
				request.getParameter("complaintAdd"),
				request.getParameter("complaintPhone"),
				request.getParameter("complaintEmail"),
				request.getParameter("complaintMessage"));
		
				response.getWriter().write(output); 		
	}


	// Convert request parameters to a Map
	private static Map getParasMap(HttpServletRequest request)
	{
	 Map<String, String> map = new HashMap<String, String>();
	try
	 {
		 Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
		 String queryString = scanner.hasNext() ?
		 scanner.useDelimiter("\\A").next() : "";
		 scanner.close();
		 String[] params = queryString.split("&");
	 for (String param : params)
	 {
		 String[] p = param.split("=");
		 map.put(p[0], p[1]);
	 }
	 }
		catch (Exception e)
	 {
	 }
	return map;
	}	
	
	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			 throws ServletException, IOException
	{
		Map paras = getParasMap(request);
		String output = SupportObj .updateComplaints(paras.get("hidComplaintIDSave").toString(),
			paras.get("accountNum").toString(),
			paras.get("complaintName").toString(),
			paras.get("complaintAdd").toString(),
			paras.get("complaintPhone").toString(),
			paras.get("complaintEmail").toString(),
			paras.get("complaintMessage").toString());
			
		response.getWriter().write(output);
	}
	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			 throws ServletException, IOException
	{
		Map paras = getParasMap(request);
		String output = SupportObj .deleteComplaint(paras.get("complaintID").toString());
		  
		response.getWriter().write(output);
	}
}

