const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

// Select container for the courses
const coursesContainer = document.getElementById('ln-course-list');

// Filter Arrays
const allCourses = courses.filter(course => course.subject === 'WDD' || course.subject === 'CSE');
const wddCourses = courses.filter(course => course.subject === 'WDD');
const cseCourses = courses.filter(course => course.subject === 'CSE');

// Function to render course HTML
function createCourseHTML(course) {
    const courseDiv = document.createElement('div');
    courseDiv.classList.add('course', course.completed ? 'course-completed' : '');
    courseDiv.innerHTML = `<h3>${course.subject} ${course.number}</h3>`;

    // Add click event to display course details
    courseDiv.addEventListener('click', () => displayDetails(course));
    return courseDiv;
}

// Function to render courses in the container
function renderCourses(coursesArray) {
    coursesContainer.innerHTML = ''; // Clear existing courses
    coursesArray.forEach(course => {
        coursesContainer.appendChild(createCourseHTML(course));
    });
}

// Function to display course details in a modal
function displayDetails(course) {
    const courseDetails = document.querySelector('#course-details');
    courseDetails.innerHTML = `
        <div>
            <h2>${course.subject} ${course.number}</h2>
            <button id="closeButton">X</button>
        </div>
        <p><strong>Title:</strong> ${course.title}</p>
        <p><strong>Credits:</strong> ${course.credits}</p>
        <p><strong>Certificate:</strong> ${course.certificate}</p>
        <p><strong>Description:</strong> ${course.description}</p>
        <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
    `;

    courseDetails.showModal();

    // Close modal functionality
    document.getElementById('closeButton').addEventListener('click', () => {
        courseDetails.close();
    });
}

// Event listeners for filter buttons
document.getElementById('ln-all-courses').addEventListener('click', () => renderCourses(allCourses));
document.getElementById('ln-cse-courses').addEventListener('click', () => renderCourses(cseCourses));
document.getElementById('ln-wdd-courses').addEventListener('click', () => renderCourses(wddCourses));

// Initial Render of All Courses
renderCourses(allCourses);