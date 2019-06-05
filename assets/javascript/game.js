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
    

	function newNumbers() {
		magicNumber = Math.floor(Math.random() * 300) + 20;
		infinity1 = Math.ceil(Math.random() * 5);
		infinity2 = Math.ceil(Math.random() * 10);
		infinity3 = Math.ceil(Math.random() * 15);
        infinity4 = Math.ceil(Math.random() * 20);
        infinity5 = Math.ceil(Math.random() * 25);
        infinity6 = Math.ceil(Math.random() * 50);
	}

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
	function youLose() {
		$("#winOrLose").text("YOU LOSE");
		losses++;
        $("#losses").text(losses);
       
	}

	newGame();

	$(".infinitystone").hover(function() {
		$(this).css({opacity: 0.3});
	},
	function() {
		$(this).css({opacity: 1});
	});

	// Function to add the crystal values together
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