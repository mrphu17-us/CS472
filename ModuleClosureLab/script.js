var rudyTimer = (function () {
    setInterval(delayMsg, 200);
});

function delayMsg() {
    document.write("Ruby");
}

/*Bank account create start here*/

var accountInfoList = [];

function Account(name, deposit) {
    this.name = name;
    this.deposit = deposit;
}

var accountHandler = (function () {
    return {
        createAccount: function (txtName, txtDeposit) {
            accountInfoList.push(new Account(txtName, txtDeposit));
        },
        showResult: function () {
            let context = "";
            for (let i = 0; i < accountInfoList.length; i++) {
                context += accountInfoList[i].name + ": " + accountInfoList[i].deposit + "\n";
            }
            document.getElementById("textarea").innerHTML = context;
        },
        clearInput: function () {
            document.getElementById("name").value = "";
            document.getElementById("deposit").value = "";
        }
    };
}());

function createNewAccount() {
    var txtName = document.getElementById("name").value;
    var txtDeposit = document.getElementById("deposit").value;
    if (txtName == "" || txtDeposit == "") {
        alert("Please input name and deposit fields!");
        return;
    }
    accountHandler.createAccount(txtName, txtDeposit);
    accountHandler.clearInput();
    accountHandler.showResult();
}