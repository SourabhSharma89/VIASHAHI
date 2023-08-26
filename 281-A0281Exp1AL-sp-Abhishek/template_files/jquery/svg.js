// JavaScript Document
$(document).ready(function(){
window.check_count=0;
window.chnageColor=0;
window.Dot_check=0;
window.I_check=0;
window.clas='';
window.wait=1;
window.ans_color_1=false;
window.ans_color_2=false;
window.ans_filled_1=false;
window.ans_filled_2=false;
window.ans_num_1=999;
window.ans_num_2=999;
window.color_cx1=0;
window.color_cx2=0;
window.ans_dot1="none";
window.ans_dot2="none";
window.F_click=999;
window.S_click=999;


$(".fill_color_new").hide();
		
$(".lined3").click(function(){
			if(Dot_check==0){
		        I_check=1;	
				chnageColor=2;

				 ans_num_1=-9;
				 
				 				F_click=ans_num_1;

				clas='.tickMark2';
				 $(".filled_dot,.blank_dot").hide();
				  $(".tickMark").attr("stroke","#006");
			      $(".tickMark2").attr("stroke","red");
                $(".fill_color").attr("width",0+"px");	
				$(".lined").css("pointer-events","auto");		

		$(".lined3").css("pointer-events","none");		

		}else if(Dot_check==1){
			chnageColor=2;
			I_check=2;
			 wait=2;
			  ans_num_1=-9;
			S_click=ans_num_1;

			$(".tickMark").attr("stroke","#006");
				$(clas).attr("stroke","red");
				 $(".tickMark2").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");		
		}
//$(".tickMark,.filled_dot,.blank_dot").hide();
		
		
						})
$(".lined4").click(function(){
		if(Dot_check==0){
		        I_check=1;		
				chnageColor=3;
				 ans_num_1=-8;
				clas='.tickMark3';
			F_click=ans_num_1;

			 $(".filled_dot,.blank_dot,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
			  $(".tickMark").attr("stroke","#006");
			      $(".tickMark3").attr("stroke","red");
                $(".fill_color").attr("width",0+"px");
				$(".lined").css("pointer-events","auto");		

				$(".lined4").css("pointer-events","none");		

		}else if(Dot_check==1){
			chnageColor=3;
			I_check=2;
			 wait=2;
			  ans_num_1=-8;
			    S_click=ans_num_1;

			 	 $(".tickMark").attr("stroke","#006");	 
				$(clas).attr("stroke","red");
			  $(".tickMark3").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");		
			
		}
//$(".tickMark,.filled_dot,.blank_dot").hide();
								
				
						})
$(".lined5").click(function(){
		if(Dot_check==0){
		        I_check=1;	
			   chnageColor=4;
			    ans_num_1=-7;
								F_click=ans_num_1;

			   clas='.tickMark4';
			  $(".filled_dot,.blank_dot,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
			   $(".tickMark").attr("stroke","#006");
			      $(".tickMark4").attr("stroke","red");
               $(".fill_color").attr("width",0+"px");	
			   $(".lined").css("pointer-events","auto");		

				$(".lined5").css("pointer-events","none");		

		}else if(Dot_check==1){
			chnageColor=4;
			I_check=2;
			 wait=2;
			  ans_num_1=-7;
			    S_click=ans_num_1;

			 $(".tickMark").attr("stroke","#006");
				$(clas).attr("stroke","red");
				 $(".tickMark4").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");		
		}
//$(".tickMark,.filled_dot,.blank_dot").hide();
			
						})
$(".lined6").click(function(){
		if(Dot_check==0){
		      I_check=1	;	
			 chnageColor=5;
			   ans_num_1=-6;
			   				F_click=ans_num_1;

			 clas='.tickMark5';
			  $(".filled_dot,.blank_dot,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
			   $(".tickMark").attr("stroke","#006");
			      $(".tickMark5").attr("stroke","red");
			 $(".fill_color").attr("width",0+"px");	
			 $(".lined").css("pointer-events","auto");		

				$(".lined6").css("pointer-events","none");		

		}else if(Dot_check==1){
			chnageColor=5;
			I_check=2;
			 wait=2;
			   ans_num_1=-6;
			    S_click=ans_num_1;

			 $(".tickMark").attr("stroke","#006");
				$(clas).attr("stroke","red");
			   $(".tickMark5").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");		
			
		}
//$(".tickMark,.filled_dot,.blank_dot").hide();
					})
$(".lined7").click(function(){
		if(Dot_check==0){
		        I_check=1;	
			   chnageColor=6;
			    ans_num_1=-5;
								F_click=ans_num_1;

			   clas='.tickMark6';
			  $(".filled_dot,.blank_dot,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
			   $(".tickMark").attr("stroke","#006");
			      $(".tickMark6").attr("stroke","red");
			   $(".fill_color").attr("width",0+"px");	
			   $(".lined").css("pointer-events","auto");		

				$(".lined7").css("pointer-events","none");		

		}else if(Dot_check==1){
			 chnageColor=6;
			 I_check=2;
			  wait=2;
			   ans_num_1=-5;
			    S_click=ans_num_1;

			 $(".tickMark").attr("stroke","#006");
				$(clas).attr("stroke","red");
				 $(".tickMark6").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");		
		}
//$(".tickMark,.filled_dot,.blank_dot").hide();
		
						})
$(".lined8").click(function(){
		if(Dot_check==0){
		       I_check=1;	
			  chnageColor=7;
			    ans_num_1=-4;
							F_click=ans_num_1;
	
				
			  clas='.tickMark7';
			  $(".filled_dot,.blank_dot,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
			   $(".tickMark").attr("stroke","#006");
			      $(".tickMark7").attr("stroke","red");
			  $(".fill_color").attr("width",0+"px");
			  $(".lined").css("pointer-events","auto");		

			  $(".lined8").css("pointer-events","none");		

		}else if(Dot_check==1){
			chnageColor=7;
			I_check=2;
			 wait=2;
			   ans_num_1=-4;
			    S_click=ans_num_1;
 
			   
			 $(".tickMark").attr("stroke","#006");
				$(clas).attr("stroke","red");
				   $(".tickMark7").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");		
		}
//$(".tickMark,.filled_dot,.blank_dot").hide();

					
						})
$(".lined9").click(function(){
		if(Dot_check==0){
		       I_check=1;	
			   chnageColor=8;
			     ans_num_1=-3;
				 
						F_click=ans_num_1;
		 
			   clas='.tickMark8';
			  $(".filled_dot,.blank_dot,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
			   $(".tickMark").attr("stroke","#006");
			      $(".tickMark8").attr("stroke","red");
			   $(".fill_color").attr("width",0+"px");
			   $(".lined").css("pointer-events","auto");		

              				$(".lined9").css("pointer-events","none");		

		}else if(Dot_check==1){
			chnageColor=8;
			I_check=2;
			 wait=2;
			   ans_num_1=-3;
			    S_click=ans_num_1;
 
			   
		 $(".tickMark").attr("stroke","#006");
				$(clas).attr("stroke","red");
				 $(".tickMark8").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");			
			
		}
//$(".tickMark,.filled_dot,.blank_dot").hide();
				
						})
$(".lined10").click(function(){
		/*Dot_check=0;	*/
		if(Dot_check==0){
		       I_check=1;	
			chnageColor=9;
			  ans_num_1=-2;
			 				F_click=ans_num_1;
 
			  
			clas='.tickMark9';
			  $(".filled_dot,.blank_dot,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
			   $(".tickMark").attr("stroke","#006");
			      $(".tickMark9").attr("stroke","red");
			  $(".fill_color").attr("width",0+"px");
			  $(".lined").css("pointer-events","auto");		

				$(".lined10").css("pointer-events","none");		

		}else if(Dot_check==1){
			chnageColor=9;
			I_check=2;
			 wait=2;
			   ans_num_1=-2;
			    S_click=ans_num_1;
 
			   
		 $(".tickMark").attr("stroke","#006");
				$(clas).attr("stroke","red");
				  $(".tickMark9").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");			
		}
//$(".tickMark,.filled_dot,.blank_dot").hide();
   			
						})

$(".lined11").click(function(){
		if(Dot_check==0){
		      I_check=1;
			  chnageColor=10;
			   ans_num_1=-1;
			 				F_click=ans_num_1;
  
			   
			  clas='.tickMark10';
			  $(".filled_dot,.blank_dot,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
			   $(".tickMark").attr("stroke","#006");
			      $(".tickMark10").attr("stroke","red");
			  $(".fill_color").attr("width",0+"px");	
			  $(".lined").css("pointer-events","auto");		

				$(".lined11").css("pointer-events","none");		

		}else if(Dot_check==1){
			chnageColor=10;
			I_check=2;
			 wait=2;
			  ans_num_1=-1;
			  
			    S_click=ans_num_1;
  
		  $(".tickMark").attr("stroke","#006");
				$(clas).attr("stroke","red");
				   $(".tickMark10").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");			
		}
//$(".tickMark,.filled_dot,.blank_dot").hide();
	
						})

$(".lined12").click(function(){
		if(Dot_check==0){
		      I_check=1;
			  chnageColor=11;
			   ans_num_1=0;
			  clas='.tickMark11';
			 				F_click=ans_num_1;
 
			  $(".filled_dot,.blank_dot,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
			   $(".tickMark").attr("stroke","#006");
			      $(".tickMark11").attr("stroke","red");
			  $(".fill_color").attr("width",0+"px");	
			  $(".lined").css("pointer-events","auto");		

				$(".lined12").css("pointer-events","none");		

		}else if(Dot_check==1){
			chnageColor=11;
			I_check=2;
			 wait=2;
			  ans_num_1=0;
			    S_click=ans_num_1;
	  
			  
		 $(".tickMark").attr("stroke","#006");
				$(clas).attr("stroke","red");
				  $(".tickMark11").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");			
			
		}
//$(".tickMark,.filled_dot,.blank_dot").hide();
		
						})
$(".lined13").click(function(){
		if(Dot_check==0){
		     I_check=1;	
			 chnageColor=12;
			  ans_num_1=1;
					F_click=ans_num_1;
		  
			  
			  
			 clas='.tickMark12';
			  $(".filled_dot,.blank_dot,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide(); 
			  $(".tickMark").attr("stroke","#006");
			      $(".tickMark12").attr("stroke","red");
             $(".fill_color").attr("width",0+"px");	
			 $(".lined").css("pointer-events","auto");		

				$(".lined13").css("pointer-events","none");		

		}else if(Dot_check==1){
			chnageColor=12;
			I_check=2;
			 wait=2;
			  ans_num_1=1;
			  
			  
			    S_click=ans_num_1;
		  
		 $(".tickMark").attr("stroke","#006");
				$(clas).attr("stroke","red");
			 $(".tickMark12").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");		
		}
//$(".tickMark,.filled_dot,.blank_dot").hide();
						})

$(".lined14").click(function(){
							
		if(Dot_check==0){
		        I_check=1;
				chnageColor=13;
				 ans_num_1=2;
				 
						F_click=ans_num_1;
		 
				clas='.tickMark13';
			 $(".filled_dot,.blank_dot,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
			 $(".tickMark").attr("stroke","#006");
			      $(".tickMark13").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");	
				$(".lined").css("pointer-events","auto");		

								$(".lined14").css("pointer-events","none");		

		}else if(Dot_check==1){
			    chnageColor=13; 
				I_check=2;
				 wait=2;
				  ans_num_1=2;
				  
			    S_click=ans_num_1;
	  
				  $(".tickMark").attr("stroke","#006");
				$(clas).attr("stroke","red");
				
			 $(".tickMark13").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");			
			
		}
							 }); 
		$(".lined15").click(function(){
							
		if(Dot_check==0){
		        I_check=1;
				chnageColor=14;
				  ans_num_1=3;
				  
						F_click=ans_num_1;
		  
				clas='.tickMark14';
				 $(".filled_dot,.blank_dot,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
				  $(".tickMark").attr("stroke","#006");
			      $(".tickMark14").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");	
				$(".lined").css("pointer-events","auto");		

							$(".lined15").css("pointer-events","none");		
	
		}else if(Dot_check==1){
			    chnageColor=14; 
				I_check=2;
				 wait=2;
				   ans_num_1=3;
				   
			    S_click=ans_num_1;
   
				   
			   $(".tickMark").attr("stroke","#006");
				$(clas).attr("stroke","red");
				  $(".tickMark14").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");			
			
		}
		 }); 
		$(".lined16").click(function(){
							
		if(Dot_check==0){
		        I_check=1;
				chnageColor=15;
				 ans_num_1=4;
				 
						F_click=ans_num_1;
		 
				clas='.tickMark15';
				 $(".filled_dot,.blank_dot,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
				  $(".tickMark").attr("stroke","#006");
			      $(".tickMark15").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");
				$(".lined").css("pointer-events","auto");		

							$(".lined16").css("pointer-events","none");		
	
		}else if(Dot_check==1){
			    chnageColor=15; 
				I_check=2;
				 wait=2;
				  ans_num_1=4;
				  
			    S_click=ans_num_1;
 
				  
			 $(".tickMark").attr("stroke","#006");
				$(clas).attr("stroke","red");
				  $(".tickMark15").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");			
			
		}
		 }); 
		$(".lined17").click(function(){
							
		if(Dot_check==0){
		        I_check=1;
				chnageColor=16;
				 ans_num_1=5;
						F_click=ans_num_1;
		 
				 
				clas='.tickMark16';
				 $(".filled_dot,.blank_dot,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
				  $(".tickMark").attr("stroke","#006");
			      $(".tickMark16").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");	
				$(".lined").css("pointer-events","auto");		
				$(".lined17").css("pointer-events","none");		
	
		}else if(Dot_check==1){
			    chnageColor=16; 
				I_check=2;
				 wait=2;
				  ans_num_1=5;
				  
			    S_click=ans_num_1;
	  
				  
			  $(".tickMark").attr("stroke","#006");
				$(clas).attr("stroke","red");
			 $(".tickMark16").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");			
			
		}

		
//$(".tickMark,.filled_dot,.blank_dot").hide();
						 
	
						})
		
		
		
		
		
		
		
		
		
				$(".lined18").click(function(){
							
		if(Dot_check==0){
		        I_check=1;
				chnageColor=17;
				 ans_num_1=6;
							F_click=ans_num_1;
	 
				 
				clas='.tickMark17';
				 $(".filled_dot,.blank_dot,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
				  $(".tickMark").attr("stroke","#006");
			      $(".tickMark17").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");	
				$(".lined").css("pointer-events","auto");		
				$(".lined18").css("pointer-events","none");		
	
		}else if(Dot_check==1){
			    chnageColor=17; 
				I_check=2;
				 wait=2;
				  ans_num_1=6;
			    S_click=ans_num_1;
	  
				  
				  
			  $(".tickMark").attr("stroke","#006");
				$(clas).attr("stroke","red");
			 $(".tickMark17").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");			
			
		}

		
//$(".tickMark,.filled_dot,.blank_dot").hide();
						 
	
						})
		
		
				$(".lined19").click(function(){
							
		if(Dot_check==0){
		        I_check=1;
				chnageColor=18;
				 ans_num_1=7;
				 
						F_click=ans_num_1;
		 
				clas='.tickMark18';
				 $(".filled_dot,.blank_dot,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
				  $(".tickMark").attr("stroke","#006");
			      $(".tickMark18").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");	
				$(".lined").css("pointer-events","auto");		
				$(".lined19").css("pointer-events","none");		
	
		}else if(Dot_check==1){
			    chnageColor=18; 
				I_check=2;
				 wait=2;
				  ans_num_1=7;
			    S_click=ans_num_1;
	  
				  
			  $(".tickMark").attr("stroke","#006");
				$(clas).attr("stroke","red");
			 $(".tickMark18").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");			
			
		}

		
//$(".tickMark,.filled_dot,.blank_dot").hide();
						 
	
						})
		
		
		
		
		
		
						$(".lined20").click(function(){
							
		if(Dot_check==0){
		        I_check=1;
				chnageColor=19;
				 ans_num_1=8;
								F_click=ans_num_1;
 
				 
				clas='.tickMark19';
				 $(".filled_dot,.blank_dot,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
				  $(".tickMark").attr("stroke","#006");
			      $(".tickMark19").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");	
				$(".lined").css("pointer-events","auto");		
				$(".lined20").css("pointer-events","none");		
	
		}else if(Dot_check==1){
			    chnageColor=18; 
				I_check=2;
				 wait=2;
				  ans_num_1=8;
				  
						S_click=ans_num_1;
		  
				  
			  $(".tickMark").attr("stroke","#006");
				$(clas).attr("stroke","red");
			 $(".tickMark19").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");			
			
		}

		
//$(".tickMark,.filled_dot,.blank_dot").hide();
						 
	
						})
		
		
		
		
		
						$(".lined21").click(function(){
							
		if(Dot_check==0){
		        I_check=1;
				chnageColor=20;
				 ans_num_1=9;
				 
							F_click=ans_num_1;
	 
				clas='.tickMark20';
				 $(".filled_dot,.blank_dot,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
				  $(".tickMark").attr("stroke","#006");
			      $(".tickMark20").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");	
				$(".lined").css("pointer-events","auto");		
				$(".lined21").css("pointer-events","none");		
	
		}else if(Dot_check==1){
			    chnageColor=20; 
				I_check=2;
				 wait=2;
				  ans_num_1=9;
			    S_click=ans_num_1;
  
				  
			  $(".tickMark").attr("stroke","#006");
				$(clas).attr("stroke","red");
			 $(".tickMark20").attr("stroke","red");
				$(".fill_color").attr("width",0+"px");			
			
		}

		
//$(".tickMark,.filled_dot,.blank_dot").hide();
						 
	
						})
		
		
		
		
		
		

resetFun=function(){
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
	


}
filled_dot_btn=function(){

	var set_cx=(chnageColor*30)+10;

	
	
	if((Dot_check==0 ||  wait==1)&& chnageColor!=0){
		
		
		
		if(ans_num_1<0){
				checkIt=ans_num_1*-1;
			
			}else{
				
					checkIt=ans_num_1;
				}
		
		
				
	//alert(checkIt+" == "+val2)
	
if(checkIt==val2){
	//alert("me")
		thisIs=true;
	
	}else{
	thisIs=false;
		}	
	
		
if(!thisIs){
filled_close="filled_close";
filled_open="filled_open";
blank_open="blank_open"; 
blank_close="blank_close";
}else if(thisIs){

filled_close="filled_open";
filled_open="filled_close";
blank_open="blank_close"; 

blank_close="blank_open";
	
	}
	
		
		
		
		
		
		
		
$(".filled_dot,.blank_dot,.filled_dot1,.blank_dot1,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
$(".blank_br_open1,.blank_br_close1,.filled_br_open1,.filled_br_close1").hide();
	    $(".filled_dot").attr("cx",set_cx);
	    $(".filled_dot").show();
		Dot_check=1;
		ans_filled_1=true;
		color_cx1=set_cx;
		
		ans_dot1=F_click+filled_open;//new code

		}
		else if(Dot_check==1){
		$(".filled_dot1").attr("cx",set_cx);	
		$(".filled_dot1").show();
		Dot_check=2;
		ans_filled_2=true;
		color_cx2=set_cx;
		
		ans_dot2=S_click+filled_close;

		}

if(wait==1){
 cx=$(".filled_dot").attr("cx");

}else if(wait==2){
$(".fill_color,.fill_color1,.fill_color2").css("cursor","pointer");
var cx1=$(".filled_dot1").attr("cx");

cx= parseInt(color_cx1);
cx1=parseInt(color_cx2);
if(cx>cx1){
res=cx-cx1;	
$(".fill_color1").attr("x",cx1);

$(".fill_color").attr("width",(cx1-40));
var fill_color2=599-(cx1+res-40);
$(".fill_color2").attr("x",cx);
$(".fill_color2").attr("width",fill_color2);




}else if(cx1>cx){
res=cx1-cx;	
$(".fill_color1").attr("x",cx);



$(".fill_color").attr("width",(cx-40));
var fill_color2= 599-(cx+res-40);

$(".fill_color2").attr("x",cx1);
$(".fill_color2").attr("width",fill_color2);



}

$(".fill_color1").attr("width",res+"px");
 $('.blank_dot_btn,.filled_dot_btn').prop('disabled', true);
 $('.blank_dot_btn,.filled_dot_btn,.lined').attr('cursor', 'default');


//alert(cx1+"sad"+cx+"sad"+res)
}
}




blank_dot_btn=function(){
	

	var set_cx=(chnageColor*30)+10;
	
		
		
		
		
		
	if((Dot_check==0 ||  wait==1)&& chnageColor!=0){
		
		
		
		
				if(ans_num_1<0){
				checkIt=ans_num_1*-1;
			
			}else{
				
					checkIt=ans_num_1;
				}
		
	
	
if(checkIt==val2){
		thisIs=true;
	
	}else{
	thisIs=false;
		}	
	
		
if(!thisIs){
filled_close="filled_close";
filled_open="filled_open";
blank_open="blank_open"; 
blank_close="blank_close";
}else if(thisIs){

filled_close="filled_open";
filled_open="filled_close";
blank_open="blank_close"; 

blank_close="blank_open";
	
	}
	
		
		
		
		
		
$(".filled_dot,.blank_dot,.filled_dot1,.blank_dot1,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close").hide();
$(".blank_br_open1,.blank_br_close1,.filled_br_open1,.filled_br_close1").hide();
	    $(".blank_dot").attr("cx",set_cx);
	    $(".blank_dot").show();
		Dot_check=1;
		ans_filled_1=null;
	    color_cx1=set_cx;
		ans_dot1=F_click+blank_open;

		}
		else if(Dot_check==1){
		$(".blank_dot1").attr("cx",set_cx);	
		$(".blank_dot1").show();
		Dot_check=2;
		ans_filled_2=null;
		color_cx2=set_cx;
		ans_dot2=S_click+blank_close;	

		}

if(wait==1){
 cx=$(".blank_dot").attr("cx");

}else if(wait==2){

<!--$(".fill_color").attr("width","479px");-->
$(".fill_color,.fill_color1,.fill_color2").css("cursor","pointer");


var cx1=$(".blank_dot1").attr("cx");

cx= parseInt(color_cx1);
cx1=parseInt(color_cx2);
if(color_cx1>color_cx2){
	
	
res=color_cx1-color_cx2;	
$(".fill_color1").attr("x",color_cx2);
$(".fill_color").attr("width",(color_cx2-40));
var fill_color2=599-(color_cx2+res-40);
$(".fill_color2").attr("x",color_cx1);
$(".fill_color2").attr("width",fill_color2);
}else if(color_cx2>color_cx1){
res=color_cx2-color_cx1;	
$(".fill_color1").attr("x",color_cx1);

$(".fill_color").attr("width",(color_cx1-40));
var fill_color2= 599-(color_cx1+res-40);

$(".fill_color2").attr("x",color_cx2);
$(".fill_color2").attr("width",fill_color2);

}

$(".fill_color1").attr("width",res+"px");
 $('.blank_dot_btn,.filled_dot_btn').prop('disabled', true);
 $('.blank_dot_btn,.filled_dot_btn,.lined').attr('cursor', 'default');

//alert(cx1+"sad"+cx+"sad"+res)
}


}




////////////////////////////////////////////////////////////////testing/////////////////////////////////////////////////////////////////////////////////

blank_br_open=function(){
	

	
	
	
	  var blank_br_open;
    var set_m;
if(chnageColor==2){
	blank_br_open="M75 15 q -12 15 0 25";

	}else{
		 set_m=(chnageColor*30)+15;
	    blank_br_open="M"+set_m+" "+"15 q -12 15 0 25";
	
		}
    
//alert(chnageColor+" f "+set_m)
	if((Dot_check==0 ||  wait==1)&& chnageColor!=0){
		
		
		
					if(ans_num_1<0){
				checkIt=ans_num_1*-1;
			
			}else{
				
					checkIt=ans_num_1;
				}
		
	
	
if(checkIt==val2){
		thisIs=true;
	
	}else{
	thisIs=false;
		}	
	
		
if(!thisIs){
filled_close="filled_close";
filled_open="filled_open";
blank_open="blank_open"; 
blank_close="blank_close";
}else if(thisIs){

filled_close="filled_open";
filled_open="filled_close";
blank_open="blank_close"; 

blank_close="blank_open";
	
	}
	
		
		
		
		
		
		
		
$(".filled_dot,.blank_dot,.filled_dot1,.blank_dot1,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close,.blank_br_open1").hide();
	$(".blank_br_close1,.filled_br_open1,.filled_br_close1").hide();
	
	$(".blank_br_open").attr("d",blank_br_open);
	    $(".blank_br_open").show();
		Dot_check=1;
		ans_filled_1=null;
		color_cx1=set_m;
			ans_dot1=F_click+"blank_open";
	
		
		}
		else if(Dot_check==1){
	    $(".blank_br_open1").attr("d",blank_br_open);
	    $(".blank_br_open1").show();
		Dot_check=2;
		ans_filled_2=null;
		color_cx2=set_m;
		ans_dot2=S_click+"blank_open";

		
		}
	
	
	
	
	
	
 if(wait==2){

<!--$(".fill_color").attr("width","479px");-->
$(".fill_color,.fill_color1,.fill_color2").css("cursor","pointer");


if(color_cx1>color_cx2){
	
	
res=color_cx1-color_cx2;	
$(".fill_color1").attr("x",color_cx2);
$(".fill_color").attr("width",(color_cx2-40));
var fill_color2=599-(color_cx2+res-40);
$(".fill_color2").attr("x",color_cx1);
$(".fill_color2").attr("width",fill_color2);
}else if(color_cx2>color_cx1){
res=color_cx2-color_cx1;	
$(".fill_color1").attr("x",color_cx1);

$(".fill_color").attr("width",(color_cx1-40));
var fill_color2= 599-(color_cx1+res-40);

$(".fill_color2").attr("x",color_cx2);
$(".fill_color2").attr("width",fill_color2);

}

$(".fill_color1").attr("width",res+"px");
 $('.blank_dot_btn,.filled_dot_btn').prop('disabled', true);
 $('.blank_dot_btn,.filled_dot_btn,.lined').attr('cursor', 'default');

//alert(cx1+"sad"+cx+"sad"+res)
}
}
///////////////////////////////////////////////////////////////////////////////////////blank_br_open end///////////////////////////////////////////////////////


blank_br_close=function(){
	

	
	
	
	
	
	var blank_br_close;
    var set_m;
if(chnageColor==2){
	blank_br_close="M65 15 q 12 15 0 25";

	}else{
		 set_m=(chnageColor*30)+5;
	    blank_br_close="M"+set_m+" "+"15 q 12 15 0 25";
	
		}
    
//alert(chnageColor+" f "+set_m)
	if((Dot_check==0 ||  wait==1)&& chnageColor!=0){
		
		
		
		
					if(ans_num_1<0){
				checkIt=ans_num_1*-1;
			
			}else{
				
					checkIt=ans_num_1;
				}
		
	
	
if(checkIt==val2){
		thisIs=true;
	
	}else{
	thisIs=false;
		}	
	
		
if(!thisIs){
filled_close="filled_close";
filled_open="filled_open";
blank_open="blank_open"; 
blank_close="blank_close";
}else if(thisIs){

filled_close="filled_open";
filled_open="filled_close";
blank_open="blank_close"; 

blank_close="blank_open";
	
	}
	
		
		
		
		
		
    $(".filled_dot,.blank_dot,.filled_dot1,.blank_dot1,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close,.blank_br_open1").hide();
	$(".blank_br_close1,.filled_br_open1,.filled_br_close1").hide();

     	$(".blank_br_close").attr("d",blank_br_close);
	    $(".blank_br_close").show();
		Dot_check=1;
		ans_filled_1=null;
		color_cx1=set_m;
		
		ans_dot1=F_click+"blank_close";

		}
		else if(Dot_check==1){
	    $(".blank_br_close1").attr("d",blank_br_close);
	    $(".blank_br_close1").show();
		Dot_check=2;
		ans_filled_2=null;
		color_cx2=set_m;
		
				ans_dot2=S_click+"blank_close";

		}
	
 if(wait==2){

<!--$(".fill_color").attr("width","479px");-->
$(".fill_color,.fill_color1,.fill_color2").css("cursor","pointer");


if(color_cx1>color_cx2){
	
	
res=color_cx1-color_cx2;	
$(".fill_color1").attr("x",color_cx2);
$(".fill_color").attr("width",(color_cx2-40));
var fill_color2=599-(color_cx2+res-40);
$(".fill_color2").attr("x",color_cx1);
$(".fill_color2").attr("width",fill_color2);
}else if(color_cx2>color_cx1){
res=color_cx2-color_cx1;	
$(".fill_color1").attr("x",color_cx1);

$(".fill_color").attr("width",(color_cx1-40));
var fill_color2= 599-(color_cx1+res-40);

$(".fill_color2").attr("x",color_cx2);
$(".fill_color2").attr("width",fill_color2);

}

$(".fill_color1").attr("width",res+"px");
 $('.blank_dot_btn,.filled_dot_btn').prop('disabled', true);
 $('.blank_dot_btn,.filled_dot_btn,.lined').attr('cursor', 'default');

//alert(cx1+"sad"+cx+"sad"+res)
}
	
	
	
	
	
}

/////////////////////////////////////////////////////////////////////////////////blank_br_close end////////////////////////////////////////////////////////////


filled_br_open=function(){

	
	
	
	
	
	
	
	
	
	
	var filled_br_open;
    var set_m;
if(chnageColor==2){
	filled_br_open="M70 15  70 40 h0 10 m-11 -25 h0 10";

	}else{
		 set_m=(chnageColor*30)+10;
	    filled_br_open="M"+set_m+" 15 "+set_m+" 40 h0 10 m-11 -25 h0 10";
	
		}
    
//alert(chnageColor+" f "+set_m)
	if((Dot_check==0 ||  wait==1)&& chnageColor!=0){
		
		
				if(ans_num_1<0){
				checkIt=ans_num_1*-1;
			
			}else{
				
					checkIt=ans_num_1;
				}
		
	
	
if(checkIt==val2){
		thisIs=true;
	
	}else{
	thisIs=false;
		}	
	
		
if(!thisIs){
filled_close="filled_close";
filled_open="filled_open";
blank_open="blank_open"; 
blank_close="blank_close";
}else if(thisIs){

filled_close="filled_open";
filled_open="filled_close";
blank_open="blank_close"; 

blank_close="blank_open";
	
	}
		
		
		
		
		
		
		
		
		
    $(".filled_dot,.blank_dot,.filled_dot1,.blank_dot1,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close,.blank_br_open1").hide();
	$(".blank_br_close1,.filled_br_open1,.filled_br_close1").hide();

     	$(".filled_br_open").attr("d",filled_br_open);
	    $(".filled_br_open").show();
		Dot_check=1;
		ans_filled_1=true;
		color_cx1=set_m;
		
				ans_dot1=F_click+"filled_open";

		}
		else if(Dot_check==1){
	    $(".filled_br_open1").attr("d",filled_br_open);
	    $(".filled_br_open1").show();
		Dot_check=2;
		ans_filled_2=true;
		color_cx2=set_m;
		
						ans_dot2=S_click+"filled_open";

		}
	
	 if(wait==2){

<!--$(".fill_color").attr("width","479px");-->
$(".fill_color,.fill_color1,.fill_color2").css("cursor","pointer");


if(color_cx1>color_cx2){
	
	
res=color_cx1-color_cx2;	
$(".fill_color1").attr("x",color_cx2);
$(".fill_color").attr("width",(color_cx2-40));
var fill_color2=599-(color_cx2+res-40);
$(".fill_color2").attr("x",color_cx1);
$(".fill_color2").attr("width",fill_color2);
}else if(color_cx2>color_cx1){
res=color_cx2-color_cx1;	
$(".fill_color1").attr("x",color_cx1);

$(".fill_color").attr("width",(color_cx1-40));
var fill_color2= 599-(color_cx1+res-40);

$(".fill_color2").attr("x",color_cx2);
$(".fill_color2").attr("width",fill_color2);

}

$(".fill_color1").attr("width",res+"px");
 $('.blank_dot_btn,.filled_dot_btn').prop('disabled', true);
 $('.blank_dot_btn,.filled_dot_btn,.lined').attr('cursor', 'default');

//alert(cx1+"sad"+cx+"sad"+res)
}

}

///////////////////////////////////////////////////////////////////////filled_br_open end//////////////////////////////////////////////////////////////////////////


filled_br_close=function(){
	
	
	

	
	
	
	
	
	
	
	
	
	
	var filled_br_close;
    var set_m;
if(chnageColor==2){
	filled_br_close="M70 15  70 40 h0 -10 m1.2 -25 h0 10";

	}else{
		 set_m=(chnageColor*30)+10;
	    filled_br_close="M"+set_m+" 15 "+set_m+" 40 h0 -10 m1.2 -25 h0 10";
		}
//alert(chnageColor+" f "+set_m)
	if((Dot_check==0 ||  wait==1)&& chnageColor!=0){
		
				if(ans_num_1<0){
				checkIt=ans_num_1*-1;
			
			}else{
				
					checkIt=ans_num_1;
				}
		
	
	
if(checkIt==val2){
		thisIs=true;
	
	}else{
	thisIs=false;
		}	
	
		
if(!thisIs){
filled_close="filled_close";
filled_open="filled_open";
blank_open="blank_open"; 
blank_close="blank_close";
}else if(!thisIs){

filled_close="filled_open";
filled_open="filled_close";
blank_open="blank_close"; 

blank_close="blank_open";
	
	}
		
		
		
		
		
		
		
		
		
		
    $(".filled_dot,.blank_dot,.filled_dot1,.blank_dot1,.blank_br_open,.blank_br_close,.filled_br_open,.filled_br_close,.blank_br_open1").hide();
	$(".blank_br_close1,.filled_br_open1,.filled_br_close1").hide();

     	$(".filled_br_close").attr("d",filled_br_close);
	    $(".filled_br_close").show();
		Dot_check=1;
		ans_filled_1=true;
		color_cx1=set_m;
				ans_dot1=F_click+"filled_close";

		}
		else if(Dot_check==1){
	    $(".filled_br_close1").attr("d",filled_br_close);
	    $(".filled_br_close1").show();
		Dot_check=2;
		ans_filled_2=true;
		color_cx2=set_m;
			ans_dot2=S_click+"filled_close";
	
		
		}
	
	 if(wait==2){

<!--$(".fill_color").attr("width","479px");-->
$(".fill_color,.fill_color1,.fill_color2").css("cursor","pointer");


if(color_cx1>color_cx2){
	
	
res=color_cx1-color_cx2;	
$(".fill_color1").attr("x",color_cx2);
$(".fill_color").attr("width",(color_cx2-40));
var fill_color2=599-(color_cx2+res-40);
$(".fill_color2").attr("x",color_cx1);
$(".fill_color2").attr("width",fill_color2);
}else if(color_cx2>color_cx1){
res=color_cx2-color_cx1;	
$(".fill_color1").attr("x",color_cx1);

$(".fill_color").attr("width",(color_cx1-40));
var fill_color2= 599-(color_cx1+res-40);

$(".fill_color2").attr("x",color_cx2);
$(".fill_color2").attr("width",fill_color2);

}

$(".fill_color1").attr("width",res+"px");
 $('.blank_dot_btn,.filled_dot_btn').prop('disabled', true);
 $('.blank_dot_btn,.filled_dot_btn,.lined').attr('cursor', 'default');

//alert(cx1+"sad"+cx+"sad"+res)
}
	
	
	
}




/////////////////////////////////////////////////////////////////end testing//////////////////////////////////////////////////////////////////////////////

















$(".fill_color").click(function(){
	check_count++;

if(check_count<2){
$(".fill_color").css("opacity","1");
$(".fill_color_new").show();

	ans_color_1=false;
	  ans_color_2=true;
	 if(check_count==1){
	ans_color_1=false;	 
	  ans_color_2=true;
	$(".fill_color,.fill_color1,.fill_color2").css("cursor","default");
 
	 }

	
	
	}
	
								})

$(".fill_color1").click(function(){
	check_count++;
	
if(check_count<2){
	$(".fill_color1").css("opacity","1");

$(".fill_color_new").show();
ans_color_1=true;
  ans_color_2=true;
 if(check_count==1){
	 ans_color_1=true;
  ans_color_2=true;
	$(".fill_color,.fill_color1,.fill_color2").css("cursor","default");
   
	 }


}
							
});
$(".fill_color2").click(function(){
		check_count++;	
if(check_count<2){
	   ans_color_1=false;
	     ans_color_2=true;
	$(".fill_color2").css("opacity","1");
	$(".fill_color_new").show();

    if(check_count==1){
	$(".fill_color,.fill_color1,.fill_color2").css("cursor","default");
      ans_color_1=false;
	  
	  ans_color_2=true;
	 }
	 
	 
	 }
							
								
								});
//alert(svg_check1+" dsa "+svg_check2)
/////////////////////////////////////solution part///////////////////////////////////////////////
svg_solution=function(){

$(".ans_fill_color,.ans_fill_color1").show()
$(".ans_fill_color").attr("width",599+"px");
var ans_cx1;
var ans_cx2;
var ans_cx3;
var ans_cx4;

ans_cx1=(-9)-(ans_mrg1);	
ans_cx1=-(ans_cx1);

ans_cx2=(-9)-(ans_mrg2);	
ans_cx2=-(ans_cx2);


final_cx=(ans_cx1*30)+69;
final_cx1=(ans_cx2*30)+69;

sol_color=final_cx1-final_cx;

$(".ans_fill_color1").attr({"width":sol_color+"px","x":final_cx+"px"});

if(svg_sol=='<'){
	$(".ans_filled_dot").hide()
	$(".ans_blank_dot").show()
	
	$(".ans_blank_dot").attr("cx",final_cx+"px");
}else{
	$(".ans_blank_dot").hide()
	$(".ans_filled_dot").show()
	$(".ans_filled_dot").attr("cx",final_cx+"px");
	}

	
if(svg_sol1=='<'){
	$(".ans_filled_dot1").hide()
	$(".ans_blank_dot1").show()
	$(".ans_blank_dot1").attr("cx",final_cx1+"px");
}else{
	$(".ans_blank_dot1").hide()
	$(".ans_filled_dot1").show()
	$(".ans_filled_dot1").attr("cx",final_cx1+"px");
	}
	
	
	}

/*alert(ans_mrg1+" "+ans_mrg2)
alert(svg_sol+" "+svg_sol1)
*/



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


});