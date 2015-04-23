$(document).ready(function () {

	for (var i = 1; i <= 100; i++) {

		if ( i % 15 == 0) {
			$('.numbers').append('<li>Fizz Buzz!</li>');
		}
		
		else if ( i % 5 ==0) {
			$('.numbers').append('<li>Buzz!</li>');
		}

		else if ( i % 3 ==0) {
			$('.numbers').append('<li>Fizz!</li>');
		}
		
		else {
			$('.numbers').append("<li>" + i + "</li>");
		}
	}


});