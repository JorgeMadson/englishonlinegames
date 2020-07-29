function startGame() {
    myGameArea.start();
}

var myGameArea = {
    timeToRespond: 5,
    refreshTime: 1000,
    canvas: document.getElementById("jogo"),
    start: function () {
        this.canvas.width = parseInt(window.screen.availWidth / 2);
        this.canvas.height = parseInt(window.screen.availHeight / 2);
        this.context = this.canvas.getContext("2d");
        this.context.font = "30px Comic Sans MS";
        this.context.textAlign = "center";
        this.context.fillText("Ordinal Numbers Game", this.canvas.width / 2, this.canvas.height / 2);
        this.updateTimer(this.timeToRespond);
        //Adicionar o evento pra começar
        // this.canvas.addEventListener("click", this.updateTimer(this.timeToRespond));
    },
    showTimer: function showTimer(remainingTime) {
        this.context.font = "20px Comic Sans MS";
        this.context.fillText(`${remainingTime}s`, this.canvas.width / 2, this.canvas.height / 2)
    },
    updateTimer: function () {
        this.interval = setInterval(() => {
            const remainingTime = this.timeToRespond--;
            if (remainingTime < 0) {
                this.timeOver();
                return;
            }
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.showTimer(remainingTime);

        }, this.refreshTime);
    },
    timeOver: function () {
        clearInterval(this.interval);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillText("Game over", this.canvas.width / 2, this.canvas.height / 2)
    }
}
