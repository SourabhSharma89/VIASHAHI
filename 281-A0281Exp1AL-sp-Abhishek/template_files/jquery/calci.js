$(window).load(function(){
						  
						  
						  
							$(".tab,.tabDevice").on("click",function(){
 									tabRotation();
							}); 
 			   
  /*////////////////////////////////////////////////Code Calculator ///////////////////////////////////////////////////////////////////*/						   						  
					   $(".input1").val('');
					   $(".input2").val('');

						   //var $txt = null; // Keep track of currently active input
						   var maxLength =17;
						    var maxLength1 =4;
						   
						   $(".input1").prop('maxlength',maxLength);
						    $(".input2").prop('maxlength',maxLength1);
					
						
						  $txt = $(".input1"); 
							$(".input1").focus(); 
							//$(".input2").focus();
							$(".input1").on("focus", function(e) {
										
								$txt = $(".input1");
								$(".input1").focus(); 
								keyPressed();
								tabindex="1";
				
	
	   					 });
							
						 $(".input2").on("focus", function(e) {
														   
														  // alert("a")
									
							$txt = $(".input2");
							$(".input2").focus(); 
							keyPressed();
							tabindex="2";
				
	
	   					 });
						  
						     if(String(navigator.userAgent).indexOf("Mobile") != -1){
							
							
							 
						  }else{
						        $(".done1").on("focus", function(e) {
								$(".input1").focus().val($(".input1").val()); 
	
	   					 });
								
						  }
						  
						
						   
/////////////////////////////////////////////////////////////////////////////////////					   
						   $(".calc_btn").on("click", function(e) {
															
								//$txt .focus();
						
								if (! $txt) return false; // If tracker is cleared, just return
								
								var prev = $txt.val();
								
								var bt = this.value;
								var pos = $txt[0].selectionStart;
								
							
						////////////////////////////////////////////////////////////////////////new///////////////////////////////		
						
							var value = document.getElementById('inputText').value;
							//var value1 = document.getElementById('inputText1').value;
							
							if ($(".input1").is(":focus")) {
                                     inpt1=true;
									
                                       }else{
										   
										    inpt1=false; 
										   }
										   
						         /*	if ($(".input2").is(":focus")) {
                                     inpt2=true;
                                       }else{
										   
										    inpt2=false; 
										   }			   
									   */
								
							
								if(inpt1){
								if(value.length>maxLength-1)
								{
									
									bt.val()=""
								}
								}
								/*
								if(inpt2){
								if(value1.length>maxLength1-1)
								{
								
									bt.val()=""
								}
								}*/
		//////////////////////////////////////////////////////////////////end new //////////////////////////////////////////////////////////////////////////						
								
								 if(bt == "–"){
									 bt = " – ";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+3, pos+3);
									 
								 }
								 else if(bt == "≤"){
									 bt = " ≤ ";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+3, pos+3);
									 
								 }
								  else if(bt == "<"){
									 bt = " < ";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+3, pos+3);
									 
								 }
								 else{
									 
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									$txt.val(newValue);
									$txt[0].setSelectionRange(pos+1, pos+1);
								 }
									 
								 
								
								 $txt.focus();
									
								});  
/////////////////////////////////////////////////////////////////////////////////////

var tabVar = Number(1);
							
							tabRotation = function(){
							
								tabVar++;
								if(tabVar >= 3){
									
									 tabVar = 1;
								}
								
								if(tabVar == 1){
									 $(".input1").focus().val($(".input1").val()); 
								}else if(tabVar == 2){
									 $(".input2").focus().val($(".input2").val()); 
								}else if(tabVar == 3){
									 $(".input3").focus().val($(".input3").val()); 
								}else if(tabVar == 4){
									 $(".input4").focus().val($(".input4").val()); 
									 tabVar = 0;
								}
							}
////////////////////////////////////////////////////////////////
						
