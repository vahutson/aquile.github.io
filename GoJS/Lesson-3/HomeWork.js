/*
�������� ����, ������� ���������� prompt ������ �����, ������� 100. ���� ���������� ���� ������ ����� � ��������� ������ ��� ���, � ��� �����.

    ���� ������ ���������� ����� ���� ���� ���������� �� ������ �����, ������� 100, ���� �� ������ ������ Cancel (ESC).

    ��������������, ��� ���������� ������ ������ �����, ��������������� ��������� ���������� ����� � ���� ������ �������������.*/

/*do {
    var numberOver100 = +prompt('Insert number over 100');

} while (numberOver100 < 100 | !numberOver100);*/
//why it's doesn't work?


//Task 1
while(true) {
    var value = +prompt('Insert number over 100');
    if(!value) break;
    else if (value < 100) {var value = +prompt('Insert number over 100');
    } else break;
}

//Task 2
/*
����������� �����, ������� 1, ���������� �������, ���� ��� �� �� ��� �� �������, ����� ���� � 1.

������� �������, n>1 � �������, ���� ��� ������� �� ����� ����� �� 2 �� n-1 ���� �������.

    �������� ���, ������� ������� ��� ������� ����� �� ��������� �� 2 �� 10. ��������� ������ ����: 2,3,5,7.

P.S. ��� ����� ������ ����� ���������������� ��� ����� ������ ����������.*/
var n, i;
for (n = 1; n <= 10; n++) {
    for (i = 1; i < n; i++) {
        if (n % i != 0) continue;
        else
        console.log(n);
    }
}

//Task 3
/*
�������� ���������, ������� ������� ����� console.log ��� ����� �� 1 �� 100, � ����� ������������. ��� �����, ������ ��������� �� 3, ��� ������ �������� �Fizz�, � ��� �����, ��������� �� 5 (�� �� �� 3) � �Buzz�.*/
var i;
for (i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log('Fizz');
    } else if (i % 3 == 0) {
        console.log('Bizz');
    } else console.log(i);
}

//Task 4
/*
��������� 1� ������ ���, ����� ��� �������� �FizzBuzz� ��� ���� �����, ������� ������� � �� 3, � �� 5*/
var i;
for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 & i % 5 == 0 ) {
        console.log('FizzBuzz');
    } else console.log(i);
}
//Task 5
/*�������� ���������, ��������� ������, ���������� ������� 8�8, � ������� ����� ����������� ��������� ����� ������. �� ������ ������� ���� ������, ���� #. � ���������� ������ ���������� ��������� �����.*/

var n, sharp = '# # # #', empty = ' # # # #';
for (n = 1; n <= 4; n++) {
    {
        console.log(sharp);
        console.log(empty);
    }
}