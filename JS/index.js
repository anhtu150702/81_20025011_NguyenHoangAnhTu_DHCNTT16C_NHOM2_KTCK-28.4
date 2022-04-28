$(document).ready(function(){
    var i = 1;
    $("#btn2").click(function(){
        $("#myModal").modal();
    });

    function kiemTraTen() {
        var i =1;
        let mauKT = /([A-Z]){1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})S/;
        if ($("#Name").val==""){
            $("#tbName").html("Không được để trống");
            return false;
        }
        if (!mauKT.test($("#Name").val())){
            $("#tbName").html("Mỗi kí tự đầu phải viết hoa, không sử dụng số");
            return true;
        }
        $("#Name").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);

    function kiemTraSoAo(){
        var mauKT = /^\d*S/;
        if($("#Ao").val()==""){
            $("#tbao").html("Không được để trống");
            return false;
        }
        if(!mauKT.test($("#Ao").val())){
            $("#tbA").html("Dùng số từ 1-20");
            return true;
        }else{
            var SoAo = $("#Ao").val();
            if(SoAo<1||SoAo>20){
                $("#tbao").html("Từ 1-20");
            }else{
                $("#tbAo").html("*");
                return true;
            }
        }
    }
    $("#Ao").blur(kiemTraSoAo);

    function kiemTraCLB(){

    }


    function kiemTraNTT(){
        if ($("#NTT").val=="") {
            $("#tbNTT").html("Không để trống");
            return false;
        }
        var today = new Date();
        var ntt= new Date($("#NTT").val());
        today

    }
})