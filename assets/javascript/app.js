//global variables to trivia game
var questionsandanswers = {
        q1: ["The Rockets play in Houston, Texas.", "t"],
        q2: ["Russell Westbrook was the 2017 NBA MVP.", "t"],
        q3: ["The Cleveland Cavaliers were the 2017 NBA champions.", "f"],
        q4: ["Chris Paul played for the Hornets, Lakers, and Rockets.", "f"],
        q5: ["James Harden averaged a triple double in the 2016-17 NBA season.", "f"]
      };
var correct = 0;
var incorrect = 0;
var unanswered = 0;


//displays trivia game when clicked
$("#playButton").on("click",function(){
	//clear html page
	$("#info").html("");
	//counter for the trivia game
	$("#info").append($("<div id='counter'>"));

	var count = 30, timer = setInterval(function() {
    $("#counter").html("Time Remaining: "+count--);
    if(count == 0) clearInterval(check());
	}, 1000);

	//displays questions and answers
	var answer1 = $("<p>");
	var answer2 = $("<p>");
	var answer3 = $("<p>");
	var answer4 = $("<p>");
	var answer5 = $("<p>");

	var question1 = $("<div>");
	var question2 = $("<div>");
	var question3 = $("<div>");
	var question4 = $("<div>");
	var question5 = $("<div>");

	answer1.append($("<input type = 'radio' name = 'answer1' id='true1' value = 't'>"),"True").append($("<input type = 'radio' name = 'answer1' id = 'false1'value = 'f'>"),"False");
	answer2.append($("<input type = 'radio' name = 'answer2' id='true2' value = 't'>"),"True").append($("<input type = 'radio' name = 'answer2' id = 'false2' value = 'f'>"),"False");
	answer3.append($("<input type = 'radio' name = 'answer3' id='true3' value = 't'>"),"True").append($("<input type = 'radio' name = 'answer3' id = 'false3' value = 'f'>"),"False");
	answer4.append($("<input type = 'radio' name = 'answer4' id='true4' value = 't'>"),"True").append($("<input type = 'radio' name = 'answer4' id = 'false4' value = 'f'>"),"False");
	answer5.append($("<input type = 'radio' name = 'answer5' id='true5' value = 't'>"),"True").append($("<input type = 'radio' name = 'answer5' id = 'false5' value = 'f'>"),"False");



	question1.append(questionsandanswers.q1[0],answer1);
	$("#info").append(question1);
	question2.append(questionsandanswers.q2[0],answer2);
	$("#info").append(question2);
	question3.append(questionsandanswers.q3[0],answer3);
	$("#info").append(question3);
	question4.append(questionsandanswers.q4[0],answer4);
	$("#info").append(question4);
	question5.append(questionsandanswers.q5[0],answer5);
	$("#info").append(question5);
	$("#info").append($("<button id='submit'>submit</button>"));


	// checks user input
	var check = function(){
		//if no answer then unanswered is increased by 1
		if(!$("#true1").is(':checked')&&!$("#false1").is(':checked')){
			unanswered++;
		}
		if(!$("#true2").is(':checked')&&!$("#false2").is(':checked')){
			unanswered++;
		}
		if(!$("#true3").is(':checked')&&!$("#false3").is(':checked')){
			unanswered++;
		}
		if(!$("#true4").is(':checked')&&!$("#false4").is(':checked')){
			unanswered++;
		}
		if(!$("#true5").is(':checked')&&!$("#false5").is(':checked')){
			unanswered++;
		}
		//check if user answer is same as real answer
		if($("#true1").is(':checked')){
			if($("#true1").val()==questionsandanswers.q1[1]){
				correct++;
			}else{
				incorrect++;
			}
		}
		if($("#false1").is(':checked')){
			if($("#false1").val()==questionsandanswers.q1[1]){
				correct++;
			}else{
				incorrect++;
			}
		}
		if($("#true2").is(':checked')){
			if($("#true2").val()==questionsandanswers.q2[1]){
				correct++;
			}else{
				incorrect++;
			}
		}
		if($("#false2").is(':checked')){
			if($("#false2").val()==questionsandanswers.q2[1]){
				correct++;
			}else{
				incorrect++;
			}
		}
		if($("#true3").is(':checked')){
			if($("#true3").val()==questionsandanswers.q3[1]){
				correct++;
			}else{
				incorrect++;
			}
		}
		if($("#false3").is(':checked')){
			if($("#false3").val()==questionsandanswers.q3[1]){
				correct++;
			}else{
				incorrect++;
			}
		}
		if($("#true4").is(':checked')){
			if($("#true4").val()==questionsandanswers.q4[1]){
				correct++;
			}else{
				incorrect++;
			}
		}
		if($("#false4").is(':checked')){
			if($("#false4").val()==questionsandanswers.q4[1]){
				correct++;
			}else{
				incorrect++;
			}
		}
		if($("#true5").is(':checked')){
			if($("#true5").val()==questionsandanswers.q5[1]){
				correct++;
			}else{
				incorrect++;
			}
		}
		if($("#false5").is(':checked')){
			if($("#false5").val()==questionsandanswers.q5[1]){
				correct++;
			}else{
				incorrect++;
			}
		}
		
		//displays results
		var a = $("<p>").append("Correct: "+correct);
		var b = $("<p>").append("Incorrect: "+incorrect);
		var c = $("<p>").append("Unanswered: "+unanswered);

		var result = $("<div>").append(a,b,c);
		$("#info").html("");
		$("#info").append(result);

	}
	
	//calls check function and displays results of trivia
	$("#submit").on("click",function(){
		
		check();
		
	});
		
});




