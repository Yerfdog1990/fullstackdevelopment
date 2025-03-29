import express from "express";
const app = express();
const port = 3000;

app.get("/form", (req, res)=>{
    res.send("<!DOCTYPE html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <title>Title</title>\n" +
        "</head>\n" +
        "<body>\n" +
        "<h2>Enter Your Details:</h2>\n" +
        "<form action=\"readCookies\" method=\"get\">\n" +
        "    <label for=\"userName\">Name:</label>\n" +
        "    <input type=\"text\" id=\"userName\" name=\"userName\"><br><br>\n" +
        "\n" +
        "    <label>Gender:</label>\n" +
        "    <input type=\"radio\" name=\"gender\" value=\"male\"> Male\n" +
        "    <input type=\"radio\" name=\"gender\" value=\"female\"> Female<br><br><br>\n" +
        "\n" +
        "    <label>Marital Status:</label><br>\n" +
        "    <input type=\"radio\" name=\"marital_status\" value=\"single\"> Single<br>\n" +
        "    <input type=\"radio\" name=\"marital_status\" value=\"married\"> Married<br>\n" +
        "    <input type=\"radio\" name=\"marital_status\" value=\"widow\"> Widow<br>\n" +
        "    <input type=\"radio\" name=\"marital_status\" value=\"prefer_not_to_say\"> Prefer not to say<br><br><br>\n" +
        "\n" +
        "    <label>Do you have a medical history of diabetes?</label><br>\n" +
        "    <input type=\"radio\" name=\"diabetes\" value=\"yes\"> Yes<br>\n" +
        "    <input type=\"radio\" name=\"diabetes\" value=\"no\"> No<br><br><br>\n" +
        "\n" +
        "    <label for=\"feedback\">Your Feedback:</label><br>\n" +
        "    <textarea id=\"feedback\" name=\"feedback\" rows=\"4\" cols=\"50\"></textarea><br><br><br>\n" +
        "\n" +
        "    <input type=\"submit\" value=\"Submit\">\n" +
        "</form>\n" +
        "</body>\n" +
        "</html>");
});
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
