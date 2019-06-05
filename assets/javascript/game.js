$(document).ready(function() {
	var magicNumber;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var infinity1;
	var infinity2;
	var infinity3;
    var infinity4;
    var infinity5;
    var infinity6;
    
// random number generator for stones
	function newNumbers() {
		magicNumber = Math.floor(Math.random() * 200) + 20;
		infinity1 = Math.ceil(Math.random() * 20);
		infinity2 = Math.ceil(Math.random() * 20);
		infinity3 = Math.ceil(Math.random() * 20);
        infinity4 = Math.ceil(Math.random() * 20);
        infinity5 = Math.ceil(Math.random() * 20);
        infinity6 = Math.ceil(Math.random() * 20);
	}
// starts the game 
	function newGame() {
		newNumbers();
		totalScore = 0;
		$("#magicNumber").text(magicNumber);
		$("#totalScore").text(totalScore);
		$("#infinity1").attr("stone-value", infinity1);
		$("#infinity2").attr("stone-value", infinity2);
		$("#infinity3").attr("stone-value", infinity3);
        $("#infinity4").attr("stone-value", infinity4);
        $("#infinity5").attr("stone-value", infinity5);
        $("#infinity6").attr("stone-value", infinity6);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("")
		
    }
    // lose functions
    function youLose() {
		$("#winOrLose").text("YOU LOSE");
		losses++;
        $("#losses").text(losses);
       
	}
    function youWin() {
		$("#winOrLose").text("YOU WIN");
		wins++;
        $("#wins").text(wins);
       
	}
	newGame();
// reactivety for stones
	$(".infinitystone").hover(function() {
		$(this).css({opacity: 0.3});
	},
	function() {
		$(this).css({opacity: 1});
	});

	// Function to add the stone values together
	$(".infinitystone").on("click", function() {
		if (totalScore >= magicNumber) {
			return;
		}

		var stoneValue = $(this).attr("stone-value");
		stoneValue = parseInt(stoneValue);
		totalScore += stoneValue;
		$("#totalScore").text(totalScore);

		if (totalScore === magicNumber) {
            youWin();
            
		} else if (totalScore > magicNumber) {
			youLose();
		}
	});

	$(".btn").on("click", function() {
		newGame();
	});

});