$(document).ready(function() {
    const navToggleBtn = $('#nav-toggle-btn');
    const navbarLinks = $('.navlink');
    const navLinkContainer = $('#nav-link-container');

    navToggleBtn.click(function() {
        if (navLinkContainer.css('display') === 'none') {
            // Open the menu
            navLinkContainer.css('display', 'flex');
            navToggleBtn.text('✕'); // Change to close icon
            // Disable scrolling
            $('body').css('overflow', 'hidden');
        } else {
            // Close the menu
            navLinkContainer.css('display', 'none');
            navToggleBtn.text('☰'); // Change to menu icon
            // Enable scrolling
            $('body').css('overflow', 'auto');
        }
        navbarLinks.each(function(index, link) {
            // Delay adding the class by 50 milliseconds
            setTimeout(function() {
                $(link).toggleClass('navvisible');
            }, 100);
        });
    });


    function addToDoItem(itemText) {
        // Create the list item
        let listItem = $('<li>');
    
        // Create span element to hold the item text and apply text decoration when completed
        let itemSpan = $('<span>').text(itemText).addClass('todo-text');
    
        // Create delete buttonl
        let buttondiv = $('<div>').addClass('buttonDiv');
        let deleteButton = $('<button>').addClass('delete');
        let deleteIcon = $('<i>').addClass('fas fa-trash-alt');
        deleteButton.append(deleteIcon);
    
        // Create complete button
        let completeButton = $('<button>').addClass('complete');
        let completeIcon = $('<i>').addClass('fas fa-check');
        completeButton.append(completeIcon);

        buttondiv.append(completeButton)
        buttondiv.append(deleteButton);
    
        // Append item text, buttons to the list item
        listItem.append(itemSpan);
        listItem.append(buttondiv);
    
        // Append list item to the todo list
        $('#todo-list').append(listItem);
    }
    
    
    $('#todo-form').submit(function(event){
        event.preventDefault();
        let newItemText = $("#new-item").val().trim(); // Trim leading and trailing whitespace
        if(newItemText !== '' && newItemText !== ' ') { // Check if not empty or just whitespace
            addToDoItem(newItemText);
            $('#new-item').val('');
        } else { // If input consists only of whitespace
            $('#new-item').val(''); // Clear the input text
        }
    });
    
    $('#todo-list').on('click', '.delete', function(){
        $(this).parent().parent().remove();
    });
    $('#todo-list').on('click', '.complete', function(){
        let dateTime = getDateTime();

        // Create a container for the completeDiv
        let completeContainer = $('<div>').addClass('completeContainer');

        // Create the completeDiv and its contents
        let completeDiv = $('<div>').addClass('completeDate');
        let completeicon = $('<i>').addClass("fas fa-check");
        let label = $('<label>').text(dateTime).addClass('dateText');
        completeDiv.append(completeicon);
        completeDiv.append(label);

        // Append completeDiv to the completeContainer
        completeContainer.append(completeDiv);

        // Add completed class to the parent li element
        $(this).parent().parent().addClass('completed');

        // Append completeContainer to the parent li element
        $(this).parent().append(completeContainer);

        // Remove buttons from the parent li element
        $(this).parent().find('button').remove();

    });
    
    function getDateTime() {
        let currentDate = new Date();
    
        let year = currentDate.getFullYear(); 
        let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let monthAbbreviations = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let month = monthNames[currentDate.getMonth()]; // Change to monthAbbreviations for abbreviated version
        let day = currentDate.getDate(); 
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes(); 
    
        let meridiem = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; 
    
        let formattedDateTime = `${month} ${day}, ${year} ${hours}:${minutes} ${meridiem}`;
        return formattedDateTime;
    }
    
});

