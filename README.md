
**EZScore**

EZScore is an AI-driven web application designed to streamline the essay grading process for teachers. It leverages a Python backend for server-side operations and a user-friendly interface built with HTML, CSS, and JavaScript.

**Features**

-   **AI-Powered Grading:** Integrates the OpenAI ChatGPT model to provide automated essay scoring and feedback.
-   **Real-Time Feedback:** Provide in-line feedback within the student's essay for a more interactive grading experience.
-   **Simple Interface:** Maintain a user-friendly interface for a smooth grading workflow.
-   **Dynamic Updates:** Experience real-time updates to scores displayed on the web page.
- **Dropbox Integration:** All student essay's and associated feedback is saved to Dropbox for easy access.

**File Structure**

-   **main.py:** The main Python backend script that handles server-side operations and interacts with the ChatGPT model.
-   **index.html:** The main HTML file for the web application.
-   **style.css:** CSS file for styling the web application.
-   **script.js:** JavaScript file to handle front-end logic and interactions.

**Getting Started**

### Prerequisites

-   Python 3.x
-   Flask (or another web framework)

**Installation**

1.  Clone the repository:

Bash

```
git clone https://github.com/adimogli2/EZScore.git
cd EZScore
```

2.  Install the required Python packages:

Bash

```
pip install -r requirements.txt
```

**Setup**
Fill in the OpenAI API and Dropbox keys in the corresponding places within main.py


**Running the Application**

1.  Start the Python server:

Bash

```
python main.py
```



2.  Open the the http server started by flask in your browser.

**Usage**

-   Add an assignment and student name in the associated boxes.
- Input the student's essay file.
- Add your rubric.
-   The scores will be displayed dynamically on the web page.
-   The backend (Python script) handles the server-side logic and updates the scores accordingly.
- The student essay and feedback will be added to your dropbox with a folder based on assignment and files based on student name.


    

**License**

This project is licensed under the MIT License. See the LICENSE file for more details.

For questions or suggestions, please open an issue or contact the repository owner.
