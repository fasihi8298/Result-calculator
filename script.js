function gradecalculator() {

    // START WITH FUNCTION //

    var english = parseInt(document.getElementById("english").value) || 0;
    var urdu = parseInt(document.getElementById("urdu").value) || 0;
    var math = parseInt(document.getElementById("math").value) || 0;
    var islamiyat = parseInt(document.getElementById("islamiyat").value) || 0;
    var science = parseInt(document.getElementById("science").value) || 0;

    if (english > 100 || urdu > 100 || math > 100 || islamiyat > 100 || science > 100) {
        alert("Please Enter Valid Marks (Max Limit is 100 ....)");
    }

    // TOTAL MARKS FUNCTION // 

    var totalMarks = english + urdu + math + islamiyat + science;

    document.getElementsByTagName("h4")[1].textContent = "Obtain : " + totalMarks;

    // PERCENTAGE GET //

    var percentage = (totalMarks / 500) * 100;

    document.getElementsByTagName("h4")[4].textContent = "Percentage : " + percentage.toFixed(0) + "%";
  // GRADE SET //

  var grade = "";
  if (percentage >= 90) {
      grade = "A+";
  } else if (percentage >= 80) {
      grade = "A";
  } else if (percentage >= 70) {
      grade = "B";
  } else if (percentage >= 60) {
      grade = "C";
  } else if (percentage >= 50) {
      grade = "D";
  } else {
      grade = "F";
  }

  document.getElementsByTagName("h4")[2].textContent = "Grade : " + grade;

  // STATUS PASS OR FAIL ???? //

  var status = (grade === "F") ? "Fail" : "Pass";
  document.getElementsByTagName("h4")[3].textContent = "Status : " + status;
}