/////////////////////////////////////////////////////////////////
			
							/////////////////////////////////////////////////////////////////////////////////////
			
							$('.back').on('click',function() {
							
								
								var $myInput = String($txt.val()).split("").join("ris");
								var position = $txt[0].selectionStart;
							
							 
								if(position!=0){
									var $myInput1 = String($myInput).split("ris");
									$myInput1.splice(position-1,1);
									$myInput = $myInput1.join("ris")
								}
								$txt.val(String($myInput).split("ris").join(""))
								$txt[0].setSelectionRange(position-1, position-1);
								$txt.focus();
							});
							
							$('.clear').on('click',function() {
								
								
								$txt.val('');
								$txt.focus();
							});
							
							
							
							
							$('.delete').on('click',function() {
							   
							var $myInput = String($txt.val()).split("").join("ris");
							var position = $txt[0].selectionStart;
						    var $myInput1 = String($myInput).split("ris");
								$myInput1.splice(position,1);
								$myInput = $myInput1.join("ris")
								$txt.val(String($myInput).split("ris").join(""))
								$txt[0].setSelectionRange(position, position);
								$txt.focus();
								
							});
							
							
/*/////////////////////////////////////// Code on KeyPress ////////////////////////////////////////////////*/
							
/*/////////////////////////////////////// Code on KeyPress ////////////////////////////////////////////////*/

							
							$(".input1").keydown(function(e){
									 inputKeyRestrict(e);
								
								 
									 $txt = $(".input1"); 
									if( e.which==27){
										$(".prompt").hide();
										$(".Procedure_banner").hide();
										$(".ReducePromt").hide();
										$(".blankMessage").hide();
									}
									if( e.which==13){
									
										doneButton()
										document.getElementById("inputText").value;
										
						
										$txt.focus();
									}
								$txt.focus();
								
						  });
							$(".input2").keydown(function(e){
									inputKeyRestrict(e);
								 
									 $txt = $(".input2"); 
									if( e.which==27){
										$(".prompt").hide();
										$(".Procedure_banner").hide();
										$(".ReducePromt").hide();
										$(".blankMessage").hide();
									}
									if( e.which==13){
										
										doneButton();
										document.getElementById("inputText1").value;
										
			
										$txt.focus();
									}
									
								 	
								$txt.focus();
								
								
								 
						  });
							
	////////////////////Restrict the values/////////////////////////////////						
	inputKeyRestrict = function(e) {
			//alert("e.which == "+e.which)		
			
			  var restrict = (e.which == 8 || e.which == 9 || e.which == 189 ||e.which == 37||e.which == 39 ||e.which == 46 || e.which == undefined || e.which == 0 || e.which == 109  || (e.which >= 96 && e.which <= 105) ) ? null : String.fromCharCode(e.which).match(/[^0-9]/);
            if (restrict) {e.preventDefault();}
			
          
    };


/*//////////////////////////////////////////////////////////////////////////////////////////////////////*/

keyPressed = function(event){
 
								 var x = event.which || event.keyCode;
								 
								
								 var rClick = String($txt.val()).length+1
			 
		  
								 if(x==45 && maxLength >= rClick){
									 
								 
									
									var secondValue = document.querySelector("#minus");

									var bt1 = secondValue.getAttribute("data-value"); 
								 
									var prev = $txt.val();
								
									
									var pos = $txt[0].selectionStart;
									event.preventDefault();
									var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
									$txt.val(newValue);
									$txt[0].setSelectionRange(pos+2, pos+2);
									 
									 
								 }
								 /////////////////////////////////////////////////////
								 
								 if(x==43 && maxLength >= rClick){
									 
									
									
									var secondValue = document.querySelector("#plus");
									var bt1 = secondValue.getAttribute("data-value"); 
 									var prev = $txt.val();
 									
									var pos = $txt[0].selectionStart;
									event.preventDefault();
									var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
									$txt.val(newValue);
									$txt[0].setSelectionRange(pos+3, pos+3);
									//return event.which !== 45;
									 
								 }
							}
						  
}); 

