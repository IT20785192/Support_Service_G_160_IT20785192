$(document).ready(function()
{
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

$(document).on("click", "#btnSave", function(event)
{
	// Clear alerts---------------------	
	 $("#alertSuccess").text("");
 	 $("#alertSuccess").hide();
 	 $("#alertError").text("");
 	 $("#alertError").hide();
 	 
   	// Form validation-------------------
  	
	var status = validateComplaintForm();
	if (status != true)
	{
		 $("#alertError").text(status);
 		 $("#alertError").show();
 		 
         return;
    }
 
	// If valid------------------------	
	var type = ($("#hidComplaintIDSave").val() == "") ? "POST" : "PUT";
	
	 $.ajax(
 	 {
 		url : "SupportSAPI",
 		type : type,
 		data : $("#formComplaint").serialize(),
 		dataType : "text",
	    complete : function(response, status)
        {
   
      			onComplaintSaveComplete(response.responseText, status);
	    }
	    
     });
     
});
function onComplaintSaveComplete(response, status)
{
	if (status == "success")
	{
		 var resultSet = JSON.parse(response);
		 
	 	 if (resultSet.status.trim() == "success")
		 {
 				$("#alertSuccess").text("Successfully saved.");
		    	$("#alertSuccess").show();
 				$("#divSupportSGrid").html(resultSet.data);
 			
 	 	  } else if (resultSet.status.trim() == "error")
 	 	  {
 	 
 				$("#alertError").text(resultSet.data);
 				$("#alertError").show();
		  }
		  
    } else if (status == "error")
    {
 			$("#alertError").text("Error while saving.");
 			$("#alertError").show();
 			
 	} else
 	{
 			$("#alertError").text("Unknown error while saving..");
 			$("#alertError").show();
    } 

 	$("#hidComplaintIDSave").val("");
	 $("#formComplaint")[0].reset();
}
$(document).on("click", ".btnUpdate", function(event)
{
		var id = event.target.id;
		$("#hidComplaintIDSave").val(id.substring(0, id.length-1));
 		$("#accountNum").val($(this).closest("tr").find('td:eq(0)').text());
 		$("#complaintName").val($(this).closest("tr").find('td:eq(1)').text());
 		$("#complaintAdd").val($(this).closest("tr").find('td:eq(2)').text());
 		$("#complaintPhone").val($(this).closest("tr").find('td:eq(3)').text());
 		$("#complaintEmail").val($(this).closest("tr").find('td:eq(4)').text());
 		$("#complaintMessage").val($(this).closest("tr").find('td:eq(5)').text());
});
$(document).on("click", ".btnRemove", function(event)
{
	 $.ajax(
 	{
 		url : "SupportSAPI",
 		type : "DELETE",
	    data : "ComplaintID=" + $(this).data("Complaintid"),
 		dataType : "text",
 		complete : function(response, status)
		{
			 onComplaintDeleteComplete(response.responseText, status);
 		}
	 });
});



function onComplaintDeleteComplete(response, status)
{
	if (status == "success")
    {
 			var resultSet = JSON.parse(response);
 			
		   if (resultSet.status.trim() == "success")
 		   {
 		   
 				$("#alertSuccess").text("Successfully deleted.");
 				$("#alertSuccess").show();
 				
			    $("#divSupportSGrid").html(resultSet.data);
			    
			    setTimeout( (function(){alert(43)}, 1000));
 			} else if (resultSet.status.trim() == "error")
 			{
				 $("#alertError").text(resultSet.data);
 				 $("#alertError").show();
		    }
 	} else if (status == "error")
    {
		 $("#alertError").text("Error while deleting.");
 		 $("#alertError").show();
    } else
    {
 		$("#alertError").text("Unknown error while deleting..");
 		$("#alertError").show();
 	}
}
function validateComplaintForm()
{
	// CODE
	if ($("#accountNum").val().trim() == "")
 	{
		 return "Insert Account Number.";
    }   
    
	// NAME
	if ($("#complaintName").val().trim() == "")
    {
		 return "Insert Consumer Name.";
 	}  	

	// ADDRESS-------------------------------
	if ($("#complaintAdd").val().trim() == "")
    {
 		return "Insert Consumer Address.";
 	} 
 	// phonenumber------------------------
	if ($("#complaintPhone").val().trim() == "")
   {
		 return "Insert Phone number.";
   }
   // Email Address------------------------
	if ($("#complaintEmail").val().trim() == "")
   {
		 return "Insert Email address.";
   }	
 	
	// Complaint------------------------
	if ($("#complaintMessage").val().trim() == "")
   {
		 return "Insert Complaints.";
   }
   return true;
}
