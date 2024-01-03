$(document).ready(function() {
    var userInfo = JSON.parse(sessionStorage.getItem('user-info'));

    // Check if userInfo is not null
    if (userInfo) {

        $('.profile-username .first-and-last-name').text(userInfo.name);
        $('.email').text(userInfo.email);
        $('#xp-value').text(userInfo.xp);
        
        // Check if creationDate is available and is a valid timestamp object
        if (userInfo.creationDate && typeof userInfo.creationDate === 'object') {
            const milliseconds = userInfo.creationDate.seconds * 1000 + userInfo.creationDate.nanoseconds / 1000000;
            const formattedCreationDate = new Date(milliseconds).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long'
                // day: 'numeric'
            });
        
            $('.join-date').append(formattedCreationDate);
        } else {
            $('.join-date').text("Unknown Date");
        }
    } else {
        // Handle the case when userInfo is null or not available
        console.log("User information not found in session storage");
    }
});