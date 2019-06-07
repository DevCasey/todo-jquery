
$(function () {
    let $submit = $('#submit');
    let $listOfItemsID = $('#listOfItemsID');
    let $myList = [];

    $submit.on('click', function(e) {
        e.preventDefault();
        let $userInput = $('#userInput').val(); 
        $(`<li>${$userInput}</li>)`).appendTo($listOfItemsID);
        $myList.push($userInput);
        console.log($myList);
        $('#userInput').val('');
    });

    $listOfItemsID.on('click', 'li', function() {
        let $this = $(this);
        $this.remove();
    });

});
