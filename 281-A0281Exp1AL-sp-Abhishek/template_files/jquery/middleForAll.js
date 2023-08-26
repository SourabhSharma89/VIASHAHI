$(document).ready(function(){
					
				
				function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
		
	window.checkMobile=isMobileDevice();
				
				
			sol_var=0;		
		
			 $(".newSet").click(function(){
										 
							sol_var=0;						 
										 })		

					
					
		 $(".solution").click(function(){
												
												sol_var++;
					
						$(".solutionMainSteps").css("display","block");
							   
								
					if(sol_var==1){
					
							
								
							   //alert("hii")
							      
							   
							    if(window.innerHeight < window.innerWidth  && checkMobile == false ){
															
								
									 var hk=$(".middle").height();
									 var hk1=$(".container").height()
									 
									 //alert(hk1+"     hk1    "+hk);
									 
									 var mar = (hk1-hk)/2;
									 if(hk < hk1){
									 solutionText = $(".solutionText").height();
									     $(".middle").css("margin-top",solutionText*1.3+"px")
									 }else{
										 solutionText = $(".solutionText").height();
									     $(".middle").css("margin-top",solutionText*1.3+"px")
									 }
									 
								}else if(checkMobile){
									
									solutionText = $(".solutionText").height();
									 $(".middle").css("margin-top",solutionText*1.3+"px")
								}
					}
					
					
					svg_solution();
					
							})
						   })