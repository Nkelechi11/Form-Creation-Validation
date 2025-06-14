async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data');   // Select container

    try {
        const response = await fetch(apiUrl);       // Fetch from API
        const users = await response.json();        // Convert to JSON
        dataContainer.innerHTML = '';               // Clear loading message

        // Create user list
        const userList = document.createElement('ul');

        // Loop through users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        dataContainer.innerHTML = ''; // Clear any existing content
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching data:', error);
    }
}

// Call function when DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);

