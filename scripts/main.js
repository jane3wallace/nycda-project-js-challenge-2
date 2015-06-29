// JS Challenge #2 Week Six Lecture 2 Homework

var nameList = ["Roscoe", "Chris", "Dave", "Christine", "Jason", "Jane"];
var activityList = ["program", "watch basketball drafts during class", "be tall", "eat smart food"];

function activityNamer (name, activity) {
	console.log(name + " likes to " + activity);
};

activityNamer(nameList[4], activityList[0]);
activityNamer("George Michael", "run the banana stand");

// var i;
// for (i = 0; i < activityList.length; i++) {
// 	console.log(activityNamer(nameList[0], activityList[i]));
// };

function allActivities(chooseName) {
	var choice = nameList[chooseName];
	var i;
	for (i = 0; i < activityList.length; i++) {
		var output = activityNamer(choice, activityList[i]);
		if (output !== undefined) {
			console.log(output);
		};
	};
};

allActivities(0);


function publishGrades() {
	var classGrades = [
		{firstName: "Ralph", score: 90},
		{firstName: "Zach", score: 80},
		{firstName: "Tony", score: 100},
	];
	var i;
	for (i = 0; i < classGrades.length; i++) {
		console.log(classGrades[i].firstName + " got " + classGrades[i].score + "% on the test.");
	};
};

publishGrades();