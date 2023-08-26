$(document).ready(function(){
						  
						    var sb=-10000;
							var autorunVar = 0
							$(".Content00").hide();
 						    $(".autorun").css('opacity','.4');
						    $(".autorun").attr('disable','true');
						    $(".autorun").css('cursor','default');
							$(".promptComma,.prompt,.blankMessage,.ReducePromt").hide();
							
 							$(".solutionMainSteps,.solutionText,.SolutionRemark").hide();	
							$(".incorrect,.correct").show();
			var input_final_ans=-1;
			var svg_final_ans=-1;		
				///////////////////////////////////For Print///////////////////////////////////
				
				 myFunction= function() {
					window.print();
				};
				
				//////////////////////////////For focus on text////////////////////////////////
				
				 
				 $(".newSet").click(function(){
			sb=-10000;///set this as initial value..
                        
						
						
//End svg variables///////////////////											 
 					$(".solutionMainSteps,.solutionText,.SolutionRemark,.prompt_New").hide();
					$(".input1").val('');
					$(".incorrect,.correct").hide();
 					$(".blankMessage,.ReducePromt").hide();
 					$(".prompt,.promptComma").hide();
			        $(".autorun").css('opacity','.4');
					$(".autorun").css('cursor','default');
					$(".autorun").prop('disabled',false);
					$(".input1").focus();
					$(".ans_correct_tick").hide();
					$(".ans_wrong_tick").hide();
											});


/////////////////////////////////////////////////////////Buttons/////////////////////////////////////////////////////////////////////////////////////////////
				
				
				  $(".done1").click(function(){ 
											 
									$(".Procedure_banner").hide();				   
				        		    
									$(".done1").css({'color':'#660066','box-shadow':'0px 0px 0px #ff0000, 0px 1px 7px #ff0000,  0px 1px 0px #ff0000,  0px 0px 3px #ff0000'});
									$(".newSet,.solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".input1").focus();
													        
														});
						 
						 $(".newSet").click(function(){ 
										$(".howTo_div,.svg_wrong_tick,.svg_correct_tick").hide();				 
									$(".autorun").css('disable','true');				 
									$(".Procedure_banner").hide();				   
				        		    $(".newSet").css('color','#ffff00');
									$(".newSet").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".input1,.input2").val('')
									$(".howTo").show()
									
	chnageColor=0;
	Dot_check=0;
	I_check=0;
	wait=1;
check_count=0;	
ans_color_1=false;
ans_color_2=false;
ans_filled_1=false;
ans_filled_2=false;
color_cx1=0;
color_cx2=0;
window.ans_dot1="none";
window.ans_dot2="none";
window.F_click=999;
window.S_click=999;


$(".lined").css("pointer-events","auto");		
$(".fill_color_new").hide();

$(".fill_color").attr("width","0");
$(".fill_color1").attr("width","0");
$(".fill_color2").attr("width","0");
$(".filled_dot,.blank_dot,.filled_dot1,.blank_dot1,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
$(".blank_br_open1,.blank_br_close1,.filled_br_open1,.filled_br_close1").hide();

$(".tickMark").attr("stroke","#006");
$(".fill_color,.fill_color1,.fill_color2").css({"opacity":"0","cursor":"default"});
$('.blank_dot_btn,.filled_dot_btn').prop('disabled', false);
$('.blank_dot_btn,.filled_dot_btn,.lined').attr('cursor', 'pointer');
	
							
								
									
   
													        
														});
						    $(".solution").click(function(){ 
														//  alert(" in hello")
											// window.SpaceClick=1;
												$(".howTo_div,.prompt_New").hide(); 
											 
										     $(".middle").show();
								             $(".Step1_div").show();
												
												$(".step2,.step1,.step3").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
												$(".step1").css({'color':'#C00','box-shadow':'0px 3px 15px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
									$(".solution").blur();
				 					$(".input1").focus();
									$(".spacebar").show();
									$(".Procedure_banner").hide();
				        		    $(".solution").css('color','#ffff00');
									$(".solution").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".newSet,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".SpaceBarDiv").hide();
									$(".Step1").show();
									
										$(".howTo").show()
									
											//svg_solution();	      
											
														});
							
							 $(".Procedure").click(function(){ 
															
															$(".input1").focus();
															 autorunVar = 1; 
															 sb=-1;
															 
									$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt").hide();
									$(".solutionMainSteps,.solutionText,.SolutionRemark").hide();
 									$(".autorun").css('opacity','.4');
									$(".autorun").css('disable','true');
									$(".autorun").css('cursor','default');
									$(".autorun").attr('disabled',true);
 				        		    $(".Procedure").css('color','red');
									$(".Procedure").css({'color':'red','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".newSet,.solution").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure_banner").fadeIn();	
							
						});
							  
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

						   $(".Cross_PB").click(function(){
														 
								$(".Procedure_banner").hide();	
								$(".input1").focus();
								
							});	
							 
	 					   $(".Cross_BM").click(function(){
														 
								$(".blankMessage").hide();
								$(".promptComma").hide();
								$(".prompt").hide();
								$(".ReducePromt").hide();
								$(".input1").focus();
								
							});	

					
				randRange = function (min, max) {
					var randomNum = Number(Math.round(Math.random()*(max-min))+min);
					return randomNum;
				                                          }	
				
					var range_startX1= 1000;
					var range_finX1= 2500;
					var range_startX2= 3000;
					var range_finX2= 5500;
					var range_startX3= 6000;
					var range_finX3= 8500;
					
					//////////////////////////
					
					var next_val = 0;
				
					var array_Range = 600;
					
					
					var R1_Arr = new Array();
					var R2_Arr = new Array();
					var R3_Arr = new Array();
					var R4_Arr = new Array();
					var R5_Arr = new Array();
					var Q1_Arr = new Array();
					var R_AnsArray = new Array();
				
					var temp_str;
					var ta1;
					var ta2;
					var ta3;
					var ta4;
					var ta5;
					var ta6;
					var ta7;
					var ta8;
					var q1_txt;
					var counter = 0;
					var wt_id1;
		
				
				quesGeneration = function(){
					//var R1_Arr = new Array();
						
	
	for (var i = 0; i<array_Range; i++) {
		var num1 = randRange(1, 8);
		var num2 = randRange(1, 8);
		/*var num3 = randRange(2, 7);*/
		var ieq_1 = randRange(1, 2);
		var ieq_2 = randRange(1, 2);
		
		var minus1 = randRange(1, 3);
		/*var minus2 = randRange(1, 2);*/
		
	
	if(ieq_1==1){
		ieq_1_sym='<';
	}else{
	ieq_1_sym='≤';	
	}
	if(ieq_2==1){
		ieq_2_sym='<';
	}else{
	ieq_2_sym='≤';	
	}
	
	
	
	/*if(minus2==1){
		minus2_sym='–';
	}else{
		minus2_sym='';
	}*/
	if(minus1==1){
		minus1_sym='–';
		var minus2_sym=''
	}
	else if(minus1==2){
		minus1_sym='–';
		var minus2_sym='–'
	}
	else{
		minus1_sym='';
		var minus2_sym=''
	}
	
	
	
	if(ieq_1 == 1 && ieq_2 == 1){
		con1 = "Marca el puntos       <b>"+minus1_sym+" "+num1+"</b> y <b>"+minus2_sym+" "+num2+"</b> por círculos abiertos ya que estos puntos no están incluidos en <span class='wrap'><b>"+minus1_sym+" "+num1+"<span class='hidden'>1</span>"+ieq_1_sym+"<span class='hidden'>1</span><i>x</i><span class='hidden'>1</span>"+ieq_2_sym+"<span class='hidden'>1</span>"+minus2_sym+" "+num2+"</b></span>"
	}
	else if(ieq_1 == 1 && ieq_2 == 2){
		con1 = "Marca el punto       <b>"+minus1_sym+" "+num1+"</b> por un círculo abierto ya que el intervalo está abierto en <b>"+minus1_sym+" "+num1+
		"</b> y marca el punto <b>"+minus2_sym+" "+num2+
		"</b> por un círculo lleno, ya que el intervalo se cierra en <b>"+minus2_sym+" "+num2+"</b>." 
	}
	else if(ieq_1 == 2 && ieq_2 == 1){
		con1 = "Marca el punto      <b>"+minus1_sym+" "+num1
		+"</b> por un círculo lleno, ya que el intervalo se cierra en <b>"+minus1_sym+" "+num1+"</b> y marca el punto <b>"+minus2_sym+" "+num2
		+"</b> por un círculo abierto ya que el intervalo está abierto en <b>"+minus2_sym+" "+num2+"</b>."
	}
	else{
		con1 = "Marca el puntos       <b>"+minus1_sym+" "+num1+"</b> y <b>"+minus2_sym+" "+num2+"</b> rellenando los círculos, ya que estos puntos están incluidos en <span class='wrap'><b>"+minus1_sym+" "+num1+"<span class='hidden'>1</span>"+ieq_1_sym+"<span class='hidden'>1</span><i>x</i><span class='hidden'>1</span>"+ieq_2_sym+"<span class='hidden'>1</span>"+minus2_sym+" "+num2+"</b></span>"
	}
	
	
	if(minus1==1){
		/*minus1_sym='–';
		var minus2_sym=''*/
		if(num1!=num2){
			R4_Arr.push(num1+"@"+num2+"@"+ieq_1_sym+"@"+ieq_2_sym+"@"+minus1_sym+"@"+minus2_sym+"@"+con1);
		
		}
		
	}
	else if(minus1==2){
		/*minus1_sym='–';
		var minus2_sym='–'*/
		if(num1!=num2 && num1>num2){
			R4_Arr.push(num1+"@"+num2+"@"+ieq_1_sym+"@"+ieq_2_sym+"@"+minus1_sym+"@"+minus2_sym+"@"+con1);
		
		}
	}
	else{
		/*minus1_sym='';
		var minus2_sym=''*/
		if(num1!=num2 && num1<num2){
			R4_Arr.push(num1+"@"+num2+"@"+ieq_1_sym+"@"+ieq_2_sym+"@"+minus1_sym+"@"+minus2_sym+"@"+con1);
		
		}
	}
	
	}
						
			//alert(R4_Arr)			
						};
					
			/*/////////////////////////R1_Arr////////////////////////////////*/
		
			nextQuesGeneration = function(){
				
						next_val++;
				
	if (next_val>=((R4_Arr.length)-1)) {
		next_val = 1;
	}

						
	temp1 = [];
	//////////////////////
	temp1 = String((R4_Arr)[next_val]).split("@");
	
	val1=temp1[0];
	val2=temp1[1];
	val3=temp1[2];
	val4=temp1[3];
	val5=temp1[4];
	val6=temp1[5];
	val7=temp1[6];
	

/*	array_Ans = find_Answer(val1, val2, val3, val4, val5, val6, val7, val8, val9)
*/	
	$(".val1").html(val1)
	$(".val2").html(val2)
	$(".val3").html(val3)
	$(".val4").html(val4)
	$(".val5").html(val5)
	$(".val6").html(val6)
	$(".val7").html(val7)
	val6=val6.split("–").join("-");
	val5=val5.split("–").join("-");
	ans_mrg2=val6+val2;
	  ans_mrg1=val5+val1;
	  
	/*ans_mrg1= ans_mrg1
	 ans_mrg2= ans_mrg2*/
	 svg_sol=val3;
	 svg_sol1=val4;
	//alert(ans_mrg1)
	
	//alert(" in next")
	if(val3=='<'){
	  ans_check1=val5+""+val1+"blank_open";
	  ans_check3=val6+""+val2+"blank_open";
	  
	  //alert(1)
	  
   }else {
	   ans_check1=val5+""+val1+"filled_open";
	   	   ans_check3=val6+""+val2+"filled_open";

	  // alert(2)
   }


if(val4=='<'){
	  
	  ans_check2=val6+""+val2+"blank_close";
	  
	  	  ans_check4=val5+""+val1+"blank_close";

	  //alert(3)
   }else{
	   ans_check2=val6+""+val2+"filled_close";
	  ans_check4=val5+""+val1+"filled_close";

	   //alert(4)
   }										
					
					if (next_val>500) {
						next_val = 0;
					}
						
						};
						
						
						 
			/*showSolution = function(){
				 
				 sb=0;
				 autorunVar = 1////0 when in teacher mode
				 
				     $(".correct,.incorrect,.blankMessage,.prompt,.promptComma").hide();
					 $(".autorun").css('opacity','0.4');
					 $(".autorun").attr('disabled','disabled');	
					 $(".autorun").css('cursor','default');
					 
					 $(".sol,.solutionMainSteps,.Step0,.Step1,.Step2,.Step3,.Step4,.Step5,.Step6,.Step7,.Step8,.Step9,.Step10,.Step11,.Step12,.Step13,.divisionImage,.SdTxt,.outline,.LineSol,.Sum12,.ImgNotifycrry,.forward_button,.back_button").hide();
					 $(".sol,.solutionMainSteps,.Step0,.Step1,.Step2,.Step3,.Step4,.Step5,.Step6,.Step7,.Step8,.Step9,.Step10,.Step11,.Step12,.Step13,.divisionImage,.SdTxt,.LineSol,.Sum12,.outline,.ImgNotifycrry").fadeIn();
					
					 
					
			 
					 $(".solutionMain").fadeIn();
				 
					 
				}*/
			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			quesGeneration();
			nextQuesGeneration();  ///// Calling question..
			
		
				
			
									   //alert(svg_sol+" lnth "+svg_sol.length)
									   
				
			
			
			
			
			
			
			
				doneButton = function(){
				
					$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt").hide();
										     //alert(svg_sol.charAt(2))
					/*box1=document.getElementById("inputText").value;	
				
				box1=trimSpaces(box1);
				ans_input_check=trimSpaces(ans_input_check);
				//alert(ans_input_check+" df "+box1)
					if(box1==ans_input_check){
						input_final_ans=1;
						
					}else if(box1==""){
							input_final_ans=-1;
					}else{
						     input_final_ans=0;
					}*/
				if((ans_check1==ans_dot1 ||ans_check1==ans_dot2)  && (ans_check2==ans_dot1 || ans_check2==ans_dot2)){
					
					    svg_final_ans_check=true;
						
						//alert("hii1")
						
				    }else if((ans_check3==ans_dot1 ||ans_check3==ans_dot2)  && (ans_check4==ans_dot1 || ans_check4==ans_dot2)){
					
					    svg_final_ans_check=true;
						//alert("hii2")
				    }else {
						
					  svg_final_ans_check=false;	
						}
					
					
					
					
					
			
				//alert(ans_check1+" asd "+ans_check2+" ds "+ans_dot1+" dsa "+ans_dot2 +" "+ans_color_1)
				//alert(ans_dot1+"sa"+ans_dot2)
				if(ans_dot1=="none" || ans_dot2=="none"){
						svg_final_ans=-1;
				}else if(svg_final_ans_check && ans_color_1){
					
					    svg_final_ans=1;
				    }else{
						//alert("wrong")
			            svg_final_ans=0;	
					}
							
			
			
				//alert(ans_check1+" "+ans_dot1+" "+ans_check2+" "+ans_dot2)
					/*var k1_text = document.getElementById("inputText").value;*/
					//alert("final_a3 == "+final_a3);
					if(svg_final_ans==-1 ||  ans_color_2==false){
							$(".enter").html("Traza")
						     $(".value").html("gráfica")
							$(".blankMessage_New").show().delay(2500).hide(0);	
					}/*else if(svg_final_ans==-1 && input_final_ans!=-1){
						
						$(".enter").html("Plot")
						$(".value").html("graph")
						$(".blankMessage_New").show();
						}*/
					  /*else if(svg_final_ans!=-1 && input_final_ans==-1){
						
						$(".enter").html("Enter")
						$(".value").html("value")
						$(".blankMessage_New").show();
						}*/
						else if(svg_final_ans == 1 /*&& input_final_ans==1*/){
						
									//alert("correct");
							   /*$(".svg_wrong_tick").hide();
							   $(".svg_correct_tick").show();
				               $(".ans_correct_tick").show();
						       $(".ans_wrong_tick").hide();*/
							   $(".remark,.correct").show().fadeOut(2500);
								
								}else if(svg_final_ans==0 /*|| input_final_ans==0*/){
						
									//alert("correct");
							   /*$(".svg_wrong_tick").show();
							   $(".svg_correct_tick").hide();
				               $(".ans_correct_tick").hide();
						       $(".ans_wrong_tick").show();*/
								$(".remark,.incorrect").show().fadeOut(2500);
								
								}
							 }				
		
			 showSolution = function(){
				 
				 sb=0;
				 autorunVar = 1////0 when in teacher mode
				 
				     $(".correct,.incorrect,.blankMessage,.prompt,.promptComma").hide();
					 $(".autorun").css('opacity','0.4');
					 $(".autorun").attr('disabled','disabled');	
					 $(".autorun").css('cursor','default');
 					 $(".solutionMainSteps,.solutionText,.SolutionRemark").hide();
					 $(".solutionMainSteps,.solutionText,.SolutionRemark").hide();
					 $(".middle").show();
 					 $(".solutionMainSteps,.solutionText,.SolutionRemark").show().css({"display":"inline-block"});
					
					}
			
				
/*///////////////////////////////////////////////////////////////////////////*/

/*//////////////////////////////////////////////////////////////////////////*/								
						
/*/////////////////////////////////////////////////////////////////////////*/
	
}); //////end of Main/////////


