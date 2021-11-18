function addUser()
{
    player1_name_input = document.getElementById("player1_name_input").value
    localStorage.setItem("Player1", player1_name_input)
    player2_name_input = document.getElementById("player2_name_input").value
    localStorage.setItem("Player2", player2_name_input)
    window.location = "/math_challange/game.html"
}