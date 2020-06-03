
    // Question 1

    var a = 10;
    document.write("Result:")
    document.write("The value of a is " + a);

    ++a;
    document.write(a)
    document.write("NowThe value of a is " + a);

    a++;
    document.write(a)
    document.write("NowThe value of a is " + a);

    --a;
    document.write(a)
    document.write("NowThe value of a is " + a);

    a--;
    document.write(a)
    document.write("NowThe value of a is " + a);


    // Question 2

    var a = 2;
    var b = 1;
    var result = --a - --b + ++b + b--;
    document.write(result)


    //  Question 3

   var name =  prompt("Enter your name");
   alert("Greetings " + name)


    // Question 4

    var urdu = +prompt("Enter your marks");
    var eng = +prompt("Enter your marks");
    var isl = +prompt("Enter your marks");

    var totalMarks = 300;

    var obtainedMarks = urdu + eng + isl;
    alert(obtainedMarks);

    var averageMarks = obtainedMarks / totalMarks * 100;
    alert(averageMarks + "%");

