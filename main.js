// BÀI 1 :TÍNH TIỀN LƯƠNG NHÂN VIÊN

function giaTriTangDan() {

    var soNguyen1 = document.getElementById('soNguyen1').value;
    var soNguyen2 = document.getElementById('soNguyen2').value;
    var soNguyen3 = document.getElementById('soNguyen3').value;

    if (+soNguyen1 < +soNguyen2 && +soNguyen2 < +soNguyen3) {

        var ketQua = soNguyen1 + " > " + soNguyen2 + " > " + soNguyen3;

    } else if (+soNguyen1 < +soNguyen3 && +soNguyen3 < +soNguyen2) {

        ketQua = soNguyen1 + " > " + soNguyen3 + " > " + soNguyen2;

    } else if (+soNguyen2 < +soNguyen1 && +soNguyen1 < +soNguyen3) {

        ketQua = soNguyen2 + " > " + soNguyen1 + " > " + soNguyen3;

    } else if (+soNguyen2 < +soNguyen3 && +soNguyen3 < +soNguyen1) {

        ketQua = soNguyen2 + " > " + soNguyen3 + " > " + soNguyen1;

    } else if (+soNguyen3 < +soNguyen1 && +soNguyen1 < +soNguyen2) {

        ketQua = soNguyen3 + " > " + soNguyen1 + " > " + soNguyen2;

    } else if (+soNguyen3 < +soNguyen2 && +soNguyen2 < +soNguyen1) {

        ketQua = soNguyen3 + " > " + soNguyen2 + " > " + soNguyen1;
    } else {

        ketQua = "không xác định được giá trị tăng dần";
    }

    var ketQuaTangDan = document.getElementById('ketQuaTangDan');
    ketQuaTangDan.innerHTML = "";

    var divTangDan = document.createElement('div');
    divTangDan.classList.add('borderdiv');
    var pTangDan = document.createElement('p');
    pTangDan.innerHTML = ketQua;

    ketQuaTangDan.appendChild(divTangDan);
    divTangDan.appendChild(pTangDan);

}

// BÀI 2 : CHƯƠNG TRÌNH CHÀO HỎI

function ask() {

    var question = document.getElementById('question').value;

    var radioFather = document.getElementById('radioFather').checked;
    var radioMother = document.getElementById('radioMother').checked;
    var radioBrother = document.getElementById('radioBrother').checked;
    var radioSister = document.getElementById('radioSister').checked;

    if (radioFather == true || question == "B" || question == "b") {
        result = "Dạ con chào bố ạ";


    } else if (radioMother == true || question == "M" || question == "m") {

        result = "Dạ con chào mẹ ạ";
    } else if (radioBrother == true || question == "A" || question == "a") {

        result = "Dạ em chào anh ạ";
    } else if (radioSister == true || question == "E" || question == "e") {

        result = "Vào đây làm gì em";
    } else {

        result = "Nhập sai hoặc bạn không phải gia đình tôi!";

    }

    var resultQuestion = document.getElementById('resultQuestion');
    resultQuestion.innerHTML = "";

    var divResultQuestion = document.createElement('div');
    divResultQuestion.classList.add('borderdiv');
    var pResultQuestion = document.createElement('p');
    pResultQuestion.innerHTML = result;

    resultQuestion.appendChild(divResultQuestion);
    divResultQuestion.appendChild(pResultQuestion);


}

// BÀI 3 :TÍNH BAO NHIÊU CHẴN LẺ

function toTal() {

    var even1 = document.getElementById('even1').value;
    var even2 = document.getElementById('even2').value;
    var even3 = document.getElementById('even3').value;
    var chan1 = 0;
    var chan2 = 0;
    var chan3 = 0;
    var le1 = 0;
    var le2 = 0;
    var le3 = 0;

    if ((even1 % 2) == 0) {
        chan1 = 1;

    } else {

        le1 = 1;
    }
    if ((even2 % 2) == 0) {
        chan2 = 1;

    } else {

        le2 = 1;
    }

    if ((even3 % 2) == 0) {
        chan3 = 1;

    } else {

        le3 = 1;
    }

    var totaleven = chan1 + chan2 + chan3;
    var totalodd = le1 + le2 + le3;

    var totalEvenOdd = document.getElementById('totalEvenOdd');
    totalEvenOdd.innerHTML = "";

    var divtotalEvenOdd = document.createElement('div');
    divtotalEvenOdd.classList.add('borderdiv');
    var ptotalEvenOdd = document.createElement('p');
    ptotalEvenOdd.innerHTML = "Số chẳn là: " + totaleven + "  " + "Số lẻ là: " + totalodd;

    totalEvenOdd.appendChild(divtotalEvenOdd);
    divtotalEvenOdd.appendChild(ptotalEvenOdd);

}



// BÀI 4 :TÌM TAM GIÁC

function triangle() {

    var triangle1 = document.getElementById('triangle1').value;
    var triangle2 = document.getElementById('triangle2').value;
    var triangle3 = document.getElementById('triangle3').value;

    if (triangle1 == triangle2 || triangle1 == triangle3 || triangle3 == triangle2) {


        if ((+triangle1 == +triangle2) && (+triangle2 == +triangle3)) {

            var resultTriangle = " Đây là tam giác đều"
        } else {
            resultTriangle = " Đây là tam giác cân"

        }

    } else if ((+triangle1 * +triangle1) == ((+triangle2 * +triangle2) + (+triangle3 * +triangle3)) ||
        (+triangle2 * +triangle2) == ((+triangle1 * +triangle1) + (+triangle3 * +triangle3)) ||
        (+triangle3 * +triangle3) == ((+triangle1 * +triangle1) + (+triangle2 * +triangle2))) {
        resultTriangle = " Đây là tam giác vuông"


    } else {

        resultTriangle = " Đây là tam giác thường"
    }

    var resultTriangles = document.getElementById('resultTriangles');
    resultTriangles.innerHTML = "";

    var divResultTriangle = document.createElement('div');
    divResultTriangle.classList.add('borderdiv');
    var pResultTriangle = document.createElement('p');
    pResultTriangle.innerHTML = resultTriangle;

    resultTriangles.appendChild(divResultTriangle);
    divResultTriangle.appendChild(pResultTriangle);

}