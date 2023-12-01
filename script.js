// Create an array of boolean values
        let booleanArray = [true, false, true, true, false, true, false, false, true];

        // Count true values in the array
        let trueCount = 0;

        // Loop through the array
        for (var i = 0; i < booleanArray.length; i++) {
            if (booleanArray[i]) {
                trueCount++;
            }
        }

        // Display the count of true values
        let resultSection = document.getElementById('result');
        resultSection.innerHTML = "<p>Count of true values: " + trueCount + "</p>";

// had to get help with this project because it was really hard...
