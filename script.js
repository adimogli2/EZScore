document.getElementById('grading-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var assignmentName = document.getElementById('assignment-name').value;
    var studentName = document.getElementById('student-name').value;
    var pdfUpload = document.getElementById('pdf-upload').files[0];
    var rubric = document.getElementById('rubric').value;

    var formData = new FormData();
    formData.append('assignmentName', assignmentName);
    formData.append('studentName', studentName);
    formData.append('pdf', pdfUpload);
    formData.append('rubric', rubric);

    fetch('/grade', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerText = data.feedback;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
